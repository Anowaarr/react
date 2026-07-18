import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from './data';

const pageStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '2rem',
  maxWidth: '800px',
  margin: '0 auto',
};

const imageStyle: React.CSSProperties = {
  maxWidth: '100%',
  borderRadius: '10px',
  marginBottom: '2rem',
};

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div style={pageStyle}><h2>Product not found!</h2></div>;
  }

  return (
    <div style={pageStyle}>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={imageStyle} />
      <h2>{product.price}</h2>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductPage;