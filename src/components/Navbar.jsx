import React from "react";
import { Link } from "react-router";

function Navbar() {
  return (
    <div
      style={{
        padding: "10px",
        background: "#eee",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Link to='/'>HOME</Link>
      <Link to='/getTasks'>TASKS</Link>
    </div>
  );
}

export default Navbar;
