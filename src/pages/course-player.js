import React, { useState, useEffect } from "react"
import Plyr from 'plyr'
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import queryString from 'query-string'
import AcordeonEpisodio from "../components/episodio/acordeon_episodios"
import { obtClasesCurso } from '../api'

const construirUrlVideo = (urlVideo) => {
    return `https://www.youtube.com/embed/${urlVideo}?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1`;
}

export default function Course(props) {
    const { id: idCurso, episode: idEpisodio } = queryString.parse(props.location.search);

    const [episodios, estEpisodios] = useState([]);
    const [cargandoEpisodios, estCargandoEpisodios] = useState(true);
    const [urlVideo, estUrlVideo] = useState('');
    const [idVideo, estIdVideo] = useState(idEpisodio);

    const obtUrlPorIdVideo = (episodios, idEpisodio) => {
        const encontrado = episodios.find(e => e.id == idEpisodio);
        return encontrado && encontrado.urlVideo;
    }

    const seleccionarEpisodio = (id, urlVideo) => {
        estIdVideo(id);
        estUrlVideo(construirUrlVideo(urlVideo));
    }

    useEffect(() => {
        estCargandoEpisodios(true);
        obtClasesCurso(idCurso)
            .then(episodios => {
                estEpisodios(episodios);
                estUrlVideo(construirUrlVideo(obtUrlPorIdVideo(episodios, idEpisodio)));
                estCargandoEpisodios(false);
            })
    }, [idCurso])

    useEffect(() => {
        const player = new Plyr('#player', {
            controls: ['play-large', 'play', 'progress', 'current-time', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen', 'quality'],
            tooltips: { controls: false, seek: false },
            settings: ['captions', 'quality', 'speed', 'loop']
        });
        window.player = player;
    }, [urlVideo]);

    return (
        <div>
            <Navbar />
            <div className="cuerpo-pagina">
                <div className="contenedor-reproductor">
                    <div className="contenedor-video">
                        <div key={idVideo} className="plyr__video-embed" id="player">
                            <iframe
                                width="100%"
                                frameBorder="0"
                                src={urlVideo}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="contenedor-acordeon">
                        <AcordeonEpisodio
                            episodios={episodios}
                            idActivo={idVideo}
                            machucar={seleccionarEpisodio} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}