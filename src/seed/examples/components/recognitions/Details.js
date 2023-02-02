/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useDetail, useDelete } from "seed/gql";
import { DELETE_RECOGNITION } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/recognitions/Details.view";

function RecognitionDetails({ recognitionId, onCompleted = () => null, onError = () => null }) {

  const reqRecognition = useDetail(`
  {
    recognition {
      image1
      image2
      response
      type
      createdAt
    }
  }`, recognitionId);
  
  const [callDelete] = useDelete(DELETE_RECOGNITION, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });

  if (reqRecognition.loading) return <Loading />;
  if (reqRecognition.error) return "Error";
  const { recognition = {} } = reqRecognition.data;

  const onClickDelete = () =>
    callDelete({ id: recognitionId });

  return <View
    recognition={recognition}
    onClickDelete={onClickDelete}
   />;
}

RecognitionDetails.propTypes = {
  recognitionId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default RecognitionDetails;