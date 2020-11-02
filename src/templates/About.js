import React from "react";
import { AboutMe } from "../components/about";
import PropTypes from "prop-types";

const About = ({ language, setSeoTitle }) => {
  setSeoTitle(language === "en" ? "About me" : "O mnie");

  return (
    <div className="card-inner active" id="about-card">
      <div className="card-wrap">
        <AboutMe language={language} />
      </div>
    </div>
  );
};

export default About;

About.propTypes = {
  language: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  setSeoTitle: PropTypes.func.isRequired,
};
