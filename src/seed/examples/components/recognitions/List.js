/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React, { useState } from "react";
import { usePagination } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/recognitions/List.view";

function RecognitionList() {

  const pageSize = 15;
  const [pageNum, setPageNum] = useState(1);
  const reqRecognitions = usePagination(`
  {
    recognitionPagination {
      totalPages
      recognitions {
        type
        response
        imageBase64
        processedImageBase64
        createdAt
        image { }
        processedImage { }
      }
    }
  }`, pageNum, pageSize);

  if (reqRecognitions.loading) return <Loading />;
  if (reqRecognitions.error) return "Error";
  const { recognitions = [], totalPages = 0 } = reqRecognitions.data.recognitionPagination;

  const onClickPage = (pageNum) =>
    setPageNum(pageNum);

  return <View
    recognitions={recognitions}
    pageNum={pageNum}
    totalPages={totalPages}
    onClickPage={onClickPage}
  />;
}

RecognitionList.propTypes = {};

export default RecognitionList;