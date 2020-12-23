import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./carrusel.css"
import Carousel from "react-bootstrap/Carousel"
import { carruselImg } from './carrusel-data'
import { CarouselItem } from "react-bootstrap"

export default function Carrusele(props) {
  return (
    <div className="contenedor-carrusel">
      <Carousel>
        {carruselImg.map((img, index) => (
          <CarouselItem key={index}>
            <img src={img} alt="img-carrusel" />
          </CarouselItem>
        ))}
      </Carousel>
    </div>
  )
}
