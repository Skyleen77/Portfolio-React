import React from "react";
import Typewriter from 'typewriter-effect';

const heroContent = {
  heroImage: "img/hero/avatar.png",
  heroMobileImage: "avatar",
  heroTitleName: "Elliot Sutton",
  heroDescriptions: `Je suis actuellement en Bachelor 3ème Développeur Web à MyDigitalSchool Melun. Je suis titulaire d'un BTS SIO (Brevet de Technicien Supérieur - Services Informatiques aux Organisations) option SLAM (Solutions Logicielles et Applications Métiers).`,
};

const Hero = () => {

  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + heroContent.heroImage
            })`,
          }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details text-center text-lg-start">
          <div>
            <h2>
              <span className="span-typewritter">Développeur&nbsp;
                <Typewriter 
                  options={{
                    strings: ['Web', 'Symfony', 'React.js', 'Discord.js', 'Unity'], 
                    autoStart: true, loop: true}} 
                />
              </span>
            </h2>
            <p className="open-sans-font">{heroContent.heroDescriptions}</p>
          </div>
        </div>
      </div>
      {/* End home-details-container */}
    </>
  );
};

export default Hero;
