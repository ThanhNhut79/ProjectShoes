import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
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
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>
        <FaSearch style={{ fontSize: "25" }} />
      </button>
    </div>
    <div className="filter-container">
      <label>Min</label>
      <input
        type="number"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <label>Max </label>
      <input
        type="number"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <button onClick={handleFilterByPrice}>
        <FaFilter style={{ fontSize: "25" }} />
      </button>
    </div>
    <button style={{}} onClick={handleResetFilters}>
      Reset Filters
    </button>
  </>
);

export default FilterList;
