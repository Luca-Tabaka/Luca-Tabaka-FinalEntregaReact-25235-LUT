import React from "react";
import { coloresCategorias } from "../../data/category"
import "../../styles/general.css"
const ProductRow = ({ producto, onEdit, onDelete }) => {
  return (
    <tr className="rowCard" style={{ "--color": coloresCategorias[producto.category] || "#ffffff" }}>
      <td>{producto.name}</td>
      <td>${producto.price}</td>
      <td>{producto.stock}</td>
      <td>{producto.category}</td>
      <td>{producto.subcategory}</td>
      <td>{producto.image ? ( <img src={producto.image} alt={producto.name} style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "4px", cursor: "pointer" } }  onClick={() => window.open(producto.image, "_blank")}/>) : ("Sin imagen" )}</td>
      <td>
        <button className="btn btn-warning me-2" onClick={() => onEdit(producto)}>Editar</button>
        <button className="btn btn-danger" onClick={() => onDelete(producto)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default ProductRow;
