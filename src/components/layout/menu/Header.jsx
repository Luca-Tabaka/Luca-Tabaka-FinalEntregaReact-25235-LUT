import React, { useContext, useState } from "react";
import { Navbar, Nav, Container, NavDropdown, Badge } from "react-bootstrap";
import { useAuth } from "../../../context/AuthContext";
import { CarritoContext } from "../../../context/CarritoContext";
import { Link } from "react-router-dom";
import { FaUser, FaBars, FaWineBottle } from 'react-icons/fa';
import OffcanvasHeader from "./offcanvasHeader";
import OffcanvasCarrito from "./offcanvasCarrito";

const Header = () => {
  const { usuario, logout } = useAuth();
  const {carrito} = useContext(CarritoContext)
  const [showMenu, setShowMenu] = useState(false);
  const [showCarrito, setShowCarrito] = useState(false);
  const totalUnidades = carrito.reduce((sum, item) => sum + item.cantidad, 0);

  return (
    <>
      <Navbar expand="lg" variant="dark" style={{ backgroundColor: "#020101ff", borderBottom: "3px solid #882d2dff" }}>
        <Container>
          
          <Navbar.Brand as={Link} to="/" className="text-light fs-3">
            Mondo Bebible
          </Navbar.Brand>

          {/* Para responsive */}
          <div className="d-flex align-items-center gap-3 d-lg-none">
            <div 
              style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "5px", position: "relative" }}
              onClick={() => setShowCarrito(true)}
            >
              <FaWineBottle size={24} color={totalUnidades > 0 ? "#882d2dff" : "white"}/>
              {carrito?.length > 0 && (
                  <Badge bg="danger" pill style={{position:"absolute", top:"-10px", right:"-25px"}}>
                    {totalUnidades}
                  </Badge>
              )}
            </div>
            {/* este es para el icono de hamburguesa */}  
            <Navbar.Toggle onClick={() => setShowMenu(true)} className="border-0">
              <FaBars color="#882d2dff" size={22} />
            </Navbar.Toggle>
          </div>

          {/* vista de desktop */}
          <Navbar.Collapse className="d-none d-lg-flex justify-content-between">
            <Nav className="mx-auto" style={{ fontSize: '1.3rem' }}>
            <Nav.Link as={Link} to="/categoria/Cerveza">Cerveza</Nav.Link>
            <Nav.Link as={Link} to="/categoria/Vino">Vino</Nav.Link>
            <Nav.Link as={Link} to="/categoria/Promos">Promos</Nav.Link>
            <Nav.Link as={Link} to="/categoria/Sin Alcohol">Sin Alcohol</Nav.Link>
            <Nav.Link as={Link} to="/categoria/Bebidas Espirituosas">Espirituosas</Nav.Link>
            </Nav>

      <Nav className="align-items-center d-none d-lg-flex" style={{ gap: '20px' }}>
        {/* Icono de usuario */}
        {usuario ? (
          <NavDropdown
            title={<FaUser color="#882d2dff" size={20} title="Usuario"/>}
            align="end"
          >
            {usuario.permiso === "admin" && (
              <NavDropdown.Item as={Link} to="/Creacion">Crear Producto</NavDropdown.Item>
            )}
            <NavDropdown.Item onClick={logout}>Cerrar sesión</NavDropdown.Item>
          </NavDropdown>
        ) : (
          <Nav.Link as={Link} to="/login">
            <FaUser size={20} />
          </Nav.Link>
        )}

        {/* Icono para el carrito */}
        <div 
          style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "5px", position: "relative" }}
          onClick={() => setShowCarrito(true)}
          title="Carrito"
        >
          <FaWineBottle size={24} color={totalUnidades > 0 ? "#882d2dff" : "white"}/>
          {carrito?.length > 0 && (
            <Badge bg="danger" pill style={{position:"absolute", top:"-10px", right:"-25px"}}>
              {totalUnidades}
            </Badge>
          )}
        </div>
      </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <OffcanvasHeader show={showMenu} handleClose={() => setShowMenu(false)} />
      <OffcanvasCarrito show={showCarrito} handleClose={() => setShowCarrito(false)} />
    </>
  );
};

export default Header;
