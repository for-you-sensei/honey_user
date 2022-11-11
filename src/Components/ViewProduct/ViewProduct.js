import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { acLoading } from "../../Redux/Loading";
import "./ViewProduct.css";

export function ViewProduct() {
  const dispatch = useDispatch();
  const location = useLocation();
  const id = location.pathname.split("/").pop();
  const [productData, setProductData] = useState({});
  const [img, setImg] = useState([]);

  useEffect(() => {
    dispatch(acLoading(true));
    axios
      .get(`https://honey.pandashop.uz/product/view/${id}`, {
        headers: {
          token: "token",
        },
      })
      .then((res) => {
        dispatch(acLoading(false));
        setProductData(res.data);
        setImg(res.data.img);
      })
      .catch((err) => {
        dispatch(acLoading(false));
        console.log(err);
      });
  }, [id, dispatch]);

  return (
    <div id="product-sec1">
      <div className="product-view-container">
        <div className="product-view-img">
          {img.map((item, index) => {
            return (
              <figure key={index} className="product-view-figure">
                <img src={item} alt="" />
              </figure>
            );
          })}
        </div>

        <div className="product-view-about">
          <p className="product-view-about-text">{productData.about}</p>

          <div className="product-view-info">
            <p>Narxi: {productData.price} so'm</p>
            <p>Og'irligi: {productData.weight}</p>
            <p>Xudud: {productData.territory}</p>
          </div>

          <div className="product-view-btns">
            <button>Xarid qilish</button>
            <button>Biz bilan Bog'laning</button>
          </div>
        </div>
      </div>
    </div>
  );
}
