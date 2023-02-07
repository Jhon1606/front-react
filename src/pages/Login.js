import React from 'react';
import '../css/Login.css';
function Login() {
  return (
    <div className='containerPrincipal'>
      <div className='containerSecundario'>
        <div className='form-group'>
          <label>Usuario: </label>
          <br></br>
          <input type='text' className='form-control'></input>
          <br></br>
          <label>Contraseña: </label>
          <br></br>
          <input type='password' className='form-control'></input>
          <br></br>
          <button className='btn btn-primary'>Iniciar Sesion</button>
        </div>
      </div>
    </div>
  )
}

export default Login