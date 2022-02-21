import React, { useState } from 'react';
import ProductListItemRating from '@components/app/Products/ProductListItemRating';
import ProductListItemFavorite from '@components/app/Products/ProductListItemFavorite';
import ProductListItemCategory from '@components/app/Products/ProductListItemCategory';
import ProductListItemDetail from '@components/app/Products/ProductListItemDetail';

const ProductListItem = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleFavorite = () => setIsFavorite((isFavorite) => !isFavorite);

  const toggleModal = () => setIsModalOpen((isModalOpen) => !isModalOpen);

  return (
    <div className="bg-blue-light flex w-full flex-col space-y-2 rounded-lg px-4 py-6">
      <div className="flex justify-between">
        <ProductListItemRating rating={product.rating.rate} />
        <ProductListItemFavorite
          onClick={toggleFavorite}
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
          toggleFavorite={toggleFavorite}
          toggleModal={toggleModal}
        />
      )}
    </div>
  );
};

export default ProductListItem;
