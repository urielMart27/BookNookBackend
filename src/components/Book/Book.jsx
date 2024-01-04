import React from "react";

const Book = ({ title, authors, description }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>Author: {authors && authors.join(",")}</p>
      <p>{description}</p>
    </div>
  );
};

export default Book;
