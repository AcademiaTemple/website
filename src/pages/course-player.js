import React, { useState, useEffect } from "react"
import Plyr from 'plyr'
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import AcordeonEpisodio from "../components/episodio/acordeon_episodios"
import { episodios } from '../components/episodio/episodios-data'

export default function Course(props) {
    //const episodioUrl = queryString.parse(props.location.search).episode;
    const [urlVideo, estUrlVideo] = useState('');
    const [idVideo, estIdVideo] = useState('');

    const seleccionarEpisodio = (id, link) => {
        estIdVideo(id);
        estUrlVideo(`https://www.youtube.com/embed/${link}?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1`);        
    }

    useEffect(() => {
        const player = new Plyr('#player', {
            controls: ['play-large', 'play', 'progress', 'current-time', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen'],
            tooltips: { controls: false, seek: false }
        });
        window.player = player;
    }, []);

    return (
        <div>
            <Navbar />
            <div className="cuerpo-pagina">
                <div className="contenedor-reproductor">
                    <div className="contenedor-video">
                        <div className="plyr__video-embed" id="player">
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