import {useState} from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCardPublic = ({ product, agregarAlCarrito }) => {
    const [verDescripcionCompleta, setVerDescripcionCompleta] = useState(false);

  return (
    <Card 
        className="d-flex flex-column"
        style={{
            minHeight: '450px',
            backgroundColor: '#fff', 
            borderRadius: '8px',      
            border: '1px solid #ffffffff',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)', 
            color: '#333',           
        }}
    >
      <Card.Img
          variant="top"
          src={product.image}
          alt={product.name}
          className="card-img-top img-fluid" 
          style={{ height: '200px', objectFit: 'contain', width:'100%',backgroundColor:'#ffffffff', padding:'10px', borderBottom:'3px solid #882d2d'}} 
      />
      <Card.Body className="d-flex flex-column p-2">
          <Card.Title style={{ color: '#000000ff', fontSize: '1.2rem' }}>{product.name}</Card.Title>
          <Card.Text style={{ color: '#000000ff' }}>{product.subcategory}</Card.Text>
        <Card.Text
          style={{
            color: '#333',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: verDescripcionCompleta ? 'none' : 1, 
            WebkitBoxOrient: 'vertical',
          }}
        >
          {product.description}
        </Card.Text>
          <Card.Text style={{ color: '#000000ff', fontWeight: 'bold', fontSize: '1.5rem' }}>
             ${product.price}
          </Card.Text>
        <div className="d-flex flex-column mt-auto gap-2">
        <Button
            variant="secondary"
            onClick={() => setVerDescripcionCompleta(!verDescripcionCompleta)}
        >
            {verDescripcionCompleta ? 'Ver menos' : 'Ver más'}
        </Button>
        <Button 
            variant="danger" 
            onClick={() => agregarAlCarrito(product)}
        >
            Agregar al carrito
        </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCardPublic;
