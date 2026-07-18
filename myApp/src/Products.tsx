import React from 'react';
import { Link } from 'react-router-dom';
import { products } from './data';

const productGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gap: '2rem',
  padding: '2rem',
  maxWidth: '1200px',
  margin: '0 auto',
};

const productCardStyle: React.CSSProperties = {
  border: '1px solid #ddd',
  borderRadius: '10px',
  padding: '1rem',
  textAlign: 'center',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  textDecoration: 'none',
  color: 'inherit',
  transition: 'transform 0.2s',
};

const Products = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '2rem' }}>Our Products</h1>
      <div style={productGridStyle}>
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`} style={productCardStyle} 
                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
            <img src={product.image} alt={product.name} style={{ maxWidth: '100%', borderRadius: '5px' }} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;