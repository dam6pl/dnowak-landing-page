import React, {useState} from "react";
import {useStaticQuery, graphql} from "gatsby";
import PropTypes from "prop-types";
import {GoogleReCaptcha} from 'react-google-recaptcha-v3';

const ContactForm = ({language}) => {
  const isEnglish = language === "en";
  const [formResponse, setFormResponse] = useState();
  const [captchaToken, setCaptchaToken] = useState();

  const {
    contact: {email},
  } = useStaticQuery(graphql`
      {
          contact: directusContact {
              email: email_address
          }
      }
  `);

  const handleSubmit = (form) => {
    form.preventDefault();
    const formData = new FormData(form.target);

    fetch(process.env.DIRECTUS_URL + '/' + process.env.DIRECTUS_PROJECT + '/custom/sendEmail', {
      method: 'POST',
      headers: new Headers({'content-type': 'application/json'}),
      body: JSON.stringify({
        language: language,
        target: email,
        captcha: captchaToken,
        form: {
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }
      }),
    })
      .then(response => response.json())
      .then(response => {
        setFormResponse(response.success === true);
        document.getElementById('cform').reset();
      })
      .catch(response => setFormResponse(false))
      .finally(() => {
        setTimeout(() => setFormResponse(undefined), 3000);
      });
  }

  return (
    <div className="content contacts">
      <div className="title">
        {isEnglish ? "Contact Form" : "Formularz kontaktowy"}
      </div>

      {!captchaToken && <GoogleReCaptcha onVerify={token => setCaptchaToken(token)}/>}

      <div className="row">
        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div className="contact_form">
            <form id="cform" method="post" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col col-d-6 col-t-6 col-m-12">
                  <div className="group-val">
                    <input
                      type="text"
                      name="name"
                      id="contact_name"
                      required="required"
                      placeholder={isEnglish ? "Full Name *" : "Nazwa *"}
                    />
                  </div>
                </div>
                <div className="col col-d-6 col-t-6 col-m-12">
                  <div className="group-val">
                    <input
                      type="email"
                      name="email"
                      required="required"
                      placeholder={
                        isEnglish ? "Email Address *" : "Adres email *"
                      }
                    />
                  </div>
                </div>
                <div className="col col-d-12 col-t-12 col-m-12">
                  <div className="group-val">
                    <textarea
                      name="message"
                      required="required"
                      placeholder={
                        isEnglish ? "Your Message *" : "Twoja wiadomość *"
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="align-left">
                <button type="submit" className="button" disabled={!captchaToken ? 'disabled' : null}>
                  <span className="text">
                    {isEnglish ? "Send Message" : "Wyślij wiadomość"}
                  </span>
                  <span className="arrow"/>
                </button>
              </div>
            </form>
            <div className="alert-success" style={{display: 'block'}}>
              {formResponse === undefined ? '' : (
                formResponse === true
                  ? isEnglish
                  ? <p>Thanks, your message is sent successfully.</p>
                  : <p>Dziękuję, Twoja wiadomość została wysłana.</p>
                  : isEnglish
                  ? <p>Your message has not been send correctly, please try again.</p>
                  : <p>Twoja wiadomość nie została wysłana poprawnie, spróbuj ponownie.</p>
              )}
            </div>
          </div>
        </div>
        <div className="clear"/>
      </div>
    </div>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  language: PropTypes.string.isRequired,
};
