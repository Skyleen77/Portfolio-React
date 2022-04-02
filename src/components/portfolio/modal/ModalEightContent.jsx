import React from "react";
import vBotLogo from "../../../assets/project/vBotLogo.jpg";

const ModalEightContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>Logo VirtuaBot</h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-file-text-o pr-2"></i>
              <span className="project-label">Projet </span>:{" "}
              <span className="ft-wt-600 uppercase">Logo réalisé pour le bot Discord VirtuaBot</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-laptop pr-2"></i>
              <span className="project-label">Logiciel </span>:{" "}
              <span className="ft-wt-600 uppercase">Adobe Illustrator</span>
            </div>
            {/* End .col */}

          </div>
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
        <img src={vBotLogo} alt="Logo de VirtuaBot" />
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalEightContent;
