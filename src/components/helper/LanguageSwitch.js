import React from "react";
import Cookies from "universal-cookie";
import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";

const LanguageSwitch = ({ language, setLanguage }) => {
  const cookie = new Cookies();
  const {
    allTranslation: { translations },
  } = useStaticQuery(graphql`
    {
      allTranslation: allDirectusTranslation {
        translations: nodes {
          language
          name
        }
      }
    }
  `);

  const handleChangeLanguage = (e) => {
    setLanguage(e.currentTarget.getAttribute("data-lang"));
    cookie.set("language", e.currentTarget.getAttribute("data-lang"), {
      path: "/",
      expires: new Date(Date.now() + 2592000),
    });
  };

  return (
    <div className="language-switcher">
      {translations.map((el) => (
        <button
          onClick={handleChangeLanguage}
          key={`language-${Math.random()}`}
          type="button"
          data-lang={el.language}
          className={language === el.language ? "active" : ""}
        >
          {el.language}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitch;

LanguageSwitch.propTypes = {
  language: PropTypes.string.isRequired,
  setLanguage: PropTypes.func.isRequired,
};
