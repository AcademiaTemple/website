import React from "react"
import { Link } from "gatsby"
import "./panorama.css"

export default function Header() {
  return (
    <div className="position-relative bg-img">
      <div className="container">
        <div className="row ">
          <div className="col text-right">
            <div className="ctn-text">
              <h2>El secreto para salir adelante <br/> es simplemente empezar.</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col text-right">
            <button type="button" className="boton">
              <Link to="/courses">Cursos</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
