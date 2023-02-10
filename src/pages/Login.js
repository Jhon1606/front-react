import React from 'react';
import '../css/Login.css';
function Login() {
  return (

    <div class="container w-75 bg-primary mt-5 rounded shadow">
      <div class="row align-items-stretch">
        <div class="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded"></div>
        <div class="col bg-white p-5 rounded-end" >
          <div class="text-end">
              <img src="" alt=""/>
          </div>
          <h2 class="fw-bold text_center py-5 text-center p-3">Inicio de sesión</h2>
          <form action="" method="POST">
              <div class="mb-4">
                  <label for="usuario" class="form-label"><i class="bi bi-person"></i> Usuario</label>
                  <input type="text" name="usuario" placeholder="Usuario..." class="form-control"/>
              </div>
              <div class="mb-4">
                  <label for="password" class="form-label"><i class="bi bi-lock"></i> Contraseña</label>
                  <input type="password" name="password" placeholder="Contraseña..." class="form-control"/>
              </div>
              <div class="d-grid">
                  <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
              </div>
          </form>
        </div>
    </div>
    </div>
  )
}

export default Login