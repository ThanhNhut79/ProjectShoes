import React from "react";

const FilterList = ({
  searchTerm,
  minPrice,
  maxPrice,
  setSearchTerm,
  setMinPrice,
  setMaxPrice,
  handleSearch,
  handleFilterByPrice,
  handleResetFilters,
}) => (
  <>
    <div className="filter-container">
      <label>Search: </label>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
    <div className="filter-container">
      <label>Min Price: </label>
      <input
        type="number"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <label>Max Price: </label>
      <input
        type="number"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <button onClick={handleFilterByPrice}>Filter by Price</button>
    </div>
    <button onClick={handleResetFilters}>Reset Filters</button>
  </>
);

export default FilterList;
