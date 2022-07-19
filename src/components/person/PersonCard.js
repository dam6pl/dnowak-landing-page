import React, { useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Typed from "react-typed";
import { Link } from "@reach/router";
import { GlobalStateContext } from "../../context/GlobalStateProvider";
import { LazyPhoto } from "./../helper";
import { SocialIcons } from "./";
import Translate from "../helper/Translate";

const PersonCard = () => {
  const globalState = useContext(GlobalStateContext);
  const {
    directusHomepage: {
      developerName,
      background_image: {
        data: { backgroundThumbnails },
      },
      developer_photo: {
        data: { developerThumbnails },
      },
      translations,
      socialIcons,
    },
  } = useStaticQuery(graphql`
    {
      directusHomepage {
        developerName: developer_name
        background_image {
          data {
            backgroundThumbnails: thumbnails {
              key
              url
              relative_url
              dimension
              width
              height
            }
          }
        }
        developer_photo {
          data {
            developerThumbnails: thumbnails {
              key
              url
              relative_url
              dimension
              width
              height
            }
          }
        }
        translations {
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
    (el) => el.language === globalState.language
  );

  return (
    <div className="card-started" id="home-card">
      <div className="profile">
        <div className="slide">
          {backgroundThumbnails && (
            <LazyPhoto
              image={backgroundThumbnails}
              alt={developerName}
              imageSize="directus-large-crop"
            />
          )}
        </div>

        <div className="image">
          {developerThumbnails && (
            <LazyPhoto
              image={developerThumbnails}
              alt={developerName}
              imageSize="directus-medium-crop"
            />
          )}
        </div>

        <div className="title">{developerName}</div>
        <div className="subtitle subtitle-typed">
          <div className="typing-title">
            {currentTranslation.developer_position && (
              <Typed
                strings={currentTranslation.developer_position.map(
                  (el) => el.Position_name || ""
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
                <Translate id="buttons.download_cv" className="text"/>
              </a>
            )}
          <Link to="/contact/" className="lnk discover">
            <Translate id="buttons.contact_me" className="text"/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
