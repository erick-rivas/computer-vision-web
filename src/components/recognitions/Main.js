import React, { useState } from "react";
import PropTypes from "prop-types";
import { usePagination } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "components/recognitions/Main.view";

function Main() {

  const pageSize = 4;
  const [pageNum, setPageNum] = useState(1);

  const reqRecognitions = usePagination(`
  {
    recognitionPagination {
      totalPages
      recognitions {
        image {
          url
          name
        }
        processedImage {
          url
          name
        }
        response
        type
      }
    }
  }
  `, pageNum, pageSize);

  if (reqRecognitions.loading) return <Loading />;
  if (reqRecognitions.error) return "Error";

  const { recognitions = [], totalPages = 0 } = reqRecognitions.data.recognitionPagination;

  const onClickPage = (pageNum) => setPageNum(pageNum);

  return (
    <View 
      recognitions={recognitions} 
      pageNum={pageNum}
      totalPages={totalPages}
      onClickPage={onClickPage}
    />
  );
}

Main.propTypes = {};

export default Main;