import React from "react";
import { FaSearch } from "react-icons/fa";

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
      <div className="filter-productpage">
        <label>Search: </label>
        <div className="search-product">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>
            <FaSearch />
          </button>
        </div>
        <div className="filter-price">
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
          <button onClick={handleResetFilters}>Reset Filters</button>
        </div>
      </div>
    </div>
  </>
);

export default FilterList;
