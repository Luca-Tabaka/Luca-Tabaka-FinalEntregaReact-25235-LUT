import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
//import { Inicio, Login, Perfil, Carrito, Contacto} from '../pages';
import Privateroute from './ProtectedRoute';
//import Login from '../pages/login.jsx';
import Home from '../pages/home.jsx';
import Login from '../pages/login.jsx';
import Creacion from '../pages/CrudProductos.jsx'
export default function AppRoutes() {
  return (
    <Routes>
      {/* Rutas de acceso libre */}
        <Route path="/" element={<Navigate to="/Login" />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Home" element={<Home />} />
      <Route path='/creacion' element={<Creacion />} />
      
      {/* <Route path="/carrito" element={<Carrito />} />
      <Route path="/infocontacto" element={<Contacto />} /> */}

      {/* Rutas protegidas con el componente*/}
{/*       <Route
        path="/perfil"
        element={
          <Privateroute>
            <Perfil />
          </Privateroute>
        }
      /> */}
    </Routes>
  );
}