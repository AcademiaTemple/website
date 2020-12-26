import React, { useState } from 'react'
import CardEpisodio from './card/card_episodio';
import { episidios } from './episodios-data';

const AcordeonEpisodio = ({ idActivo, machucar, episodios = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }] }) => {

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