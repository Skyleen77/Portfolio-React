import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Modal from "react-modal";
import ModalOneContent from "./modal/ModalOneContent";
import ModalTwoContent from "./modal/ModalTwoContent";
import ModalThreeContent from "./modal/ModalThreeContent";
import ModalFourContent from "./modal/ModalFourContent";
import ModalFiveContent from "./modal/ModalFiveContent";
import ModalSixContent from "./modal/ModalSixContent";
import ModalSevenContent from "./modal/ModalSevenContent";
import ModalEightContent from "./modal/ModalEightContent";
import ModalNineContent from "./modal/ModalNineContent";
import soccerClick from '../../assets/project/soccerClick.jpg';
import virtuaBot from '../../assets/project/virtuaBot.jpg';
import support from '../../assets/project/support.jpg';
import atelierChouette from '../../assets/project/atelierChouette.jpg';
import portfolio from '../../assets/project/portfolio.jpg';
import vBot from '../../assets/project/vBot.jpg';
import atelierChouetteLogo from '../../assets/project/atelierChouetteLogo.jpg';
import soccerClickLogo from '../../assets/project/soccerClickLogo.jpg';
import vBotLogo from '../../assets/project/vBotLogo.jpg';


const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }
  function toggleModalFive() {
    setIsOpen5(!isOpen5);
  }
  function toggleModalSix() {
    setIsOpen6(!isOpen6);
  }
  function toggleModalSeven() {
    setIsOpen7(!isOpen7);
  }
  function toggleModalEight() {
    setIsOpen8(!isOpen8);
  }
  function toggleModalNine() {
    setIsOpen9(!isOpen9);
  }

  return (
    <Tabs>
      <TabList className="portfolio-tab-list">
        <Tab>TOUS</Tab>
        <Tab>WEB</Tab>
        <Tab>MOBILE</Tab>
        <Tab>LOGO</Tab>
        <Tab>AUTRE</Tab>
      </TabList>

      <div className="portfolio-tab-content">






        {/* Start TOUS */}
        <TabPanel>
          <ul className="row grid justify-content-center">
            {/* <!-- Portfolio Item 1 Starts --> */}
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure onClick={toggleModalOne}>
                <img src={soccerClick} alt="Jeu SoccerClick" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Jeu Mobile</span>
                </div>
              </figure>

              {/* Start ModalOneContent */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="Test label"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="/img/projects/navigation/close-button.png" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalOneContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalOneContent */}
            </li>
            {/* <!-- Portfolio Item 1 Ends --> */}

            {/* <!-- Portfolio Item 2 Starts --> */}
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <figure onClick={toggleModalTwo}>
                <img src={virtuaBot} alt="Bot Discord VirtuaBot" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Application Web</span>
                </div>
              </figure>

              {/* Start ModalTwoContent */}
              <Modal
                isOpen={isOpen2}
                onRequestClose={toggleModalTwo}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalTwo}>
                    <img src="/img/projects/navigation/close-button.png" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalTwoContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalTwoContent */}
            </li>
            {/* <!-- Portfolio Item 2 Ends --> */}

            {/* <!-- Portfolio Item 3 Starts --> */}
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <figure onClick={toggleModalThree}>
                <img src={support} alt="Application de support du Campus Saint-Aspais" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Application Web</span>
                </div>
              </figure>

              {/* Start ModalThreeContent */}
              <Modal
                isOpen={isOpen3}
                onRequestClose={toggleModalThree}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalThree}>
                    <img src="/img/projects/navigation/close-button.png" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalThreeContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalThreeContent */}
            </li>
            {/* <!-- Portfolio Item 3 Ends --> */}

            {/* <!-- Portfolio Item 4 Starts --> */}
            <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure
                className="direction-reveal__card"
                onClick={toggleModalFour}
              >
                <img src={atelierChouette} alt="Atelier de la chouette" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Site E-commerce</span>
                </div>
              </figure>

              {/* Start ModalFourContent */}
              <Modal
                isOpen={isOpen4}
                onRequestClose={toggleModalFour}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalFour}>
                    <img src="/img/projects/navigation/close-button.png" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalFourContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalFourContent */}
            </li>
            {/* <!-- Portfolio Item 4 Ends --> */}

            {/* <!-- Portfolio Item 5 Starts --> */}
            <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <figure
                className="direction-reveal__card"
                onClick={toggleModalFive}
              >
                <img src={portfolio} alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Portfolio</span>
                </div>
              </figure>

              {/* Start ModalFiveContent */}
              <Modal
                isOpen={isOpen5}
                onRequestClose={toggleModalFive}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalFive}>
                    <img src="/img/projects/navigation/close-button.png" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalFiveContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalFiveContent */}
            </li>
            {/* <!-- Portfolio Item 5 Ends --> */}

            {/* <!-- Portfolio Item 6 Starts --> */}
            <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <figure
                className="direction-reveal__card"
                onClick={toggleModalSix}
              >
                <img src={vBot} alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Bot Discord</span>
                </div>
              </figure>

              {/* Start ModalSixContent */}
              <Modal
                isOpen={isOpen6}
                onRequestClose={toggleModalSix}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalSix}>
                    <img src="/img/projects/navigation/close-button.png" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalSixContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalSixContent */}
            </li>
            {/* <!-- Portfolio Item 6 Ends --> */}

            {/* <!-- Portfolio Item 7 Starts --> */}
            <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure
                className="direction-reveal__card"
                onClick={toggleModalSeven}
              >
                <img src={atelierChouetteLogo} alt="Logo de l'atelier de la chouette" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Logo</span>
                </div>
              </figure>

              {/* Start ModalSevenContent */}
              <Modal
                isOpen={isOpen7}
                onRequestClose={toggleModalSeven}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalSeven}>
                    <img src="/img/projects/navigation/close-button.png" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalSevenContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalSevenContent */}
            </li>
            {/* <!-- Portfolio Item 7 Ends --> */}

            {/* <!-- Portfolio Item 8 Starts --> */}
            <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <figure
                className="direction-reveal__card"
                onClick={toggleModalEight}
              >
                <img src={vBotLogo} alt="Logo de VirtuaBot" />

                <div className=" hover-content-wrapper">
                  <span className="content-title">Logo</span>
                </div>
              </figure>
              {/* Start ModalEightContent */}
              <Modal
                isOpen={isOpen8}
                onRequestClose={toggleModalEight}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalEight}>
                    <img src="/img/projects/navigation/close-button.png" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalEightContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalEightContent */}
            </li>
            {/* <!-- Portfolio Item 8 Ends --> */}

            {/* <!-- Portfolio Item 9 Starts --> */}
            <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <figure
                className="direction-reveal__card"
                onClick={toggleModalNine}
              >
                <img src={soccerClickLogo} alt="Logo de SoccerClick" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Logo</span>
                </div>
              </figure>

              {/* Start ModalNineContent */}
              <Modal
                isOpen={isOpen9}
                onRequestClose={toggleModalNine}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalNine}>
                    <img src="/img/projects/navigation/close-button.png" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalNineContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalNineContent */}
            </li>
            {/* <!-- Portfolio Item 9 Ends --> */}
          </ul>
        </TabPanel>
        {/* End TOUS */}















        {/* Start WEB */}
        <TabPanel>
          <ul className="row grid justify-content-center">
            
            {/* <!-- Portfolio Item 2 Starts --> */}
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <figure onClick={toggleModalTwo}>
                <img src={virtuaBot} alt="Bot Discord VirtuaBot" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Application Web</span>
                </div>
              </figure>

              {/* Start ModalTwoContent */}
              <Modal
                isOpen={isOpen2}
                onRequestClose={toggleModalTwo}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalTwo}>
                    <img src="/img/projects/navigation/close-button.png" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalTwoContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalTwoContent */}
            </li>
            {/* <!-- Portfolio Item 2 Ends --> */}

            {/* <!-- Portfolio Item 3 Starts --> */}
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <figure onClick={toggleModalThree}>
                <img src={support} alt="Application de support du Campus Saint-Aspais" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Application Web</span>
                </div>
              </figure>

              {/* Start ModalThreeContent */}
              <Modal
                isOpen={isOpen3}
                onRequestClose={toggleModalThree}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalThree}>
                    <img src="/img/projects/navigation/close-button.png" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalThreeContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalThreeContent */}
            </li>
            {/* <!-- Portfolio Item 3 Ends --> */}

            {/* <!-- Portfolio Item 4 Starts --> */}
            <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure
                className="direction-reveal__card"
                onClick={toggleModalFour}
              >
                <img src={atelierChouette} alt="Atelier de la chouette" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Site E-commerce</span>
                </div>
              </figure>

              {/* Start ModalFourContent */}
              <Modal
                isOpen={isOpen4}
                onRequestClose={toggleModalFour}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalFour}>
                    <img src="/img/projects/navigation/close-button.png" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalFourContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalFourContent */}
            </li>
            {/* <!-- Portfolio Item 4 Ends --> */}

            {/* <!-- Portfolio Item 5 Starts --> */}
            <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <figure
                className="direction-reveal__card"
                onClick={toggleModalFive}
              >
                <img src={portfolio} alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Portfolio</span>
                </div>
              </figure>

              {/* Start ModalFiveContent */}
              <Modal
                isOpen={isOpen5}
                onRequestClose={toggleModalFive}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalFive}>
                    <img src="/img/projects/navigation/close-button.png" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalFiveContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalFiveContent */}
            </li>
            {/* <!-- Portfolio Item 5 Ends --> */}

          </ul>
        </TabPanel>
        {/* End WEB */}











        {/* Start MOBILE */}
        <TabPanel>
          <ul className="row grid justify-content-center">
            {/* <!-- Portfolio Item 1 Starts --> */}
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure onClick={toggleModalOne}>
                <img src={soccerClick} alt="Jeu SoccerClick" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Jeu Mobile</span>
                </div>
              </figure>

              {/* Start ModalOneContent */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="Test label"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="/img/projects/navigation/close-button.png" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalOneContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalOneContent */}
            </li>
            {/* <!-- Portfolio Item 1 Ends --> */}
          </ul>
        </TabPanel>
        {/* End MOBILE */}











        {/* Start LOGO */}
        <TabPanel>
          <ul className="row grid justify-content-center">
            
            {/* <!-- Portfolio Item 7 Starts --> */}
            <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure
                className="direction-reveal__card"
                onClick={toggleModalSeven}
              >
                <img src={atelierChouetteLogo} alt="Logo de l'atelier de la chouette" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Logo</span>
                </div>
              </figure>

              {/* Start ModalSevenContent */}
              <Modal
                isOpen={isOpen7}
                onRequestClose={toggleModalSeven}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalSeven}>
                    <img src="/img/projects/navigation/close-button.png" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalSevenContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalSevenContent */}
            </li>
            {/* <!-- Portfolio Item 7 Ends --> */}

            {/* <!-- Portfolio Item 8 Starts --> */}
            <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <figure
                className="direction-reveal__card"
                onClick={toggleModalEight}
              >
                <img src={vBotLogo} alt="Logo de VirtuaBot" />

                <div className=" hover-content-wrapper">
                  <span className="content-title">Logo</span>
                </div>
              </figure>
              {/* Start ModalEightContent */}
              <Modal
                isOpen={isOpen8}
                onRequestClose={toggleModalEight}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalEight}>
                    <img src="/img/projects/navigation/close-button.png" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalEightContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalEightContent */}
            </li>
            {/* <!-- Portfolio Item 8 Ends --> */}

            {/* <!-- Portfolio Item 9 Starts --> */}
            <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <figure
                className="direction-reveal__card"
                onClick={toggleModalNine}
              >
                <img src={soccerClickLogo} alt="Logo de SoccerClick" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Logo</span>
                </div>
              </figure>

              {/* Start ModalNineContent */}
              <Modal
                isOpen={isOpen9}
                onRequestClose={toggleModalNine}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalNine}>
                    <img src="/img/projects/navigation/close-button.png" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalNineContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalNineContent */}
            </li>
            {/* <!-- Portfolio Item 9 Ends --> */}
            
          </ul>
        </TabPanel>
        {/* End LOGO */}


















        {/* Start AUTRE */}
        <TabPanel>
          <ul className="row grid justify-content-center">
            {/* <!-- Portfolio Item 6 Starts --> */}
            <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <figure
                className="direction-reveal__card"
                onClick={toggleModalSix}
              >
                <img src={vBot} alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Bot Discord</span>
                </div>
              </figure>

              {/* Start ModalSixContent */}
              <Modal
                isOpen={isOpen6}
                onRequestClose={toggleModalSix}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalSix}>
                    <img src="/img/projects/navigation/close-button.png" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalSixContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalSixContent */}
            </li>
            {/* <!-- Portfolio Item 6 Ends --> */}
          </ul>
        </TabPanel>
        {/* End AUTRE */}



      </div>
    </Tabs>
  );
};

export default Portfolio;
