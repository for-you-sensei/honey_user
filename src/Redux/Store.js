import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reLoading } from "./Loading";
import { reOrder } from "./Order";
import { reProduct, reRelodeProduct } from "./Product";
import { reSearch } from "./Search";

const reducer = combineReducers({
  loading: reLoading,
  search: reSearch,
  relodeProduct: reRelodeProduct,
  product: reProduct,
  order: reOrder,
});

export const Store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});
