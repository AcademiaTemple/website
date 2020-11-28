import React from "react"
import "./parrafo_teacher.css"

export default prop => {
  return (
    <div className="container-info">
      <div className="container-title">
        <h2 className="titulo-docente">{prop.titulo}</h2>
      </div>
      <p>{prop.parrafo}</p>
      <p>{prop.parrafo}</p>
    </div>
  )
}
