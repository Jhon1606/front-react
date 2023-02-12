import React, { useState } from 'react';
import { login } from '../api/auth';
import {useForm} from '../hooks/useForm';

import '../css/Login.css';

function Login() {
    
    const {form, changed} = useForm({});
    const [message, setMessage] = useState('');
    
    const submitLoginForm = (e) => {
        e.preventDefault()
        login(form).then(data => {
            setMessage(data)
        });
    }

    return (
        <div className="container w-75 bg-primary mt-5 rounded shadow">
            <div className="row align-items-stretch">
                <div className="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded"></div>
                <div className="col bg-white p-5 rounded-end">
                    <div className="text-end">
                        <img src="" alt=""/>
                    </div>
                    <h2 className="fw-bold text_center py-5 text-center p-3">Inicio de sesión</h2>
                    <form method="POST" onSubmit={ submitLoginForm }>
                        <div className="mb-4">
                            <label htmlFor="usuario" className="form-label">
                                <i className="bi bi-person"></i>
                                Email
                            </label>
                            <input type="email" name="email" placeholder="Correo electronico..." className="form-control" onChange={changed} required/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="form-label">
                                <i className="bi bi-lock"></i>
                                Contraseña
                            </label>
                            <input type="password" name="password" placeholder="Contraseña..." className="form-control" onChange={changed} required/>
                        </div>
                        <Message message={message}/>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

function Message(props){
    const {message} = props;
    if(message){
        return(
            <div className='mb-4 alert alert-danger'>
                <div>{message}</div>
            </div> 
        );
    };
};

export default Login
