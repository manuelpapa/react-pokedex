import React from "react";
import "./ListItemIcon.css";

export default function ListItemIcon({ imgSrc, name }) {
  return <img className="listItemIcon" src={imgSrc} alt={name} />;
}
