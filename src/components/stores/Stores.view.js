import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import { ScriptTag } from "seed/helpers";

const StoresView = () => (
  <main id="content" role="main" class="main pl-0">
    <div
      class="position-fixed top-0 right-0 left-0 bg-img-hero"
      style={{
        height: "32rem",
        backgroundImage: "url(/theme/svg/components/abstract-bg-4.svg)",
      }}
    >
      <figure class="position-absolute right-0 bottom-0 left-0">
        <svg
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1921 273"
        >
          <polygon fill="#fff" points="0,273 1921,273 1921,0 " />
        </svg>
      </figure>
    </div>

    <div class="container py-5 py-sm-7">
      <a class="d-flex justify-content-center mb-5" href="index.html">
        <img
          class="z-index-2"
          src="/theme/svg/logos/logo.svg"
          alt="Logo"
          style={{ width: "8rem" }}
        />
      </a>

      <div class="row justify-content-center">
        <div class="col-md-7 col-lg-5">
          <div class="card card-lg mb-5">
            <div class="card-body">
              <div class="card-body text-center">
                <a
                  class="btn btn-lg btn-soft-success mb-4"
                  href="/resources/app.apk"
                  target="_blank"
                >
                  Actualizar o instalar app{" "}
                  <i class="fab fa-brands fa-android"></i> Android
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ScriptTag
      content={`
      $('.js-toggle-password').each(function () {
        new HSTogglePassword(this).init()
      });
    `}
    />
  </main>
);

StoresView.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default StoresView;
