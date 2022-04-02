import React from "react";
import atelierChouetteLogo from "../../../assets/project/atelierChouetteLogo.jpg";

const ModalSevenContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>Logo Atelier de la chouette</h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-file-text-o pr-2"></i>
              <span className="project-label">Projet </span>:{" "}
              <span className="ft-wt-600 uppercase">Logo réalisé pour l'entreprise L'atelier de la chouette</span>
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
        <img src={atelierChouetteLogo} alt="Logo de l'atelier de la chouette" />
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalSevenContent;
