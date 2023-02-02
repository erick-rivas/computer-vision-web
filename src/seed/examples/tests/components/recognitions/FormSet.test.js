/*
__Seed builder__
  (Read_only) Example test
  Be careful copying content
*/

import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { render, mockGql } from 'seed/jest';
import * as data from 'seed/examples/tests/data';
import FormSet from 'seed/examples/components/recognitions/FormSet';

test('examples/components/recognitions/FormSet', () => {
  mockGql.useDetail({"recognition": data.GQL_RECOGNITION});
  mockGql.useSet({"setRecognition": data.GQL_RECOGNITION});
  render(<FormSet />);
  expect(screen).toBeDefined();
});