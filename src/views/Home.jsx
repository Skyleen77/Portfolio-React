import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Hero from "../components/hero/Hero";
import Index from "../components/about/index";
import Address from "../components/Address";
import Portfolio from "../components/portfolio/Portfolio";
import Contact from "../components/Contact";
import Social from "../components/Social";
import Copyright from "../components/Copyright";
import Minesweeper from "../components/minesweeper/Minesweeper";

const Home = () => {
  return (
    <div className="gradient portfolio-wrapper">
      
      <Tabs>


        {/* Start Menu Content */}
        <div className="header">
            <TabList className=" icon-menu  revealator-slideup revealator-once revealator-delay1">
                <Tab className="icon-box">
                    <i className="fa fa-home"></i>
                    <h2>Accueil</h2>
                </Tab>
                <Tab className="icon-box">
                    <i className="fa fa-user"></i>
                    <h2>À&nbsp;propos</h2>
                </Tab>
                <Tab className="icon-box">
                    <i className="fa fa-briefcase"></i>
                    <h2>Projets</h2>
                </Tab>
                <Tab className="icon-box">
                    <i className="fa fa-envelope-open"></i>
                    <h2>Contact</h2>
                </Tab>
                <Tab className="icon-box">
                    <i className="fa fa-gamepad"></i>
                    <h2>Démineur</h2>
                </Tab>
            </TabList>
        </div>
        {/* End Menu Content */}


        <div className="tab-panel_list">
          {/* Hero Content Starts */}
          <TabPanel className="home">
            <div className="title-section text-left text-sm-center" style={{position: 'absolute'}}>
                <h1>
                    <span>Elliot Sutton</span>
                </h1>
                <span className="title-bg">Portfolio</span>
            </div>
            <div
              className="container-fluid main-container container-home p-0 "
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <Hero />
            </div>
          </TabPanel>
          {/* Hero Content Ends */}

          {/* About Content Starts */}
          <TabPanel className="about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  À <span>propos</span>
                </h1>
                <span className="title-bg">Infos</span>
              </div>
              {/* End title */}
              <Index />
            </div>
          </TabPanel>
          {/* About Content Ends */}


          {/* Portfolio Content Starts */}
          <TabPanel className="portfolio professional">
            <div
              className="title-section text-left text-sm-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                Mes <span>projets</span>
              </h1>
              <span className="title-bg">Réalisations</span>
            </div>
            {/* End title */}
            <div
              className="container grid-gallery main-content"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <Portfolio />
            </div>
            {/* End grid gallery */}
          </TabPanel>
          {/* Portfolio Content Ends */}


          {/* Contact Content Starts */}
          <TabPanel className="contact">
            <div
              className="title-section text-left text-sm-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                Me <span>contacter</span>
              </h1>
              <span className="title-bg">Joindre</span>
            </div>
            <div
              className="container"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="row">
                {/*  Left Side Starts */}
                <div className="col-12 col-lg-4">
                  <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                    N'hésitez pas à me contacter
                  </h3>
                  <p className="open-sans-font mb-4">
                    Je suis toujours ouvert aux nouveaux projets ou aux idées créatives.
                  </p>
                  <Address />
                  {/* End Address */}

                  <Social />
                  {/* End Social */}

                  <Copyright />
                  {/* End Social */}
                </div>
                {/* Left Side Ends */}

                {/*  Contact Form Starts  */}
                <div className="col-12 col-lg-8">
                  <Contact />
                </div>
                {/*  Contact Form Ends */}
              </div>
            </div>
            {/* End .container */}
          </TabPanel>
          {/* Contact Content Ends */}



          {/* Contact Content Starts */}
          <TabPanel className="game">
            <Minesweeper />
          </TabPanel>
          {/* Contact Content Ends */}

          
        </div>
      </Tabs>
    </div>
  );
};

export default Home;
