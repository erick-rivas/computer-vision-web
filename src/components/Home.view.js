import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { Route } from "seed/helpers"
import { ScriptTag } from "seed/helpers";

import Recognitions from "components/recognitions/Main";
import Topnav from "components/navigation/Topnav";
import Sidenav from "components/navigation/Sidenav";

const HomeView = () =>
  <div>
    <main style={{ overflowY: "auto", height: "100vh" }}>
      <Topnav />

      <div
        class="container-fluid content"
        style={{ marginTop: "-16rem" }}
      >

        <Switch>
          <Route path="/home" component={Recognitions} />
          <Redirect to="/home" />
        </Switch>
      
      </div>
    </main>

    <ScriptTag content={`
         // Builder toggle invoker
        $('.js-navbar-vertical-aside-toggle-invoker').click(function () {
          $('.js-navbar-vertical-aside-toggle-invoker i').tooltip('hide');
        });

        // Initialization of navbar vertical navigation
        var sidebar = $('.js-navbar-vertical-aside').hsSideNav();

        // Initialization of tooltip in navbar vertical menu
        $('.js-nav-tooltip-link').tooltip({ boundary: 'window' })

        $(".js-nav-tooltip-link").on("show.bs.tooltip", function(e) {
          if (!$("body").hasClass("navbar-vertical-aside-mini-mode")) {
            return false;
          }
        });

        // Initialization of unfold
        $('.js-hs-unfold-invoker').each(function () {
          var unfold = new HSUnfold($(this)).init();
        });

        // Initialization of form search
        $('.js-form-search').each(function () {
          new HSFormSearch($(this)).init()
        });
    `} />
  </div>;

HomeView.propTypes = {};

export default HomeView;