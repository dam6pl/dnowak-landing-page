import React, {useContext} from "react";
import { useStaticQuery, graphql } from "gatsby";
import {GlobalDispatchContext, GlobalStateContext} from "../../context/GlobalStateProvider";

const LanguageSwitch = () => {
  const globalState = useContext(GlobalStateContext);
  const globalDispatch = useContext(GlobalDispatchContext);
  const {
    allTranslation: { translations },
  } = useStaticQuery(graphql`
    {
      allTranslation: allDirectusTranslation {
        translations: nodes {
          language
          name
        }
      }
    }
  `);

  return (
    <div className="language-switcher">
      {translations.map((el) => (
        <button
          onClick={() => globalDispatch({type: "CHANGE_LANGUAGE_" + el.language.toUpperCase()})}
          key={`language-${Math.random()}`}
          type="button"
          data-lang={el.language}
          className={globalState.language === el.language ? "active" : ""}
        >
          {el.language}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitch;
