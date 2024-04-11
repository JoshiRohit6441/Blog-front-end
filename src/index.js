import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import Routing from "./utils/Routing";
import "./assets/css/index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <NavBar />
      <Routing />
    </BrowserRouter>
  </>
);
