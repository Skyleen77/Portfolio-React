import React from "react";
import portfolio from "../../../assets/project/portfolio.jpg";

const ModalFiveContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>Portfolio</h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-file-text-o pr-2"></i>
              <span className="project-label">Projet </span>:{" "}
              <span className="ft-wt-600 uppercase">Mon site portfolio.</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-code pr-2"></i>
              <span className="project-label">Langage </span>:{" "}
              <span className="ft-wt-600 uppercase">Javascript</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-laptop pr-2"></i>
              <span className="project-label">Frameworks</span>:{" "}
              <span className="ft-wt-600 uppercase">React.js, Bootstrap</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Voir </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://elliot-sutton.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.elliot-sutton.com
                </a>
              </span>
            </div>
            {/* End .col */}

          </div>
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
        <img src={portfolio} alt="Portfolio" />
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalFiveContent;
