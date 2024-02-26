import React from "react";


interface UseToggleReturn<T> {
    toggle: T;
    setToggle: (value: T) => void;
    handleToggle: () => void;
  }
  type OnlineStatus = "online" | "offline";

  interface UseUploadReturn {
    images: string[];
    handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    setImages: React.Dispatch<React.SetStateAction<string[]>>;
  }


  interface UseInViewOptions {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number | number[];
  }
  
  interface UseInViewReturn<T> {
    ref: React.RefObject<T>;
    isVisible: boolean;
  }

  export type {
    UseToggleReturn,
    OnlineStatus,
    UseUploadReturn,
    UseInViewOptions,
    UseInViewReturn
  }