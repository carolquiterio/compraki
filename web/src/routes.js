import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import SaleForm from "./pages/SaleForm";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/form-sale" component={SaleForm} />
    </BrowserRouter>
  );
}
