import React, {useState} from "react";
import Cookie from "universal-cookie";
import {Layout} from "../components/layout";
import {PersonCard} from "../components/person";
import {BubblesBackground, NavMenu} from "../components/layout";
import {LanguageSwitch} from "../components/helper";
import {Router} from "@reach/router"
import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";

const About = React.lazy(() => import('../templates/About'));
const Contact = React.lazy(() => import('../templates/Contact'));

const Index = () => {
  const cookie = new Cookie();
  const [language, setLanguage] = useState(cookie.get("language") || "pl");
  const [seoTitle, setSeoTitle] = useState('');

  return (
    <Layout language={language} seoTitle={seoTitle}>
      <div className="page new-skin">
        <BubblesBackground/>

        <div className="container opened">
          <NavMenu language={language}/>
          <PersonCard language={language}/>
          <LanguageSwitch language={language} setLanguage={setLanguage}/>

          <GoogleReCaptchaProvider
            reCaptchaKey={process.env.RECAPTCHA_KEY}
            language={language}
          >
            <React.Suspense fallback=''>

              <Router>
                <About path="/" language={language} setSeoTitle={setSeoTitle}/>
                <Contact path="/contact" language={language} setSeoTitle={setSeoTitle}/>
              </Router>
            </React.Suspense>

          </GoogleReCaptchaProvider>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
