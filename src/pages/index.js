import React from "react"
import { Link } from "gatsby"

// Componentes
import Navbar from "../components/navbar/navbar"
import CalendarA from "../components/calendar/CalendarA"
import PanoramaInicio from "../components/PanoramaInicio/panorama"
import Estadisticas from '../components/estadisticas/estadisticas'
import NuestrosCursos from '../components/nuestroscursos/nuestroscursos'
import Testimonios from "../components/testimonios/testimonios"
import Footer from "../components/footer/footer"

// Estilos
import "./index.css"

export default function Home() {
  return (
    <div>
      <Navbar />
      <PanoramaInicio />
      <Estadisticas />
      <h4 className='txt-subtitle txt-our-courses'>¡Nuestros cursos!</h4>
      <NuestrosCursos />
      <h4 className='txt-subtitle txt-dont-miss'>No te pierdas ni una clase...!</h4>
      <CalendarA></CalendarA>
      <Testimonios />
      <Link to="/about" > Entérate más sobre nosotros </Link>
      <Footer />
    </div>
  )
}
