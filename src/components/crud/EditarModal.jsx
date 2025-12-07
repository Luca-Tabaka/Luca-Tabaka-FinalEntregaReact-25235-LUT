import { Modal, Button } from "react-bootstrap";

export const EditarModal =({mostrar, onCerrar, onEditar})=> {
  return (
    <Modal show={mostrar} onHide={onCerrar} centered>
      <Modal.Header closeButton>
        <Modal.Title>Confirmar cambios</Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <p>¿Deseas guardar los cambios del producto?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCerrar}>
          Cancelar
        </Button>
        <Button variant="success" onClick={onEditar}>
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}