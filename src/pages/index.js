import React, { useState, useEffect } from "react"

// Componentes
import CalendarioCursos from "../components/calendario/CalendarioCursos"
import PanoramaInicio from "../components/PanoramaInicio/panorama"
import Estadisticas from "../components/estadisticas/estadisticas"
import NuestrosCursos from "../components/nuestroscursos/nuestroscursos"
import Testimonios from "../components/testimonios/testimonios"
import Footer from "../components/footer/footer"

export default function Home() {

  return (
    <div>
      <PanoramaInicio />
      <Estadisticas />
      <NuestrosCursos />
      <CalendarioCursos />
      <Testimonios />
      <Footer />
    </div>
  )
}
