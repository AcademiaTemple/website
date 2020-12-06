import React from "react"
import Card from "./card/card"
import "./testimonios.css"
import AvatarTestimonio from '../../../static/person.svg'
import ImgEstrella from '../../../static/estrella.svg'
import { testimoniosList } from "./testimonios-data"

const testimonios = [
    {
        id: 1,
        nombre: 'Yayo Gonzales',
        cargo: 'Alumno de inglés',
        avatar: AvatarTestimonio,
        contenido: 'Me enseñaron a hablar inglés desde conocimiento cero. Muchas gracias Academia Temple!',
        numEstrellas: 4
    },
    {
        id: 2,
        nombre: 'Mila Luna',
        cargo: 'Alumna de Bootstrap',
        avatar: AvatarTestimonio,
        contenido: 'El mejor lugar para aprender a programar. Yo los amo con todo mi corazón',
        numEstrellas: 5
    }
]

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