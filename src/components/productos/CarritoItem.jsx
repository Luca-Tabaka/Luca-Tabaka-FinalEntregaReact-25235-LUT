import React from "react";
import { Button } from "react-bootstrap";

const CarritoItem = ({ producto, agregarAlCarrito, eliminarDelCarrito }) => {
  return (
    <div className="d-flex align-items-center mb-3" style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "8px" }}>
      <img
        src={producto.image}
        alt={producto.name}
        style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "4px" }}
      />
      <div className="ms-3 flex-grow-1">
        <p className="mb-1" style={{ fontWeight: "500" }}>{producto.name}</p>
        <small>${producto.price} × {producto.cantidad}</small>
        <div className="mt-1 d-flex gap-2">
          <Button size="sm" variant="secondary" onClick={() => agregarAlCarrito(producto)}>+</Button>
          <Button size="sm" variant="secondary" onClick={() => eliminarDelCarrito(producto.id)}>-</Button>
        </div>
      </div>
      <div>
        <strong>${producto.price * producto.cantidad}</strong>
      </div>
    </div>
  );
};

export default CarritoItem;
