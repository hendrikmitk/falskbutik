import React from 'react';
import StarIcon from './StarIcon';

const ProductListItemRating = ({ rating }) => {
  let stars = [];

  for (let index = 0; index < Math.round(rating); index++) {
    stars.push(false);
  }

  return (
    <div className="flex text-grey-dark">
      {stars.map((star, index) => (
        <StarIcon half={star} key={index} />
      ))}
    </div>
  );
};

export default ProductListItemRating;