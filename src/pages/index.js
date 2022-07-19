import React, {useContext} from "react";
import {Layout} from "../components/layout";
import {AboutMe} from "../components/about";
import {GlobalStateContext} from "../context/GlobalStateProvider";
import translate from "../helper/translate";

const Index = () => {
  const globalState = useContext(GlobalStateContext);

  return (
    <Layout seoTitle={translate('pages.about_me', globalState.language)}>
      <div className="card-inner active" id="about-card">
        <div className="card-wrap">
          <AboutMe/>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
