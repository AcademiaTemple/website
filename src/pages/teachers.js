import React from "react"
import Header from "../components/header/header"
import Carrusele from "../components/carrusel/carrusele"

export default function teachers() {
  return (
    <div className="container">
      <div className="row row-cols-1">
        <Header />
      </div>
      <br />
      <div className="row row-cols-1">
        <Carrusele />
      </div>
      <br />
      <div className="row row-cols-1">
        cuerpo
      </div>
    </div>
  )
}
