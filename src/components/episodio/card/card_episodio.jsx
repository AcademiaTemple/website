import React from 'react'
import './card_episodio.css'

const CardEpisodio = ({ idActivo, machucar, episodio }) => {

    let estilos = "contenedor-episodio";

    if (idActivo == episodio.id) {
        estilos += " episodio-seleccionado";
    }
    
    return (
        <div onClick={() => machucar(episodio.id)} className={estilos}>
            <div className="titulo">
                <span>
                    1
                </span>
                <h4>
                    {episodio.titulo}
                </h4>
            </div>
            <div className="descripcion">
                <p>
                    {episodio.descripcion}
                </p>
                <span>
                    9:28
                </span>
            </div>
        </div>
    )
}

export default CardEpisodio;