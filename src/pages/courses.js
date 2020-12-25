import React from "react"
import Card from "../components/cursos/card/card"
import cursos from "../components/cursos/cursos-data.jsx"
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"

export default function Courses() {
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