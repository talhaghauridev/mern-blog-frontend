import { useMessage, useUpload } from "@hooks/hooks";
import { useFormik } from "formik";
import { useCallback, useEffect } from "react";
import { SignUpValues, signUpSchema } from "../validation";
import { useMutation } from "@apollo/client";
import { SIGNUP_USER } from "@graphql/mutations/userMutation";
import { UserState, setCredentials } from "@redux/reducers/userReducer";
import { useDispatch } from "react-redux";
const useSignup = () => {
  const { handleFileChange, images } = useUpload(true);
  const [signup, { loading, data, error }] =
    useMutation<UserState>(SIGNUP_USER);
  const dispatch = useDispatch();
  const initialValues: SignUpValues = {
    name: "",
    email: "",
    password: "",
  };

  const onSubmit = useCallback(
    (values: SignUpValues) => {
      signup({ variables: { useData: values } });
    },
    [signup]
  );

  const formik = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit,
  });

  const handelSetCrendentials = useCallback(() => {
    if (data) {
      dispatch(setCredentials(data));
    }
  }, [data]);

  useEffect(() => {
    handelSetCrendentials();
  }, [handelSetCrendentials]);

  useMessage("Signup Successfully", error);
  return {
    formik,
    handleFileChange,
    avavtar: images[0],
  };
};

export default useSignup;
