import React from 'react';

const Filter = ({ onFilterChange,setFilterStatus,filterStatus }) => {

  const handleFilterChange = (status) => {
    setFilterStatus(status);
    onFilterChange(status);
  };

  return (
    <div>
      <label htmlFor="filter">Filter Status: </label>
      <select
        id="filter"
        value={filterStatus}
        onChange={(e) => handleFilterChange(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Not Completed">Not Completed</option>
      </select>
    </div>
  );
};

export default Filter;

