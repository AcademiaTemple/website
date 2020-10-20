import React from "react"
import { Link } from "gatsby"
import "./panorama.css"

export default function Header() {
  return (
    <div className="position-relative bg-img">
      <div className="position-absolute ctn-text">
        <h2>El secreto para salir adelante es simplemente empezar</h2>
        <div className="d-flex justify-content-end">
          <button type="button" className="boton">
            <Link to="/courses">Cursos</Link>
          </button>
        </div>
      </div>
    </div>
  )
}
