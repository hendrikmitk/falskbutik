import React from 'react';
import { useState } from 'react';
import Button from './Button';

const ProductList = ({ products }) => {
  const [productsToShow, setProductsToShow] = useState(4);

  const showMoreProducts = () => {
    setProductsToShow((productsToShow) => productsToShow + 4);
  };

  const showLessProducts = () => {
    setProductsToShow((productsToShow) => productsToShow - 4);
  };

  return (
    <div className="flex flex-col items-start space-y-2 py-12 ">
      {products.slice(0, productsToShow).map((product) => {
        return (
          <div className="rounded-md bg-blue-light" key={product.id}>
            {product.title}
          </div>
        );
      })}
      <div className="flex space-x-2 py-12">
        <Button
          isActive={productsToShow < products.length}
          onClick={showMoreProducts}
          text="Show more products"
        />
        <Button
          isActive={productsToShow > 4}
          onClick={showLessProducts}
          text="Show less products"
        />
      </div>
    </div>
  );
};

export default ProductList;
