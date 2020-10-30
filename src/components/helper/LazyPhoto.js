import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PropTypes from "prop-types";

const LazyPhoto = ({ image, imageSize, alt }) => {
  const imageObject =
    typeof image === "object"
      ? Array.from(image).find((el) => el.key === imageSize)
      : { height: "auto", width: "auto", url: image };

  return (
    <LazyLoadImage
      alt={alt}
      height={imageObject.height}
      src={imageObject.url}
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
