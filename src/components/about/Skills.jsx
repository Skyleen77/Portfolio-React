import React from "react";
import phpLogo from "../../assets/skills/phpLogo.png"
import cssLogo from "../../assets/skills/cssLogo.png"
import htmlLogo from "../../assets/skills/htmlLogo.png"
import jsLogo from "../../assets/skills/jsLogo.png"
import CSharpLogo from "../../assets/skills/CSharpLogo.png"
import symfonyLogo from "../../assets/skills/symfonyLogo.png"
import reactLogo from "../../assets/skills/reactLogo.png"
import discordJsLogo from "../../assets/skills/discordJsLogo.png"
import bootstrapLogo from "../../assets/skills/bootstrapLogo.png"
import illustratorLogo from "../../assets/skills/illustratorLogo.png"
import unityLogo from "../../assets/skills/unityLogo.png"
import blenderLogo from "../../assets/skills/blenderLogo.png"


const skillsLogo = [
  {logoUrl: `${htmlLogo}`, logoName: "HTML Logo"},
  {logoUrl: `${cssLogo}`, logoName: "CSS Logo"},
  {logoUrl: `${phpLogo}`, logoName: "PHP Logo"},
  {logoUrl: `${jsLogo}`, logoName: "Javascript Logo"},
  {logoUrl: `${CSharpLogo}`, logoName: "C# Logo"},
  {logoUrl: `${symfonyLogo}`, logoName: "Symfony Logo"},
  {logoUrl: `${reactLogo}`, logoName: "React.js Logo"},
  {logoUrl: `${discordJsLogo}`, logoName: "React.js Logo"},
  {logoUrl: `${bootstrapLogo}`, logoName: "Bootstrap Logo"},
  {logoUrl: `${illustratorLogo}`, logoName: "Illustrator Logo"},
  {logoUrl: `${unityLogo}`, logoName: "Unity Logo"},
  {logoUrl: `${blenderLogo}`, logoName: "Blender Logo"},
]

const Skills = () => {
  return (
    <>
      {skillsLogo.map((val, i) => (
        <div className="col-4 col-md-3 mb-3 mb-sm-5 skills-col-logo" key={i}>
          <img className="skills-logo" src={val.logoUrl} alt="PHP logo" />
        </div>
      ))}
    </>
  );
};

export default Skills;
