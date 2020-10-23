import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./carrusele.css"
import Img from "gatsby-image"
import Carousel from "react-bootstrap/Carousel"
import { CarouselItem } from "react-bootstrap"

/* import slide01 from "../../img/Banner1.jpg"
 import slide02 from "../../img/Banner2.jpg"
 import slide03 from "../../img/Banner3.jpg"
 import slide04 from "../../img/Banner4.jpg"*/

export default function Carrusele(props) {
  return (
    <div className="content">
      <Carousel>
        <CarouselItem>
          {/* <img className="h-25 d-inline-block d-block w-100" src={slide01} alt="Primero Banner"  /> */}
          <Img fluid={props.imgbanner1} />
        </CarouselItem>

        <CarouselItem>
          {/* <img className="h-25 d-inline-block d-block w-100" src={slide02} alt="Segundo Banner" /> */}
          <Img fluid={props.imgbanner2} />
        </CarouselItem>

        <CarouselItem>
          {/* <img className="h-25 d-inline-block d-block w-100" src={slide03} alt="Tercer Banner" />  */}
          <Img fluid={props.imgbanner2} />
        </CarouselItem>

        <CarouselItem>
          {/* <img className="h-25 d-inline-block d-block w-100" src={slide04} alt="Cuarto Banner" />  */}
          <Img fluid={props.imgbanner4} />
        </CarouselItem>
      </Carousel>
    </div>
  )
}
