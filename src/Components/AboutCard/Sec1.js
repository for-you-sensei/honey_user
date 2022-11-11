import React from "react";
import "./Sec1.css";
import img1 from "../../Assets/Icons/About/Sec1-img1.png";
import img2 from "../../Assets/Icons/About/Sec1-img2.png";
import img3 from "../../Assets/Icons/About/Sec1-img3.png";
import img4 from "../../Assets/Icons/About/Sec1-img4.png";

export function Sec1() {
  const about = [
    {
      id: 0,
      img: img1,
      idname: "",
    },
    {
      id: 1,
      img: img2,
      idname: "about-problems",
    },
    {
      id: 2,
      img: img3,
      idname: "",
    },
    {
      id: 3,
      img: img4,
      idname: "about-problems",
    },
  ];
  return (
    <div id="about-sec1">
      {about.map((item) => {
        return (
          <div className="about-sec1-card" key={item.id} id={item.idname}>
            <figure className="about-card-img">
              <img src={item.img} alt="" />
            </figure>

            <div className="about-texts">
              <p>What is Lorem Ipsum?</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker includin g versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
