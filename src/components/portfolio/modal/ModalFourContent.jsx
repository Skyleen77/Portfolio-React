import React from "react";
import atelierChouette from "../../../assets/project/atelierChouette.jpg";

const ModalFourContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>L'atelier de la chouette</h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-file-text-o pr-2"></i>
              <span className="project-label">Projet </span>:{" "}
              <span className="ft-wt-600 uppercase">Site permettant d'exposer les bijoux artisanaux de l'entreprise L'atelier de la chouette.</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-code pr-2"></i>
              <span className="project-label">Langages </span>:{" "}
              <span className="ft-wt-600 uppercase">Symfony, Twig, PHP</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-laptop pr-2"></i>
            <span className="project-label">Logiciels, Frameworks & API </span>:{" "}
              <span className="ft-wt-600 uppercase">Adobe Illustrator, Bootstrap, EasyAdmin, Stripe, Mailjet</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Voir </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  #
                </a>
              </span>
            </div>
            {/* End .col */}

          </div>
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
        <img src={atelierChouette} alt="Site de l'atelier de la chouette" />
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalFourContent;