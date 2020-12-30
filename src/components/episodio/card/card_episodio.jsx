import React from 'react'
import './card_episodio.css'

const CardEpisodio = ({ indice, idActivo, machucar, episodio }) => {

    let estilos = "contenedor-episodio";

    if (idActivo == episodio.id) {
        estilos += " episodio-seleccionado";
    }

    return (
        <div onClick={() => machucar(episodio.id, episodio.urlVideo)} className={estilos}>
            <div className="titulo">
                <span>
                    {indice + 1}
                </span>
                <h4>
                    {episodio.titulo ? episodio.titulo : 'Clase ' + (indice + 1)}
                </h4>
            </div>
            <div className="descripcion">
                <p>
                    {episodio.descripcion ? episodio.descripcion : 'Sin descripción disponible'}
                </p>
                <span>
                    {episodio.duracion}
                </span>
            </div>
        </div>
    )
}

export default CardEpisodio;