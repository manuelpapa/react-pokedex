import React from "react";
import "./ListItem.css";

export default function ListItem({ href, children }) {
  return (
    <a className="listItem" href={href}>
      {children}
    </a>
  );
}
