import React from "react";
import PropTypes from "prop-types";

const Quotes = ({ language }) => {
  const isEnglish = language === "en";

  return (
    <div className="content quote">
      <div className="title">
        <span>Quote</span>
      </div>

      <div className="row">
        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div className="revs-item">
            <div className="text">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
            <div className="user">
              <div className="img">
                <img
                  src="https://via.placeholder.com/150x150"
                  alt="Ryan Adlard"
                />
              </div>
              <div className="info">
                <div className="name">Ryan Adlard</div>
                <div className="company">Web Designer</div>
              </div>
              <div className="clear" />
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};

export default Quotes;

Quotes.propTypes = {
  language: PropTypes.string.isRequired,
};
