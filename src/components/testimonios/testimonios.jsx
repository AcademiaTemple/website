import React from "react"
import Card from "./card/card"
import "./testimonios.css"
import image from '../../../static/person.svg'
import { testimoniosList } from "./testimonios-data"

export default function Testimonios() {
    const list = testimoniosList
    return (
        <div className="container container-testimonios">
            <div className="row">
                <div className="col">
                    <p className="titulo"><span>Nuestros</span> alumnos y docentes</p>
                </div>
            </div>
            <div className="row">
                {list.map((item, index) => (
                    <div className="col" key={index}>
                        <Card image={image} name={item.name} course={item.course} testimonio={item.testimonio} rating={item.rating} />
                    </div>
                ))}
            </div>
        </div>
    )
}