import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Sb-admin-2.css'
import '../css/Sb-admin-2.min.css'

function Sidebar() {
  return (
    <>
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>
            
            <hr className="sidebar-divider my-0"/>
            
            <li className="nav-item active">
                <a className="nav-link" href="index.html">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </a>
            </li>

            <li className="nav-item">
                <Link to={'/cursos'}>Cursos</Link>
            </li>
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseProduccion"
                    aria-expanded="true" aria-controls="collapseProduccion">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Profesores</span>
                </a>           
            </li>
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseProduccion"
                    aria-expanded="true" aria-controls="collapseProduccion">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Asignación</span>
                </a>           
            </li>

            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>
        </ul>
    </>
  )
}

export default Sidebar