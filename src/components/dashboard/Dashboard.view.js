import React from "react";
import { BrowserRouter } from "react-router-dom"
import PropTypes from "prop-types";

const RecognitionView = () => (

  <BrowserRouter basename="/dashboard">
    <div class="content container-fluid" >

      <div class="card mb-3 mb-lg-5">

        <div class="card-header card-header-content-sm-between">
          <h4 class="card-header-title mb-2 mb-sm-0">Gráficas y estadísticas</h4>

          {/* <ul class="nav nav-segment nav-fill" id="projectsTab" role="tablist">
            <li class="nav-item" role="presentation">
              <a class="nav-link active" data-bs-toggle="tab" aria-selected="true" role="tab">This week</a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link" data-bs-toggle="tab" aria-selected="false" tabindex="-1" role="tab">Last week</a>
            </li>
          </ul> */}
        </div>

        <div class="card-body">
          <iframe width="100%" height="800px"
            title="Dashboard"
            src="https://lookerstudio.google.com/embed/reporting/658dab0f-7610-4862-87f1-a71f57b59dcd/page/hnR6"
            frameborder="0" style={{ border: 0 }} allowfullscreen>
          </iframe>
        </div>

      </div>

    </div>
  </BrowserRouter>

)

RecognitionView.propTypes = {
};

export default RecognitionView;