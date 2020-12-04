import React from "react"
import "./nuestroscursos.css"
import logoAngular from '../../../public/angular.png';
import logoReact from '../../../public/react.png';
import logoGit from '../../../public/git.png';

export default function Header() {

  const cursos = [
    {
      fondo: 'linear-gradient(236.89deg, #FF171B -26.25%, #FF7779 252.45%)',
      nombre: 'Angular',
      icono: logoAngular
    },
    {
      fondo: 'linear-gradient(232.22deg, #048EF2 26.28%, #40FFFF 127.09%)',
      nombre: 'React',
      icono: logoReact
    },
    {
      fondo: 'linear-gradient(232.22deg, #F23D04 26.28%, #FFD540 127.09%)',
      nombre: 'Git',
      icono: logoGit
    }
  ]

  return (
    <div className="seccion">
      <div className="contenedor contenedor-85">
        <h2 className="titulo-seccion">¡Algunos de nuestros cursos!</h2>
        <div className="nuestros-cursos">
          {
            cursos.map(curso => (
              <div className="curso-muestra" style={{ background: curso.fondo }}>
                <div className="contenedor-img">
                  <img src={curso.icono} alt="logo-curso" />
                </div>
                <h3>{curso.nombre}</h3>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
