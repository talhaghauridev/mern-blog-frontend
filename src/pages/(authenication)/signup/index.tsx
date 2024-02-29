import { Link } from "react-router-dom";
import {
  BackDrop,
  Button,
  Image,
  Input,
  InputUpload,
  MetaData,
} from "@components/ui";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import useSignup from "../hooks/useSignup";
import { useInputError } from "@hooks/hooks";
const SignUp = () => {
  const { formik, loading, handleFileChange, avatar } = useSignup();
  const { handleSubmit, getFieldProps } = formik;
  return (
    <>
      {loading && <BackDrop isOpen={loading} />}

      <MetaData title={"SignUp"} />
      <section id="signup">
        <div className="form_container">
          <form
            className="form"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div className="form_heading">
              <h1>SignUp</h1>
            </div>
            {/* Name Input  */}
            <Input
              label="Name"
              type="text"
              placeholder="Enter your name"
              {...getFieldProps("name")}
              error={useInputError(formik, "name")}
            />

            {/* Input Email */}
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              leftIcon={MdAlternateEmail}
              {...getFieldProps("email")}
              error={useInputError(formik, "email")}
            />

            {/* Input Password */}
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              leftIcon={RiLockPasswordLine}
              {...getFieldProps("password")}
              error={useInputError(formik, "password")}
            />

            {/* Input InputUpload */}
            <div className="upload_input">
              <Image className="upload_avatar" src={avatar} alt="avatar" />
              <InputUpload
                name={"avatar"}
                label={"Upload Avatar"}
                onChange={handleFileChange}
                
              />
            </div>
            <Button type="submit" className="max-w-full mt-2">
              Submit
            </Button>

            <Button
              className="max-w-full font-Sans gap-1 mt-1 border-0"
              variant={"outline"}
            >
              Already have an account?
              <Link to="/login" className="underline">
                Login
              </Link>
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignUp;
