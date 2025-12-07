import React from "react";
import ProductRow from "./ProductRow";
import ProductCard from "./ProductCard";
import { Table } from "react-bootstrap";

const ProductTable = ({ productos, onEdit, onDelete }) => {
  return (
    <>
      <div className="d-none d-md-block">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Categoría</th>
              <th>Subcategoría</th>
              <th>Imagen</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((prod) => (
              <ProductRow
                key={prod.id}
                producto={prod}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </tbody>
        </Table>
      </div>
      <div className="d-block d-md-none">
        {productos.map((prod) => (
          <ProductCard
            key={prod.id}
            producto={prod}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </>
  );
};

export default ProductTable;
