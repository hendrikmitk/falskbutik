import React from 'react';
import HeartIcon from './HeartIcon';

const ProductListItemFavorite = ({ onClick, isFavorite }) => {
  return (
    <button
      onClick={onClick}
      className={`transition duration-200 ease-in-out	${
        isFavorite ? 'text-red' : 'text-grey-dark'
      }`}
    >
      <HeartIcon />
    </button>
  );
};

export default ProductListItemFavorite;
