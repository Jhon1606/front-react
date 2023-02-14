<div className="modal fade" tabindex="-1" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Añadir Profesor</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="../Controlador/add.php" method="POST">
                <div className="modal-body">
                    <div className="mb-3">       
                        <label className="form-label">Documento </label>
                        <input className="form-control" type="text" required=""/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Nombre: </label>
                        <input className="form-control" type="text" required=""/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Apellido: </label>
                        <input className="form-control" type="text" required=""/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email: </label>
                        <input className="form-control" type="email" required=""/>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"> Cerrar</button>
                    <button type="submit" className="btn btn-primary">Guardar</button>
                </div>
            </form>
        </div>
    </div>
</div>