import React from "react";
import vBot from "../../../assets/project/vBot.jpg";

const ModalSixContent = () => {
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
              <span className="ft-wt-600 uppercase">Bot discord permettant de modérer, administrer et automatiser des actions sur son serveur et bien plus.</span>
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
              <span className="project-label">Frameworks </span>:{" "}
              <span className="ft-wt-600 uppercase">Discord.js</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Voir </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://discord.com/oauth2/authorize?client_id=919712924833050644&permissions=8&scope=bot%20applications.commands"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.discord.com
                </a>
              </span>
            </div>
            {/* End .col */}
            
          </div>
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
        <img src={vBot} alt="Bot Discord VirtuaBot" />
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalSixContent;
