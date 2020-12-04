import React, { useState } from "react"
import { Link } from "gatsby"

// Componentes
import CalendarA from "../components/calendar/CalendarA"
import PanoramaInicio from "../components/PanoramaInicio/panorama"
import Estadisticas from '../components/estadisticas/estadisticas'
import NuestrosCursos from '../components/nuestroscursos/nuestroscursos'
import Testimonios from "../components/testimonios/testimonios"
import Footer from "../components/footer/footer"

export default function Home() {
  const [verTodo, estVerTodo] = useState(false);

  const alternarVerTodo = () => {
    estVerTodo(!verTodo);
  }

  return (
    <div>
      <PanoramaInicio />
      <Estadisticas />
      <NuestrosCursos />
      <div className="contenedor contenedor-85 d-flex justify-content-end pb-4">
        <a className="btn-alternador-vista" onClick={alternarVerTodo}>
          Ver todo <span>{'>'}</span>
        </a>
      </div>
      {
        verTodo &&
        <>
          <h4 className='txt-subtitle txt-dont-miss'>No te pierdas ni una clase...!</h4>
          <CalendarA></CalendarA>
          <Testimonios />
          <Link to="/about"> Entérate más sobre nosotros </Link>
          <Footer />
        </>
      }
    </div>
  )
}
