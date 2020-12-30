import React from "react"
import { Link } from "gatsby"
import "./course_teacher.css"

export default function Card_Teacher(props) {

  return (
    <div className="card rounded-course">
      <div className="row no-gutters">
        <div className="col-4 col-sm-4 col-lg-2 icono-course">
          <i className="fab fa-github"></i>
        </div>
        <div className="col-8 col-sm-8 col-lg-7 info-course">
          <h2>
            <b>{props.titulo}</b>
          </h2>
          <p>{props.descripcion}</p>
          <div className="contenedor-btn-ingresar">
            <Link className="boton btn-principal d-block" to={`/course/?id=${props.id}`}>
              Ingresar
            </Link>
          </div>
        </div>
        <div className="col-lg-3">
          <img
            src={props.urlImg}
            className="card-img rounded-img"
            alt="..."
            style={{ height: "100%", width: "100%" }}
          />
        </div>
      </div>
    </div>
  )
}
