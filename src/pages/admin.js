import React, { useRef, useState, useEffect } from "react"
import { navigate } from "gatsby"
import { obtUsuarioStorage } from '../helpers/obtUsuarioStorage'
import { obtProfesoresAdmin, obtCursosAdmin, actEstadoProfesorAdmin, actEstadoCursoAdmin } from '../api'
import Pestanas from '../components/pestanas'
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import $ from 'jquery';

export default function Admin({ location }) {

    const [usuario] = useState(obtUsuarioStorage());
    const [profesores, estProfesores] = useState([]);
    const [cargandoProfesores, estCargandoProfesores] = useState(false);
    const [cursos, estCursos] = useState([]);
    const [cargandoCursos, estCargandoCursos] = useState(false);
    const [registro, estRegistro] = useState(null); // Establece el registro seleecionado para hacer ediciones o eliminaciones

    // Índice
    const [indPestanaActiva, estIndPestanaActiva] = useState(0);

    // Modal
    const refModalEliminacion = useRef(null);

    useEffect(() => {
        estCargandoProfesores(true);
        obtenerProfesores();
    }, []);

    useEffect(() => {
        estCargandoCursos(true);
        obtenerCursos();
    }, []);

    const confirmarModal = (registro) => {
        estRegistro(registro);
        $(refModalEliminacion.current).modal('show');
    }

    const obtenerCursos = () => {
        obtCursosAdmin()
            .then(cursos => {
                estCursos(cursos);
                estCargandoCursos(false);
            })
    }

    const obtenerProfesores = () => {
        obtProfesoresAdmin()
            .then(profesores => {
                estProfesores(profesores);
                estCargandoProfesores(false);
            })
    }

    const cerrarModalConfirmacion = () => {
        $(refModalEliminacion.current).modal('hide');
    }

    const actualizarEstadoRegistro = () => {
        switch (registro.tipo) {
            case 'PROFESOR':
                actualizarEstadoProfesor();
                break;

            case 'CURSO':
                actualizarEstadoCurso();
                break;
        }
    }

    const actualizarEstadoProfesor = () => {
        cerrarModalConfirmacion();
        const nuevoEstado = registro.activo ? 0 : 1;
        actEstadoProfesorAdmin(registro.id, nuevoEstado).then(() => {
            obtenerProfesores();
        });
    }

    const actualizarEstadoCurso = () => {
        cerrarModalConfirmacion();
        const nuevoEstado = registro.activo ? 0 : 1;
        actEstadoCursoAdmin(registro.id, nuevoEstado).then(() => {
            obtenerCursos();
        });
    }


    if (!usuario) {
        navigate('/login');
    }

    return (
        <div>
            <div ref={refModalEliminacion} className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true" id="mi-modal">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Eliminar</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ¿Quieres {registro?.activo ? ' desactivar' : ' activar'} este registro?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" onClick={actualizarEstadoRegistro}>Sí</button>
                            <button type="button" className="btn btn-primary" onClick={cerrarModalConfirmacion}>No</button>
                        </div>
                    </div>
                </div>
            </div>

            <Navbar currentPage={location.pathname} />
            <div className="contenedor cuerpo-pagina">
                <h2 className="titulo-seccion mt-5">Hola admin</h2>
                <Pestanas indice={indPestanaActiva} seleccionar={estIndPestanaActiva} data={['Profesores', 'Cursos']}>
                    {
                        cargandoProfesores
                            ?
                            'Cargando...'
                            :
                            <>
                                {
                                    indPestanaActiva == 0
                                        ?
                                        <div className="table-responsive-md">
                                            <table className="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Nombres</th>
                                                        <th scope="col">Apellidos</th>
                                                        <th scope="col">Activo</th>
                                                        <th scope="col">Acciones</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        profesores.map((profesor, indice) => (
                                                            <tr key={profesor.id} className={profesor.activo ? '' : 'table-danger'}>
                                                                <th scope="row">{indice + 1}</th>
                                                                <td>{profesor.nombres}</td>
                                                                <td>{profesor.apellidos}</td>
                                                                <td>{profesor.activo ? 'Sí' : 'No'}</td>
                                                                <td>
                                                                    <button onClick={() => estRegistro(profesor)} className='btn btn-secondary'>
                                                                        <i className='fa fa-edit'></i>
                                                                    </button>
                                                                    {
                                                                        profesor.activo
                                                                            ?
                                                                            <button onClick={() => confirmarModal({ ...profesor, tipo: 'PROFESOR' })} className='btn btn-danger ml-3'>
                                                                                <i className='fa fa-power-off'></i>
                                                                            </button>
                                                                            :
                                                                            <button onClick={() => confirmarModal({ ...profesor, tipo: 'PROFESOR' })} className='btn btn-success ml-3'>
                                                                                <i className='fa fa-power-off'></i>
                                                                            </button>
                                                                    }
                                                                </td>
                                                            </tr>
                                                        ))
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                        :
                                        indPestanaActiva == 1
                                            ?
                                            <div className="table-responsive-md">
                                                <table className="table table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">#</th>
                                                            <th scope="col">Título</th>
                                                            <th scope="col">Profesor</th>
                                                            <th scope="col">Acciones</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            cursos.map((curso, indice) => (
                                                                <tr key={curso.id} className={curso.activo ? '' : 'table-danger'}>
                                                                    <th scope="row">{indice + 1}</th>
                                                                    <td>{curso.titulo}</td>
                                                                    <td>{curso.profesor.nombres} {curso.profesor.apellidos}</td>
                                                                    <td>
                                                                        <button onClick={() => estRegistro(curso)} className='btn btn-secondary'>
                                                                            <i className='fa fa-edit'></i>
                                                                        </button>
                                                                        {
                                                                            curso.activo
                                                                                ?
                                                                                <button onClick={() => confirmarModal({ ...curso, tipo: 'CURSO' })} className='btn btn-danger ml-3'>
                                                                                    <i className='fa fa-power-off'></i>
                                                                                </button>
                                                                                :
                                                                                <button onClick={() => confirmarModal({ ...curso, tipo: 'CURSO' })} className='btn btn-success ml-3'>
                                                                                    <i className='fa fa-power-off'></i>
                                                                                </button>
                                                                        }
                                                                    </td>
                                                                </tr>
                                                            ))
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                            :
                                            null
                                }
                            </>
                    }
                </Pestanas>
            </div>
            <Footer />
        </div>
    )
}