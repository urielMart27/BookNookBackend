import React from "react";
import { Link } from "react-router-dom";
import Book from "../Book/Book";

const FavoritesList = ({ favorites }) => {
  return (
    <div>
      {favorites.map((favorite) => (
        <div key={favorite.id}>
          <Link to={`/books/${favorite.bookId}`}>
            <img src={favorite.thumbnailUrl} alt="" />
            <p>{favorite.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
