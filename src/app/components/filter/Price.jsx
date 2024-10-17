'use client'
import { useState } from 'react';

function PriceRange() {
  const [price, setPrice] = useState(50); // Initial price set to 50

  const handleChange = (event) => {
    setPrice(event.target.value); // Update price when slider changes
  };

  return (
    <div className="p-4  rounded-md bg-white ">
      <h2 className="text-xl font-bold mb-4">Select your price:</h2>
      
      <input
        type="range"
        min="0"
        max="100"
        value={price}
        onChange={handleChange}
        className="range range-xs range-primary"
      />
      
      <div className="flex justify-between text-sm mt-2">
        <span>$0</span>
        <span>${price}</span>
        <span>$100</span>
      </div>
    </div>
  );
}

export default PriceRange;
