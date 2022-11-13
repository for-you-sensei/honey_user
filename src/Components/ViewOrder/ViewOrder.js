import React, { useEffect, useState } from "react";
import "./ViewOrder.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { acLoading } from "../../Redux/Loading";
import { toast } from "react-toastify";
import { acRelodeProduct } from "../../Redux/Product";

export function ViewOrder() {
  const [orderData, setOrderData] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.split("/").pop();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(acLoading(true));
    axios
      .get(`https://honey.pandashop.uz/order/view/${id}`, {
        headers: {
          token: "token",
        },
      })
      .then((res) => {
        dispatch(acLoading(false));
        setOrderData(res.data);
      })
      .catch((err) => {
        dispatch(acLoading(false));
        console.log(err);
      });
  }, [id, dispatch]);

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
    <div id="view_order">
      <div id="view_order_card">
        <div id="view_orer_img_card">
          <figure>
            <img src={orderData.img} alt="" />
          </figure>
        </div>
        <div id="view_order_about_card">
          <p>
            {orderData.name} {orderData.weight}g {orderData.territory}
          </p>
          <p>Buyurtmachi: {orderData.customer} </p>
          <p>Vaqti: {orderData.date} </p>
          <p>Telefon: {orderData.phone}</p>
          <p>Narxi: {orderData.price}sum </p>
          <p>Manzil: {orderData.address} </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            Buyurtma Xolati:
            <figure className="status">
              <img
                src={orderData.status === 1 ? "Tasdiqlangan" : "Tasdiqlanmagan"}
                alt=""
              />
            </figure>
          </div>
          <div id="btns">
            <button
              onClick={(e) => {
                e.preventDefault();
                deletOrder(id);
                navigate(-1);
              }}
            >
              Buyurtmani bekor qilish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
