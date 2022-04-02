import React from "react";

const educationContent = [
  {
    year: "2021 - 2022",
    degree: "Bachelor 3ème année",
    institute: "MyDigitalSchool",
    details: `Développement Web`,
  },
  {
    year: "2019 - 2021",
    degree: "BTS",
    institute: "Campus Saint-Aspais",
    details: `Services Informatiques aux Organisations option Solutions Logicielles et Applications Métiers`,
  },
  {
    year: "2017 - 2019",
    degree: "Baccalauréat Général",
    institute: "Lycée Saint-Aspais",
    details: `Économique et Social`,
  },
];

const Education = () => {
  return (
    <>
      <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">Formation</h3>
      <ul>
        {educationContent.map((val, i) => (
          <li key={i}>
            <div className="icon icon-primary">
              <i className="fa fa-graduation-cap"></i>
            </div>
            <span className="time open-sans-font text-uppercase">{val.year}</span>
            <h5 className="poppins-font text-uppercase">
              {val.degree}
              <span className="place open-sans-font">{val.institute}</span>
            </h5>
            <p className="open-sans-font">{val.details}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Education;
