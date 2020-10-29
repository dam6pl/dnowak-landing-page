import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Typed from 'react-typed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';
import { Photo } from './helper';

const PersonCard = ({ language }) => {
  const isEnglish = language === 'en';

  const query = useStaticQuery(graphql`{
    directusHomepage {
      developer_name
      background_image {
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
      developer_photo {
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
      social_icons {
        Font_awesome_icon_name
        URL
      }
    }
  }`);

  const translation = query.directusHomepage.translations.find((el) => el.language === language);

  return (
    <div className="card-started" id="home-card">

      <div className="profile">

        <div className="slide">
          {query.directusHomepage.background_image
            ? <Photo image={query.directusHomepage.background_image} alt={query.directusHomepage.developer_name} imageSize="directus-large-crop" />
            : <img src="https://via.placeholder.com/600x400" alt="Default background" />}
        </div>

        <div className="image">
          {query.directusHomepage.developer_photo
            ? <Photo image={query.directusHomepage.developer_photo} alt={query.directusHomepage.developer_name} imageSize="directus-medium-crop" />
            : <img src="https://via.placeholder.com/150x150" alt="Default person" />}
        </div>

        <div className="title">{query.directusHomepage.developer_name}</div>
        <div className="subtitle subtitle-typed">
          <div className="typing-title">
            {translation.developer_position && (
            <Typed
              strings={translation.developer_position.map((el) => el.Position_name || '')}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
            )}
          </div>
        </div>

        {query.directusHomepage.social_icons
        && (
        <div className="social">
          {query.directusHomepage.social_icons.map((el) => (el.Font_awesome_icon_name && el.URL
            ? (
              <a target="_blank" rel="noreferrer nofollow" href={el.URL} key={`social-${Math.random()}`}>
                <FontAwesomeIcon icon={['fab', el.Font_awesome_icon_name]} />
              </a>
            )
            : null))}
        </div>
        )}

        <div className="lnks">
          {translation.cv_file && translation.cv_file.data.full_url && (
            <a href={translation.cv_file.data.full_url} target="_blank" rel="noreferrer" className="lnk">
              <span className="text">{isEnglish ? 'Download CV' : 'Pobierz CV'}</span>
            </a>
          )}
          <Link to="/contact/" className="lnk discover">
            <span className="text">{isEnglish ? 'Contact Me' : 'Skontaktuj się'}</span>
          </Link>
        </div>

      </div>

    </div>
  );
};

export default PersonCard;

PersonCard.propTypes = {
  language: PropTypes.string
};

PersonCard.defaultProps = {
  language: 'pl'
};
