import React from 'react';
import './estilo.css';

const Login = () => {
  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <form>
        <div>
          <label htmlFor="username">Usuario:</label>
          <input type="text" id="username" />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" />
        </div>
        <div>ya tienes cuenta?</div>
        <button type="submit" className="login-button">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;

