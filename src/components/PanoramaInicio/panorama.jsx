import React from "react"
import { Link } from "gatsby"
import "./panorama.css"

export default function Header() {
  return (
    <div className="position-relative bg-img">
      <div className="contenedor">
        <div className="contenido-header">
          <h1>El secreto para salir adelante <br /> es simplemente empezar.</h1>
          <Link class="boton boton-header-curso" to="/courses">Cursos</Link>
        </div>
      </div>
    </div>
  )
}
