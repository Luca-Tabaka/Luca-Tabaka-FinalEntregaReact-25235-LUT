import { useContext } from "react";
import { Offcanvas, Button } from "react-bootstrap";
import { CarritoContext } from "../../../context/CarritoContext";
import CartItem from "../../productos/CarritoItem";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OffcanvasCarrito = ({ show, handleClose }) => {
  const { carrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito } = useContext(CarritoContext);
  const navigate = useNavigate();
  // para al momento de usar el boton comprar no deje hasta que este iniciada la sesion
  const { usuario } = useAuth();

  const total = carrito.reduce((sum, item) => sum + item.price * item.cantidad, 0);

const handleCompra = () => {
  if (!usuario) {
    // si no hay usuario logueado, redirige a login
    navigate('/login');
    toast.info("Debes iniciar sesión para realizar la compra.");
    return;
  }

    if (carrito.length === 0) {
    toast.info("No hay productos en el carrito.");
    return;
  }

    toast.success("Compra simulada. Gracias por su compra!!");

    // un delay para simular compra 
    setTimeout(() => {
      vaciarCarrito();
      navigate("/Home"); // navego a la pagina inicial ya que puede ser q estoy en alguna especifica
    }, 1500);
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito de compras</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          {carrito.length === 0 ? (
            <p>El carrito está vacío.</p>
          ) : (
            <>
              {carrito.map(item => (
                <CartItem
                  key={item.id}
                  producto={item}
                  agregarAlCarrito={agregarAlCarrito}
                  eliminarDelCarrito={eliminarDelCarrito}
                />
              ))}

              <hr />
              <h5>Total: ${total}</h5>

              <Button
              variant="dark"
              className="w-100 mt-2"
              onClick={handleCompra}
              style={{
                borderRadius: "8px",      
                transition: "all 0.5s ease", 
                fontWeight: "600",           
                letterSpacing: "1px",       
                fontSize: "1.2rem"
              }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            >
              Realizar Compra
            </Button>

            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffcanvasCarrito;
