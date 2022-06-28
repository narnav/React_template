import React from "react";
import { Outlet, Link } from "react-router-dom";
const Waga = () => {
  return (
    <div style={{ padding: "100px", backgroundColor: "pink" }}>
      Waga
      <Link to="p1">p1</Link> | <Link to="p2">p2</Link> |<hr></hr>
      <Outlet />
    </div>
  );
};

export default Waga;
