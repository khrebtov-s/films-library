import React from "react";
import "./StarRating.css";

const StarRating = ({ countStar }) => {
  const numberOfStars = Array.from(Array(10), (_, i) => i + 1);
  return (
    <div>
      {numberOfStars.map((star, idx) => (
        <span
          key={idx}
          className={
            star <= Math.round(countStar) ? "fa fa-star" : "fa fa-star-o"
          }
        ></span>
      ))}
    </div>
  );
};

export default StarRating;
