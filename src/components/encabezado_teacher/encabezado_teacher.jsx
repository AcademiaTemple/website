import React, { useState, useEffect } from "react"
import "./encabezado_teacher.css"

export default prop => {
  return (
    <div className="perfil-Docente">
      <div className="row">
        <div className="col-sm-2 center-perfil-docente" width="20%">
          <img className="rounded-circle" width="200" height="200" />
        </div>

        <div className="col-sm-6">
          <h2>
            <b>Hola mundo</b>
          </h2>
          <div>Titulos</div>

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
  )
}
