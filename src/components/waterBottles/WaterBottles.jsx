import React, { use } from 'react';
import Bottle from './Bottle';

const WaterBottles = ({ waterBottlesPromise }) => {
  const bottles = use(waterBottlesPromise);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">
        Water Bottles {bottles.length}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          bottles.map(bottle => (
            <Bottle key={bottle.id} bottle={bottle} />
          ))
        }
      </div>
    </div>
  );
};

export default WaterBottles;