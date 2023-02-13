export default function Cursos() {
  return (
    <>
        <div className="table-responsive">
            <table className="table table-striped table-hover">
                <thead>
                    <th scope="col">Codigo</th>
                    <th scope="col">Nombre</th>
                    <th></th>
                </thead>
                <tbody>
                    <td>001</td>
                    <td>Prueba</td>
                    <td>
                        <button type="button" class="btn btn-sm btn-success mx-2 my-1 text-success" title="Editar"><i class="bi bi-pencil-fill"></i></button>
                        <button type="button" class="btn btn-sm btn-danger mx-2 text-dark" title="Eliminar"><i class="bi bi-trash3"></i> </button>
                    </td>
                </tbody>
            </table>
        </div>
    </>
  )
}