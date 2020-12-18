import React from "react"
import "./nuestroscursos.css"
import logoAngular from "../../../static/angular.png"
import logoReact from "../../../static/react.png"
import logoGit from "../../../static/git.png"

const cursos = [
  {
    id: 1,
    fondo: "linear-gradient(236.89deg, #FF171B -26.25%, #FF7779 252.45%)",
    nombre: "Angular",
    icono: logoAngular,
  },
  {
    id: 2,
    fondo: "linear-gradient(232.22deg, #048EF2 26.28%, #40FFFF 127.09%)",
    nombre: "React",
    icono: logoReact,
  },
  {
    id: 3,
    fondo: "linear-gradient(232.22deg, #F23D04 26.28%, #FFD540 127.09%)",
    nombre: "Git",
    icono: logoGit,
  },
]

export default function Header() {
  return (
    <section className="seccion">
      <div className="contenedor contenedor-85">
        <h2 className="titulo-seccion">¡Algunos de nuestros cursos!</h2>
        <div className="nuestros-cursos">
          {cursos.map(curso => (
            <div
              key={curso.id}
              className="curso-muestra"
              style={{ background: curso.fondo }}
            >
              <img src={curso.icono} alt="logo-curso" />
              <h3>{curso.nombre}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
