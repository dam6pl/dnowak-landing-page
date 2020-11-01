import React, {useState} from "react";
import Cookie from "universal-cookie";
import {Layout} from "../components/layout";
import {Seo} from "../components";
import {PersonCard} from "../components/person";
import {BubblesBackground, NavMenu} from "../components/layout";
import {LanguageSwitch} from "../components/helper";
import {ContactForm, ContactMap} from "../components/contact";
import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";

const Contact = () => {
  const cookie = new Cookie();
  const [language, setLanguage] = useState(cookie.get("language") || "pl");
  const isEnglish = language === "en";

  return (
    <Layout language={language} seoTitle={isEnglish ? "Contact" : "Kontakt"}>
      <Seo language={language}/>
      <div className="page new-skin">
        <BubblesBackground/>

        <div className="container opened">
          <NavMenu language={language}/>
          <PersonCard language={language}/>
          <LanguageSwitch language={language} setLanguage={setLanguage}/>

          <div className="card-inner contacts active" id="contacts-card">
            <div className="card-wrap">
              <GoogleReCaptchaProvider
                reCaptchaKey="6LelXLgUAAAAANdJ9h5jZqn8Rq2JCDdMHuXbOBgw"
                language={language}
              >
                <ContactMap language={language}/>
                <ContactForm language={language}/>
              </GoogleReCaptchaProvider>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
