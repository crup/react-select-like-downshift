import React from "react";
import DownShift from "downshift";
import Input from "./components/input";
import List from "./components/list";
import data from "../swapi";
import searchResults from "./search-results";

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
          highlightedIndex,
          inputValue
        }) => (
          <div>
            <Input getInputProps={getInputProps} isOpen={isOpen} />
            {isOpen && (
              <List
                getMenuProps={getMenuProps}
                getItemProps={getItemProps}
                highlightedIndex={highlightedIndex}
                data={searchResults(inputValue, data.results)}
              />
            )}
          </div>
        )}
      </DownShift>
    </div>
  );
};

export default AutoComplete;
