import React from "react";
import "./ImageSlide.css";

export default function ImageSlide({ image }) {
  // image.path looks like "../assets/paintings/2001/file-name.jpg"
  const fileNameWithExt = image.path ? image.path.split("/").pop() : "";
  const fileName = fileNameWithExt.replace(/\.[^/.]+$/, ""); // remove extension

  return (
    <figure className="image-slide">
      <img
        src={image.src}
        alt={image.alt || fileName}
        className="image-slide__img"
      />
      <figcaption className="image-slide__caption">
        {fileName}
      </figcaption>
    </figure>
  );
}
