import React from "react"
import "./card_teacher.css"
import { Link } from "gatsby"

export default function Card_Teacher(props) {
  return (
    <div className="card card-teacher">
      <div className="row">
        <div className="col-12 col-md-2 contenedor-img pb-4 pb-md-0">
          <img src="/carrusel/Profe1.jpg" className="rounded-circle avatar-card-teacher" />
        </div>

        <div className="col-12 col-md-6 pl-md-0">
          <h2 className="mb-4">
            {props.name}
          </h2>
          <p className="mb-4">{props.description}</p>
          <div className="btn-toolbar justify-content-around mb-5">
            <button type="button" className="etiquetas">
              #html
                </button>
            <button type="button" className="etiquetas">
              #html
                </button>
            <button type="button" className="etiquetas">
              #html
                </button>
          </div>
          <Link className="boton btn-principal" to="/teacher_detail">
            Ver perfil
          </Link>
        </div>
        <div className="col-12 col-md-2 d-none d-md-block likes">
          <h6>98</h6>
          <i className="fas fa-thumbs-up"></i>
        </div>
        <div className="col-12 col-md-2 d-none d-md-flex redes-sociales pr-5">
          <div className="redes-docentes">
            <i className="fab fa-patreon"></i>
            <p className="red-social">Patreon</p>
            <p className="red-usuario">@hola</p>
          </div>
          <div className="redes-docentes">
            <i className="fab fa-facebook-square"></i>
            <p className="red-social">Facebook</p>
            <p className="red-usuario">@hola</p>
          </div>
          <div className="redes-docentes">
            <i className="fab fa-instagram"></i>
            <p className="red-social">Instagram</p>
            <p className="red-usuario">@hola</p>
          </div>
        </div>
      </div>
    </div>
  )
}
