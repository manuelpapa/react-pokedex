import React from "react";
import "./ListItem.css";

export default function ListItem({ href, children, target }) {
  return (
    <a className="listItem" href={href}>
      {children}
    </a>
  );
}

// import React from "react";
// import "./ListItem.css";

// export default function ListItem(props) {
//   return (
//     <a className="listItem" href={props.href}>
//       {props.children}
//     </a>
//   );
// }
