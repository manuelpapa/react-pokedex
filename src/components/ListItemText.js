import React from "react";
import "./ListItemText.css";

export default function ListItemText(props) {
  return (
    <div>
      <span className="listItemTitle">{props.title}</span>
      <span className="listItemSubtitle">{props.subtitle}</span>
    </div>
  );
}
