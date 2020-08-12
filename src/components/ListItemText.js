import React from "react";
import "./ListItemText.css";

export default function ListItemText({ primary, secondary }) {
  return (
    <div className="listItemText">
      <div className="listItemText__primary">{primary}</div>
      <div className="listItemText__secondary">{secondary}</div>
    </div>
  );
}
