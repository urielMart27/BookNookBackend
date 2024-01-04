import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Book from "../Book/Book";
import ReviewList from "../ReviewList/ReviewList";
import ReviewForm from "../ReviewForm/ReviewForm";

const BookDetailsPage = ({ match }) => {
  const { params } = match;
  const { id } = params;
  const [bookDetails, setBookDetails] = useState({});
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    console.log("Book Details Page ID:", id);
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes/${id}`
        );
        setBookDetails(response.data.volumeInfo || {});
      } catch (error) {
        console.error("Error fetching book details", error);
      }
    };

    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `https://localhost:3306/api/reviews?bookId=${id}`
        );
        setReviews(response.data || []);
      } catch (error) {
        console.error("Error fetching reviews", error);
      }
    };

    fetchBookDetails();
    fetchReviews();
  }, [id]);

  const { volumeInfo = {} } = bookDetails;
  return (
    <div>
      <h2>{volumeInfo.title}</h2>
      <p>{volumeInfo.authors && volumeInfo.authors.join(", ")}</p>
      <p>{volumeInfo.description}</p>
      <Book
        title={bookDetails.title}
        authors={bookDetails.authors}
        description={bookDetails.description}
      />
      <ReviewList reviews={reviews} />
      <ReviewForm bookId={id} />
    </div>
  );
};

export default BookDetailsPage;
