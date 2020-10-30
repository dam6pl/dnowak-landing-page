import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Typed from "react-typed";
import { Link } from "@reach/router";
import PropTypes from "prop-types";
import { LazyPhoto } from "./../helper";
import { SocialIcons } from "./";

const PersonCard = ({ language }) => {
  const isEnglish = language === "en";
  const {
    homepage: {
      developerName,
      backgroundImage,
      developerPhoto,
      translations,
      socialIcons,
    },
  } = useStaticQuery(graphql`
    {
      homepage: directusHomepage {
        developerName: developer_name
        backgroundImage: background_image {
          data {
            thumbnails {
              key
              url
              relative_url
              dimension
              width
              height
            }
          }
        }
        developerPhoto: developer_photo {
          data {
            thumbnails {
              key
              url
              relative_url
              dimension
              width
              height
            }
          }
        }
        translations: translations {
          language
          developer_position {
            Position_name
            newItem
          }
          cv_file {
            data {
              full_url
            }
          }
        }
        socialIcons: social_icons {
          Font_awesome_icon_name
          URL
        }
      }
    }
  `);

  const currentTranslation = translations.find(
    (el) => el.language === language
  );

  return (
    <div className="card-started" id="home-card">
      <div className="profile">
        <div className="slide">
          {backgroundImage && (
            <LazyPhoto
              image={backgroundImage?.data?.thumbnails}
              alt={developerName}
              imageSize="directus-large-crop"
            />
          )}
        </div>

        <div className="image">
          {developerPhoto && (
            <LazyPhoto
              image={developerPhoto?.data?.thumbnails}
              alt={developerName}
              imageSize="directus-medium-crop"
            />
          )}
        </div>

        <div className="title">{developerName}</div>
        <div className="subtitle subtitle-typed">
          <div className="typing-title">
            {currentTranslation?.developer_position && (
              <Typed
                strings={currentTranslation?.developer_position.map(
                  (el) => el?.Position_name || ""
                )}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            )}
          </div>
        </div>

        {socialIcons && <SocialIcons icons={socialIcons} />}

        <div className="lnks">
          {currentTranslation?.cv_file &&
            currentTranslation.cv_file?.data?.full_url && (
              <a
                href={currentTranslation?.cv_file?.data?.full_url}
                target="_blank"
                rel="noreferrer"
                className="lnk"
              >
                <span className="text">
                  {isEnglish ? "Download CV" : "Pobierz CV"}
                </span>
              </a>
            )}
          <Link to="/contact/" className="lnk discover">
            <span className="text">
              {isEnglish ? "Contact Me" : "Skontaktuj się"}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;

PersonCard.propTypes = {
  language: PropTypes.string.isRequired,
};
