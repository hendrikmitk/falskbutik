import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './pages/Products';

const App = () => {
  return (
    <div className="App font-spartan text-white">
      <Header />
      <div className="min-h-screen bg-blue-dark px-32 pt-28">
        <Products />
      </div>
      <Footer />
    </div>
  );
};

export default App;
