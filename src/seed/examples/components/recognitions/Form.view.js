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
            {/* Response */}
            <div class="form-group">
            <label class="input-label">Response</label>
            <Field type="text" name="response"
              as="textarea" rows="3"
              class="form-control" />
            </div>
            {/* Image */}
            <div class="form-group">
            <label class="input-label">Image</label>
            <FileField name="image"
              accept="*/*" setFieldValue={setFieldValue}
              class="form-control"  />
            </div>
            {/* Image base64 */}
            <div class="form-group">
            <label class="input-label">Image base64</label>
            <Field type="text" name="imageBase64"
              as="textarea" rows="3"
              class="form-control" />
            </div>
            {/* Processed image */}
            <div class="form-group">
            <label class="input-label">Processed image</label>
            <FileField name="processedImage"
              accept="*/*" setFieldValue={setFieldValue}
              class="form-control"  />
            </div>
            {/* Processed image base64 */}
            <div class="form-group">
            <label class="input-label">Processed image base64</label>
            <Field type="text" name="processedImageBase64"
              as="textarea" rows="3"
              class="form-control" />
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