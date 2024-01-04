import React from "react";
import { Link } from "react-router-dom";
import "./ResultsList.css";

const ResultsList = ({ results }) => {
  return (
    <ul>
      {results.map((book) => (
        <li key={book.id}>
          <Link to={`/books/${book.id}`}>{book.volumeInfo.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ResultsList;
