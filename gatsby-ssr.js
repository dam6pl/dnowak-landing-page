import React from 'react';
import GlobalStateProvider from "./src/context/GlobalStateProvider";
import Helmet from "react-helmet";

export const wrapRootElement = ({element}) => (
  <GlobalStateProvider>
    <Helmet key="app-head">
      <meta charSet="utf-8"/>
      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      <link
        href="https://fonts.googleapis.com/css?family=Poppins"
        rel="stylesheet"
      />
    </Helmet>
    {element}
  </GlobalStateProvider>
);