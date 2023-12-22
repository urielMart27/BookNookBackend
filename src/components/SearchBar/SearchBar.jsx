import React, { useState } from "react";

const SearchBar = ({ OnSearch }) => {
  const [searchInput, setSearchInput] = useState();

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);
    OnSearch(inputValue);
  };

  return (
    <input
      type="text"
      placeholder="Search ..."
      value={searchInput}
      onChange={handleInputChange}
    />
  );
};

export default SearchBar;
