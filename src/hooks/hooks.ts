import { useEffect, useState, useCallback, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  OnlineStatus,
  UseInViewOptions,
  UseInViewReturn,
  UseToggleReturn,
  UseUploadReturn,
} from "../types/hooksTypes";
import { toast } from "react-toastify";
import { ApolloError } from "@apollo/client";

const useToggle = <T extends boolean>(value: T): UseToggleReturn<T> => {
  const [toggle, setToggle] = useState<T>(value || (false as T));

  const handleToggle = useCallback(() => {
    setToggle((prev) => !prev as T);
  }, []);
  return {
    toggle,
    setToggle,
    handleToggle,
  } as UseToggleReturn<typeof toggle>;
};

const useOnlineStatus = (): OnlineStatus => {
  const [status, setStatus] = useState<OnlineStatus>(
    navigator.onLine ? "online" : "offline"
  );

  const handleOnline = useCallback(() => setStatus("online"), []);
  const handleOffline = useCallback(() => setStatus("offline"), []);

  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [handleOnline, handleOffline]);

  return status;
};

const useUpload = (multiple = false): UseUploadReturn => {
  const [images, setImages] = useState<string[]>([]);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;

      if (!files) {
        return;
      }

      const processImage = (image: File) => {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.readyState === 2) {
            if (multiple) {
              setImages((prev) => [...prev, reader.result as string]);
            } else {
              setImages([reader.result as string]);
            }
          }
        };
        reader.readAsDataURL(image);
      };

      if (multiple) {
        Array.from(files).forEach(processImage);
      } else {
        processImage(files[0]);
      }
    },
    [multiple]
  );

  return {
    images,
    handleFileChange,
    setImages,
  };
};

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>();

  const handleChange = useCallback((e: MediaQueryListEvent) => {
    setMatches(e.matches);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [query, handleChange]);

  return Boolean(matches);
};

const useInView = <T extends HTMLElement>(
  options: UseInViewOptions = {}
): UseInViewReturn<T> => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [firstEntry] = entries;
      if (firstEntry?.isIntersecting) {
        setIsVisible(true);
        observer?.unobserve(targetRef?.current!);
      }
    }, options);

    if (targetRef?.current) {
      observer?.observe(targetRef?.current);
    }

    return () => {
      if (targetRef?.current) {
        observer?.unobserve(targetRef?.current);
      }
    };
  }, [options]);

  return { ref: targetRef, isVisible };
};

const useInputError = <T extends Record<string, any>>(
  formik: T,
  name: string
): string => {
  const inputError = useMemo(() => {
    return formik &&
      "touched" in formik &&
      "errors" in formik &&
      formik.touched[name as keyof T] &&
      formik.errors[name as keyof T]
      ? (formik.errors[name as keyof T] as string)
      : "";
  }, [formik, name]);

  return inputError;
};

const useMessage = (
  message: string | null,
  error: ApolloError | undefined,
  redirect: string = ""
): void => {
  const navigate = useNavigate();

  const handleMessage = useCallback(() => {
    if (error) {
      const errorMessage = error.message || error.networkError?.message;
      if (errorMessage) {
        toast.error(errorMessage);
      }
    }

    if (message) {
      if (redirect) {
        navigate(redirect);
      }
      toast.success(message);
    }
  }, [toast, message, error, navigate, redirect]);

  useEffect(() => {
    handleMessage();
  }, [handleMessage]);
};

const useClickOutside = <T extends HTMLElement>(
  callback: () => void
): React.RefObject<T> => {
  const ref = useRef<T>(null);

  const handleClick = useCallback(
    (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    },
    [callback]
  );

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [handleClick]);

  return ref;
};

export {
  useOnlineStatus,
  useUpload,
  useMediaQuery,
  useInView,
  useInputError,
  useMessage,
  useClickOutside,
  useToggle,
};
