import React, { useReducer, createContext } from "react";
import Cookies from "universal-cookie";

export const GlobalStateContext = createContext(null);
export const GlobalDispatchContext = createContext(null);

const cookies = new Cookies();

const initialState = {
  language: cookies.get("language") || "en",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_LANGUAGE_EN": {
      cookies.set("language", "en", { path: "/" });

      return { ...state, language: "en" };
    }
    case "CHANGE_LANGUAGE_PL": {
      cookies.set("language", "pl", { path: "/" });

      return { ...state, language: "pl" };
    }
    default:
      throw new Error("Bad action type");
  }
};

const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export default GlobalStateProvider;
