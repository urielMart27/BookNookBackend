import React, { useState } from "react";
import axios from "axios";

const ReviewForm = ({ bookId }) => {
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

      await axios.post("https://localhost:3306/api/reviews", {
        bookId,
        comment,
        rating,
      });

      console.log("Review Submitted");
    } catch (error) {
      console.error("Error sibmitting review", error);
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
