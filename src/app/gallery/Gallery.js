"use client";

import { useState } from "react";

export default (props) => {
  const { galleryFolders, galleryImages } = props;

  const [currentGallery, setGalleryFolders] = useState("");

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
              <a
                key={image}
                href={`/gallery/${gallery.folder}/${image}`}
                target="_blank"
              >
                <img
                  className="w-full h-64 object-cover hover:transform hover:scale-105 transition-transform"
                  src={`/gallery/${gallery.folder}/${image}`}
                />
              </a>
            ))
        )}
      </div>
    </>
  );
};
