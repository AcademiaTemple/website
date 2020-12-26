import React, { useState } from "react"
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import queryString from 'query-string';
import AcordeonEpisodio from "../components/episodio/acordeon_episodios"

export default function Course(props) {
    const episodioUrl = queryString.parse(props.location.search).episode;

    const [idActivo, estIdActivo] = useState(episodioUrl);

    const seleccionarEpisodio = (id) => {
        estIdActivo(id);
    }

    return (
        <div>
            <Navbar />
            <div className="cuerpo-pagina">
                <div className="contenedor-reproductor">
                    <div className="contenedor-video">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/80chjoMzKa8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; allowfullscreen" allowfullscreen></iframe>
                    </div>
                    <div className="contenedor-acordeon">
                        <AcordeonEpisodio idActivo={idActivo} machucar={seleccionarEpisodio} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}