import React, { useState, useEffect } from "react";
import axios from "axios";
import Book from "../Book/Book";
import ReviewList from "../ReviewList/ReviewList";
import ReviewForm from "../ReviewForm/ReviewForm";

const BookDetailsPage = ({ match }) => {
  const [bookDetails, setBookDetails] = useState({});
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes/${match.params.id}`
        );
        setBookDetails(response.data || {});
      } catch (error) {
        console.error("Error fetching book details", error);
      }
    };

    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `https://localhost:3306/api/${match.params.id}/reviews`
        );
        setReviews(response.data || []);
      } catch (error) {
        console.error("Error fetching reviews", error);
      }
    };

    fetchBookDetails();
    fetchReviews();
  }, [match.params.id]);
  return (
    <div>
      <Book book={bookDetails} />
      <ReviewList reviews={reviews} />
      <ReviewForm bookId={match.params.id} />
    </div>
  );
};

export default BookDetailsPage;
