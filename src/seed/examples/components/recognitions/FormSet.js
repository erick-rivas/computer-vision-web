/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { RECOGNITION, SET_RECOGNITION } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/recognitions/Form.view";

function RecognitionFormSet({ recognitionId, onCompleted = () => null, onError = () => null  }) {

  const qRecognition = useDetail(RECOGNITION, recognitionId);
  const [callSet, qSet] = useSet(SET_RECOGNITION, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });

  if (qRecognition.loading) return <Loading />;

  const { recognition = {} } = qRecognition.data;
  const error = qSet.error ? "An error has occurred" : null;

  const onSubmit = (values) => {
    values.id = recognitionId;
    callSet(values);
  };

  return <View
    recognition={recognition}
    error={error}
    onSubmit={onSubmit}
  />;
}

RecognitionFormSet.propTypes = {
  recognitionId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default RecognitionFormSet;