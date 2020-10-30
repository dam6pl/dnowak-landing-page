import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Logo from "../../assets/images/svg/logo.svg";

const Loader = ({ withLogo, duration }) => {
  const [styles, setStyles] = useState({ opacity: 1 });

  useEffect(() => {
    setTimeout(() => {
      setStyles({ opacity: 0 });
    }, duration - 300);
  });

  return (
    <div className="preloader" style={styles}>
      {withLogo && (
        <div className="centrize full-width">
          <div className="vertical-center">
            <Logo />
          </div>
        </div>
      )}
    </div>
  );
};

export default Loader;

Loader.propTypes = {
  withLogo: PropTypes.bool,
  duration: PropTypes.number,
};

Loader.defaultProps = {
  withLogo: true,
  duration: 4000,
};
