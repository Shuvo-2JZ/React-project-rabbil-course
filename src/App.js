import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./router/AppRoute";
export default function App() {
  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  );
}
