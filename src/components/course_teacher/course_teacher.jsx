import React from "react"
import { Link } from "gatsby"
import "./course_teacher.css"

export default function Card_Teacher(props) {
  const starPorcentaje = (props.star / 5) * 100
  const starPorcentajeRedondeado = `${Math.round(starPorcentaje / 10) * 10}%`

  return (
    <div className="card rounded-course">
      <div className="row no-gutters">
        <div className="col-4 col-sm-4 col-lg-2 icono-course">
          <i className="fab fa-github"></i>
        </div>
        <div className="col-8 col-sm-8 col-lg-7 info-course">
          <h2>
            <b>{props.name}</b>
          </h2>
          <p>{props.description}</p>

          <div className="row">
            <div className="order-3 order-sm-1 col-sm-3 center mb-2">
              <Link className="boton btn-principal d-block" to="/course">
                Ingresar
              </Link>
            </div>
            <div className="order-2 order-sm-2 col-sm-3"></div>
            <div className="order-1 order-sm-3 col-sm-6 center mb-4 mb-md-2">
              <div className="stars-outer">
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <div
                  className="stars-inner"
                  style={{ width: starPorcentajeRedondeado }}>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-2">
          <img
            src={props.rutafoto}
            className="card-img rounded-img"
            alt="..."
            style={{ height: "100%", width: "100%" }}
          />
        </div>
      </div>
    </div>
  )
}
