import React, { memo } from "react";
import "./Loading.css";
import { useSelector } from "react-redux";

function Loading() {
  const loading = useSelector((state) => state.loading);

  return (
    <div
      id="loading"
      style={loading ? { display: "flex" } : { display: "none" }}
    >
      <span className="loader"></span>
    </div>
  );
}

export default memo(Loading);
