import React, { useState, memo, CSSProperties, ImgHTMLAttributes } from "react";
import cn from "@utils/cn";
import { DefaultSkeleton } from "@assets";
import { useInView } from "@hooks/hooks";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  style?: CSSProperties;
  placeholder?: string;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  style,
  placeholder = DefaultSkeleton,
  className,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const { isVisible, ref } = useInView<HTMLImageElement>();

  return (
    <>
      {isLoading && (
        <img
          src={placeholder}
          style={style}
          alt="Loading.."
          className={cn(`rounded-[3px] ${className}`)}
          ref={ref}
          {...props}
        />
      )}
      <img
        src={isVisible ? src : ""}
        alt={alt}
        onLoad={() => {
          setIsLoading(false);
        }}
        className={className}
        style={{ display: isLoading ? "none" : "flex", ...style }}
        {...props}
      />
    </>
  );
};

export default memo(Image);
