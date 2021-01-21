import React, { useState, useEffect } from "react"
import Carrusel from "../components/carrusel/carrusele"
import CardTeacher from "../components/docentes/card/card_teacher"
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import GridLoader from "react-spinners/GridLoader"
import { css } from "@emotion/core";
import { obtProfesoresMuestra } from '../api'

const override = css`
  display: block;
  margin: 50px auto;
  background-color: 'green';
`;

export default function Teachers({ data }) {

  const [profesores, estProfesores] = useState([]);
  const [cargando, estCargando] = useState(false);

  useEffect(() => {
    estCargando(true);
    obtProfesoresMuestra()
      .then(profesores => {
        estProfesores(profesores);
        estCargando(false);
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
          <GridLoader css={override} loading={cargando} size={20} />
          {
            profesores.map(profesor => (
              <CardTeacher key={profesor.id} data={profesor} />
            ))
          }
          {
            !cargando && profesores && profesores.length < 1
            &&
            <p>No hay profesores</p>
          }
        </div>
        <Footer />
      </div>
    </div>
  )
}