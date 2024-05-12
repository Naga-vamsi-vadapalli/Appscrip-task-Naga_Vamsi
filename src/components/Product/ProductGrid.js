import React from 'react';
import './ProductGrid.css'

const ProductGrid = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-item" style={styles.productItem}>
          <img src={product.image} alt={product.title} style={styles.productImage} />
          <div className="product-details">
            <h2 className="product-title">{product.title}</h2>
            <h3 className="product-description">{product.description}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  productItem: {
    position: 'relative',
    width: '300px',
    height: '462px',
    borderRadius: '8px', // Adding border radius for rounded corners
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};

export default ProductGrid;
