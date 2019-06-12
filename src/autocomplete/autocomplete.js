import React from "react";
import DownShift from "downshift";
import Input from "./components/input";
import List from "./components/list";
import data from "../swapi";

const AutoComplete = () => {
  const itemToString = item => (item ? item.name : "");

  return (
    <div>
      <DownShift itemToString={itemToString}>
        {({
          getInputProps,
          getMenuProps,
          getItemProps,
          isOpen,
          highlightedIndex
        }) => (
          <div>
            <Input {...getInputProps()} />
            {isOpen && (
              <List
                getMenuProps={getMenuProps}
                getItemProps={getItemProps}
                highlightedIndex={highlightedIndex}
                data={data.results}
              />
            )}
          </div>
        )}
      </DownShift>
    </div>
  );
};

export default AutoComplete;
