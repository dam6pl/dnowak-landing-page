import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Cookie from "universal-cookie";
import { Loader } from "./";

import "../../assets/stylesheets/basic.scss";
import "../../assets/stylesheets/layout.scss";
import "../../assets/stylesheets/blogs.scss";
import "../../assets/stylesheets/css/new-skin.css";
import "../../assets/stylesheets/css/dark.css";

library.add(fas, fab);

const Layout = ({ language, children }) => {
  const cookie = new Cookie();
  const [firstTime] = useState(cookie.get("loaded") !== "1");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(
      () => {
        firstTime && cookie.set("loaded", "1", { path: "/" });
        setIsLoading(false);
      },
      firstTime ? 4000 : 300
    );
  });

  return (
    <div id="application">
      <Helmet key="app-head">
        <html lang={language} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        />
      </Helmet>
      {isLoading && (
        <Loader
          key="app-loader"
          withLogo={firstTime}
          duration={firstTime ? 4000 : 300}
        />
      )}
      <div key="app-content">{children}</div>
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  language: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
