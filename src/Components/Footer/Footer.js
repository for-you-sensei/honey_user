import React from "react";
import "./Footer.css";
import logo from "../../Assets/Icons/Footer/honey logo black.svg";
import icon1 from "../../Assets/Icons/Footer/Icon 1.svg";
import icon2 from "../../Assets/Icons/Footer/Icon 2.svg";
import icon3 from "../../Assets/Icons/Footer/Icon 3.svg";
import icon4 from "../../Assets/Icons/Footer/Icon 4.svg";
import google from "../../Assets/Icons/Footer/google play.png";
import app from "../../Assets/Icons/Footer/app store.png";
import { useNavigate } from "react-router-dom";

export function Footer() {
  const navigate = useNavigate();
  const icons = [
    {
      id: 0,
      icon: icon1,
    },
    {
      id: 1,
      icon: icon2,
    },
    {
      id: 2,
      icon: icon3,
    },
    {
      id: 3,
      icon: icon4,
    },
  ];

  const markets = [
    {
      id: 0,
      icon: google,
    },
    {
      id: 1,
      icon: app,
    },
  ];

  return (
    <div id="footer">
      <div className="footer-about">
        <figure
          className="footer-logo"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          <img src={logo} alt="" />
        </figure>

        <p>
          Honey is one of the prime ingredients in your everyday food schedule.
        </p>
      </div>

      <div className="footer-icon-container">
        {icons.map((item) => {
          return (
            <figure key={item.id} className="footer-icons-figure">
              <img src={item.icon} alt="" />
            </figure>
          );
        })}
      </div>

      <div className="footer-markets-container">
        {markets.map((item) => {
          return (
            <figure key={item.id} className="footer-markets-figure">
              <img src={item.icon} alt="" />
            </figure>
          );
        })}
      </div>
    </div>
  );
}
