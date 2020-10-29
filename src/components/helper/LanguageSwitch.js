import React from 'react';
import Cookie from 'universal-cookie';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

const cookie = new Cookie();

const LanguageSwitch = ({ language, setLanguage }) => {
  const query = useStaticQuery(graphql`{
      allDirectusTranslation {
        nodes {
          language
          name
        }
      }
    }`);

  const handleChangeLanguage = (e) => {
    setLanguage(e.currentTarget.getAttribute('data-lang'));
    cookie.set(
      'language',
      e.currentTarget.getAttribute('data-lang'),
      {
        path: '/',
        expires: (new Date(Date.now() + 2592000))
      }
    );
  };

  return (
    <div className="language-switcher">
      {query.allDirectusTranslation.nodes.map((el) => (
        <button
          onClick={handleChangeLanguage}
          key={`language-${Math.random()}`}
          type="button"
          data-lang={el.language}
          className={language === el.language ? 'active' : ''}
        >
          {el.language}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitch;

LanguageSwitch.propTypes = {
  language: PropTypes.string,
  setLanguage: PropTypes.func.isRequired
};

LanguageSwitch.defaultProps = {
  language: 'pl'
};
