import React, { useState } from 'react'
import './pestanas.css'

const Pestanas = ({ data, indice, seleccionar, children }) => {

    const cambiarPestana = (indice) => {
        seleccionar(indice);
    }

    const porcAnchoPestana = 100 / data.length;

    return (
        <div>
            <div className="material-tabs">
                {
                    data.map((pestana, index) => (
                        <a key={index} onClick={() => cambiarPestana(index)} id="tab1-tab" href="#tab1" className="active">{pestana}</a>
                    ))
                }
                <span className="tab-bar" style={{ width: `${porcAnchoPestana}%`, left: `${porcAnchoPestana * indice}%` }}></span>
            </div>
            {
                React.Children.toArray(children)
            }
        </div>
    )
}

export default Pestanas;
