import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";
import ResultsList from "../../components/ResultsList/ResultsList";

const SearchPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchBooks = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchInput}`
      );
      setSearchResults(response.data.items || []);
    } catch (error) {
      console.error("Error fetching search results", error);
    }
  };

  useEffect(() => {
    searchBooks();
  }, [searchInput]);

  const handleSearch = () => {
    if (searchInput.trim() !== "") {
      searchBooks();
    }
  };

  return (
    <div>
      <SearchBar
        searchInput={searchInput}
        onSearch={handleSearch}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      <ResultsList results={searchResults} />
    </div>
  );
};

export default SearchPage;
