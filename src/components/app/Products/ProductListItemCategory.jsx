import React from 'react';
import ElectronicsIcon from '../../common/icons/ElectronicsIcon';
import JeweleryIcon from '../../common/icons/JeweleryIcon';
import MensIcon from '../../common/icons/MensIcon';
import WomensIcon from '../../common/icons/WomensIcon';

const ProductListItemCategory = ({ category }) => {
  return (
    <div className="text-grey-dark flex items-center space-x-6">
      <div className={`${category === "men's clothing" && 'text-green-dark'}`}>
        <MensIcon />
      </div>
      <div
        className={`${category === "women's clothing" && 'text-green-dark'}`}
      >
        <WomensIcon />
      </div>
      <div className={`${category === 'electronics' && 'text-green-dark'}`}>
        <ElectronicsIcon />
      </div>
      <div className={`${category === 'jewelery' && 'text-green-dark'}`}>
        <JeweleryIcon />
      </div>
    </div>
  );
};

export default ProductListItemCategory;
