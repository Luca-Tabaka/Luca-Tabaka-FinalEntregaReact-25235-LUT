import { Navigate } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";

const RutaProtegida = ({ children, permiso }) => {
  const { usuario } = useAuth();
  

  //si no se esta autenticado se redirige al login
  if (!usuario) {
    return <Navigate to="/login" />;
  }
if (permiso && usuario.permiso !== permiso) return <Navigate to="/Home" />;

  //si esta todo correcto envia a la ruta deseada
  return children;
};

export default RutaProtegida;  