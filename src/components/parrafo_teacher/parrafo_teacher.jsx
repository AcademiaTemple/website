import React, { useState } from "react"
import "./parrafo_teacher.css"

export default prop => {
  const [mostrarMas, setMostrarMas] = useState(true);
  const [mostrarMenos, setMostrarMenos] = useState(false);

  return (
    <div className="container-info">
      <div className="container-title">
        <h2 className="titulo-docente">
          {prop.titulo}
          {prop.parrafo && (
            <div className="Detalle">
              <button
                className={!mostrarMas ? "Ocultar" : ""}
                onClick={() => {
                  setMostrarMas(false)
                  setMostrarMenos(true)
                }}
              >
                <i className="fa fa-angle-down"></i>
              </button>
              <button
                className={!mostrarMenos ? "Ocultar" : ""}
                onClick={() => {
                  setMostrarMas(true)
                  setMostrarMenos(false)
                }}>
                <i className="fa fa-angle-up"></i>
              </button>
            </div>
          )}
        </h2>
      </div>
      {prop.parrafo && (
        <div>
          <p
            className={
              !mostrarMenos ? "Semi-Oculto text-content" : "text-content"
            }>
            {prop.parrafo}
          </p>
          <p className={!mostrarMenos ? "Ocultar text-content" : "text-content"}>
            {prop.parrafo}
          </p>
        </div>
      )}
    </div>
  )
}
