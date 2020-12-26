import React, { useState, useEffect } from "react"

// Componentes
import CalendarioCursos from "../components/calendario/CalendarioCursos"
import PanoramaInicio from "../components/PanoramaInicio/panorama"
import Estadisticas from "../components/estadisticas/estadisticas"
import NuestrosCursos from "../components/nuestroscursos/nuestroscursos"
import Testimonios from "../components/testimonios/testimonios"
import Footer from "../components/footer/footer"
import ImgFlechita from '../../static/flechita.png'

export default function Home() {

  const [verTodo, estVerTodo] = useState(false);
  const [ancho, estAncho] = useState(0);

  const alternarVerTodo = () => {
    estVerTodo(!verTodo);
  }

  const actAncho = () => {
    estAncho(window.innerWidth);
  }

  useEffect(() => {

    if (ancho == 0) {
      estAncho(window.innerWidth);
    }

    if (ancho < 768) {
      estVerTodo(false);
    } else {
      estVerTodo(true);
    }

    window.addEventListener('resize', actAncho);
    return () => window.removeEventListener('resize', actAncho);
  }, [ancho]);

  return (
    <div>
      <PanoramaInicio />
      <Estadisticas />
      <NuestrosCursos />
      <div className="contenedor contenedor-85 d-flex justify-content-end pb-4 d-md-none">
        <a className="btn-alternador-vista" onClick={alternarVerTodo}>
          {verTodo ? 'Viendo todo ' : 'Ver todo '}
          <img src={ImgFlechita} className={verTodo && 'rotacion-flechita'} alt="flechita" />
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
