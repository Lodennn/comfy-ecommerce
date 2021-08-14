import React, { useState } from "react";
import classes from "./ProductImages.module.css";

const ProductImages = ({ images = [] }) => {
  const [mainImage, setMainImage] = useState(images[0]);
  console.log(mainImage);

  const getImageSrc = (img) => {
    setMainImage(img);
  };
  return (
    <section>
      <img
        src={mainImage ? mainImage.url : images[0].url}
        alt="main image"
        className={classes.main}
      />
      <div className={classes.gallery}>
        {images.map((img, index) => {
          const { id, url, filename, width, height } = img;
          return (
            <img
              key={index}
              className={url === mainImage.url ? `${classes.active}` : null}
              src={url}
              alt={filename}
              width={width}
              height={height}
              onClick={getImageSrc.bind(null, img)}
            />
          );
        })}
      </div>
    </section>
  );
  return "images";
};

// const Wrapper = styled.section`
//   .main {
//     height: 600px;
//   }
//   img {
//     width: 100%;
//     display: block;
//     border-radius: var(--radius);
//     object-fit: cover;
//   }
//   .gallery {
//     margin-top: 1rem;
//     display: grid;
//     grid-template-columns: repeat(5, 1fr);
//     column-gap: 1rem;
//     img {
//       height: 100px;
//       cursor: pointer;
//     }
//   }
//   .active {
//     box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
//   }
//   @media (max-width: 576px) {
//     .main {
//       height: 300px;
//     }
//     .gallery {
//       img {
//         height: 50px;
//       }
//     }
//   }
//   @media (min-width: 992px) {
//     .main {
//       height: 500px;
//     }
//     .gallery {
//       img {
//         height: 75px;
//       }
//     }
//   }
// `

export default ProductImages;
