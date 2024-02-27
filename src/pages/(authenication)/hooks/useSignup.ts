import { useUpload } from "@hooks/hooks";
import { useFormik } from "formik";
import { useCallback, useMemo } from "react";
import { SignUpValues, signUpSchema } from "../validation";

const useSignup = () => {
  const { handleFileChange, images } = useUpload(true);
  const initialValues: SignUpValues = {
    name: "",
    email: "",
    password: "",
  };

  const onSubmit = useCallback((values: SignUpValues) => {}, []);

  const formik = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit,
  });

  return {
    formik,
    handleFileChange,
    avavtar: images[0],
  };
};

export default useSignup;
