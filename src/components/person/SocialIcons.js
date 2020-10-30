import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const SocialIcons = ({ icons }) => {
  return (
    <div className="social">
      {icons.map(
        (el) =>
          el.Font_awesome_icon_name &&
          el.URL && (
            <a
              target="_blank"
              rel="noreferrer nofollow"
              href={el.URL}
              key={`social-${Math.random()}`}
            >
              <FontAwesomeIcon icon={["fab", el.Font_awesome_icon_name]} />
            </a>
          )
      )}
    </div>
  );
};

export default SocialIcons;

SocialIcons.propTypes = {
  icons: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};
