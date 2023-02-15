import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { index } from "../../api/cursos";
import { edit, show } from "../../api/profesores"
import { assignRemove, assignTeacherInCourse } from '../../api/assignment'

export default function EditTeacher() {

    const [ result, setResult ] = useState();
    const [ courses, setCourses ] = useState([]);

    const [message, setMessage] = useState('');


    const { id } = useParams();
    
    useEffect(() => {
        show(id).then(data => {
            setResult(data.result);
        });
        index().then(data => {
            setCourses(data.result);
        });
    }, []);

    const resetMessage = () => {
        setMessage('');
    }

    const submitEditForm = (e) => {
        resetMessage();
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            last_name: e.target.last_name.value,
            document: e.target.document.value,
            email: e.target.email.value,
            contract_type: e.target.contract_type.value
        }
        edit(id, data).then(data => {
            setMessage(data.message)
        });
    }

    const removerAsignacion = (e) => {
        resetMessage()
        e.preventDefault();
        const id = result.assigment.id;
        assignRemove(id).then(data => {
            setMessage(data.message);
        });
    }

    const submitAssignForm = (e) => {
        resetMessage();
        e.preventDefault();
        const course_id = e.target.course_id.value;
        assignTeacherInCourse(id, course_id).then(data => {
            setMessage(data.message)
        });
    }

    return (
        <>
            <h4>Editar Profesor</h4>
        {
            result != null ? (
                <>
                    <form method="POST" onSubmit={submitEditForm}>
                        {
                            message ? (
                                <div className="alert alert-success alert-dismissible fade show" role="alert">
                                    <strong>Acción realizada</strong> {message}
                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={resetMessage}></button>
                                </div>
                            ) : <></>
                        }
                        <div className="modal-body">
                            <div className="mb-3">
                                <label className="form-label">Nombre </label>
                                <input type="text" name="name" className="form-control" required defaultValue={result.name}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Apellido </label>
                                <input type="text" name="last_name" className="form-control" required defaultValue={result.last_name}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Documento </label>
                                <input type="text" name="document" className="form-control" required defaultValue={result.document}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email </label>
                                <input type="text" name="email" className="form-control" required defaultValue={result.email}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Tipo Contraro </label>
                                <br />
                                <input type="radio" name="contract_type" className="ml-1" defaultChecked={result.contract_type === 1} value={1}/> 40 Horas --
                                <input type="radio" name="contract_type" className="ml-1" defaultChecked={result.contract_type === 2} value={2}/> 20 Horas
                            </div>
                            <button type="submit" className="btn btn-primary">Guardar</button>
                        </div>
                    </form>

                    <hr className="bg-black"/>

                    <h5>Información Curso</h5>
                    <div className="row">
                        <div className="col-sm-12">
                          <div className="card">
                          <form  onSubmit={submitAssignForm}>
                            <div className="card-body">
                              <h6 className="card-title">
                                {
                                    result.courses.length > 0 ? (
                                        result.courses.map(curso => (
                                        <div>
                                            <div>
                                                <small className="text-black-50">Nombre Curso: </small> {curso.name}
                                            </div>
                                            <hr className="bg-dark"/>
                                            <div>
                                                <small className="text-black-50">Horas Maximas: </small> {curso.hours_max}
                                            </div>
                                        </div>
                                        ))
                                    ) : (
                                        <>
                                        <div>
                                            Sin profesor asignado, seleccione uno de la lista
                                        </div>
                                        <ul className="list-group mt-3">
                                                {
                                                    courses.map(curso =>(
                                                        <li className="list-group-item">
                                                            <div className="d-flex justify-content-between">
                                                                <div>
                                                                    <small className="text-black-50">Nombre curso:</small> { curso.name } {curso.last_name}
                                                                </div>
                                                                <div>
                                                                    <input type="radio" name="course_id" defaultValue={curso.id}/>Seleccionar
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <small className="text-black-50 mr-1">Horas Maximas: <span className="badge bg-primary">{curso.hours_max}</span>
                                                                </small>
                                                            </div>
                                                        </li>
                                                    ))
                                                }
                                        </ul>
                                        </>
                                    ) 
                                }
                              </h6>
                            </div>
                            <div className="modal-footer">
                                {
                                    result.courses.length > 0 ? (
                                       <button type="button" onClick={removerAsignacion} className="btn btn-danger">Eliminar Asignación</button>
                                    ) : (
                                       <button type="submit" className="btn btn-primary">Guardar Asignación</button>
                                    )
                                }
                            </div>
                          </form>
                          </div>
                        </div>
                    </div>  
                </>
            ) : (
                <>
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                    <small>Es posible que no tenga este profesor registrado</small>
                </>
            )
        }            
        </>
    );
}
