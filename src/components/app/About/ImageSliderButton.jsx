import React from 'react';

const ImageSliderButton = ({ children, onClick }) => {
  return (
    <button className="active:scale-110" type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default ImageSliderButton;
