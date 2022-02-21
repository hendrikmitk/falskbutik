import React from 'react';
import StarIcon from '../../common/icons/StarIcon';

const ProductListItemRating = ({ rating }) => {
  let stars = [];

  for (let index = 0; index < Math.round(rating); index++) {
    stars.push(false);
  }

  return (
    <div className="text-green-dark flex">
      {stars.map((star, index) => (
        <StarIcon half={star} key={index} />
      ))}
    </div>
  );
};

export default ProductListItemRating;
