import { useEffect, useState } from 'react';
import api from './api/axios';
import shuffle from './functions/shuffle';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';

function App() {
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
    <div className="App font-spartan text-white">
      <Header />
      <div className="min-h-screen bg-blue-dark px-32 pt-28">
        <h2 className="text-4xl font-medium uppercase">Our products</h2>
        {isLoading ? (
          <div className="flex items-center justify-center pt-32 text-2xl">
            Loading ...
          </div>
        ) : (
          <ProductList products={products} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
