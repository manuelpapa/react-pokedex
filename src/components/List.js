import React from "react";
import "./List.css";

export default function List({ children }) {
  return <nav className="list">{children}</nav>;
}
