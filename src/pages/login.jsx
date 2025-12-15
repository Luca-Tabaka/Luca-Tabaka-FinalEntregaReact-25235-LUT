import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [validado, setValidado] = useState(false); //control para verificar el mal envio de datos

  const handleSubmit = e => {
    e.preventDefault();
    if (username.trim() === '' || password.trim() === '') { // verifica campos vacios y si hay da error
      setValidado(true);
      return;
    }

    const success = login(username, password);
    if (success) {
      navigate('/Home');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4 text-danger fw-bold">Iniciar Sesión en Mondo Bebible</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label className="form-label">Usuario</label>
            <input
              type="text"
              className={`form-control ${validado && username.trim() === '' ? 'is-invalid' : ''}`}
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Ingrese su usuario"
            />
            <div className="invalid-feedback"> {/* muestra el mensaje si esta invalido */}
              Por favor ingrese su usuario.
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className={`form-control ${validado && password.trim() === '' ? 'is-invalid' : ''}`}
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Ingrese su contraseña"
            />
            <div className="invalid-feedback">
              Por favor ingrese su contraseña.
            </div>
          </div>
          {/* Boton para iniciar sesion */}
          <button type="submit" className="btn btn-danger w-100 fw-bold">
            Ingresar
          </button>

          {error && (
            <div className="alert alert-danger text-center mt-3 mb-0">
              {error} {/* muestra si hay error en los datos */}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
