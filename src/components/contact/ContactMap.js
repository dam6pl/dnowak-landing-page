import React, {useContext} from "react";
import {useStaticQuery, graphql} from "gatsby";
import PropTypes from "prop-types";
import {GlobalStateContext} from "../../context/GlobalStateProvider";
import Translate from "../helper/Translate";

const ContactMap = () => {
  const globalState = useContext(GlobalStateContext);
  const {
    contact: {contactForm, translations},
  } = useStaticQuery(graphql`
      {
          contact: directusContact {
              email_address
              contactForm: contact_form
              translations: translations {
                  language
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

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    const re = /^[+]*[(]?[0-9]{1,3}[)]?[-\s/0-9]*$/g;
    return re.test(String(phone).toLowerCase());
  };

  return (
    <div className="content contacts">
      <div className="title">
        <Translate id="contact.map_title"/>
      </div>

      <div className="row">
        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div
            className="map"
            id="map"
            dangerouslySetInnerHTML={{__html: contactForm}}
          />
          {currentTranslation?.facts && (
            <div className="info-list">
              <ul>
                {currentTranslation.facts.map((el) => {
                  const isRev =
                    validateEmail(el.Value) || validatePhone(el.Value);

                  return (
                    <li
                      key={`contact-facts-${Math.random()}`}
                      className={isRev ? "is-rev" : ""}
                    >
                      <strong>{el.Title} . . . . .</strong>
                      <span>
                        {isRev ? [...el.Value].reverse().join("") : el.Value}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
        <div className="clear"/>
      </div>
    </div>
  );
};

export default ContactMap;
