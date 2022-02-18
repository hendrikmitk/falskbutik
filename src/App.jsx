import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import Products from './pages/Products';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App font-spartan bg-blue-dark flex min-h-screen flex-col text-white">
        <Header />
        <div className="grow px-32 pt-28">
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/" exact element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
