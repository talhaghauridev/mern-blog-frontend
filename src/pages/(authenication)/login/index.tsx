import { Link } from "react-router-dom";
import { Input, Button, MetaData, BackDrop } from "@components/ui";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import useLogin from "../hooks/useLogin";
import { useInputError } from "@hooks/hooks";


const Login = () => {
  const { formik, loading } = useLogin();
  const { handleSubmit, getFieldProps } = formik;

  return (
    <>
      {loading && <BackDrop isOpen={loading} />}

      <MetaData title={"Login"} />
      <section id="login">
        <div className="form_container">
          <form onSubmit={handleSubmit} className="form">
            <div className="form_heading">
              <h1>Login</h1>
            </div>
            {/* Email Input  */}
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              leftIcon={MdAlternateEmail}
              {...getFieldProps("email")}
              error={useInputError(formik, "email")}
            />

            {/* Password Input  */}
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              leftIcon={RiLockPasswordLine}
              {...getFieldProps("password")}
              error={useInputError(formik, "password")}
            />

            <Button type="submit" className="max-w-full mt-2" variant="primary">
              Submit
            </Button>
            <Button
              className="max-w-full font-Sans gap-1 mt-1 border-0"
              variant={"outline"}
            >
              Don't have account?
              <Link to="/signup" className="underline">
                Sign Up
              </Link>
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
