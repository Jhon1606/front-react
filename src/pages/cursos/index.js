import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {deleteData, index} from "../../api/cursos";

export default function Index() {

    const [result, setResult] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        index().then(data => {
            setResult(data.result);
        });
    }, []);

    const deleteCourse = (id) => {
        deleteData(id).then(data => {
            setMessage('');
        });
    }

    const resetMessage = () => {
        setMessage('');
    }

    return (
        <>
            <div className="table-responsive">
                <Link to={'/cursos/crear'}>Añadir nuevo curso</Link>
                {
                message ? (
                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>Acción realizada</strong>
                        {message}
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"
                            onClick={resetMessage}></button>
                    </div>
                ) : <></>
            }
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Código</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Horas Máximas</th>
                            <th scope="col">Opciones</th>
                        </tr>
                    </thead>
                    <tbody> {
                        result.length > 0 ? (result.map((curso) => <tr key={
                            curso.id
                        }>
                            <td>{
                                curso.id
                            }</td>
                            <td>{
                                curso.name
                            }</td>
                            <td>{
                                curso.hours_max
                            }</td>
                            <td>
                                <Link to={
                                        `/cursos/editar/${
                                            curso.id
                                        }`
                                    }
                                    className="btn btn-sm btn-success mx-2 my-1"
                                    title="Editar">
                                    <i className="bi bi-pencil-fill"></i>
                                </Link>
                                <button type="button" className="btn btn-sm btn-danger mx-2" title="Eliminar">
                                    <i className="bi bi-trash3"></i>
                                </button>
                            </td>
                        </tr>)) : (
                            <>
                                <tr>
                                    <td colSpan={4}
                                        className="text-center">
                                        <div class="spinner-border" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                            <small>Es posible que no tenga cursos registrados</small>
                                    </td>
                                </tr>
                            </>
                        )
                    } </tbody>
                </table>
            </div>
        </>
    )
}
