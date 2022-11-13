import React, { useEffect, useState } from "react";
import "./Sec1.css";
import { Search } from "./Search/Search";
import { useSelector } from "react-redux";
import axios from "axios";

export function Sec1() {
  const search = useSelector((state) => state.search);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios(`https://honey.pandashop.uz/order/view`, {
      method: "GET",
      headers: {
        token: "Admin Tokeni",
      },
    })
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  }, [setOrders]);

  return (
    <div id="order-sec1">
      <Search />

      <h1>Sizning Buyurtmangiz</h1>

      <div className="order-sec1-container">
        {orders
          .filter((item) => item.phone.includes(search))
          .map((item) => {
            return (
              <div key={item.id} className="order-sec1-card">
                <figure className="order-sec1-card-figure">
                  <img src={item.img[0]} alt="" />
                </figure>

                <div className="order-sec1-card-texts">
                  <p>
                    {item.name} {item.weight}
                  </p>
                  <p>phone: {item.phone}</p>
                  <p>{item.price} so'm</p>
                  <p>
                    Status: {item.status ? "Tasdiqlangan" : "Tasdiqlanmagan"}
                  </p>
                </div>

                <div className="order-sec1-card-texts">
                  <p>{item.date.split("-").join(".")}</p>
                  <p>3 kunda yetkazib beriladi</p>
                  <div className="order-sec1-card-btns">
                    <button>Bekor qilish</button>
                    <button>Info</button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
