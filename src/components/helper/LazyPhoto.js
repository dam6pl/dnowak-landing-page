import React, { useState } from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";
import PropTypes from "prop-types";

const convertImgToBase64 = (url) => {
  return fetch(url)
    .then(response => response.blob())
    .then(blob => new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onloadend = () => resolve(reader.result)
      reader.onerror = reject
      reader.readAsDataURL(blob)
    }))
}

const LazyPhoto = ({image, imageSize, alt}) => {
  const [imageBase64, setImageBase64] = useState('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM0NLT6DwAC1AGdG7D7+wAAAABJRU5ErkJggg==');
  const imageObject =
    typeof image === "object"
      ? Array.from(image).find((el) => el.key === imageSize)
      : {height: "auto", width: "auto", url: image};

  convertImgToBase64(imageObject.url).then((res) => setImageBase64(res))

  return (
    <LazyLoadImage
      alt={alt}
      height={imageObject.height}
      src={imageBase64}
      width={imageObject.width}
    />
  );
};

export default LazyPhoto;

LazyPhoto.propTypes = {
  image: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
  imageSize: PropTypes.string,
  alt: PropTypes.string,
};

LazyPhoto.defaultProps = {
  imageSize: "directus-large-contain",
  alt: "",
};
