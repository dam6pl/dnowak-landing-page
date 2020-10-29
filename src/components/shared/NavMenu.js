import { Link } from '@reach/router';
import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Typed from 'react-typed';
import { Photo } from '../helper';

const NavMenu = ({ language }) => {
  const pathname = typeof window === 'undefined' ? '/' : window.location.pathname;
  const isEnglish = language === 'en';

  const query = useStaticQuery(graphql`{
    directusHomepage {
      developer_name
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
      }
    }
  }`);

  const translation = query.directusHomepage.translations.find((el) => el.language === language);

  return (
    <header className="header">
      <div className="profile">
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
      </div>
      <div className="top-menu">
        <ul>
          <li className={pathname === '/' ? 'active' : ''}>
            <Link to="/">
              <span className="icon ion-person" />
              <span className="link">{isEnglish ? 'About' : 'O mnie'}</span>
            </Link>
          </li>
          <li className={pathname.indexOf('/resume') === 0 ? 'active' : ''}>
            <Link to="/resume/">
              <span className="icon ion-android-list" />
              <span className="link">{isEnglish ? 'Resume' : 'Życiorys'}</span>
            </Link>
          </li>
          <li className={pathname.indexOf('/works') === 0 ? 'active' : ''}>
            <Link to="/works/">
              <span className="icon ion-paintbrush" />
              <span className="link">{isEnglish ? 'Works' : 'Prace'}</span>
            </Link>
          </li>
          <li className={pathname.indexOf('/blog') === 0 ? 'active' : ''}>
            <Link to="/blog/">
              <span className="icon ion-chatbox-working" />
              <span className="link">Blog</span>
            </Link>
          </li>
          <li className={pathname.indexOf('/contact') === 0 ? 'active' : ''}>
            <Link to="/contact/">
              <span className="icon ion-at" />
              <span className="link">{isEnglish ? 'Contact' : 'Kontakt'}</span>
            </Link>
          </li>
        </ul>
      </div>

    </header>
  );
};

export default NavMenu;

NavMenu.propTypes = {
  language: PropTypes.string
};

NavMenu.defaultProps = {
  language: 'pl'
};
