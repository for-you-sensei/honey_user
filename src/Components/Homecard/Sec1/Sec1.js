import React from "react";
import { useNavigate } from "react-router-dom";
import homeIntro from "../../../Assets/Icons/Home/home intro.svg";
import "./Sec1.css";

export function Sec1() {
  const navigate = useNavigate();

  return (
    <div id="home-sec1">
      <figure className="home-sec1-intro">
        <img src={homeIntro} alt="" />
      </figure>

      <div className="home-sec1-intro-btns">
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate("/our_product");
          }}
        >
          Buy Now
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate("/about");
          }}
        >
          Learn More
        </button>
      </div>
    </div>
  );
}
