import { useMessage, useUpload } from "@hooks/hooks";
import { useFormik } from "formik";
import { useCallback, useEffect } from "react";
import { SignUpValues, signUpSchema } from "../validation";
import { useMutation } from "@apollo/client";
import { SIGNUP_USER } from "@graphql/mutations/userMutation";
import { UserState, setCredentials } from "@redux/reducers/userReducer";
import { useDispatch } from "react-redux";
const useSignup = () => {
  const { handleFileChange, images } = useUpload(false);
  const [signup, { loading, data, error }] =
    useMutation<UserState>(SIGNUP_USER);
  const dispatch = useDispatch();
  const initialValues: SignUpValues = {
    name: "",
    email: "",
    password: "",
  };

  //Handle Login
  const handleLogin = useCallback(
    (values: SignUpValues) => {
      if (!images[0]) return;
      const userData = { ...values, avatar: images[0] };
      console.log(values);
      
      signup({
        variables: { userData },
      });
    },
    [signup,images]
  );

  //Submit
  const onSubmit = useCallback(
    (values: SignUpValues) => {
      handleLogin(values);
    },
    [handleLogin]
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

  useMessage(data?.user ? "Signup Successfully" : null, error);
  console.log(images);
  
  return {
    formik,
    handleFileChange,
    avatar: images[0],
    loading,
  };
};

export default useSignup;
