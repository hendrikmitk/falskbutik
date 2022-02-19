import React from 'react';
import CloseIcon from './CloseIcon';
import ProductListItemCategory from './ProductListItemCategory';
import ProductListItemFavorite from './ProductListItemFavorite';
import ProductListItemRating from './ProductListItemRating';

const ProductListItemDetail = ({
  isFavorite,
  product,
  toggleFavorite,
  toggleModal,
}) => {
  return (
    <div className="bg-blue-dark/90 fixed inset-0 h-screen select-none overflow-y-hidden">
      <div className="bg-blue-light mx-auto mt-40 flex w-2/3 select-text flex-col rounded-lg px-4 py-6">
        <div
          onClick={toggleModal}
          className="text-orange flex cursor-pointer justify-end"
        >
          <div className="transition-all duration-200 hover:rotate-90">
            <CloseIcon />
          </div>
        </div>
        <div className="flex flex-col space-y-6 px-1 pb-6">
          <ProductListItemRating rating={product.rating.rate} />
          <p className="text-lg font-medium">{product.title}</p>
          <p className="text-sm">{product.description}</p>
          <div className="flex justify-between">
            <p className="font-mono text-sm">{product.price} USD</p>
            <ProductListItemCategory category={product.category} />
            <ProductListItemFavorite
              onClick={toggleFavorite}
              isFavorite={isFavorite}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListItemDetail;
