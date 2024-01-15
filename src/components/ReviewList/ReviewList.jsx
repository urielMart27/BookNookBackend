import React from "react";

const ReviewList = ({ reviews }) => {
  return (
    <div>
      {reviews.map((review) => (
        <div key={review.id}>
          <p>{review.user}</p>
          <p>{review.text}</p>
          <p>{review.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
