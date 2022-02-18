import React, { useState } from 'react';
import Button from './Button';
import ProductListItem from './ProductListItem';

const ProductList = ({ products }) => {
  const [productsToShow, setProductsToShow] = useState(4);

  const showMoreProducts = () => {
    setProductsToShow((productsToShow) => productsToShow + 4);
  };

  const showLessProducts = () => {
    setProductsToShow((productsToShow) => productsToShow - 4);
  };

  return (
    <div className="mx-auto flex w-2/3 flex-col items-start space-y-2 py-12">
      {products.slice(0, productsToShow).map((product) => {
        return <ProductListItem product={product} key={product.id} />;
      })}
      <div className="mx-auto flex space-x-4 pt-10">
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
