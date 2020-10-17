import React from "react"
import { Link } from "gatsby"
import "./header.css"

export default function Header() {
  return (
    <header>
      <div className="position-relative bg-img">
        <div className="position-absolute ctn-text">
          <h2>El secreto para salir adelante es simplemente empezar</h2>
          <div className="d-flex justify-content-end">
            <button type="button" className="btn btn-outline-primary btn-lg">
              Cursos
            </button>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/about">Acerca de</Link>
            </li>
            <li>
              <Link to="/courses">Cursos</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
