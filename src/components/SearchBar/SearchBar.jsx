import React from "react";

const SearchBar = ({ searchInput, OnSearch, onChange }) => {
  return (
    <div className="search-bar">
      <input
        className="search-bar"
        type="text"
        placeholder="Search ..."
        value={searchInput}
        onChange={onChange}
      />
      <button onClick={OnSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
