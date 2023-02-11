import React from 'react'
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
                    <span>Dashboard</span></a>
            </li>

            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseProduccion"
                    aria-expanded="true" aria-controls="collapseProduccion">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Producción</span>
                </a>
                <div id="collapseProduccion" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <a className="collapse-item" href="../../../Produccion/Vista/index.php">Producción</a>
                    </div>
                </div>
            </li>

            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>Vehiculos</span>
                </a>
                <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Utilities:</h6>
                        <a className="collapse-item" href="utilities-color.html">Colors</a>
                        <a className="collapse-item" href="utilities-border.html">Borders</a>
                        <a className="collapse-item" href="utilities-animation.html">Animations</a>
                        <a className="collapse-item" href="utilities-other.html">Other</a>
                    </div>
                </div>
            </li> 

            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseComercial"
                    aria-expanded="true" aria-controls="collapseComercial">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Comercial</span>
                </a>
                <div id="collapseComercial" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <a className="collapse-item" href="../../../Comercial/Cliente/Vista/index.php">Clientes</a>
                    </div>
                </div>
            </li>

            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseBasicas"
                    aria-expanded="true" aria-controls="collapseBasicas">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Basicas</span>
                </a>
                <div id="collapseBasicas" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <a className="collapse-item" href="../../../Basicas/Asesor/Vista/index.php">Asesor</a>
                        <a className="collapse-item" href="../../../Basicas/Persona/Vista/index.php">Empleados</a>
                        <a className="collapse-item" href="../../../Basicas/Departamento/Vista/index.php">Departamento</a>
                        <a className="collapse-item" href="../../../Basicas/Ciudad/Vista/index.php">Ciudad</a>
                        <a className="collapse-item" href="../../../Basicas/Estado/Vista/index.php">Estados</a>
                        <a className="collapse-item" href="../../../Basicas/Proceso/Vista/index.php">Procesos</a>
                        <a className="collapse-item" href="../../../Basicas/Producto/Vista/index.php">Productos</a>
                        <a className="collapse-item" href="../../../Basicas/TipoEntrega/Vista/index.php">Tipos de entrega</a>
                        <a className="collapse-item" href="../../../Basicas/Categoria/Vista/index.php">Categorias</a>
                        <a className="collapse-item" href="../../../Basicas/Unidades/Vista/index.php">Unidades</a>
                        <a className="collapse-item" href="../../../Basicas/Insumo/Vista/index.php">Insumos</a>
                        <a className="collapse-item" href="../../../Basicas/Usuarios/Vista/index.php">Usuarios</a>
                        <div className="collapse-divider"></div>
                        <h6 className="collapse-header">Other Pages:</h6>
                        <a className="collapse-item" href="404.html">404 Page</a>
                        <a className="collapse-item" href="blank.html">Blank Page</a>
                    </div>
                </div>
            </li>
            
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseEstadisticas"
                    aria-expanded="true" aria-controls="collapseEstadisticas">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Estadisticas</span>
                </a>
                <div id="collapseEstadisticas" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Login Screens:</h6>
                        <a className="collapse-item" href="login.html">Login</a>
                        <a className="collapse-item" href="register.html">Register</a>
                        <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                        <div className="collapse-divider"></div>
                        <h6 className="collapse-header">Other Pages:</h6>
                        <a className="collapse-item" href="404.html">404 Page</a>
                        <a className="collapse-item" href="blank.html">Blank Page</a>
                    </div>
                </div>
            </li> 

            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseInventarios"
                    aria-expanded="true" aria-controls="collapseInventarios">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Inventarios</span>
                </a>
                <div id="collapseInventarios" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Login Screens:</h6>
                        <a className="collapse-item" href="login.html">Login</a>
                        <a className="collapse-item" href="register.html">Register</a>
                        <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                        <div className="collapse-divider"></div>
                        <h6 className="collapse-header">Other Pages:</h6>
                        <a className="collapse-item" href="404.html">404 Page</a>
                        <a className="collapse-item" href="blank.html">Blank Page</a>
                    </div>
                </div>
            </li> 

            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseAromero"
                    aria-expanded="true" aria-controls="collapseAromero">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Aromero</span>
                </a>
                <div id="collapseAromero" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Login Screens:</h6>
                        <a className="collapse-item" href="login.html">Login</a>
                        <a className="collapse-item" href="register.html">Register</a>
                        <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                        <div className="collapse-divider"></div>
                        <h6 className="collapse-header">Other Pages:</h6>
                        <a className="collapse-item" href="404.html">404 Page</a>
                        <a className="collapse-item" href="blank.html">Blank Page</a>
                    </div>
                </div>
            </li> 

            <li className="nav-item">
                <a className="nav-link" href="charts.html">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Charts</span></a>
            </li> 

            <li className="nav-item">
                <a className="nav-link" href="tables.html">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Tables</span></a>
            </li> 


            <hr className="sidebar-divider d-none d-md-block"/>

            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>
        </ul>
    </>
  )
}

export default Sidebar