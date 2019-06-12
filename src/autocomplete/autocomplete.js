import React, { useState } from "react";
import DownShift from "downshift";
import Input from "./components/input";
import List from "./components/list";
import data from "../swapi";
import searchResults from "./search-results";

const AutoComplete = () => {
  const itemToString = item => (item ? item.name : "");
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div>
      <DownShift itemToString={itemToString}>
        {({
          getInputProps,
          getMenuProps,
          getItemProps,
          highlightedIndex,
          inputValue,
          isOpen
        }) => (
          <div>
            <Input
              getInputProps={getInputProps}
              isOpen={openMenu || isOpen}
              setOpenMenu={setOpenMenu}
            />
            {(isOpen || openMenu) && (
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
