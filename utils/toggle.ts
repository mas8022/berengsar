"use client";

import { useCallback, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

const useToggle = (keyName) => {
  const [isOpen, setIsOpen] = useLocalStorage(keyName, false);


  const toggleOpen = (event) => {
    event && event.stopPropagation();
    setIsOpen((isOpen) => !isOpen);
  };

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("click", close);
    } else {
      window.removeEventListener("click", close);
    }
  }, [isOpen]);

  const toggleProps = [isOpen, toggleOpen];

  return toggleProps;
};

export default useToggle;
