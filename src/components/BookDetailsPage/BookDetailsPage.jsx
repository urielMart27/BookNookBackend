import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Book from "../Book/Book";
import ReviewList from "../ReviewList/ReviewList";
import ReviewForm from "../ReviewForm/ReviewForm";

const BookDetailsPage = ({}) => {
  const { bookId } = useParams();
  const [user, token] = useAuth();
  const [bookDetails, setBookDetails] = useState({});
  const [bookInfo, setBookInfo] = useState([]);

  useEffect(() => {
    console.log("Book Details Page ID:", bookId);
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes/${bookId}`
        );
        setBookDetails(response.data.volumeInfo || {});
      } catch (error) {
        console.error("Error fetching book details", error);
      }
    };
    fetchBookDetails();
    fetchBookInfo();
  }, [bookId]);

  const fetchBookInfo = async () => {
    try {
      const response = await axios.get(
        `https://localhost:5001/api/bookdetails/${bookId}`
      );
      console.log(response);
      setBookInfo(response.data);
    } catch (error) {
      console.error("Error fetching reviews", error);
    }
  };

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
      {bookInfo.reviews && <ReviewList reviews={bookInfo.reviews} />}
      <ReviewForm bookId={bookId} fetchBookInfo={fetchBookInfo} token={token} />
    </div>
  );
};

export default BookDetailsPage;
