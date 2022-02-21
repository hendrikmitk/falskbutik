import React from 'react';

function Button({ isActive, onClick, text }) {
  return (
    <button
      className={`bg-green-dark rounded-lg px-6 py-2 ${
        !isActive && 'opacity-40'
      }`}
      onClick={onClick}
      disabled={!isActive}
    >
      {text}
    </button>
  );
}

export default Button;
