import React, { useState } from "react";
import PropTypes from "prop-types";
import View from "components/recognitions/Recognition.view";

function Recognition({ recognition }) {

  const { image, processedImage, response, type } = recognition;     
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  const closeImageViewer = () => {
    setActiveIndex(0);
    setVisible(false);
  };
  
  const openImageViewer = (index) => {
    setActiveIndex(index);
    setVisible(true);
  }

  return (
    <View 
      type={type}
      image={image}
      activeIndex={activeIndex} 
      visible={visible}
      processedImage={processedImage} 
      response={JSON.parse(response)} 
      openImageViewer={openImageViewer}
      closeImageViewer={closeImageViewer}
    />
  );
}

Recognition.propTypes = {
  recognition: PropTypes.object.isRequired
};

export default Recognition;