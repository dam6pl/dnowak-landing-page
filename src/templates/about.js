import React, { useState } from "react";
import Cookie from "universal-cookie";
import { Layout } from "../components/layout";
import { PersonCard } from "../components/person";
import { BubblesBackground, NavMenu } from "../components/layout";
import { LanguageSwitch } from "../components/helper";
import { AboutMe } from "../components/about";

const About = () => {
  const cookie = new Cookie();
  const [language, setLanguage] = useState(cookie.get("language") || "pl");
  const isEnglish = language === "en";

  return (
    <Layout language={language} seoTitle={isEnglish ? "About" : "O mnie"} >
      <div className="page new-skin">
        <BubblesBackground />

        <div className="container opened">
          <NavMenu language={language} />
          <PersonCard language={language} />
          <LanguageSwitch language={language} setLanguage={setLanguage} />

          <div className="card-inner active" id="about-card">
            <div className="card-wrap">
              <AboutMe language={language} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
