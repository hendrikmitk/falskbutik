import { useEffect, useState } from 'react';
import api from './api/axios';

function App() {
  const [products, setProducts] = useState([]);
  const [productsToShow, setProductsToShow] = useState(4);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let data = await api.get('/products').then(({ data }) => data);
    setProducts(data);
  };

  const showMoreProducts = () => {
    setProductsToShow((productsToShow) => productsToShow + 4);
  };

  const showLessProducts = () => {
    setProductsToShow((productsToShow) => productsToShow - 4);
  };

  return (
    <div className="App">
      <ul>
        {products.slice(0, productsToShow).map((product) => {
          return <li key={product.id}>{product.title}</li>;
        })}
      </ul>
      <div className="flex space-x-2">
        <button
          className={`px-4 py-2 rounded-full ${
            productsToShow >= products.length
              ? 'bg-sky-300 opacity-50'
              : 'bg-sky-500'
          }`}
          onClick={showMoreProducts}
          disabled={productsToShow >= products.length}
        >
          Show more products
        </button>
        <button
          className={`px-4 py-2 rounded-full ${
            productsToShow <= 4 ? 'bg-sky-300 opacity-50' : 'bg-sky-500'
          }`}
          onClick={showLessProducts}
          disabled={productsToShow <= 4}
        >
          Show less products
        </button>
      </div>
    </div>
  );
}

export default App;
