import React, { useRef } from "react";
import useLogin from "../hooks/useLogin";
import { Input } from "@components/ui";
import { Fa0, Fa42Group } from "react-icons/fa6";

const Login = () => {
  const { formik } = useLogin();
  const { handleSubmit, getFieldProps, getFieldHelpers } = formik;
  console.log("render");
const ref = useRef<HTMLInputElement>()


  return (
    <div>
      Login
      <Input
        leftIcon={Fa0}
        rightIcon={Fa42Group}
        type="text"
        {...getFieldProps("password")}
      />

      <input type="text" value={ref.current?.value} />

    </div>
  );
};

export default Login;
