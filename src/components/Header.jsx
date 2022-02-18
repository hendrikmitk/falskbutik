import React from 'react';
import ShoppingCartIcon from './ShoppingCartIcon';

const Header = () => {
  return (
    <header className="fixed flex h-20 w-full items-center justify-between bg-blue-light px-32 text-orange">
      <div className="flex items-center space-x-2">
        <ShoppingCartIcon />
        <a
          className="translate-y-1 text-2xl font-bold uppercase italic"
          href="/"
        >
          Falskbutik
        </a>
      </div>
      <div className="flex space-x-16">
        <span className="text-lg font-medium uppercase tracking-wider">
          Products
        </span>
        <span className="text-lg font-medium uppercase tracking-wider">
          About
        </span>
      </div>
    </header>
  );
};

export default Header;
