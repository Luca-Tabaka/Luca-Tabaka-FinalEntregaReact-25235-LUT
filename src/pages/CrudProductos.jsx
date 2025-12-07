import { useState, useEffect } from "react";
import ProductTable from "../components/crud/ProductTable";
import { ProductModal } from "../components/crud/ProductModal";
import { BorrarModal } from "../components/crud/BorrarModal";
import { EditarModal } from "../components/crud/EditarModal";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_URL = "https://6931ca5c11a8738467d093f3.mockapi.io/productos";

const CrudProductos = () => {
  // estados del modal de creacion
  const [productos, setProductos] = useState([]);
  const [editar, setEditar] = useState(null);
  const [abrirModal, setAbrirModal] = useState(false);

  // estados del modal de borrado
  const [productoABorrar, setProductoABorrar] = useState(null);
  const [abrirDeleteModal, setAbrirDeleteModal] = useState(false);

  // estados del modal de confirmacion de cambios
  const [productoAEditar, setProductoAEditar] = useState(null);
  const [abrirEdit, setAbrirEdit] = useState(false);

  useEffect(() => {
    fetchProductos();
  }, []);

  const fetchProductos = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setProductos(data);
    } catch (error) {
      console.error("Error al cargar productos:", error);
    }
  };


  const openModal = (producto = null) => {
    setEditar(producto);
    setAbrirModal(true);
  };

  const closeModal = () => {
    setEditar(null);
    setAbrirModal(false);
  };

  const handleEditarProducto = (datosEditados) => {
    setProductoAEditar({ ...editar, ...datosEditados });
    setAbrirEdit(true);
  };


  const confirmarCambios = async () => {
    try {
      if (!productoAEditar) return;

      await fetch(`${API_URL}/${productoAEditar.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productoAEditar),
      });

      await fetchProductos();
      toast.success("Producto modificado con exito!");
    } catch (err) {
      console.error(err);
    } finally {
      setProductoAEditar(null);
      setAbrirEdit(false);
      setEditar(null);
      setAbrirModal(false);
    }
  };


  const handleBorrar = (producto) => {
    setProductoABorrar(producto);
    setAbrirDeleteModal(true);
  };

const guardarProducto = async (productoData) => {
  if (editar) {
    handleEditarProducto(productoData);
  } else {
    try {
      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productoData),
      });
      await fetchProductos();
      toast.success("Producto creado correctamente");
    } catch (err) {
      console.error("Error al crear producto:", err);
    } finally {
      setAbrirModal(false);
    }
  }
};
  const confirmarBorrado = async () => {
    try {
      await fetch(`${API_URL}/${productoABorrar.id}`, { method: "DELETE" });
      await fetchProductos();
      toast.success("Producto eliminado correctamente");
    } catch (err) {
      console.error("Error al eliminar:", err);
    } finally {
      setProductoABorrar(null);
      setAbrirDeleteModal(false);
    }
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Gestor de productos</h1>
        <button className="btn btn-primary" onClick={() => openModal()}>
          + Crear nuevo producto
        </button>
      </div>

      {/* tabla de todos los productos */}
      <ProductTable productos={productos} onEdit={openModal} onDelete={handleBorrar}/>

      {/* sirve de confimacion al momento de editar los datos de un producto */}
      {abrirEdit && (
      <EditarModal
        mostrar={abrirEdit}
        onCerrar={() => setAbrirEdit(false)}
        onEditar={confirmarCambios}
        producto={productoAEditar}
      />
      )}
      {/* sirve para abrir el formulario de creacion o edicion */}
      {abrirModal && (
        <ProductModal
          datosIniciales={editar}
          handleClose={closeModal}
          onGuardar={guardarProducto}
          mostrar={abrirModal}
        />
      )}
      {/* sirve para abrir el modal de confirmacion de borrado */}
      {abrirDeleteModal && productoABorrar && (
        <BorrarModal
          mostrar={abrirDeleteModal}
          onClose={() => setAbrirDeleteModal(false)}
          onConfirm={confirmarBorrado}
          producto={productoABorrar}
        />
      )}
       <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default CrudProductos;
