import React, { useState, useEffect } from "react"
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import CourseTeacher from "../components/course_teacher/course_teacher"
import ParrafoTeacher from "../components/parrafo_teacher/parrafo_teacher"
import queryString from 'query-string'
import { obtPerfilProfesor } from '../api'

const apiPais = "https://restcountries.eu/rest/v2/all";

export default function Teacher_detail(props) {
  const idProfesor = queryString.parse(props.location.search).id;

  const [profesor, estProfesor] = useState({});
  const [cargandoProfesor, estCargandoProfesor] = useState(true);
  const [pais, estPais] = useState({});

  useEffect(() => {
    estCargandoProfesor(true);
    obtPerfilProfesor(idProfesor)
      .then(profesor => {
        estProfesor(profesor);
        fetch(apiPais)
          .then(response => response.json())
          .then(paises => {
            const encontrado = paises.find(pais => pais.name === profesor.pais);
            estPais(encontrado);
          })
        estCargandoProfesor(true);
      })
  }, []);

  return (
    <div>
      <Navbar />
      <div className="contenedor cuerpo-pagina">
        <div className="row encabezado-perfil-docente">
          <div className="col-12 col-md-2">
            <img
              src={profesor.img}
              className="rounded-circle img-perfil-profesor"
              alt="foto-perfil"
            />
          </div>
          <div className="col-12 col-md-5 datos-perfil-docente">
            <h2 className="name-teacher">
              <b>{profesor.nombres + ' ' + profesor.apellidos}</b>
            </h2>
            <div className="contenedor-nacionalidad-profesor">
              <h3 className="pais-profesor">
                {pais.name}
              </h3>
              <img className="banera-pais-profesor" src={pais.flag} alt="" width="30px" />
            </div>
            <div className="titulos-docente">
              {
                profesor.logros && profesor.logros.map((titulo, index) => (
                  <p key={index} className="titulo-carrera">
                    {titulo}
                  </p>
                ))
              }
            </div>

            <div className="btn-toolbar contenedor-etiquetas-perfil">
              {
                profesor.etiquetas && profesor.etiquetas.map((etiqueta, indice) => (
                  <button key={indice} type="button" className="etiquetas">
                    {etiqueta}
                  </button>
                ))
              }
            </div>

          </div>

          <div className="col-12 col-md-2 d-none d-md-block likes">
            <h6>{profesor.likes}</h6>
            <i className="fas fa-thumbs-up"></i>
          </div>

          <div className="col-12 col-md-2 d-none d-md-flex redes-sociales pr-5">
            {
              profesor.redes && profesor.redes.pt &&
              <div className="redes-docentes">
                <i className="fab fa-patreon"></i>
                <p className="red-social">Patreon</p>
                <a target="_blank" href={profesor.redes.pt} className="red-usuario">Visitar</a>
              </div>
            }
            {
              profesor.redes && profesor.redes.gh &&
              <div className="redes-docentes">
                <i className="fab fa-github"></i>
                <p className="red-social">Github</p>
                <a target="_blank" href={profesor.redes.gh} className="red-usuario">Visitar</a>
              </div>
            }
            {
              profesor.redes && profesor.redes.yt &&
              <div className="redes-docentes">
                <i className="fab fa-youtube"></i>
                <p className="red-social">Youtube</p>
                <a target="_blank" href={profesor.redes.yt} className="red-usuario">Visitar</a>
              </div>
            }
          </div>
        </div>
      </div>

      <div className="contenedor">
        <ParrafoTeacher
          titulo="Un poco de mi historia"
          parrafo={profesor.sobreMi} />

        <ParrafoTeacher
          titulo="Mi experiencia"
          parrafo={profesor.experiencia} />
        <ParrafoTeacher titulo="Mis cursos" parrafo={null} />
        {
          profesor.cursos && profesor.cursos.map(curso => (
            <CourseTeacher
              key={curso.id}
              id={curso.id}
              likes={profesor.likes}
              urlImg={curso.urlImg}
              titulo={curso.titulo}
              descripcion={curso.descBreve}
            />
          ))
        }
      </div>

      <Footer />
    </div>
  )
}