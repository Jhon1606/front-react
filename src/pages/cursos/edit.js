import { useEffect, useState } from "react";
import { edit, show } from "../../api/cursos";
import { useParams } from 'react-router-dom';
import { indexTeachers } from "../../api/profesores";
import { assignRemove, assignTeacherInCourse } from "../../api/assignment";

export default function Edit() {

    const [ result, setResult ] = useState();
    const [ teachers, setTeachers ] = useState([]);

    const [message, setMessage] = useState('');


    const { id } = useParams();
    
    useEffect(() => {
        show(id).then(data => {
            setResult(data.result);
        });
        indexTeachers().then(data => {
            setTeachers(data.result);
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
            hours_max: e.target.max_hours.value
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
        const teacher_id = e.target.teacher_id.value;
        assignTeacherInCourse(teacher_id, id).then(data => {
            setMessage(data.message)
        });
    }

    return (
        <>
            <h4>Editar curso</h4>
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
                                <label className="form-label">Horas máximas </label>
                                <input type="number" name="max_hours" className="form-control" required defaultValue={result.hours_max}/>
                            </div>
                            <button type="submit" className="btn btn-primary">Guardar</button>
                        </div>
                    </form>

                    <hr className="bg-black"/>

                    <h5>Información Profesor</h5>
                    <div className="row">
                        <div className="col-sm-12">
                          <div className="card">
                          <form  onSubmit={submitAssignForm}>
                            <div className="card-body">
                              <h6 className="card-title">
                                {
                                    result.teachers.length > 0 ? (
                                        result.teachers.map(teacher => (
                                        <div>
                                            <div>
                                                <small className="text-black-50">Nombre: </small> {teacher.name}
                                            </div>
                                            <hr className="bg-dark"/>
                                            <div>
                                                <small className="text-black-50">Apellido: </small> {teacher.last_name}
                                            </div>
                                            <hr className="bg-dark"/>
                                            <div>
                                                <small className="text-black-50">Documento: </small> {teacher.document}
                                            </div>
                                            <hr className="bg-dark"/>
                                            <div>
                                                <small className="text-black-50">Email: </small> {teacher.email}
                                            </div>
                                            <hr className="bg-dark"/>
                                            <div>
                                                <small className="text-black-50">Tipo Contrato: </small> {
                                                    teacher.contract_type === 1 ? (
                                                        <>40 Horas</>
                                                    ): (
                                                        <>20 Horas</>
                                                    )
                                                }
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
                                                    teachers.map(teacher =>(
                                                        <li className="list-group-item">
                                                            <div className="d-flex justify-content-between">
                                                                <div>
                                                                    <small className="text-black-50">Nombres:</small> { teacher.name } {teacher.last_name}
                                                                </div>
                                                                <div>
                                                                    <input type="radio" name="teacher_id" defaultValue={teacher.id}/>Seleccionar
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <small className="text-black-50 mr-1">Horas disponibles:</small>
                                                                {
                                                                    teacher.contract_type === 1 ? (
                                                                        <span className="badge bg-primary">{40 - teacher.laboral_hours}</span>
                                                                    ) : (
                                                                        <span className="badge bg-primary">{20 - teacher.laboral_hours}</span>
                                                                    )
                                                                }
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
                                    result.teachers.length > 0 ? (
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
                <small>Es posible que no tenga este curso registrado</small>
                </>
            )
        }            
        </>
    );
}
