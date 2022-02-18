import React, { useState } from 'react';
import ProductListItemRating from './ProductListItemRating';
import ProductListItemFavorite from './ProductListItemFavorite';
import ProductListItemCategory from './ProductListItemCategory';

const ProductListItem = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavoriteButtonHandler = () =>
    setIsFavorite((isFavorite) => !isFavorite);

  return (
    <div className="flex w-full flex-col space-y-2 rounded-lg bg-blue-light px-4 py-6">
      <div className="flex justify-between">
        <ProductListItemRating rating={product.rating.rate} />
        <ProductListItemFavorite
          onClick={toggleFavoriteButtonHandler}
          isFavorite={isFavorite}
        />
      </div>
      <p className="text-lg font-medium">{product.title}</p>
      <div className="flex justify-between">
        <p className="font-mono text-sm">{product.price} USD</p>
        <ProductListItemCategory category={product.category} />
      </div>
    </div>
  );
};

export default ProductListItem;
