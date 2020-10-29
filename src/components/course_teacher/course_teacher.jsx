import React from "react"
import "./course_teacher.css"
import { Link } from "gatsby"

export default function Card_Teacher(props) {
  const starPorcentaje = (props.star / 5) * 100
  const starPorcentajeRedondeado = `${Math.round(starPorcentaje / 10) * 10}%`

  return (
    <div className="card rounded-course">
      <div className="row no-gutters">
        <div className="col-sm-2 icono-course">
          <i class="fab fa-github"></i>
        </div>
        <div className="col-sm-7 info-course">
          <h2>
            <b>{props.name}</b>
          </h2>
          <p>{props.description}</p>

          <div className="row">
            <div className="col-sm-3 center mb-2">
              <button type="button" className="ingresar-course">
                Ingresar
              </button>
            </div>
            <div className="col-sm-3"></div>
            <div className="col-sm-6 center mb-2">
              <div className="stars-outer">
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <div
                  className="stars-inner"
                  style={{ width: starPorcentajeRedondeado }}
                >
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-1"></div>
        <div className="col-sm-2">
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
