import React from "react";
import useSignup from "../hooks/useSignup";
import { Image, Input } from "@components/ui";
import { useInputError } from "@hooks/hooks";

const Signup = () => {
  const { formik, handleFileChange, avavtar } = useSignup();
  const { getFieldProps } = formik;

  return (
    <div>
      Signup
      <Input
        type="text"
        placeholder="Enter you name "
        {...getFieldProps("name")}
        error={useInputError(formik, "name")}
      />
      <Input
        type="email"
        placeholder="Enter you email "
        {...getFieldProps("email")}
        error={useInputError(formik, "email")}
      />
      <Input
        type="password"
        placeholder="Enter you password"
        {...getFieldProps("password")}
        error={useInputError(formik, "password")}
      />
      <input type="file" onChange={handleFileChange} />
      <Image
        src={avavtar ? avavtar : ""}
        alt="a"
        className="w-[20px] h-[20px] rounded"
      />
    </div>
  );
};

export default Signup;
