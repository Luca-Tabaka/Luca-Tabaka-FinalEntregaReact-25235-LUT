import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const QuienesSomos = () => {
  return (
    <Container fluid className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <Container>
        <Row className="align-items-center">
          {/* descripcion */}
          <Col xs={12} md={6} className="mb-4 mb-md-0">
            <h2 style={{ fontSize: '2rem', color: '#882d2d', fontWeight: 'bold' }}>
              ¿Quiénes Somos?
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#333' }}>
              En Mondo Bebible nos apasiona ofrecer las mejores bebidas para cada ocasión.
              Con una selección cuidadosa de productos, desde cervezas artesanales hasta vinos
              exquisitos y bebidas sin alcohol, buscamos siempre brindar calidad y satisfacción.
            </p>
          </Col>

          {/* Imagenes de carousel con enlaces a las paginas */}
          <Col xs={12} md={6}>
            <Carousel>
                <Carousel.Item>
                <Link to="/categoria/Cerveza" title="Ir a Cerveza">
                    <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/1089932/pexels-photo-1089932.jpeg"
                    alt="Cerveza"
                    style={{ borderRadius: '8px', objectFit: 'cover', height: '250px', width: '100%' }}
                    />
                </Link>
                </Carousel.Item>
                <Carousel.Item>
                <Link to="/categoria/Vino" title="Ir a Vino">
                    <img
                    className="d-block w-100"
                    src="https://cru-wine.com/wp-content/uploads/2021/03/Fine-Wine-Storage-Investment.jpg"
                    alt="Vino"
                    style={{ borderRadius: '8px', objectFit: 'cover', height: '250px', width: '100%' }}
                    />
                </Link>
                </Carousel.Item>
                <Carousel.Item>
                <Link to="/categoria/Promos" title="Ir a Promos">
                    <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/10614210/pexels-photo-10614210.jpeg?cs=srgb&dl=pexels-kubra-147014397-10614210.jpg&fm=jpg"
                    alt="Promociones"
                    style={{ borderRadius: '8px', objectFit: 'cover', height: '250px', width: '100%' }}
                    />
                </Link>
                </Carousel.Item>
                <Carousel.Item>
                <Link to="/categoria/Sin Alcohol" title="Ir a Sin Alcohol">
                    <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/7033796/pexels-photo-7033796.jpeg"
                    alt="Sin Alcohol"
                    style={{ borderRadius: '8px', objectFit: 'cover', height: '250px', width: '100%' }}
                    />
                </Link>
                </Carousel.Item>
                <Carousel.Item>
                <Link to="/categoria/Bebidas Espirituosas" title="Ir a espirituosas">
                    <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/340996/pexels-photo-340996.jpeg"
                    alt="Bebidas Espirituosas"
                    style={{ borderRadius: '8px', objectFit: 'cover', height: '250px', width: '100%' }}
                    />
                </Link>
                </Carousel.Item>                                
            </Carousel>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default QuienesSomos;
