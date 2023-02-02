/*
__Seed builder__
  (Read_only) Example test
  Be careful copying content
*/

import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { render, mockGql } from 'seed/jest';
import * as data from 'seed/examples/tests/data'
import FormSave from 'seed/examples/components/recognitions/FormSave';

test('examples/components/recognitions/FormSave', () => {
  mockGql.useSave({"saveRecognition": data.GQL_RECOGNITION});
  render(<FormSave />);
  expect(screen).toBeDefined();
});