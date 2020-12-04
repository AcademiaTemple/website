import React from "react"
import Card from "./card/card"
import "./testimonios.css"
import image from '../../../static/person.svg'
import { testimoniosList } from "./testimonios-data"

export default function Testimonios() {
    const list = testimoniosList
    return (
        <div className="contenedor-testimonios">
            <div className="contenedor contenedor-85">
                <h2 className="titulo-seccion">Nuestros alumnos y docentes</h2>
                <div className="row">
                    {list.map((item, index) => (
                        <div className="col" key={index}>
                            <Card image={image} name={item.name} course={item.course} testimonio={item.testimonio} rating={item.rating} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}