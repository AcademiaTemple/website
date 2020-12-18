import React from "react"
import "./testimonios.css"
import ImgEstrella from '../../../static/estrella.svg'
import { testimonios } from "./testimonios-data"

export default function Testimonios() {
    //const list = testimoniosList  

    return (
        <section className="seccion">
            <div className="contenedor contenedor-85">
                <h2 className="titulo-seccion">¿Qué opinan de nosotros?</h2>
                <div className="testimonios">
                    {
                        testimonios.map(e => (
                            <div key={e.id} className="testimonio">
                                <img src={e.avatar} alt="img-testimonio" />
                                <div className="datos-usuario-testimonio">
                                    <h3>{e.nombre}</h3>
                                    <p>{e.cargo}</p>
                                </div>
                                <p className="texto-testimonio">{e.contenido}</p>
                                <div className="calificacion-testimonio">
                                    {
                                        Array(e.numEstrellas).fill().map(ee => (
                                            <img src={ImgEstrella} alt="img-estrella" />
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}