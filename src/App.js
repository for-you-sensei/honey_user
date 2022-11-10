import { useEffect } from "react";
import "./Assets/Css/Global.css";
import { Router } from "./Router";
import axios from "axios";

export function App() {
  // const api = process.env.REACT_APP_API;

  useEffect(() => {
    axios("https://honey.pandashop.uz/guest/add")
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Router />
    </>
  );
}
