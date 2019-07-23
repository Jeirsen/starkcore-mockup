import React from "react";
import Checkbox from "react-simple-checkbox";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="ui segment search">
      <div className="ui grid">
        <div className="left floated five wide column">
          <Checkbox
            id="search"
            color={{
              backgroundColor: "#ee8c39",
              borderColor: "#ee8c39",
              uncheckedBorderColor: "#ee8c39"
            }}
            size={4}
            checked
          />
        </div>
        <div className="right floated five wide column">
          <div className="ui icon input fluid">
            <input type="text" placeholder="Search..." />
            <i aria-hidden="true" className="search icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
