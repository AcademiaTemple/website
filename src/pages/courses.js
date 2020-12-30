import React, { useState, useEffect } from "react"
import Card from "../components/cursos/card/card"
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import { obtCursosMuestra } from "../api"

export default function Courses() {

    const [cursos, estCursos] = useState([]);

    useEffect(() => {
        obtCursosMuestra()
            .then(cursos => {
                estCursos(cursos);
            })
    }, []);

    return (
        <div>
            <Navbar />
            <div className="contenedor cuerpo-pagina">
                <h2 className="titulo-seccion mt-5">Ingresa a nuestros cursos</h2>
                <div className="row">
                    {
                        cursos.map((props, index) => (
                            <div key={index} className="col-12 col-md-6 col-lg-4" >
                                <Card {...props} />
                            </div>
                        ))
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}