/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import { BrowserRouter} from "react-router-dom";
import { Route } from "seed/helpers"
import { Link, NavLink } from "react-router-dom";

import RecognitionDetails from "seed/examples/components/recognitions/Details";
import RecognitionList from "seed/examples/components/recognitions/List";
import RecognitionFormSave from "seed/examples/components/recognitions/FormSave";
import RecognitionFormSet from "seed/examples/components/recognitions/FormSet";
import { ModalRoute } from "seed/helpers";

const RecognitionsView = () =>
  <BrowserRouter basename="/examples/recognitions">
    <div class="content container-fluid">

    {/* Header */}
    <div class="page-header">
      <div class="row align-items-end">

        <div class="col-sm">
          <h1 class="page-header-title">Recognitions</h1>
        </div>

        <div class="col-sm-auto">
          <div class="btn-group" role="group">
            <Link to="/create" className="btn btn-primary">
              <i class="tio-add mr-1"></i>Create
            </Link>
          </div>
        </div>

      </div>
    </div>

    {/* List */}
    <RecognitionList />

    {/* Modals */}
    <ModalRoute
        path="/:recognitionId(\d+)"
        component={RecognitionDetails} />
    <ModalRoute
      path="/create"
      component={RecognitionFormSave} />
    <ModalRoute
      path="/:recognitionId(\d+)/edit"
      component={RecognitionFormSet} />

    </div>
  </BrowserRouter>;

RecognitionsView.propTypes = {};

export default RecognitionsView;