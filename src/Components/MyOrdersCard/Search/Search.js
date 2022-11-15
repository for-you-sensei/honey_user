import React from "react";
import "../Sec1.css";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { acSearch } from "../../../Redux/Search";

export function Search() {
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();
  return (
    <div className="order-sec1-search">
      <p className="order-main-texts">Buyurtmangizni ko’rish uchun Telefon rqamingizni kiriting</p>
      <form className="order-sec1-search-form">
        <input
          type="number"
          name="phone"
          placeholder="Telefon raqamingizni kiriting"
          autoComplete="off"
          value={search}
          onChange={(e) => {
            dispatch(acSearch(e.target.value));
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(acSearch(e.target.value));
          }}
        >
          <SearchIcon />
        </button>
      </form>
    </div>
  );
}
