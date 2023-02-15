import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { indexTeachers } from "../../api/profesores";

export default function IndexTeachers() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    indexTeachers().then((data) => {
      setResult(data.result);
    });
  }, []);

  return (
    <>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Documento</th>
              <th scope="col">Nombre</th>
              <th scope="col">Tipo de contrato</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {result.length > 0 ? (
              result.map((profesor) => (
                <tr key={profesor.id}>
                  <td>{profesor.document}</td>
                  <td>
                    {profesor.name} {profesor.last_name}
                  </td>
                  <td>
                    {profesor.contract_type === 1 ? (
                      <>40 Horas</>
                    ) : (
                      <>20 Horas</>
                    )}
                  </td>
                  <td>
                    <Link
                      to={`/profesores/editar/${profesor.id}`}
                      className="btn btn-sm btn-success mx-2 my-1"
                      title="Editar"
                    >
                      <i className="bi bi-pencil-fill"></i>
                    </Link>
                    <button
                      type="button"
                      className="btn btn-sm btn-danger mx-2"
                      title="Eliminar"
                    >
                      <i className="bi bi-trash3"></i>{" "}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <>
                <tr>
                  <td colSpan={4} className="text-center">
                    <div class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                      <small>Es posible que no tenga profesor registrado</small>
                  </td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
