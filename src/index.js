import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Waga from "./Waga";
import Baga from "./Baga";
import P1 from "./P1";
import P2 from "./P2";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="waga" element={<Waga />}>
            <Route path="p1" element={<P1 />}></Route>
            <Route path="p2" element={<P2 />}></Route>
          </Route>
          <Route path="baga" element={<Baga />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
