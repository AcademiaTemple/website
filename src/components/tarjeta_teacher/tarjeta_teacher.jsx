import React, { useState, useEffect } from "react"
import "./tarjeta_teacher.css"

const api = "https://restcountries.eu/rest/v2/all";

export default props => {

  const [pais, estPais] = useState({});

  /*useEffect(() => {
    fetch(api)
      .then(response => response.json())
      .then(paises => {
        const encontrado = paises.find(pais => pais.name === props.country);
        estPais(encontrado);
      })
  }, [props.country]);*/

  return (
    <div className="perfil-Docente">
      <div className="row">
        <div
          className="col-4 col-sm-6 col-lg-3 center-perfil-docente"
          width="20%">
          <img
            src={props.perfil}
            className="rounded-circle"
            width="200"
            height="200"
          />
        </div>
        <div className="col-8 col-sm-6 col-lg-4">
          <h2 className="name-teacher">
            <b>{props.name}</b>
          </h2>
          <div>
            <h3>
              {pais}
              <img className="flag" src={pais.flag} alt="" width="30px" />
            </h3>
          </div>
          <div className="titulos-docente">{
            props.titulos.map((titulo, index) => (
              <p key={index} className="titulo-carrera">
                {titulo}
              </p>
            ))
          }</div>

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
            <div className="btn-group mr-2">
              <button type="button" className="Etiquetas">
                #html
              </button>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5 d-none d-md-flex redes-sociales pr-5">
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
