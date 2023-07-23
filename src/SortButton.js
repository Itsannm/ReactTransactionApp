import React from "react";

const SortButton = ({ setSortOption }) => {
  const handleSort = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div>
      <label htmlFor="sort">Sort by:</label>
      <select id="sort" onChange={handleSort}>
        <option value="">Select</option>
        <option value="category">Category</option>
        <option value="description">Description</option>
      </select>
    </div>
  );
};

export default SortButton;
