import React, { useState } from 'react'
import CardEpisodio from './card/card_episodio';

const AcordeonEpisodio = ({ idActivo, machucar, episodios }) => {

    const seleccionarEpisodio = (id, urlVideo) => {
        machucar(id, urlVideo);
    }

    return episodios.map((episodio, index) => (
        <CardEpisodio
            key={episodio.id}
            indice={index}
            idActivo={idActivo}
            episodio={episodio}
            machucar={seleccionarEpisodio} />
    ))
}

export default AcordeonEpisodio;