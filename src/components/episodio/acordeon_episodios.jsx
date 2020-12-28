import React, { useState } from 'react'
import CardEpisodio from './card/card_episodio';

const AcordeonEpisodio = ({ idActivo, machucar, episodios }) => {

    const seleccionarEpisodio = (id) => {
        machucar(id);
    }

    return episodios.map(episodio => (
        <CardEpisodio
            key={episodio.id}
            idActivo={idActivo}
            episodio={episodio}
            machucar={seleccionarEpisodio} />
    ))
}

export default AcordeonEpisodio;