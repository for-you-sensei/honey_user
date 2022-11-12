import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../Assets/Icons/honey logo.svg";
import blackLogo from "../../Assets/Icons/Footer/honey logo black.svg";
import menu from "../../Assets/Icons/menu.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Drawer, List, ListItemButton } from "@mui/material";

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const links = [
    {
      id: 0,
      name: "Home",
      link: "/",
    },
    {
      id: 1,
      name: "About",
      link: "/about",
    },
    {
      id: 2,
      name: `Our${" "}Product`,
      link: "/our_product",
    },
    {
      id: 3,
      name: `My${" "}Orders`,
      link: "/my_orders",
    },
  ];

  return (
    <div
      id="navbar"
      style={location.pathname !== "/" ? { background: "#FFA638" } : {}}
    >
      <figure
        className="nav-logo"
        onClick={(e) => {
          e.preventDefault();
          navigate("/");
        }}
      >
        <img src={location.pathname !== "/" ? blackLogo : logo} alt="" />
      </figure>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/our_product">Our Product</NavLink>
        <NavLink to="/my_orders">My Orders</NavLink>
      </div>

      <figure
        className="nav-menu"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <img src={menu} alt="" />
      </figure>

      <Drawer
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        anchor="right"
      >
        <List id="List" className="drawer">
          <figure
            className="nav-logo"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
              setOpen(false);
            }}
          >
            <img src={logo} alt="" />
          </figure>

          {links.map((item) => {
            return (
              <NavLink to={item.link} key={item.id}>
                <ListItemButton
                  onClick={() => {
                    setOpen(false);
                  }}
                  className="drawer-text"
                >
                  <p>{item.name}</p>
                </ListItemButton>
              </NavLink>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
}
