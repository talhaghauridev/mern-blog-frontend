import useLogin from "../hooks/useLogin";
import { Button, Input } from "@components/ui";
import { useInputError } from "@hooks/hooks";

const Login = () => {
  const { formik } = useLogin();
  const { handleSubmit, getFieldProps } = formik;

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Login;
