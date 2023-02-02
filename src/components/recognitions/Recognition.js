import React from "react";
import PropTypes from "prop-types";
import View from "components/recognitions/Recognition.view";

function Recognition({ recognition }) {

  const { image1, response, type } = recognition;     
  
  return <View image={image1} response={JSON.parse(response)} type={type}/>;
}

Recognition.propTypes = {};

export default Recognition;