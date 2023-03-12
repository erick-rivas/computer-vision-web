import React, { useState } from "react";
import PropTypes from "prop-types";
import { usePost } from "seed/api";
import View from "components/stores/Stores.view";

function Stores({ history }) {

  return <View />;
}

Stores.propTypes = {
  history: PropTypes.object.isRequired
};

export default Stores;