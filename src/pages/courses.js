import React, { useState, useEffect } from "react"
import Card from "../components/cursos/card/card"
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import GridLoader from "react-spinners/GridLoader"
import { css } from "@emotion/core"
import { obtCursosMuestra } from "../api"

const override = css`
  display: block;
  margin: 20px auto;
  background-color: 'green';
`;

export default function Courses() {

    const [cursos, estCursos] = useState([]);
    const [cargando, estCargando] = useState(false);

    useEffect(() => {
        estCargando(true);
        obtCursosMuestra()
            .then(data => {
                estCursos(data);
                estCargando(false);
            });
    }, []);

    return (
        <div>
            <Navbar />
            <div className="contenedor cuerpo-pagina">
                <h2 className="titulo-seccion mt-5">Ingresa a nuestros cursos</h2>
                <div className="row">
                    <GridLoader css={override} loading={cargando} size={20} />
                    {
                        cursos.map((props, index) => (
                            <div key={index} className="col-12 col-md-6 col-lg-4" >
                                    <Card {...props} />
                            </div>
                        ))
                    }
                    {

                        !cargando && !cursos.length
                        &&
                        <p>No hay profesores</p>
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}