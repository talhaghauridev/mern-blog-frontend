import { useFormik, FormikValues, FormikHelpers } from "formik";
import { LoginValues, loginSchema } from "../validation";

const useLogin = () => {
  const initialValues: LoginValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(values.email);
    },
  });

  return {
    formik,
  };
};

export default useLogin;
