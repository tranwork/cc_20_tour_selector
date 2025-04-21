import React from 'react';

function DestinationSelector({ tours, selected, setSelected }) {
  const uniqueNames = ['All', ...new Set(tours.map((tour) => tour.name))];

  return (
    <div className="dropdown-container">
      <label htmlFor="destination">Select a Destination: </label>
      <select
        id="destination"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {uniqueNames.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DestinationSelector;