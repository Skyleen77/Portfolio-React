import React from "react";

const experienceContent = [
  {
    year: "oct. 2021 - aujourd'hui",
    position: "Développeur web",
    compnayName: "Technicam",
    details: `Contrat en alternance`,
  },
  {
    year: "janv. 2021 - févr. 2021 · 2 mois",
    position: "Développeur Applications Web",
    compnayName: "Campus Saint-Aspais",
    details: `Stage de deuxième année de BTS SIO`,
  },
  {
    year: "juin. 2020 - juil. 2020",
    position: "juin. 2020 - juil. 2020 · 2 mois",
    compnayName: "Jankovic ACGE",
    details: `Développeur web`,
  },
];

const Experience = () => {
  return (
    <>
      <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">Expérience</h3>
      <ul>
        {experienceContent.map((val, i) => (
          <li key={i}>
            <div className="icon icon-secondary">
              <i className="fa fa-briefcase"></i>
            </div>
            <span className="time open-sans-font text-uppercase">{val.year}</span>
            <h5 className="poppins-font text-uppercase">
              {val.position}
              <span className="place open-sans-font">{val.compnayName}</span>
            </h5>
            <p className="open-sans-font">{val.details}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Experience;
