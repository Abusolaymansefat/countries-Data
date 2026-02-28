import React, { use } from 'react';

const WaterBottles = ({ waterBottlesPromise }) => {
        const bottles = use(waterBottlesPromise);
        console.log(bottles)

          return (
                    <div>
                        <h2>Water Bottles</h2>
                    </div>
          );
};

export default WaterBottles;