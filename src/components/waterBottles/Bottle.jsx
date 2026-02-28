import React from 'react';

const Bottle = ({ bottle }) => {
  const { img, name, price } = bottle;

  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-md">
      <img 
        src={img} 
        alt={name} 
        className="w-full object-cover rounded-md mb-3"
      />
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-lg font-semibold">${price}</p>

    </div>
  );
};

export default Bottle;