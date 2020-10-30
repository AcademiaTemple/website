import React, { useState, useEffect } from "react"
import "./encabezado_teacher.css"

export default prop => {
  const listTitles = prop.titulos.map((titulo, index) => (
    <p key={index}>{titulo}</p>
  ))

  const api = "https://restcountries.eu/rest/v2/all"

  const GetCountry = () => {
    const [mydata, setData] = useState([])

    useEffect(() => {
      fetch(api)
        .then(response => response.json())
        .then(data => setData(data))
    }, [])

    return mydata
  }

  const paises = GetCountry()
  const mostrar = () =>
    paises.map(pais => {
      if (pais.name == prop.country)
        return (
          <div>
            <p>
              {pais.name}
              <img src={pais.flag} alt="" width="30px" />
            </p>
          </div>
        )
    })

  return (
    <div className="perfil-Docente">
      <div className="row">
        <div className="col-sm-2 center-perfil-docente" width="20%">
          <img
            src={prop.perfil}
            className="rounded-circle"
            width="200"
            height="200"
          />
        </div>

        <div className="col-sm-6">
          <h2>
            <b>{prop.name}</b>
          </h2>
          {mostrar()}
          <div>{listTitles}</div>

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
