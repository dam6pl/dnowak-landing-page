import React from "react";
import {ContactForm, ContactMap} from "../components/contact";
import PropTypes from "prop-types";

const Contact = ({language, setSeoTitle}) => {
  setSeoTitle(language === 'en' ? 'Contact' : 'Kontakt');

  return (
    <div className="card-inner contacts active" id="contacts-card">
      <div className="card-wrap">
        <ContactMap language={language}/>
        <ContactForm language={language}/>
      </div>
    </div>
  );
};

export default Contact;

Contact.propTypes = {
  language: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  setSeoTitle: PropTypes.func.isRequired,
};
