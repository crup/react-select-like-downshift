import React from "react";
import Item from "./item";

const List = ({ data, getMenuProps, getItemProps, highlightedIndex }) => {
  return (
    <ul {...getMenuProps()}>
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
