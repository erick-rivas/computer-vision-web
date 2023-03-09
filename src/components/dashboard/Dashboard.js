import React, { useState } from "react";
import PropTypes from "prop-types";
import View from "components/dashboard/Dashboard.view";

function Recognition() {
  return <View />;
}

Recognition.propTypes = {
  recognition: PropTypes.object.isRequired
};

export default Recognition;