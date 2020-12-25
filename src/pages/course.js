import React from "react"
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import { Link } from "gatsby"

export default function Course() {
    return (
        <div>
            <Navbar />
            <div className="contenedor cuerpo-pagina">
                <h2 className="titulo-seccion mt-5 mb-5 text-left titulo-curso">Become a React developer</h2>
                <div className="contenedor-controles-curso">
                    <Link className="boton btn-principal btn-rep-curso d-block" to="/course">
                        <i className="fas fa-play mr-3"></i>
                        Reproducir
                    </Link>
                    <div className="contenedor-data-cursos">
                        <div className="mr-md-5">
                            <i className="fas fa-layer-group"></i>{' '}
                            12 lessons
                        </div>
                        <div>
                            <i className="far fa-clock"></i>{' '}
                            1h 38min
                        </div>
                    </div>
                </div>
                <p className="descripcion-curso">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
            </div>
            <Footer />
        </div>
    )
}