import { createContext, useContext, useState, useEffect } from 'react';
import usuarios from '../data/usuarios.js';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  
    useEffect(() => {
     const usuarioGuardado = localStorage.getItem('usuario');
        if (usuarioGuardado) {
            setUsuario(JSON.parse(usuarioGuardado));
        }
    }, []);
    const login = (username, password) => {
        const estaUsuario = usuarios.find(
            (u) => u.username === username && u.password === password
        );

        if (!estaUsuario) { 
            return false;
        }

        const datosUsuario = {
            username: estaUsuario.username,
            permiso: estaUsuario.permiso,
        };
        setUsuario(datosUsuario);
        localStorage.setItem('usuario', JSON.stringify(datosUsuario));
        return true;
    };
    const logout = () => {
        setUsuario(null);
        localStorage.removeItem('usuario');
    };
return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
}