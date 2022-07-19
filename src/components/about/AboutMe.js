import React, {useContext} from "react";
import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import {GlobalStateContext} from "../../context/GlobalStateProvider";
import Translate from "../helper/Translate";

const AboutMe = () => {
  const globalState = useContext(GlobalStateContext);

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
    (el) => el.language === globalState.language
  );

  return (
    <div className="content about">
      <div className="title">
        <Translate id='pages.contact'/>
      </div>

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
