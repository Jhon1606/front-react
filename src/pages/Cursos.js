import React, {useState} from 'react'

function Tabla() {
  return (
    <>
        <div className="container-fluid">
            <h2>Insumos</h2>
            <div className="col p-2">
                <a href="javascript:void(0);" onClick="modalAgregar('Insumo')" ><button type="button" className="btn btn-info" title="Añadir"><i className="bi bi-plus-lg"></i> Agregar Insumo </button></a> 
            </div>

            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Codigo</th>
                            <th scope="col"></th> 
                        </tr>
                    </thead>

                    <tbody>
                    
                        <tr>
                            <td>1</td>
                            <td style="text-align:right;">
                                <a href="javascript:void(0);" onClick="modalEditarInsumo('')"><button type="button" className="btn btn-sm btn-success my-1" title="Editar"><i className="bi bi-pencil-fill"></i> </button></a>
                                <a href="javascript:void(0);" onClick="modalEliminar('')"><button type="button" className="btn btn-sm btn-danger" title="Eliminar"><i className="bi bi-trash3"></i> </button></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default Tabla