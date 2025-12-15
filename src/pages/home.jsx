import React from 'react';
import { Container } from 'react-bootstrap';
import ProductList from '../components/productos/ProductList'; 
import QuienesSomos from '../components/productos/QuienesSomos';


const Home = () => {
  return (
    <Container className="mt-4">
      <QuienesSomos />


      {/* promos variadas */}
      <h2 className='titulo-seccion'>
        Promociones
      </h2>
      <ProductList category="Promos" showFilters={false} />

      {/* todo */}
      <h2 className="titulo-seccion">Todos los Productos</h2>
      <ProductList />
    </Container>
  );
};

export default Home;
