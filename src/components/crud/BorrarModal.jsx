import { Modal, Button } from "react-bootstrap";

export const BorrarModal = ({ mostrar, onClose, onConfirm, producto }) => {
  return (
    <Modal show={mostrar} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Eliminar Producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {producto ? (
          <p>
            ¿Estás seguro de que quieres eliminar el producto{" "}
            <strong>{producto.name}</strong>? Esta acción no se puede revertir.
          </p>
        ) : (
          <p>¿Estás seguro de eliminar este producto?</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};