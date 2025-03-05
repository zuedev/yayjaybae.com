"use client";

import { useState, useEffect } from "react";

export default () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <div className="flex flex-col items-center h-screen mt-8">
      <img
        src={`/images/YayJayBae Fan Art.png`}
        className="max-w-4xl cursor-pointer"
        onClick={handleImageClick}
      />
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleCloseModal}
        >
          <div className="bg-white p-4 rounded">
            <img src={`/images/YayJayBae Fan Art.png`} className="max-w-full" />
          </div>
        </div>
      )}
      {[
        "Fanart is highly encouraged, but please follow the rules above!",
        "Please do not flirt or make sexual advances towards YayJayBae, it is not welcome.",
        "Do not use YayJayBae's character or lore for RP.",
        "Fanmade works of YayJayBae can be sold as long as it does not contain YayJayBae's official model assets.",
      ].map((rule, index) => (
        <p key={index} className="text-2xl mt-4">
          - {rule}
        </p>
      ))}
    </div>
  );
};
