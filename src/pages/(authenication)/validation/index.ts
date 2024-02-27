import * as Yup from "yup";

interface SignUpValues {
  name: string;
  email: string;
  password: string;
}

interface LoginValues {
  email: string;
  password: string;
}

const signUpSchema: Yup.ObjectSchema<SignUpValues> = Yup.object({
  name: Yup.string()
    .trim()
    .min(4, "Name must be at least 4 characters")
    .max(25, "Name must not exceed 25 characters")
    .matches(/^[a-zA-Z\s]*$/, "Name can only contain letters and spaces")
    .required("Name is Required"),

  email: Yup.string()
    .email("Invalid email format")
    .required("Email is Required"),

  password: Yup.string()
    .trim()
    .min(8, "Password must be at least 8 characters")
    .max(25, "Password must not exceed 25 characters")
    .required("Password is Required"),
});

const loginSchema: Yup.ObjectSchema<LoginValues> = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is Required"),

  password: Yup.string()
    .trim()
    .min(8, "Password must be at least 8 characters")
    .max(25, "Password must not exceed 25 characters")
    .required("Password is Required"),
});

export { signUpSchema, loginSchema };
export type { SignUpValues, LoginValues };
