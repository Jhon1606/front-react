import { useState } from "react";
import { Link } from "react-router-dom";
import { add } from "../../api/cursos";

export default function Create() {

    const [messages, setMessages] = useState('');

    const resetMessage = () => {
        setMessages('');
    }

    const submitAddForm = (e) => {
        resetMessage();
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            hours_max: e.target.hours_max.value
        }
        add(data).then(data => {
            setMessages(data.message)
        });
    }

    return (
        <>
            <h4>Crear nuevo curso</h4>
            <Link to={'/cursos'}>Atras</Link>
            {
                messages ? (
                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>Acción realizada</strong> {messages}
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={resetMessage}></button>
                    </div>
                ) : <></>
            }
            <form method="POST" onSubmit={submitAddForm}>
                <div className="modal-body">
                    <div className="mb-3">
                        <label className="form-label">Nombre </label>
                        <input className="form-control" type="text" name="name" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Horas máximas </label>
                        <input className="form-control" type="number" name="hours_max" required />
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="submit" className="btn btn-primary">Guardar</button>
                </div>
            </form>
        </>
    );
}
