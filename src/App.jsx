import { useEffect, useState } from 'react';
import api from './api/axios';
import ProductList from './components/ProductList';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let data = await api.get('/products').then(({ data }) => data);
    setProducts(data);
    setIsLoading(false);
  };

  return (
    <div className="App text-white">
      <div className="min-h-screen bg-blue-dark px-32 py-20">
        <h2 className="text-4xl font-medium uppercase">Our products</h2>
        {isLoading ? (
          <div className="">Loading ...</div>
        ) : (
          <ProductList products={products} />
        )}
      </div>
    </div>
  );
}

export default App;
