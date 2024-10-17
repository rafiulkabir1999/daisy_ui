'use client'
import { useState } from 'react';

function MultiSelectAirlines() {
  const [selectedAirlines, setSelectedAirlines] = useState([]);

  const airlines = ['Delta', 'American Airlines', 'United', 'Southwest', 'Qatar Airways'];

  const handleSelect = (event) => {
    const { value } = event.target;
    setSelectedAirlines((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((airline) => airline !== value) // Deselect if already selected
        : [...prevSelected, value] // Add to selection if not already selected
    );
  };

  return (
    <div className="p-4  rounded-md bg-white">
      <h2 className="text-xl font-bold mb-4">Airlines</h2>
      <div className="grid gap-1">
        {airlines.map((airline, index) => (
          <label key={index} className="cursor-pointer label">
           <div className="flex align-items">
           <input
              type="checkbox"
              value={airline.toLowerCase()}
              onChange={handleSelect}
              checked={selectedAirlines.includes(airline.toLowerCase())}
              className="checkbox checkbox-primary"
            />
            <span className="ml-2 label-text">{airline}</span>
           </div>
            <span className="ml-2 label-text">342</span>
          </label>
        ))}
      </div>
      <p className="mt-4">You selected: {selectedAirlines.join(', ') || 'None'}</p>
    </div>
  );
}

export default MultiSelectAirlines;
