import React from "react"
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import AcordeonEpisodio from "../components/episodio/acordeon_episodios"
import { navigate } from "gatsby"
import { Link } from "gatsby"

export default function Course() {

    const navegar = (id) => {
        navigate(`/course-player/?episode=${id}`);
    }

    return (
        <div>
            <Navbar />
            <div className="contenedor contenedor-60 cuerpo-pagina">
                <h2 className="titulo-seccion mt-5 mb-5 text-left titulo-curso">Become a React developer</h2>
                <div className="contenedor-controles-curso">
                    <Link className="boton btn-principal btn-rep-curso d-block" to="/course">
                        <i className="fas fa-edit mr-3"></i>
                        Inscribirme
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
                <h3 className="subtitulo-descripcion-curso">¿Qué aprenderás?</h3>
                <p className="descripcion-curso">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div className="contenedor-curso-profesor">
                    <div className="contenedor-img">
                        <img src="/docentes/corazoncita.jpg" alt="img-profesor" />
                    </div>
                    <div className="contenedor-descripcion">
                        <h4>
                            Mila Luna
                    </h4>
                        <p className="descripcion-curso">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    </div>
                </div>
                <h3 className="subtitulo-descripcion-curso">Lista de clases</h3>
                <AcordeonEpisodio machucar={navegar} />
            </div>
            <Footer />
        </div>
    )
}