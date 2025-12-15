import { useParams } from 'react-router-dom';
import ProductList from '../components/productos/ProductList';
import { Container } from 'react-bootstrap';

const CategoriaPage = () => {
  const { tipo } = useParams();
  // cambio de imagenes por categoria
  const imgCategoria = {
    Cerveza: "https://www.shutterstock.com/image-photo/row-shiny-beer-taps-wooden-600nw-2505344125.jpg",
    Vino: "https://cru-wine.com/wp-content/uploads/2021/03/Fine-Wine-Storage-Investment.jpg",
    "Sin Alcohol": "https://images.pexels.com/photos/7033796/pexels-photo-7033796.jpeg",
    "Bebidas Espirituosas": "https://images.pexels.com/photos/340996/pexels-photo-340996.jpeg",
    Promos:"https://images.pexels.com/photos/10614210/pexels-photo-10614210.jpeg?cs=srgb&dl=pexels-kubra-147014397-10614210.jpg&fm=jpg"
  };

   const imagenFondo = imgCategoria[tipo] || "https://placehold.co/2000";
  return (
    <Container fluid className="p-0">
      <div style={{
        position: 'relative',
        height: "30vh",
        minHeight: "150px",
        maxHeight: "400px",
        backgroundImage: `url("${imagenFondo}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontSize: '2.5rem',
        fontWeight: '700',
        textShadow: '2px 2px 6px rgba(0,0,0,0.5)',
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 1 // uso el index para saber que va arriba de lo otro
        }}></div>

        <span style={{ position: 'relative', zIndex: 2 }}>
          {tipo}
        </span>
      </div>

      <Container className="mt-4">
        <ProductList category={tipo} />
      </Container>
    </Container>
  );
};

export default CategoriaPage;
