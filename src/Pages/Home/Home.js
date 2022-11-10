import React from "react";
import { Sec1 } from "../../Components/Homecard/Sec1/Sec1";
import { Sec2 } from "../../Components/Homecard/Sec2/Sec2";
import { Sec3 } from "../../Components/Homecard/Sec3/Sec3";
import { Sec4 } from "../../Components/Homecard/Sec4/Sec4";
import "./Home.css";

export function Home() {
  return (
    <div id="home">
      <Sec1 />
      <Sec2 />
      <Sec3 />
      <Sec4 />
    </div>
  );
}
