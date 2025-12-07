import { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { categorias, subcategorias } from "../../data/category";

const formVacio = {
  name: "",
  description: "",
  price: "",
  category: "",
  subcategory: "",
  image: "",
  stock: ""
};

export const ProductModal = ({ handleClose, mostrar, onGuardar, datosIniciales }) => {
  const [form, setForm] = useState(formVacio);
  const [error, setError] = useState({});

  useEffect(() => {
    if (datosIniciales) {
      setForm({
        ...datosIniciales,
        price: Number(datosIniciales.price),
        stock: Number(datosIniciales.stock)
      });
    } else {
      setForm(formVacio);
    }
  }, [datosIniciales]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validar = (form) => {
    const errores = {};

    if (!form.name.trim()) {
      errores.name = "El nombre es obligatorio";
    }

    if (form.price === "" || form.price === null) {
      errores.price = "El precio es obligatorio";
    }

    if (!form.description.trim()) {
      errores.description = "La descripción es obligatoria";
    }

    if (form.stock === "" || form.stock === null) {
      errores.stock = "El stock es obligatorio";
    }

    if (!errores.price && Number(form.price) <= 0) {
      errores.price = "El precio debe ser mayor a 0";
    }

    if (!errores.description && form.description.trim().length < 10) {
      errores.description = "La descripción debe tener al menos 10 caracteres";
    }
    if (!errores.stock && Number(form.stock) < 0) {
      errores.stock = "El stock no puede ser negativo";
    }

    return errores;
  };
  const handleSubmit = () => {
    const errores = validar(form)
    setError(errores);

    if (Object.keys(errores).length > 0) return;

    const formatted = {
      ...form,
      price: Number(form.price),
      stock: Number(form.stock),
    };

    onGuardar(formatted);
    handleClose();
  };

  return (
    <Modal show={mostrar} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {datosIniciales ? "Editar Producto" : "Crear Producto"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              isInvalid={!!error.name}
            />
            <Form.Control.Feedback type="invalid">
              {error.name}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              name="price"
              min={1}
              value={form.price}
              onChange={handleChange}
              isInvalid={!!error.price}
            />
            <Form.Control.Feedback type="invalid">
              {error.price}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Stock</Form.Label>
            <Form.Control
              type="number"
              name="stock"
              min={1}
              value={form.stock}
              onChange={handleChange}
              isInvalid={!!error.stock}
            />
            <Form.Control.Feedback type="invalid">
              {error.stock}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
          <Form.Label>Categoría</Form.Label>
          <Form.Select
            name="category"
            value={form.category}
            onChange={(e) => {
              // Si se cambia la categoria se limpia la subcategoria
              setForm({
                ...form,
                category: e.target.value,
                subcategory: ""
              });
            }}
            isInvalid={!!error.category}
          >
            <option value="">Seleccione una categoría</option>

            {categorias.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </Form.Select>

          <Form.Control.Feedback type="invalid">
            {error.category}
          </Form.Control.Feedback>
        </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Subcategoría</Form.Label>
            <Form.Select
              name="subcategory"
              value={form.subcategory}
              onChange={handleChange}
              disabled={!form.category}
            >
              <option value="">Seleccione una subcategoria</option>
              {form.category &&
                    subcategorias[form.category]?.map(sub => (
                      <option key={sub} value={sub}>{sub}</option>
                    ))
                  }
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>URL Imagen</Form.Label>
            <Form.Control
              type="text"
              name="image"
              value={form.image}
              onChange={handleChange}
              isInvalid={!!error.image}
            />
            <Form.Control.Feedback type="invalid">
              {error.image}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              rows={3}
              value={form.description}
              onChange={handleChange}
              isInvalid={!!error.description}
            />
            <Form.Control.Feedback type="invalid">
              {error.description}
            </Form.Control.Feedback>
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          {datosIniciales ? "Guardar Cambios" : "Crear Producto"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
