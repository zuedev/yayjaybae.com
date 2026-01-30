"use client";

import { useState, useEffect } from "react";

export default () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");

  const openModal = (src) => {
    setModalImageSrc(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImageSrc("");
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <>
      <div className="min-h-screen p-8 space-y-8 flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-8 gap-8">
          <p className="text-2xl md:text-4xl text-center col-span-1 md:col-span-2 flex flex-col justify-center items-center p-4">
            Human Form <br />
            Reference Sheet
          </p>
          <img
            src={`/images/Regular_Ref.png`}
            className="h-full object-cover w-full col-span-1 md:col-span-6 cursor-pointer"
            onClick={() => openModal(`/images/Regular_Ref.png`)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-8 gap-8">
          <img
            src={`/images/Jester_Reference.png`}
            className="h-full object-cover w-full col-span-1 md:col-span-6 cursor-pointer"
            onClick={() => openModal(`/images/Jester_Reference.png`)}
          />
          <p className="text-2xl md:text-4xl text-center col-span-1 md:col-span-2 flex flex-col justify-center items-center p-4">
            Furry Form <br />
            Reference Sheet
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-8 gap-8">
          <p className="text-xl md:text-2xl text-center col-span-1 md:col-span-2 flex flex-col justify-center items-center p-4">
            Note: Xenia's wings are always attached to her arms, NOT her back
          </p>
          <img
            src={`/images/jaybaearmwing.png`}
            className="h-full object-cover w-full col-span-1 md:col-span-6 cursor-pointer"
            onClick={() => openModal(`/images/jaybaearmwing.png`)}
          />
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <img src={modalImageSrc} className="max-h-screen max-w-full" />
            <button
              className="absolute top-0 right-0 m-4 text-white text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};
