import { useFormik } from "formik";
import { LoginValues, loginSchema } from "../validation";
import { ApolloError, useMutation } from "@apollo/client";
import { useCallback, useEffect } from "react";
import { LOGIN_USER } from "@graphql/mutations/userMutation";
import { useDispatch } from "react-redux";
import { UserState, setCredentials } from "@redux/reducers/userReducer";
import { useMessage } from "@hooks/hooks";

const useLogin = () => {
  const [login, { loading, error, data }] = useMutation<UserState>(LOGIN_USER);

  const initialValues: LoginValues = {
    email: "",
    password: "",
  };
  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (values: LoginValues) => {
      login({
        variables: { userData: values },
      });
    },
    [login]
  );

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: onSubmit,
  });
  console.log(data);
  console.log(error);

  const handelSetCrendentials = useCallback(() => {
    if (data) {
      dispatch(setCredentials(data));
    }
  }, [data]);

  useEffect(() => {
    handelSetCrendentials();
  }, [handelSetCrendentials]);

  useMessage("Login Successfully", error);

  return {
    loading,
    formik,
  };
};

export default useLogin;
