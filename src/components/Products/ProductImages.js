import React, { useState } from "react";
import classes from "./ProductImages.module.css";

const ProductImages = ({ images = [] }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  const getImageSrc = (img) => {
    setMainImage(img);
  };
  return (
    <section>
      <img
        src={mainImage ? mainImage.url : images[0].url}
        alt="main preview"
        className={classes.main}
      />
      <div className={classes.gallery}>
        {images.map((image, index) => {
          const { url, filename, width, height } = image;
          return (
            <img
              key={index}
              className={url === mainImage.url ? `${classes.active}` : null}
              src={url}
              alt={filename}
              width={width}
              height={height}
              onClick={getImageSrc.bind(null, image)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProductImages;
