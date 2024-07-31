import { fullLogoDark, fullLogoLight, logoDark, logoLight } from "@/assets";
import { AnimationWrapper, Button, Input } from "@/components/ui";
import { useTheme } from "@/context/ThemeContext";
import { Link } from "react-router-dom";

const SignIn = () => {
  const { theme } = useTheme();
  const handleGoogleAuth = () => {};
  return (
    <AnimationWrapper
      keyValue={window.location.pathname}
      className="w-full max-w-full"
    >
      <section className="bg-gray-50 dark:bg-gray-900 w-full">
        <div className="flex flex-col  h-screen items-center justify-center px-6 py-8 mx-auto ">
          <Link
            to="/"
            className="flex items-center justify-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-full h-[35px]"
              src={theme === "light" ? fullLogoDark : fullLogoLight}
              alt="logo"
            />
          </Link>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account{" "}
              </h1>
              <form
                className="flex flex-col items-center justify-start gap-y-2"
                action="#"
              >
                <Input
                  label="Your Name "
                  type="text"
                  name="name"
                  placeholder="Enter Your name"
                />
                <Input
                  label="
                    Your email  "
                  type="email"
                  name="email"
                  placeholder="name@company.com"
                />
                <Input
                  label="
                    Password  "
                  type="password"
                  name="password"
                  placeholder="••••••••"
                />

                <Button variant={"danger"} className="max-w-full" type="submit">
                  Create an account
                </Button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    to="/sign-up"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up{" "}
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </AnimationWrapper>
  );
};

export default SignIn;
