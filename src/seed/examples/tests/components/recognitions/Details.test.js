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
import Details from 'seed/examples/components/recognitions/Details';

test('examples/components/recognitions/Details', () => {
  mockGql.useDetail({"recognition": data.GQL_RECOGNITION});
  mockGql.useDelete({"deleteRecognition": data.GQL_RECOGNITION});
  render(<Details />);
  expect(screen).toBeDefined()
});