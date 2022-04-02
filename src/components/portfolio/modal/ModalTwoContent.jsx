import React from "react";
import virtuaBot from "../../../assets/project/virtuaBot.jpg";

const ModalTwoContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>VirtuaBot</h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-file-text-o pr-2"></i>
              <span className="project-label">Projet </span>:{" "}
              <span className="ft-wt-600 uppercase">Application de présentation, de documentation et gestion du Bot pour son/ses serveurs.</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-code pr-2"></i>
              <span className="project-label">Langages </span>:{" "}
              <span className="ft-wt-600 uppercase">HTML, CSS, Twig, PHP</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-laptop pr-2"></i>
              <span className="project-label">Logiciels, Frameworks & API </span>:{" "}
              <span className="ft-wt-600 uppercase">Adobe Illustrator, Bootstrap, Mailjet</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Voir </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://virtuabot.fr"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.virtuabot.fr
                </a>
              </span>
            </div>
            {/* End .col */}
            
          </div>
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
        <img src={virtuaBot} alt="Application web VirtuaBot" />
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalTwoContent;
