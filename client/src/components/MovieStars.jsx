import React from "react";

function MovieStars({ movieName, rating, id }) {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <input
        key={i}
        disabled
        type="radio"
        name={movieName + id}
        className="mask mask-star-2 bg-orange-400"
        checked={rating >= i * 25}
      />
    );
  }
  return stars;
}

export default MovieStars;
