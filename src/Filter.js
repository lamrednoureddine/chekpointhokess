// Filter.js
import React from 'react';

const Filter = ({ onFilterChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by Title"
        onChange={(e) => onFilterChange('title', e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by Rating"
        onChange={(e) => onFilterChange('rating', e.target.value)}
      />
    </div>
  );
};

export default Filter;
