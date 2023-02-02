import React from "react";
import { BrowserRouter } from "react-router-dom";
import { PaginationFooter } from "seed/helpers";
import PropTypes from "prop-types";
import Recognition from "components/recognitions/Recognition";

const MainView = ({
  recognitions,
  pageNum,
  totalPages,
  onClickPage
}) => (
  <BrowserRouter basename="/home">
    <div class="content container-fluid" >

      < div class="row align-items-end">
        {
          recognitions.map((recognition) => (
            <Recognition recognition={recognition} />
          ))
        }
      </div>

      <PaginationFooter pageNum={pageNum} totalPages={totalPages} onClickPage={onClickPage} />

    </div>
  </BrowserRouter>

)

MainView.propTypes = {};

export default MainView;