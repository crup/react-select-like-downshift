import React from "react";
import "./item.css";

const getClass = (index, highlightedIndex) => {
  const styles = ["item"];
  index === highlightedIndex && styles.push("active");
  return styles.join(" ");
};

const Item = ({ getItemProps, item, index, highlightedIndex }) => {
  return (
    <li
      {...getItemProps({ item })}
      className={getClass(index, highlightedIndex)}
    >
      {item.name}
    </li>
  );
};

export default Item;
