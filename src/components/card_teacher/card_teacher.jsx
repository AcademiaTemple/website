import React from "react"
import "./card_teacher.css"

export default function Card_Teacher(props) {
  return (
    <div className="card rounded">
      <div className="card-body">
        <div className="row">
          <div className="col-sm-2 center" width="20%">
            <img
              src={props.rutafoto}
              className="rounded-circle"
              width="136"
              height="136"
            />
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
