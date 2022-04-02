import React from "react";
import soccerClick from "../../../assets/project/soccerClick.jpg";

const ModalOneContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>SoccerClick</h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-file-text-o pr-2"></i>
              <span className="project-label">Projet </span>:{" "}
              <span className="ft-wt-600 uppercase">Mini-jeu dont le but est de matcher son ballon avec les ballons qui défilent au milieu de l'écran.</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-code pr-2"></i>
              <span className="project-label">Langage & Logiciel </span>:{" "}
              <span className="ft-wt-600 uppercase">C#, Adobe Illustrator</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Disponible sur le Google Play Store </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://play.google.com/store/apps/details?id=com.SkyGames.SoccerClick&gl=FR"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.play.google.com
                </a>
              </span>
            </div>
            {/* End .col */}

          </div>
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
        <img src={soccerClick} alt="Jeu SoccerClick" />
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalOneContent;
