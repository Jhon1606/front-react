import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Sb-admin-2.css'
import '../css/Sb-admin-2.min.css'

function Sidebar() {
  return (
    <>
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <Link to={'/'} className="sidebar-brand d-flex align-items-center justify-content-center">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">ClassRoom</div>
            </Link>
            
            <hr className="sidebar-divider my-0"/>
            
            <li className="nav-item active">
                <Link to={'/'} className="nav-link">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Inicio</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link to={'/cursos'} className="nav-link">
                    <i class="fa fa-book"></i>
                    <span>Cursos</span>
                </Link>           
            </li>
            <li className="nav-item">
                <Link to={'/profesores'} className="nav-link">
                    <i class="fa fa-user"></i>
                    <span>Profesores</span>
                </Link>           
            </li>
            <li className="nav-item">
                <Link to={'/asignaciones'} className="nav-link">
                    <i class="fa fa-paperclip"></i>
                    <span>Asignación</span>
                </Link>           
            </li>

            <button className="btn btn-danger m-2" type="button">Cerrar Sesión</button>
        </ul>
    </>
  )
}

export default Sidebar