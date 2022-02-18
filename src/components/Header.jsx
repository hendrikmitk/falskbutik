import React from 'react';
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from './ShoppingCartIcon';

const Header = () => {
  return (
    <header className="bg-blue-light text-orange fixed flex h-20 w-full items-center justify-between px-32">
      <NavLink to="/" className="flex items-center space-x-2">
        <ShoppingCartIcon />
        <div className="translate-y-1 text-2xl font-bold uppercase italic">
          Falskbutik
        </div>
      </NavLink>
      <div className="flex space-x-16">
        <NavLink
          to="/products"
          className="text-lg font-medium uppercase tracking-wider"
        >
          Products
        </NavLink>
        <NavLink
          to="/about"
          className="text-lg font-medium uppercase tracking-wider"
        >
          About
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
