import React, { useState } from 'react';
import ProductListItemRating from './ProductListItemRating';
import ProductListItemFavorite from './ProductListItemFavorite';
import ProductListItemCategory from './ProductListItemCategory';
import ProductListItemDetail from './ProductListItemDetail';

const ProductListItem = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleFavoriteButtonHandler = () =>
    setIsFavorite((isFavorite) => !isFavorite);

  const toggleModal = () => setIsModalOpen((isModalOpen) => !isModalOpen);

  return (
    <div className="bg-blue-light flex w-full flex-col space-y-2 rounded-lg px-4 py-6">
      <div className="flex justify-between">
        <ProductListItemRating rating={product.rating.rate} />
        <ProductListItemFavorite
          onClick={toggleFavoriteButtonHandler}
          isFavorite={isFavorite}
        />
      </div>
      <p onClick={toggleModal} className="cursor-pointer text-lg font-medium">
        {product.title}
      </p>
      <div className="flex justify-between">
        <p className="font-mono text-sm">{product.price} USD</p>
        <ProductListItemCategory category={product.category} />
      </div>
      {isModalOpen && (
        <ProductListItemDetail
          isFavorite={isFavorite}
          product={product}
          toggleFavoriteButtonHandler={toggleFavoriteButtonHandler}
          toggleModal={toggleModal}
        />
      )}
    </div>
  );
};

export default ProductListItem;
