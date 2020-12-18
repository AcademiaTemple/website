import React, { useState } from "react"
import { Link } from "gatsby"

// Componentes
import CalendarioCursos from "../components/calendario/CalendarioCursos"
import PanoramaInicio from "../components/panoramaInicio/Panorama"
import Estadisticas from '../components/estadisticas/Estadisticas'
import NuestrosCursos from '../components/nuestroscursos/Nuestroscursos'
import Testimonios from "../components/testimonios/Testimonios"
import Footer from "../components/footer/Footer"
import imgFlechita from '../../static/flechita.png'

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
          {verTodo ? 'Viendo todo ' : 'Ver todo '}
          <img src={imgFlechita} className={verTodo && 'rotacion-flechita'} alt="flechita" />
        </a>
      </div>
      {
        verTodo &&
        <>
          <CalendarioCursos />
          <Testimonios />
          <Footer />
        </>
      }
    </div>
  )
}
