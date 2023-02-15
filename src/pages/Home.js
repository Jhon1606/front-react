import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <>
            <div>Hola Bienvenido</div>
            <div class="row">
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Administración de profesores</h5>
                            <p class="card-text">Administre toda la informacion de los profesores</p>
                            <Link to={'/profesores'} class="btn btn-primary">Ir</Link>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Administración de cursos</h5>
                            <p class="card-text">Administre toda la informacion de los cursos</p>
                            <Link to={'/cursos'} class="btn btn-primary">Ir</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
