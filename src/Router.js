import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./Components/Footer/Footer";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Pages/Home/Home";
import { About } from "./Pages/About/About";
import { Product } from "./Pages/Product/Product";
import { Notfound } from "./Pages/NotFound/NotFound";

export function Router() {
  return (
    <div id="router">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our_product" element={<Product />} />
        <Route path="*" element={<Notfound />} />
      </Routes>

      <Footer />
    </div>
  );
}
