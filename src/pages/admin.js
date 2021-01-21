import React, { useRef, useState, useEffect } from "react"
import { navigate } from "gatsby"
import { obtUsuarioStorage } from '../helpers/obtUsuarioStorage'
import Pestanas from '../components/pestanas'
import ModalEdicionCurso from '../components/modal/edicionCurso'
import TablaDocentes from '../components/tabla/docentes'
import TablaCursos from '../components/tabla/cursos'
import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function Admin({ location }) {

    const [usuario] = useState(obtUsuarioStorage());
    const [cursos, estCursos] = useState([]);
    const [cargandoCursos, estCargandoCursos] = useState(false);

    // Índice
    const [indPestanaActiva, estIndPestanaActiva] = useState(0);

    // Modal
    const refModalEliminacion = useRef(null);
    const refModalEdicionCurso = useRef(null);

    /* useEffect(() => {
         estCargandoCursos(true);
         obtenerCursos();
     }, []);
 
     const editarModalCurso = (registro) => {
         estRegistro(registro);
         $(refModalEdicionCurso.current).modal('show');
     }
 
     const obtenerCursos = () => {
         obtCursosTablaAdmin()
             .then(cursos => {
                 estCursos(cursos);
                 estCargandoCursos(false);
             })
     }
     
     const cerrarModalConfirmacion = () => {
         $(refModalEliminacion.current).modal('hide');
     }     
 
     const cerrarModalEdicionCurso = () => {
         $(refModalEdicionCurso.current).modal('hide');
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
             //obtenerProfesores();
         });
     }
 
     const actualizarEstadoCurso = () => {
         cerrarModalConfirmacion();
         const nuevoEstado = registro.activo ? 0 : 1;
         actEstadoCursoAdmin(registro.id, nuevoEstado).then(() => {
             obtenerCursos();
         });
     }*/


    if (!usuario) {
        navigate('/login');
    }

    return (
        <div>

            <Navbar currentPage={location.pathname} />
            <div className="contenedor cuerpo-pagina">
                <h2 className="titulo-seccion mt-5">Hola admin</h2>
                <Pestanas cargando={false} indice={indPestanaActiva} seleccionar={estIndPestanaActiva} data={['Profesores', 'Cursos']}>
                    <TablaDocentes />
                    <TablaCursos
                        cursos={cursos} />
                </Pestanas>
            </div>
            <Footer />
        </div>
    )
}