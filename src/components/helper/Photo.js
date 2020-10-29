import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types';

const Photo = ({ image, imageSize, alt }) => {
  const imageObject = image.data.thumbnails.find((el) => el.key === imageSize);

  return (
    <LazyLoadImage
      alt={alt}
      height={imageObject.height}
      src={imageObject.url}
      width={imageObject.width}
    />
  );
};

export default Photo;

Photo.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object]).isRequired,
  imageSize: PropTypes.string,
  alt: PropTypes.string,
};

Photo.defaultProps = {
  imageSize: 'directus-large-contain',
  alt: ''
};
