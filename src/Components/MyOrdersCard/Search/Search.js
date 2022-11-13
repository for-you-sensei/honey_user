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
      <h1>Buyurtmangizni ko’rish uchun Telefon rqamingizni kiriting</h1>
      <form className="order-sec1-search-form">
        <input
          type="number"
          name="phone"
          placeholder="Telefon raqamingizni kiriting"
          value={search}
          onChange={(e) => {
            dispatch(acSearch(e.target.value.toLowerCase()));
          }}
        />
        <button>
          <SearchIcon />
        </button>
      </form>
    </div>
  );
}
