import React from 'react';
import ProductListItemRating from './ProductListItemRating';

const ProductListItem = ({ product }) => {
  return (
    <div className="flex w-full flex-col space-y-2 rounded-lg bg-blue-light px-4 py-6">
      <ProductListItemRating rating={product.rating.rate} />
      <p className="text-lg font-medium">{product.title}</p>
      <p className="text-xs">{product.description}</p>
      <p className="font-mono text-sm">{product.price} USD</p>
    </div>
  );
};

export default ProductListItem;
