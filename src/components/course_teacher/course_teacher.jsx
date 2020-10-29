import React from "react"
import "./course_teacher.css"
import { Link } from "gatsby"

export default function Card_Teacher(props) {
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

          <button type="button" className="ingresar-course">
            Ingresar
          </button>
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
