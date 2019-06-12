import React from "react";

const Item = ({ getItemProps, item, index, highlightedIndex }) => {
  return (
    <li
      {...getItemProps({ item })}
      style={
        index === highlightedIndex ? { backgroundColor: "lightgray" } : null
      }
    >
      {item.name}
    </li>
  );
};

export default Item;
