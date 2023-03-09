import React from "react";
import ReactJson from 'react-json-view'
import Viewer from "react-viewer";
import PropTypes from "prop-types";

const RecognitionView = ({
  image,
  processedImage,
  response,
  type,
  activeIndex,
  visible,
  openImageViewer,
  closeImageViewer
}) => (

  <>

    <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-5">
      <div class="card mb-3">
        <div class="row no-gutters">
          <div class="col-md-6">

            <figure class="figure">
              <img class="figure-img img-fluid rounded" alt="Original" src={image.url}

              />
              <figcaption class="figure-caption text-center"><h5>Imagen original</h5></figcaption>
              <div class="bg-white pt-1 view-label" onClick={() => openImageViewer(0)}
                style={{
                  color: "black",
                  position: "relative",
                  bottom: "80px",
                  left: "calc(100% - 90px)",
                  width: "80px",
                  height: "30px",
                  borderRadius: "10%",
                  cursor: "pointer"
                }}
              >
                <p class="text-center"><i class="fas fa-expand mr-2"></i>Ver</p>
              </div>
            </figure>

            <figure class="figure mt-2">
              <img class="figure-img img-fluid rounded" alt="Processed" src={processedImage.url} />
              <figcaption class="figure-caption text-center"><h5>Rostros identificados</h5></figcaption>
              <div class="bg-white pt-1 view-label" onClick={() => openImageViewer(1)}
                style={{
                  color: "black",
                  position: "relative",
                  bottom: "80px",
                  left: "calc(100% - 90px)",
                  width: "80px",
                  height: "30px",
                  borderRadius: "10%",
                  cursor: "pointer"
                }}
              >
                <p class="text-center"><i class="fas fa-expand mr-2"></i>Ver</p>
              </div>
            </figure>

          </div>
          <div class="col-md-6">
            <div class="card-body" style={{ overflowY: "auto", height: "80vh" }}>
              <p class="card-text">
                <ReactJson src={response} shouldCollapse={
                  (field) => { 
                    if (field.name == "root" || field.name == "faces") return false;
                    return true; 
                    }
                  }/>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Viewer
      visible={visible}
      onClose={closeImageViewer}
      zoomSpeed={0.2}
      images={[
        {
          src: image.url,
          title: "Imagen original"
        },
        {
          src: processedImage.url,
          title: "Rostros detectdos"
        }
      ]}
      activeIndex={activeIndex}
    />

  </>

)

RecognitionView.propTypes = {
  image: PropTypes.object.isRequired,
  processedImage: PropTypes.object.isRequired,
  response: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  activeIndex: PropTypes.number.isRequired,
  visible: PropTypes.bool.isRequired,
  openImageViewer: PropTypes.func.isRequired,
  closeImageViewer: PropTypes.func.isRequired
};

export default RecognitionView;