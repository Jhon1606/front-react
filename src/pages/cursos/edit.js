export default function Edit() {
    return (
        <>
            <h4>Editar curso</h4>
            <form action="" method="POST">
                <div className="modal-body">
                    <div className="mb-3">
                        <label className="form-label">Nombre </label>
                        <input className="form-control" type="text" required="" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Horas máximas </label>
                        <input className="form-control" type="number" required="" />
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="submit" className="btn btn-primary">Guardar</button>
                </div>
            </form>
        </>
    );
}
