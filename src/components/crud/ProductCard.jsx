import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductCard = ({ producto, onEdit, onDelete }) => {
  return (
    <Card className="h-100 shadow-sm">
      
      <Card.Img
        variant="top"
        src={producto.image}
        style={{ objectFit: "cover", height: "200px", cursor:"pointer" }}
        onClick={() => window.open(producto.image, "_blank")}
      />

      <Card.Body className="d-flex flex-column">

        <Card.Title className="mb-1">{producto.name}</Card.Title>

        <Card.Subtitle className="text-muted mb-2">
          {producto.category} • {producto.subcategory}
        </Card.Subtitle>

        <Card.Text className="mb-1">
          <strong>Precio: </strong>${producto.price}
        </Card.Text>

        <Card.Text className="flex-grow-1" style={{ fontSize: "0.9rem" }}>
          {producto.description}
        </Card.Text>

        <div className="d-flex justify-content-between mt-3">
          <Button size="sm" variant="warning" onClick={() => onEdit(producto)}>
            Editar
          </Button>

          <Button size="sm" variant="danger" onClick={() => onDelete(producto)}>
            Eliminar
          </Button>
        </div>

      </Card.Body>
    </Card>
  );
};

export default ProductCard;
