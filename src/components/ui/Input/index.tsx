import React, { useMemo, memo, forwardRef, ForwardedRef } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import cn from "@/utils/cn";
import { useToggle } from "@/hooks/hooks";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type?: "text" | "password" | "email" | "number"; // Add more types if needed
  label?: string;
  leftIcon?: React.ElementType;
  rightIcon?: React.ElementType;
  error?: string;
}

const Input = forwardRef(
  (
    {
      name,
      type = "text",
      label,
      leftIcon: LIcon,
      rightIcon: RIcon,
      error,
      ...props
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const showPassword = useMemo(() => type === "password", [type]);
    const { handleToggle, toggle: show } = showPassword
      ? useToggle(false)
      : { handleToggle: undefined, toggle: undefined };

    const inputType = useMemo(
      () => (type === "password" ? (show ? "text" : "password") : type),
      [type, show]
    );

    return (
      <>
        <div className={`${name}_input flex flex-col gap-[5px] w-[100%]`}>
          {label && (
            <label className="font-PoppinsBold block mb-1 text-sm font-medium text-gray-900 dark:text-white">
              {label}
            </label>
          )}
          <div
            className={cn(
              `flex w-[100%] relative  h-[42px] rounded-lg   sm:h-[43px] `,
              error ? "border-[red!important]" : "border-[#c5c5c5ed!important]"
            )}
          >
            {LIcon && (
              <span className="absolute left-[8px] top-0 h-[100%] flex items-center justify-center text-[22px] text-[#2b3445]">
                <LIcon className={"text-[19px] sm:text-[20px]"} />
              </span>
            )}
            <input
              type={inputType}
              name={name}
              id={name}
              {...props}
              ref={ref}
              className={cn(
                "bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                LIcon && "pl-[35px]",
                RIcon && "pr-[35px]"
              )}
            />
            {RIcon && (
              <span className="absolute right-[8px] top-0 h-[100%] flex items-center justify-center text-[22px] text-[#2b3445]">
                <RIcon className={"text-[19px] sm:text-[20px]"} />
              </span>
            )}
            {type === "password" && (
              <button
                type="button"
                onClick={handleToggle}
                className="absolute right-[8px] top-0 h-[100%] flex items-center justify-center text-[22px] cursor-pointer selection:not-sr-only transition-all text-[#2b3445] dark:text-white"
              >
                {show ? (
                  <LuEye className="text-[19px] sm:text-[20px]" />
                ) : (
                  <LuEyeOff className="text-[19px] sm:text-[20px]" />
                )}
              </button>
            )}
          </div>
          {error && (
            <span className="error text-[red] font-Sans text-[14px] md:text-[15px]">
              {error}
            </span>
          )}
        </div>
      </>
    );
  }
);

export default memo(Input);
