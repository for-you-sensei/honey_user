import React from "react";
import "./Sec2.css";
import sponsor1 from "../../../Assets/Icons/Home/home sponsor 1.png";
import sponsor2 from "../../../Assets/Icons/Home/home sponsor 2.svg";
import sponsor3 from "../../../Assets/Icons/Home/home sponsor 3.svg";
import sponsor4 from "../../../Assets/Icons/Home/home sponsor 4.png";

export function Sec2() {
  const shops = [
    {
      id: 0,
      icon: sponsor1,
    },
    {
      id: 1,
      icon: sponsor2,
    },
    {
      id: 2,
      icon: sponsor3,
    },
    {
      id: 3,
      icon: sponsor4,
    },
  ];

  return (
    <div id="home-sec2">
      <p>Our Trusted Shops</p>
      <div className="home-sec2-shops">
        {shops.map((item) => {
          return (
            <figure key={item.id} className="home-sec2-figure">
              <img src={item.icon} alt="" />
            </figure>
          );
        })}
      </div>
    </div>
  );
}
