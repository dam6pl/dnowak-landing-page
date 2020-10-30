import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PropTypes from "prop-types";

const convertImgToBase64 = (url) => {
  return fetch(url)
    .then((response) => response.blob())
    .then(
      (blob) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        })
    );
};

const LazyPhoto = ({ image, imageSize, alt, useBase64 }) => {
  const imageObject =
    typeof image === "object"
      ? Array.from(image).find((el) => el.key === imageSize)
      : { height: "auto", width: "auto", url: image };

  const [imageSrc, setImageSrc] = useState(
    useBase64
      ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM0NLT6DwAC1AGdG7D7+wAAAABJRU5ErkJggg=="
      : imageObject.url
  );

  useBase64 &&
    convertImgToBase64(imageObject.url).then((res) => setImageSrc(res));

  return (
    <LazyLoadImage
      alt={alt}
      height={imageObject.height}
      src={imageSrc}
      width={imageObject.width}
    />
  );
};

export default LazyPhoto;

LazyPhoto.propTypes = {
  image: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
  imageSize: PropTypes.string,
  alt: PropTypes.string,
  useBase64: PropTypes.bool,
};

LazyPhoto.defaultProps = {
  imageSize: "directus-large-contain",
  alt: "",
  useBase64: false,
};
