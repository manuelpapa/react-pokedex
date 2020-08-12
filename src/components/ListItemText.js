import React from "react";
import "./ListItemText.css";

export default function ListItemText({ title, subtitle }) {
  return (
    <div>
      <span className="listItemTitle">{title}</span>
      <span className="listItemSubtitle">{subtitle}</span>
    </div>
  );
}
