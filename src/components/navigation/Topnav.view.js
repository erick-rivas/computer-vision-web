import React from "react";
import { NavLink, Link } from "react-router-dom";
import PropTypes from "prop-types";


const TopnavView = () => (
  <div style={{ background: "#233548" }}>
    <div
      class="content container"
      style={{ height: "25rem", maxWidth: "68rem" }}
    >
      <div class="page-header page-header-light">
        <div class="navbar-nav">
          <div class="row align-items-center flex-grow-1 mt-3">

            <div class="col">
              {/* Logo */}
              <Link class="navbar-brand" to="/" aria-label="Front">
                <img
                  class="navbar-brand-logo"
                  src="/theme/svg/logos/logo-white.svg"
                  alt="Logo"
                  style={{ maxWidth: "10rem" }}
                />
              </Link>
            </div>

            <div class="col-auto">

              <Link to="/logout" className="btn btn-light">
                <span class="text-truncate pr-2" title="Sign out">
                  Cerrar Sesión
                </span>
              </Link>

            </div>

          </div>

          <div class="js-nav-scroller hs-nav-scroller-horizontal mt-1">
            <ul
              id="pageHeaderTab"
              class="nav nav-tabs nav-tabs-light page-header-tabs"
              role="tablist"
            >

              {/* Dashboard */}
              <li class="nav-item">
                <NavLink
                  to="/dashboard"
                  className="nav-link"
                  style={{ padding: "0.45rem 0.85rem" }}
                >
                  Dashboard
                </NavLink>
              </li>

              {/* App */}
              <li class="nav-item">
                <NavLink
                  to="/app"
                  className="nav-link"
                  style={{ padding: "0.45rem 0.85rem" }}
                >
                  App
                </NavLink>
              </li>

            </ul>
          </div>

        </div>
      </div>
    </div>
  </div>

);

TopnavView.propTypes = {};

export default TopnavView;