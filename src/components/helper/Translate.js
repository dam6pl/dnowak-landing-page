import React from "react";
import {GlobalStateContext} from "../../context/GlobalStateProvider";
import {useContext} from "react";
import PropTypes from "prop-types";
import translate from "../../helper/translate";

const Translate = ({id, className}) => {
  const globalState = useContext(GlobalStateContext);

  return (
    <span className={className}>{translate(id, globalState.language)}</span>
  )
};

export default Translate;

Translate.propTypes = {
  id: PropTypes.string.isRequired,
};