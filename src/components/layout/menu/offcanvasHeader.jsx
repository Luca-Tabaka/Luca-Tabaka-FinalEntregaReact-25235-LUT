import { useNavigate } from "react-router-dom";
import { Offcanvas, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
const OffcanvasHeader = ({ show, handleClose }) => {
  const { usuario, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();      
    navigate('/'); 
  };

  return (
    <Offcanvas show={show} onHide={handleClose} placement="start" style={{ width: '250px', backgroundColor: 'white'  }}>
      {/* titulo offcanvas */}
      <Offcanvas.Header>
        <Offcanvas.Title className="offcanvas-title-custom">
          Mondo Bebible
        </Offcanvas.Title>
      </Offcanvas.Header>
      {/* cuerpo con los enlaces a las partes de la pagina */}
      <Offcanvas.Body style={{ padding: '1rem' }}>
        <Nav className="flex-column">
          <Nav.Link as={Link} to="/categoria/Cerveza" className="nav-link-header">Cerveza</Nav.Link>
          <Nav.Link as={Link} to="/categoria/Vino" className="nav-link-header">Vino</Nav.Link>
          <Nav.Link as={Link} to="/categoria/Promos" className="nav-link-header">Promos</Nav.Link>
          <Nav.Link as={Link} to="/categoria/Sin Alcohol" className="nav-link-header">Sin Alcohol</Nav.Link>
          <Nav.Link as={Link} to="/categoria/Bebidas Espirituosas" className="nav-link-header">Espirituosas</Nav.Link>  

          <hr/>
          {usuario ? (
            <div className="user-menu" style={{ marginTop: '1rem' }}>
              {usuario.permiso === 'admin' && (
                <Nav.Link as={Link} to="/creacion" className="nav-link-header">
                  Crear Producto
                </Nav.Link>
              )}
              <Nav.Link as="button" onClick={handleLogout} className="nav-link-header">
                Cerrar sesión
              </Nav.Link>
            </div>
          ) : (
            <Nav.Link as={Link} to="/Login" className="nav-link-header" style={{ marginTop: '1rem' }}>
              Iniciar sesión
            </Nav.Link>
          )}
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
 );
};

export default OffcanvasHeader;
