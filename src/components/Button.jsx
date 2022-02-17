import React from 'react';

function Button({ isActive, onClick, text }) {
  return (
    <button
      className={`rounded-lg bg-green-dark px-4 py-2 ${
        !isActive && 'opacity-50'
      }`}
      onClick={onClick}
      disabled={!isActive}
    >
      {text}
    </button>
  );
}

export default Button;
