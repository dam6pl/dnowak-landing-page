import React from "react";
import PropTypes from "prop-types";

const FunFacts = ({ language }) => {
  const isEnglish = language === "en";

  return (
    <div className="content fuct">
      <div className="title">{isEnglish ? "Fun Fact" : "Ciekawe fakty"}</div>

      <div className="row fuct-items">
        <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
          <div className="fuct-item">
            <div className="icon">
              <span className="fa fa-music" />
            </div>
            <div className="name">80 Albumes Listened</div>
          </div>
        </div>

        <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
          <div className="fuct-item">
            <div className="icon">
              <span className="fa fa-trophy" />
            </div>
            <div className="name">15 Awards Won</div>
          </div>
        </div>

        <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
          <div className="fuct-item">
            <div className="icon">
              <span className="fa fa-coffee" />
            </div>
            <div className="name">1 000 Cups of coffee</div>
          </div>
        </div>

        <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
          <div className="fuct-item">
            <div className="icon">
              <span className="fa fa-flag" />
            </div>
            <div className="name">10 Countries Visited</div>
          </div>
        </div>

        <div className="clear" />
      </div>
    </div>
  );
};

export default FunFacts;

FunFacts.propTypes = {
  language: PropTypes.string.isRequired,
};
