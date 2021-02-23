import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Link to="/" style={{ color: "black", textDecoration: "none" }}>
        <h2
          style={{
            margin: "20px",
            backgroundColor: "tomato",
            padding: "10px",
            width: "300px",
            fontFamily: "cursive",
            textAlign: "center",
            borderRadius: "5px",
          }}
        >
          My Book Store
        </h2>
      </Link>
    </>
  );
}
