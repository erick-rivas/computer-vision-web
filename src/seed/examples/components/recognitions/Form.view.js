/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import { MultiField, FileField } from "seed/helpers";

const RecognitionFormView = ({ recognition= {}, onSubmit, error }) =>
  <div class="card">

    {/* Header */}
    <div class="card-header">
      <h3 class="card-header-title">Recognition</h3>
    </div>

    {/* Body */}
    <div class="card-body">
      <div class="row">
        <div class="col">
          <Formik
          initialValues={recognition}
          onSubmit={onSubmit}>
          {({ values, setFieldValue}) =>
          <Form>
            <div class="mb-3">
            {/* Image1 */}
            <div class="form-group">
            <label class="input-label">Image1</label>
            <Field type="text" name="image1"
              as="textarea" rows="3"
              class="form-control" />
            </div>
            {/* Image2 */}
            <div class="form-group">
            <label class="input-label">Image2</label>
            <Field type="text" name="image2"
              as="textarea" rows="3"
              class="form-control" />
            </div>
            {/* Response */}
            <div class="form-group">
            <label class="input-label">Response</label>
            <Field type="text" name="response"
              as="textarea" rows="3"
              class="form-control" />
            </div>
            {/* Type */}
            <div class="form-group">
            <label class="input-label">Type</label>
            <Field as="select" name="type"
              class="form-control"  >
              <option value="">Select an option</option>
              <option value="ATTRIBUTES">ATTRIBUTES</option>
              <option value="COMPARE">COMPARE</option>
            </Field>
            </div>
            </div>
            {error ? <div class="alert alert-soft-danger">{error}</div> : null}
            <button type="submit" class="btn btn-block btn-primary">Send</button>
          </Form> }
          </Formik>
        </div>
      </div>
    </div>

  </div>;

RecognitionFormView.propTypes = {
  recognition: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default RecognitionFormView;