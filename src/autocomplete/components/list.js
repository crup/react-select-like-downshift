import React from "react";
import Item from "./item";
import "./list.css";

const List = ({ data, getMenuProps, getItemProps, highlightedIndex }) => {
  return (
    <ul className="list" {...getMenuProps()}>
      {data.map((item, index) => {
        return (
          <Item
            key={index}
            getItemProps={getItemProps}
            highlightedIndex={highlightedIndex}
            index={index}
            item={item}
          />
        );
      })}
    </ul>
  );
};

export default List;
