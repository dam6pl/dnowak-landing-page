import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {BubblesBackground, Loader} from "./";
import {Seo} from "../index";
import Cookie from "universal-cookie";
import NavMenu from "./NavMenu";
import PersonCard from "../person/PersonCard";
import LanguageSwitch from "../helper/LanguageSwitch";

import "../../assets/stylesheets/basic.scss";
import "../../assets/stylesheets/layout.scss";
import "../../assets/stylesheets/blogs.scss";
import "../../assets/stylesheets/css/new-skin.css";
import "../../assets/stylesheets/css/dark.css";

library.add(fas, fab);

const Layout = ({
                  children,
                  seoTitle,
                  seoDescription,
                  seoKeywords,
                  seoImage,
                }) => {
  const cookie = new Cookie();
  const [firstTime] = useState(cookie.get("loaded") !== "1");
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    if (!firstTime) {
      return;
    }

    setIsLoading(true);

    const unsetLoader = () => {
      cookie.set("loaded", "1", {path: "/"});
      setIsLoading(false);
    };

    setTimeout(() => unsetLoader, 4000);
  }, []);

  return (
    <div id="application">
      <Seo
        key="app-seo"
        title={seoTitle}
        description={seoDescription}
        image={seoImage}
        keywords={seoKeywords}
      />
      {isLoading ? (
        <Loader key="app-loader" duration={4000}/>
      ) : (
        <div className="page new-skin">
          <BubblesBackground/>

          <div className="container opened">
            <NavMenu/>
            <PersonCard/>
            <LanguageSwitch/>
            <div key="app-content">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  seoTitle: PropTypes.string,
  seoDescription: PropTypes.string,
  seoKeywords: PropTypes.string,
  seoImage: PropTypes.string,
};

Layout.defaultProps = {
  seoTitle: null,
  seoDescription: null,
  seoKeywords: null,
  seoImage: null,
};
