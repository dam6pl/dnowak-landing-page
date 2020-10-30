import React from "react";
import PropTypes from "prop-types";

const Clients = ({ language }) => {
  const isEnglish = language === "en";

  return (
    <div className="content clients">
      <div className="title">{isEnglish ? "Clients" : "Klienci"}</div>

      <div className="row client-items">
        <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
          <div className="client-item">
            <div className="image">
              <a
                target="_blank"
                rel="noreferrer nofollow"
                href="https://www.google.com"
              >
                <img src="https://via.placeholder.com/200x200" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
          <div className="client-item">
            <div className="image">
              <a
                target="_blank"
                rel="noreferrer nofollow"
                href="https://www.google.com"
              >
                <img src="https://via.placeholder.com/200x200" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
          <div className="client-item">
            <div className="image">
              <a
                target="_blank"
                rel="noreferrer nofollow"
                href="https://www.google.com"
              >
                <img src="https://via.placeholder.com/200x200" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
          <div className="client-item">
            <div className="image">
              <a
                target="_blank"
                rel="noreferrer nofollow"
                href="https://www.google.com"
              >
                <img src="https://via.placeholder.com/200x200" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="clear" />
      </div>
    </div>
  );
};

export default Clients;

Clients.propTypes = {
  language: PropTypes.string.isRequired,
};
