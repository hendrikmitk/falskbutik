import { useEffect, useState } from 'react';
import api from './api/axios';
import Button from './components/Button';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [productsToShow, setProductsToShow] = useState(4);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let data = await api.get('/products').then(({ data }) => data);
    setProducts(data);
    setIsLoading(false);
  };

  const showMoreProducts = () => {
    setProductsToShow((productsToShow) => productsToShow + 4);
  };

  const showLessProducts = () => {
    setProductsToShow((productsToShow) => productsToShow - 4);
  };

  return (
    <div className="App text-white">
      <div className="min-h-screen bg-blue-dark px-32 py-20">
        <h2 className="text-4xl font-medium uppercase">Our products</h2>
        {isLoading ? (
          <div className="">Loading ...</div>
        ) : (
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
        )}
      </div>
    </div>
  );
}

export default App;
