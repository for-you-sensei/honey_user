import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { acLoading } from "../Redux/Loading";
import { acOrder } from "../Redux/Order";
import { acProduct } from "../Redux/Product";

export function Config() {
  const dispatch = useDispatch();

  const relodeProduct = useSelector((state) => state.relodeProduct);

  useEffect(() => {
    dispatch(acLoading(true));
    axios("https://honey.pandashop.uz/product/view", {
      method: "GET",
      headers: {
        token: "",
      },
    })
      .then((res) => {
        dispatch(acProduct(res.data));
        dispatch(acLoading(false));
      })
      .catch((err) => {
        console.log(err);
        dispatch(acLoading(false));
      });
  }, [dispatch, relodeProduct]);

  useEffect(() => {
    dispatch(acLoading(true));
    axios("https://honey.pandashop.uz/order/view", {
      method: "GET",
      headers: {
        token: "",
      },
    })
      .then((res) => {
        dispatch(acOrder(res.data));
        dispatch(acLoading(false));
      })
      .catch((err) => {
        console.log(err.response.data.message);
        dispatch(acLoading(false));
      });
  }, [dispatch, relodeProduct]);

  return null;
}
