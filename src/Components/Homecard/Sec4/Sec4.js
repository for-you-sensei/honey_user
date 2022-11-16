import React from "react";
import "./Sec4.css";
import { NavLink, useNavigate } from "react-router-dom";
import img1 from "../../../Assets/Icons/Home/sec4 img1.png";
import img2 from "../../../Assets/Icons/Home/sec4 img2.png";

export function Sec4() {
  const navigate = useNavigate();

  const ourProducts = [
    {
      id: 0,
      text1: "Eucalyptus Honey	",
      text2:
        "It has the scent of lavender, medium sweetness lavender scented, and has a medium amber color.",
      img: img1,
    },
    {
      id: 1,
      text1: "Basswood Honey",
      text2:
        "Basswood is a tree native and abundant in Wisconsin, which is also known as the Linden tree.",
      img: img2,
    },
  ];

  return (
    <div id="home-sec4">
      <div className="home-sec4-container">
        <p className="home-sec4-ourProduct">Our Product</p>

        <NavLink to="/our_product">See all</NavLink>
      </div>

      <div className="home-sec4-container-2">
        {ourProducts.map((item) => {
          return (
            <div key={item.id} className="home-sec4-card">
              <div className="home-sec4-card-info">
                <p>{item.text1}</p>
                <p>{item.text2}</p>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("./our_product");
                    window.scrollTo(0, 0);
                  }}
                >
                  Buy Now
                </button>
              </div>

              <figure className="home-sec4-card-img">
                <img src={item.img} alt="" />
              </figure>
            </div>
          );
        })}
      </div>
    </div>
  );
}
