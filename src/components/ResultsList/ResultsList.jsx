import React from "react";

const ResultsList = ({ results }) => {
  return (
    <ul>
      {results.map((book) => (
        <li key={book.id}>{book.volumeInfo.title}</li>
      ))}
    </ul>
  );
};

export default ResultsList;
