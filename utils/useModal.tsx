import React, { useState, useCallback, useEffect } from "react";

const generateKey = (): string => {
  return `modal-${Date.now()}`;
};

interface ModalProps {
  children: React.ReactNode;
}

const useModal = () => {
  const getModalKey = (): string => {
    let key = localStorage.getItem("modalKey");
    if (!key) {
      key = generateKey();
      localStorage.setItem("modalKey", key);
    }
    return key;
  };

  const key = getModalKey();

  const getInitialState = (): boolean => {
    const storedState = localStorage.getItem(key);
    return storedState ? JSON.parse(storedState) : false;
  };

  const [isOpen, setIsOpen] = useState<boolean>(getInitialState);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(isOpen));
  }, [isOpen, key]);

  const Modal: React.FC<ModalProps> = ({ children }) => {
    if (!isOpen) return null;

    const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
      if ((e.target as HTMLDivElement).className === "modal-overlay") {
        closeModal();
      }
    };

    const overlayStyles: React.CSSProperties = {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 10000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    };

    const modalStyles: React.CSSProperties = {
      backgroundColor: "rgba(255, 255, 255, 0)",
      borderRadius: "10px",
      zIndex: 10001,
      maxWidth: "500px",
    };

    return (
      <div
        className="modal-overlay"
        style={overlayStyles}
        onClick={handleClickOutside}
      >
        <div className="modal-content" style={modalStyles}>
          {children}
        </div>
      </div>
    );
  };

  return {
    openModal,
    closeModal,
    Modal,
  };
};

export { useModal };
