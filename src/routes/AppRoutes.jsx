import { Routes, Route, Navigate } from 'react-router-dom';
import RutaProtegida from './ProtectedRoute.jsx';
import Home from '../pages/home.jsx';
import Login from '../pages/login.jsx';
import Creacion from '../pages/CrudProductos.jsx';
import CategoriaPage from '../pages/CategoryPage.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Redirección inicial */}
      <Route path="/" element={<Navigate to="/home" />} />

      {/* Rutas libres */}
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/categoria/:tipo" element={<CategoriaPage />} />

      {/* Ruta protegida (solo admins) */}
      <Route
        path="/creacion"
        element={
          <RutaProtegida permiso="admin">
            <Creacion />
          </RutaProtegida>
        }
      />
    </Routes>
  );
}
