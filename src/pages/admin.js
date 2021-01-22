import React, { useState } from "react"
import { navigate } from "gatsby"
import { obtUsuarioStorage } from '../helpers/obtUsuarioStorage'
import Pestanas from '../components/pestanas'
import TablaDocentes from '../components/tabla/docentes'
import TablaCursos from '../components/tabla/cursos'
import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function Admin({ location }) {

    const [usuario] = useState(obtUsuarioStorage());

    // Índice
    const [indPestanaActiva, estIndPestanaActiva] = useState(0);

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
                    <TablaCursos />
                </Pestanas>
            </div>
            <Footer />
        </div>
    )
}