import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import AutoComplete from "./autocomplete";

function App() {
  return (
    <div className="App">
      <AutoComplete />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
