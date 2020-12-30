import React, { useState, useEffect } from "react"
import Carrusel from "../components/carrusel/carrusele"
import Card_Teacher from "../components/docentes/card/card_teacher"
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import { obtProfesores } from '../api'

export default function Teachers({ data }) {

  const [profesores, estProfesores] = useState([]);
  const [cargandoProfesores, estCargandoProfesores] = useState(true);

  useEffect(() => {
    estCargandoProfesores(true);
    obtProfesores()
      .then(profesores => {
        estProfesores(profesores);
        estCargandoProfesores(false);
      })
  }, []);

  return (
    <div>
      <Navbar />
      <div className="cuerpo-pagina">
        <Carrusel />
        <div className="contenedor">
          <h2 className="titulo-seccion mt-5">¡Conoce a nuestros docentes!</h2>
        </div>

        <div className="contenedor my-5">
          {
            profesores.map(profesor => (
              <Card_Teacher data={profesor} />
            ))
          }
        </div>
        <Footer />
      </div>
    </div>
  )
}