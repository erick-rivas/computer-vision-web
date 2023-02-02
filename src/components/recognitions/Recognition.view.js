import React from "react";
import ReactJson from 'react-json-view'
import PropTypes from "prop-types";

const RecognitionView = ({ image, response, type }) => (

  <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
    <div class="card mb-3">
      <div class="row no-gutters">
        <div class="col-md-6">
          <img class="img-fluid " alt="Image" src={`data:image/jpeg;base64,${image}`} style={{ width: "100%", borderRadius: "10px" }} />
        </div>
        <div class="col-md-6">
          <div class="card-body" style={{ overflowY: "auto", height: "35vh" }}>
            <p class="card-text">
              <ReactJson src={response	} />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

)

RecognitionView.propTypes = {};

export default RecognitionView;