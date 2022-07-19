import React, {useContext} from "react";
import {Layout} from "../components/layout";
import {AboutMe} from "../components/about";
import {GlobalStateContext} from "../context/GlobalStateProvider";
import translate from "../helper/translate";
import {ContactForm, ContactMap} from "../components/contact";

const Contact = () => {
  const globalState = useContext(GlobalStateContext);

  return (
    <Layout seoTitle={translate('pages.contact', globalState.language)}>
      <div className="card-inner contacts active" id="contacts-card">
        <div className="card-wrap">
          <ContactMap/>
          <ContactForm/>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
