import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Product/Sidebar';
import ProductGrid from './Product/ProductGrid';
import './index.css';


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    price: '',
    rating: '',
  });
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      let filtered = [...products];

      if (filters.category !== '') {
        filtered = filtered.filter(product =>
          product.category.toLowerCase().includes(filters.category.toLowerCase())
        );
      }

      if (filters.price === 'lowToHigh') {
        filtered = filtered.sort((a, b) => a.price - b.price);
      } else if (filters.price === 'highToLow') {
        filtered = filtered.sort((a, b) => b.price - a.price);
      }

      if (filters.rating !== '') {
        filtered = filtered.filter(product =>
          Math.floor(product.rating.rate) === parseInt(filters.rating)
        );
      }

      setFilteredProducts(filtered);
    };

    applyFilters();
  }, [products, filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const toggleSidebarVisibility = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div>
    <div className='heading1'>
    <h1 className='heading'>SHOP-e</h1>
    </div>
    <hr></hr>
    <div className='heading2'>
    <h1 className='heading'>DISCOVER OUR PRODUCTS</h1>
    <p>
        At SHOP-e, we're passionate about bringing you the latest innovations and must-have products that seamlessly blend style, functionality, and affordability. Whether you're upgrading your tech arsenal, enhancing your home, or adding a touch of luxury to your everyday life, we've got you covered.
    </p>
    </div>
    <hr></hr>
    <div className="container">
      <button className={`toggle-sidebar-button ${isSidebarVisible ? 'visible' : 'hidden'}`} onClick={toggleSidebarVisibility}>
        {isSidebarVisible ? 'Hide Sidebar' : 'Show Sidebar'}
      </button>

      {isSidebarVisible && <Sidebar products={products} filters={filters} handleFilterChange={handleFilterChange} />}
      <ProductGrid products={filteredProducts} />
    </div>
    <div className='contact-container'>
        <h1>contact-info</h1>

    </div>
    </div>
  );
};

export default ProductList;
