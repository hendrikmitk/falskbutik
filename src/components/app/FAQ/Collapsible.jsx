import React, { useState } from 'react';
import ChevronDownIcon from '@components/common/icons/ChevronDownIcon';
import ChevronUpIcon from '@components/common/icons/ChevronUpIcon';

const Collapsible = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapsible = () => setIsOpen((status) => !status);

  return (
    <div className="border-orange rounded-lg border">
      <div
        className={`bg-blue-light flex cursor-pointer select-none items-center justify-between px-4 ${
          isOpen ? 'rounded-t-lg pt-4 pb-2' : 'rounded-lg py-4'
        }`}
        onClick={toggleCollapsible}
      >
        <h3 className="text-lg font-medium">{title}</h3>
        <div className="text-orange">
          {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </div>
      </div>

      <div className={`bg-blue-light ${isOpen && 'rounded-b-lg'}`}>
        {isOpen && <div className="px-4 pb-4 pt-2 text-sm">{children}</div>}
      </div>
    </div>
  );
};

export default Collapsible;
