import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

export function Notfound() {
  const navigate = useNavigate();
  return (
    <div id="not_found">
      <p>Page Not Found</p>
      <p>404</p>
      <button
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        Go Back
      </button>
    </div>
  );
}
