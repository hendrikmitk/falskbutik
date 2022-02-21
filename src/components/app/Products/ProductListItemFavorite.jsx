import React from 'react';
import HeartIcon from '../../common/icons/HeartIcon';

const ProductListItemFavorite = ({ onClick, isFavorite }) => {
  return (
    <button
      onClick={onClick}
      className={`transition duration-500 ease-in-out	${
        isFavorite ? 'text-red' : 'text-grey-dark'
      }`}
    >
      <HeartIcon />
    </button>
  );
};

export default ProductListItemFavorite;
