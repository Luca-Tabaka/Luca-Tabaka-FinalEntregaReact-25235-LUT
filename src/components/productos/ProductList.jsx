import React, { useEffect, useState, useContext } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import ProductCardPublic from './productCardPublic';
import ScaleLoader from "react-spinners/ScaleLoader";
import { CarritoContext } from '../../context/CarritoContext';

const ProductList = ({ category = null, showFilters = true }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [barraDeBusqueda, setBarraDeBusqueda] = useState("");
  const [cantidadVisible, setCantidadVisible] = useState(8);
  const [subcategoriaFiltro, setSubcategoriaFiltro] = useState(""); 
  const [precioFiltro, setPrecioFiltro] = useState(""); 
  const { agregarAlCarrito } = useContext(CarritoContext);

  useEffect(() => {
    setLoading(true);
    fetch('https://6931ca5c11a8738467d093f3.mockapi.io/productos')
      .then(res => res.json())
      .then(data => {
        if (category) {
          setProducts(data.filter(p => p.category.toLowerCase() === category.toLowerCase()));
        } else {
          setProducts(data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [category]);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
        <ScaleLoader color="#ff0000ff" loading={loading} height={35} width={5} radius={2} margin={2} />
      </div>
    );
  }

  let productosFiltrados = products.filter(product =>
    product.name.toLowerCase().includes(barraDeBusqueda.toLowerCase()) ||
    product.category.toLowerCase().includes(barraDeBusqueda.toLowerCase()) ||
    product.subcategory.toLowerCase().includes(barraDeBusqueda.toLowerCase())
  );

  if (subcategoriaFiltro) {
    productosFiltrados = productosFiltrados.filter(p => p.subcategory === subcategoriaFiltro);
  }

  if (precioFiltro === "asc") {
    productosFiltrados.sort((a, b) => a.price - b.price);
  } else if (precioFiltro === "desc") {
    productosFiltrados.sort((a, b) => b.price - a.price);
  }

  const productosAMostrar = productosFiltrados.slice(0, cantidadVisible);

  return (
    <>{/* filtros generales/con el show filters para ver las promos en home */}
      {showFilters && (
        <Row className="mb-3">
          <Col md={category ? 6 : 12}>
            <Form.Control
              type="text"
              placeholder="Buscar productos"
              value={barraDeBusqueda}
              onChange={e => setBarraDeBusqueda(e.target.value)}
            />
          </Col>
          <Col md={2} className="mt-2 mt-md-0">
            <Form.Select
              value={precioFiltro}
              onChange={e => setPrecioFiltro(e.target.value)}
            >
              <option value="">Ordenar por precio</option>
              <option value="asc">Menor a mayor</option>
              <option value="desc">Mayor a menor</option>
            </Form.Select>
          </Col>
          {/* filtro solo de las paginas que tienen categoria */}
          {category && (
            <Col md={2} className="mt-2 mt-md-0">
              <Form.Select
                value={subcategoriaFiltro}
                onChange={e => setSubcategoriaFiltro(e.target.value)}
              >
                <option value="">Todas las subcategorías</option>
                {Array.from(new Set(products.map(p => p.subcategory))).map(sub => (
                  <option key={sub} value={sub}>{sub}</option>
                ))}
              </Form.Select>
            </Col>
          )}
        </Row>
      )}
      {/* armo las cards */}
      {/* Si se busca algo q no este da un mensaje informativo */}
      {productosFiltrados.length === 0 ? (
        <div className="text-center mt-4 text-muted">
          <h5>No hay productos para mostrar</h5>
          <p>Probá cambiar los filtros o la búsqueda</p>
        </div>
      ) : (
        <Row>
          {productosAMostrar.map(product => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <ProductCardPublic product={product} agregarAlCarrito={agregarAlCarrito} />
            </Col>
          ))}
        </Row>
      )}
        {/* para el boton de ver mas */}
      {cantidadVisible < productosFiltrados.length && (
        <div className="mb-4" style={{ width: '100%' }}>
          <Button
            className='w-100'
            style={{
              backgroundColor: "#882d2dff",
              color: "white",
              fontSize: '1.2rem',
              border: '1px solid black'
            }}
            onClick={() => setCantidadVisible(cantidadVisible + 4)}
          >
            Cargar Productos
          </Button>
        </div>
      )}
    </>
  );
};

export default ProductList;
