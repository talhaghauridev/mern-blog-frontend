import { memo, useMemo, ReactNode,HTMLAttributes } from "react";
import cn from "@utils/cn";

interface BackdropProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
}

const Backdrop = ({
  className = "",
  children,
  isOpen = false,
  ...props
}: BackdropProps) => {
  const backdropClasses = useMemo(() => {
    return cn(
      `h-full w-full bg-[#0000005e] fixed top-0 left-0 z-[2]`,
      isOpen ? "flex " : "hidden",
      className
    );
  }, [className, isOpen]);

  return (
    <section
      id="backdrop"
      className={backdropClasses}
      style={{ backdropFilter: "blur(1px)" }}
      {...props}
    >
      {children}
    </section>
  );
};

export default memo(Backdrop);
