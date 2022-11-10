import React from "react";
import "./Sec3.css";
import img1 from "../../../Assets/Icons/Home/sec3 img1.png";
import img2 from "../../../Assets/Icons/Home/sec3 img2.png";
import { NavLink } from "react-router-dom";

export function Sec3() {
  const about = [
    {
      id: 0,
      img: img1,
      text1: "Honey created in the laps of nature.",
      text2:
        "Honey is one of the prime ingredients in your everyday food schedule. As a brand, you need a marketing strategy that will help...",
      style: "",
    },
    {
      id: 1,
      img: img2,
      text1: "Does your honey taste bad? Try us!",
      text2:
        "Honey is one of the prime ingredients in your everyday food schedule. As a brand, you need a marketing strategy that will help...",
      style: "row-reverse",
    },
  ];
  return (
    <div id="home-sec3">
      {about.map((item) => {
        return (
          <div
            className="home-sec3-card"
            key={item.id}
            style={{ flexDirection: `${item.style}` }}
          >
            <figure className="home-sec3-img">
              <img src={item.img} alt="" />
            </figure>

            <div className="home-sec3-info">
              <p>{item.text1}</p>
              <p>{item.text2}</p>
              <NavLink to="/about" className="home-sec3-btn">
                <button>Learn More</button>
              </NavLink>
            </div>
          </div>
        );
      })}
    </div>
  );
}
