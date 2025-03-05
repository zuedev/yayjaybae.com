"use client";

import { useState, useEffect } from "react";

export default (props) => {
  const { galleryFolders, galleryImages } = props;

  const [currentGallery, setGalleryFolders] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const closeModal = () => setSelectedImage(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <select
        className="text-xl uppercase bg-black text-white p-2 rounded mb-4"
        onChange={(event) => {
          setGalleryFolders(event.target.value);
        }}
      >
        <option value="">Select a gallery</option>
        {galleryFolders.map((folder) => (
          <option key={folder} value={folder}>
            {folder}
          </option>
        ))}
      </select>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {galleryImages.map(
          (gallery) =>
            gallery.folder === currentGallery &&
            gallery.images.map((image) => (
              <div
                key={image}
                onClick={() =>
                  setSelectedImage(`/gallery/${gallery.folder}/${image}`)
                }
                className="cursor-pointer"
              >
                <img
                  className="w-full h-64 object-cover hover:transform"
                  src={`/gallery/${gallery.folder}/${image}`}
                  alt=""
                />
              </div>
            ))
        )}
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
          onClick={closeModal}
        >
          <img src={selectedImage} className="max-w-full max-h-full" alt="" />
        </div>
      )}
    </>
  );
};
