import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./Components/Footer/Footer";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Pages/Home/Home";
import { About } from "./Pages/About/About";
import { Product } from "./Pages/Product/Product";
import { Notfound } from "./Pages/NotFound/NotFound";
import { ViewProduct } from "./Components/ViewProduct/ViewProduct";
import Loading from "./Components/Loading.js/Loading";
import { Orders } from "./Pages/MyOrders/MyOrders";
import { MostView } from "./Components/ViewProduct/MostViewed/MostView";
import { ViewOrder } from "./Components/ViewOrder/ViewOrder";
import { Config } from "./Config/Config";

export function Router() {
  return (
    <div id="router">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our_product" element={<Product />} />
        <Route path="/product_view/:id" element={<ViewProduct />} />
        <Route path="/my_orders" element={<Orders />} />
        <Route path="/order_view/:id" element={<ViewOrder />} />

        {/* For Test */}
        <Route path="/mostview" element={<MostView />} />

        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
      <Loading />
      <Config />
    </div>
  );
}
