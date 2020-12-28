import React, { useState, useEffect } from "react"
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import queryString from 'query-string';
import AcordeonEpisodio from "../components/episodio/acordeon_episodios"
import Plyr from 'plyr';
import { episodios } from '../components/episodio/episodios-data';

export default function Course(props) {
    const episodioUrl = queryString.parse(props.location.search).episode;

    const [idActivo, estIdActivo] = useState(1);
    const [urlVideo, estUrlVideo] = useState('');

    const seleccionarEpisodio = (id) => {
        estIdActivo(id);
    }

    useEffect(() => {
        const player = new Plyr('#player', {
            controls: ['play-large', 'play', 'progress', 'current-time', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen'],
            tooltips: { controls: false, seek: false }
        });
        window.player = player;
    }, [])

    useEffect(() => {
        const episodio = episodios.find(episodio => episodio.id === idActivo);
        if (episodio) {
            estUrlVideo(`https://www.youtube.com/embed/${urlVideo}?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1`);
        }
    }, [idActivo, urlVideo])

    return (
        <div>
            <Navbar />
            <div className="cuerpo-pagina">
                <div className="contenedor-reproductor">
                    <div className="contenedor-video">
                        <div className="plyr__video-embed" id="player">
                            <iframe
                                width="100%"
                                frameborder="0"
                                src={urlVideo}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="contenedor-acordeon">
                        <AcordeonEpisodio
                            episodios={episodios}
                            idActivo={idActivo}
                            machucar={seleccionarEpisodio} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}