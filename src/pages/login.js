import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import { obtCursosMuestra, iniciarSesion, obtUsuario } from "../api"
import { obtUsuarioStorage } from '../helpers/obtUsuarioStorage';

export default function Login({ location }) {

    const [cursos, estCursos] = useState([]);
    const [correo, estCorreo] = useState('');
    const [contrasena, estContrasena] = useState('');
    //const [usuario, estUsuario] = useState(null);
    const [usuario] = useState(obtUsuarioStorage());

    useEffect(() => {
        obtCursosMuestra()
            .then(data => {
                estCursos(data);
            });
    }, []);

    /*useEffect(() => {
        obtUsuario()
            .then(usuario => {
                console.log(usuario)
                estUsuario(usuario);
            })
    }, []);*/

    const manejarCampoCorreo = (ev) => {
        estCorreo(ev.target.value);
    }

    const manejarCampoContrasena = (ev) => {
        estContrasena(ev.target.value);
    }

    const ingresar = (e) => {
        if (correo && contrasena) {
            e.preventDefault();
            iniciarSesion(correo, contrasena)
                .then(usuario => {
                    if (usuario) {
                        localStorage.setItem('usuario', usuario);
                        navigate('/admin');
                    } else {
                        alert('Usuario inexistente');
                    }
                })
                .catch(error => {
                    alert('Usuario inválido');
                })
        } else {
            alert('Hay campos vacíos')
        }
    }

    if (usuario) {
        navigate('/admin');
    }

    return (
        <div>
            <Navbar />
            <div className="contenedor cuerpo-pagina">
                <h2 className="titulo-seccion mt-5">Iniciar sesión</h2>

                <form onSubmit={ingresar}>
                    <div class="form-group form-group-login">
                        <label for="exampleInputEmail1">Correo</label>
                        <input value={correo} onChange={manejarCampoCorreo} type="email" class="form-control" id="exampleInputEmail1" placeholder="Ingresa tu usuario" />
                    </div>
                    <div class="form-group form-group-login">
                        <label for="exampleInputPassword1">Contraseña</label>
                        <input value={contrasena} onChange={manejarCampoContrasena} type="password" class="form-control" id="exampleInputPassword1" placeholder="**********************" />
                    </div>
                    <button type='submit' target="_blank" className="boton btn-principal btn-rep-curso d-block mt-5" to={'/'}>
                        <i className="fas fa-sign-in-alt mr-3"></i>
                        Ingresar
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    )
}