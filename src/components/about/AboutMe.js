import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";

const AboutMe = ({ language }) => {
  const isEnglish = language === "en";

  const {
    about: { translations },
  } = useStaticQuery(graphql`
    {
      about: directusAbout {
        translations: translations {
          language
          about_me
          facts {
            Title
            Value
          }
        }
      }
    }
  `);

  const currentTranslation = translations.find(
    (el) => el.language === language
  );

  return (
    <div className="content about">
      <div className="title">{isEnglish ? "About me" : "O mnie"}</div>

      <div className="row">
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div
            className="text-box"
            dangerouslySetInnerHTML={{
              __html: currentTranslation?.about_me || "",
            }}
          />
        </div>
        {currentTranslation?.facts && (
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="info-list">
              <ul>
                {currentTranslation.facts.map((el) => (
                  <li key={`facts-${Math.random()}`}>
                    <strong>{el?.Title} . . . . .</strong> {el?.Value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <div className="clear" />
      </div>
    </div>
  );
};

export default AboutMe;

AboutMe.propTypes = {
  language: PropTypes.string.isRequired,
};
