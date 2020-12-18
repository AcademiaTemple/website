import React from "react";
import logoUsuario from '../../../public/usuario.png';
import logoLentes from '../../../public/lentes.png';
import logoLibros from '../../../public/libro.png';
import logoCheck from '../../../public/check.png';
import logoEstadistica from '../../../public/estadistica.png';

import "./estadisticas.css"

export default function Estadisticas() {
  return (
    <section className="contenedor-estadisticas">
      <div className="contenedor contenedor-85 contenido-estadisticas">
        <div className="descripcion">
          <h2 className="fw-600">Conocimiento sin fronteras</h2>
          <p>Somos la academia Temple, la primera gran escuela de programación en vivo formada por alumnos y profesores voluntarios de la comunidad informática</p>
          <p>
            ¡Incríbete a los cursos y talleres de tu interés, y entra a los grupos de enseñanza! ¡Por ahora es gratis!
          </p>
          <div className="iconos">
            <div className="icono">
              <p className="numero-estadistica">5000+</p>
              <div className="contenedor-img">
                <div className="imagen-estadistica">
                  <img src={logoUsuario} alt="logo-alumnos" />
                </div>
              </div>
              <p className="texto-estadistica">Miembros</p>
            </div>
            <div className="icono">
              <p className="numero-estadistica">22</p>
              <div className="contenedor-img">
                <div className="imagen-estadistica">
                  <img src={logoLentes} alt="logo-alumnos" />
                </div>
              </div>
              <p className="texto-estadistica">Docentes</p>
            </div>
            <div className="icono">
              <p className="numero-estadistica">27</p>
              <div className="contenedor-img">
                <div className="imagen-estadistica">
                  <img src={logoLibros} alt="logo-curso" />
                </div>
              </div>
              <p className="texto-estadistica">Cursos</p>
            </div>
          </div>
        </div>
        <div className="mision-vision">
          <div className="contenedor-mision-vision">
            <div>
              <img src={logoCheck} alt="logo-check" />
              <h2 className="fw-700 m-0 ml-4">Misión</h2>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi blanditiis accusamus illum dolores nobis expedita dicta dolor dolore repellendus praesentium velit corporis voluptatum ipsam inventore.</p>
          </div>

          <div className="contenedor-mision-vision">
            <div>
              <img src={logoEstadistica} alt="logo-estadistica" />
              <h2 className="fw-700 m-0 ml-4">Visión</h2>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique distinctio modi itaque nihil doloribus officiis commodi provident harum nobis eaque, ratione consequuntur.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
