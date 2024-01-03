import React from "react";
import Book from "../Book/Book";

const FavoritesList = ({ favorites }) => {
  return (
    <div>
      {favorites.map((favorite) => (
        <Book key={favorite.id} book={favorite} />
      ))}
    </div>
  );
};

export default FavoritesList;
