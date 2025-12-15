import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5">
      <div className="container">
        <div className="row">

          {/* Logo y descripción */}
          <div className="col-md-4 mb-4">
            <h5>Mondo Bebible</h5>
            <p>Venta de bebidas con la mejor calidad para cada ocasión.</p>
          </div>

          {/* Secciones */}
          <div className="col-md-4 mb-4">
            <h5>Secciones</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/categoria/Cerveza" className="text-light text-decoration-none">
                  Cervezas
                </Link>
              </li>
              <li>
                <Link to="/categoria/Vino" className="text-light text-decoration-none">
                  Vinos
                </Link>
              </li>
                <li>
                <Link to="/categoria/Bebidas Espirituosas" className="text-light text-decoration-none">
                  Espirituosas
                </Link>
              </li>
              <li>
                <Link to="/categoria/Sin Alcohol" className="text-light text-decoration-none">
                  Sin Alcohol
                </Link>
              </li>
              <li>
                <Link to="/categoria/Promos" className="text-light text-decoration-none">
                  Promos
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div className="col-md-4 mb-4">
            <h5>Redes Sociales</h5>
            <p>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                <FaInstagram /> Instagram
              </a>
              <br />
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light">
                <FaFacebook /> Facebook
              </a>
            </p>
          </div>

        </div>
      </div>

      {/* parte inferior donde hay pocos detalles */}
      <div className="bg-dark text-light text-center border-top py-3 mt-4">
        <small>© 2025 Mondo Bebible — Todos los derechos reservados.</small>
        <br />
        <small>Desarrollado por <strong>Luca Uriel Tabaka</strong> | Proyecto con finalidad educativa- <strong>sin finalidad comercial</strong></small>
      </div>
    </footer>
  );
}
