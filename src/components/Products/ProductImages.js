import React, { useState } from "react";
import classes from "./ProductImages.module.css";

const ProductImages = ({ images = [] }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  const getImageSrc = (img) => {
    setMainImage(img);
  };
  return (
    <section style={{ width: "100%" }}>
      <img
        src={mainImage ? mainImage.url : images[0].url}
        alt="main preview"
        className={classes.main}
      />
      <div className={classes.gallery}>
        {images.map((img, index) => {
          const { url, filename } = img;
          return (
            <img
              key={index}
              className={url === mainImage.url ? `${classes.active}` : null}
              src={url}
              alt={filename}
              onClick={getImageSrc.bind(null, img)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProductImages;
