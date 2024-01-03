import React from "react";

const Book = ({ book }) => {
  return (
    <div>
      <h3>{book.volumeInfo.title}</h3>
    </div>
  );
};

export default Book;
