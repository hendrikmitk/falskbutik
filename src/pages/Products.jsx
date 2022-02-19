import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import api from '../api/axios';
import shuffle from '../functions/shuffle';

const Products = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let data = await api.get('/products').then(({ data }) => data);
    setProducts(shuffle(data));
    setIsLoading(false);
  };

  return (
    <main>
      <h2 className="text-4xl font-medium uppercase">Our products</h2>
      {isLoading ? (
        <div className="flex items-center justify-center pt-32 text-2xl">
          Loading ...
        </div>
      ) : (
        <ProductList products={products} />
      )}
    </main>
  );
};

export default Products;
