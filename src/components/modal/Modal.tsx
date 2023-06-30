"use client";

import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { AiOutlineClose } from "react-icons/ai";

interface IModal {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: IModal) => {
  const [modalOpen, setModalOpen] = useState(isOpen);

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => {
      onClose();
    }, 300); // Tempo da animação em milissegundos
  };

  return (
    <>
      <CSSTransition
        in={modalOpen}
        timeout={300}
        classNames="modal"
        unmountOnExit
      >
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 text-center">
            <div className="absolute inset-0 bg-gray-500 opacity-75" />

            <div className="h-[34rem] w-[30rem] 2xl:h-[50rem] 2xl:w-[42rem] relative inline-block align-bottom bg-white rounded-lg overflow-hidden shadow-xl transform transition-all">
              <button
                onClick={closeModal}
                className="absolute top-0 right-0 p-3"
              >
                <AiOutlineClose className="2xl:w-6 2xl:h-6"/>
              </button>
              {children}
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default Modal;
