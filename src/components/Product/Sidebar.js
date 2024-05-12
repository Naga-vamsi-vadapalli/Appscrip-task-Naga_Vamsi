import React from 'react';
import './Sidebar.css'; // Import CSS file for styling

const Sidebar = ({ products, filters, handleFilterChange, isSidebarVisible }) => {
  // Extract unique categories from products
  const categories = [...new Set(products.map(product => product.category))];

  return (
    <div className={`sidebar ${isSidebarVisible ? 'visible' : 'hidden'}`}>
      <h2>Filters</h2>
      <div>
        <label>Category:</label>
        <select name="category" value={filters.category} onChange={handleFilterChange}>
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Price:</label>
        <select name="price" value={filters.price} onChange={handleFilterChange}>
          <option value="">Select</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </div>
      <div>
        <label>Rating:</label>
        <select name="rating" value={filters.rating} onChange={handleFilterChange}>
          <option value="">All Ratings</option>
          {[1, 2, 3, 4, 5].map(rating => (
            <option key={rating} value={rating}>{rating}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Sidebar;
