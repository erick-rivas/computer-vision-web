import React from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import { Route } from "seed/helpers"

import Login from "components/auth/Login";
import Logout from "components/auth/Logout";
import Home from "components/Home";
import Stores from "components/stores/Stores";

import css from "styles/css/App.module.css";

const AppView = () =>
  <div class={css.module}>
    <BrowserRouter basename="/">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/stores" component={Stores} />
        <Route path="/" component={Home} />
        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  </div>;

AppView.propTypes = {};

export default AppView;