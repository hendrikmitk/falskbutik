import { useEffect, useState } from 'react';
import api from './api/axios';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let data = await api.get('/products').then(({ data }) => data);
    setProducts(data);
  };

  return (
    <div className="App">
      <ul>
        {products.map((product, index) => {
          return <li key={product.id}>{product.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
