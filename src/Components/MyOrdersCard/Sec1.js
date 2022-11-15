import React, { useEffect, useState } from "react";
import "./Sec1.css";
import { Search } from "./Search/Search";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { acLoading } from "../../Redux/Loading";
import { acRelodeProduct } from "../../Redux/Product";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function Sec1() {
  const search = useSelector((state) => state.search);
  const [orders, setOrders] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const relodeProduct = useSelector((state) => state.relodeProduct);

  useEffect(() => {
    dispatch(acLoading(true));
    axios(`https://honey.pandashop.uz/order/view`, {
      method: "GET",
      headers: {
        token: "Admin Tokeni",
      },
    })
      .then((res) => {
        dispatch(acLoading(false));
        setOrders(res.data);
      })
      .catch((err) => {
        dispatch(acLoading(false));
        console.log(err.response.data.message);
      });
  }, [setOrders, relodeProduct, dispatch]);

  function deletOrder(id) {
    dispatch(acLoading(true));
    axios(`https://honey.pandashop.uz/order/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: "Admin tokeni",
        id: id,
      },
    })
      .then((res) => {
        toast.success(res.data.message);
        dispatch(acLoading(false));
        dispatch(acRelodeProduct());
      })
      .catch((err) => {
        dispatch(acLoading(false));
        dispatch(acRelodeProduct());
        toast.error(err.response.data.message);
      });
  }

  return (
    <div id="order-sec1">
      <Search />

      <p className="order-main-texts">Sizning Buyurtmangiz</p>

      <div className="order-sec1-container">
        {orders
          .filter((item) => item.phone.includes(search))
          .map((item) => {
            return (
              <div key={item.id} className="order-sec1-card">
                <figure className="order-sec1-card-figure">
                  <img src={item.img} alt="" />
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
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        deletOrder(item.id);
                      }}
                    >
                      Bekor qilish
                    </button>
                    <button
                      onClick={() => {
                        navigate(`/order_view/${item.id}`);
                      }}
                    >
                      Info
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
