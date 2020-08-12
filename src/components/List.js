import React from "react";
import "./List.css";

export default function List(props) {
  return <nav className="list">{props.children}</nav>;
}
