import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { acLoading } from "../../../Redux/Loading";

export function MostView() {
  const [mostView, setMostView] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const relodeProduct = useSelector((state) => state.relodeProduct);

  useEffect(() => {
    dispatch(acLoading(true));
    axios(`https://honey.pandashop.uz/product/mostviewed`)
      .then((res) => {
        setMostView(res.data);
        dispatch(acLoading(false));
      })
      .catch((error) => {
        // menga error kelayotgani sababli zagruzka o'chib qolayabdi ekan. pastdagi dispatchni o'chirilsa ko'rinadi
        dispatch(acLoading(false));
        console.log(error);
      });
  }, [dispatch, relodeProduct]);

  return (
    <div id="product-sec1-container">
      {mostView.map((item) => {
        return (
          <div
            key={item.id}
            className="product-sec1-card"
            onClick={() => {
              navigate(`/product_view/${item.id}`);
            }}
          >
            <figure className="product-sec1-figure">
              <img src={item.img[0]} alt="" />
            </figure>

            <div className="product-sec1-texts">
              <p>
                {item.name} {item.weight}
              </p>
              <p>{item.price} so'm</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
