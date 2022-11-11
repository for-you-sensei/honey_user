import React from "react";
import "./About.css";
import intro from "../../Assets/Icons/About/intro.png";
import { Sec1 } from "../../Components/AboutCard/Sec1";

export function About() {
  return (
    <div id="about">
      <figure className="about-intro">
        <img src={intro} alt="" />
      </figure>

      <Sec1 />
    </div>
  );
}
