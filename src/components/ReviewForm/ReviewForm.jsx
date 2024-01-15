import React, { useState } from "react";
import axios from "axios";

const ReviewForm = ({ bookId, fetchBookInfo, token }) => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");
  const [submiting, setSubmiting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comment || !rating) {
      return;
    }

    try {
      setSubmiting(true);

      const response = await axios.post(
        "https://localhost:5001/api/reviews",
        {
          BookId: bookId,
          Text: comment,
          Rating: rating,
        },
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      console.log(response);

      if (response.status == 201) {
        fetchBookInfo();
      }
    } catch (error) {
      console.error("Error submitting review", error);
    } finally {
      setSubmiting(false);
    }
  };

  return (
    <div>
      <h4>Review</h4>
      <form onSubmit={handleSubmit}>
        <label>
          Comment:
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </label>
        <label>
          Rating:
          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </label>
        <button type="submit" disabled={submiting}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
