import React from "react"
import "./card_teacher.css"
import imgcarazon from "../../../static/corazon.svg"
import imgpatreon from "../../../static/patreon.svg"
import imgfacebook from "../../../static/facebook.svg"
import imginstagram from "../../../static/instagram.svg"
import Img from "gatsby-image"
import { Link } from "gatsby"
export default function Card_Teacher(props) {
  return (
    <div className="card card-blue">
      <div className="card-body">
        <div className="row">
          <div className="col-sm-2" width="20%">
            <Img fixed={props.rutafoto} className="rounded-circle" />
          </div>

          <div className="col-sm-6">
            <h2>
              <b>{props.name}</b>
            </h2>
            <p>{props.description}</p>
            <div className="btn-toolbar">
              <div className="btn-group mr-2">
                <button type="button" className="Etiquetas">
                  #html
                </button>
              </div>
              <div className="btn-group mr-2">
                <button type="button" className="Etiquetas">
                  #html
                </button>
              </div>
              <div className="btn-group" role="group" aria-label="Third group">
                <button type="button" className="Etiquetas">
                  #html
                </button>
              </div>
            </div>
            <button type="button" className="Conocer">
              Conocer cursos
            </button>
          </div>
          <div className="col-sm-2 Likes">
            <h6>98</h6>
            <i className="fas fa-heart"></i>
          </div>
          <div className="col-sm-2 RedesSociales">
            <div className="redesDocentes">
              <i className="fab fa-patreon"></i>
              Patreon
              <p className="userRedes">@hola</p>
            </div>
            <div className="redesDocentes">
              <i className="fab fa-facebook-square"></i>
              Facebook
              <p className="userRedes">@hola</p>
            </div>
            <div className="redesDocentes">
              <i className="fab fa-instagram"></i>
              Instagram
              <p className="userRedes">@hola</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}