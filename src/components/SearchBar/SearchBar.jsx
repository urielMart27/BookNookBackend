import React from "react";

const SearchBar = ({ searchInput, OnSearch, onChange }) => {
  return (
    <div>
      <input
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
