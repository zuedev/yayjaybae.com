import fs from "fs";
import Gallery from "./Gallery.js";

export default () => {
  // get list of subdirs from the gallery folder
  const galleryFolders = fs
    .readdirSync("public/gallery", { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  // get list of images from each gallery folder and store in an object
  const galleryImages = galleryFolders.map((folder) => {
    return {
      folder: folder,
      images: fs.readdirSync(`public/gallery/${folder}`),
    };
  });

  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="text-4xl font-bold text-white mt-8 mb-4">Gallery</h1>
      <Gallery galleryFolders={galleryFolders} galleryImages={galleryImages} />
    </div>
  );
};
