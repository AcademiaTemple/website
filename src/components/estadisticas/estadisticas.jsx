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
          <h2>Conocimiento sin fronteras</h2>
          <p>Somos la primera academia de internet que une a profesores y alumnos voluntarios de la comunidad para organizar cursos enteros de programación. ¡Únete a la academia Temple y disfruta de las mejores clases en vivo!</p>
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
              <h2>Misión</h2>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi blanditiis accusamus illum dolores nobis expedita dicta dolor dolore repellendus praesentium velit corporis voluptatum ipsam inventore, aperiam sint exercitationem. Ea, fuga.</p>
          </div>

          <div className="contenedor-mision-vision">
            <div>
              <img src={logoEstadistica} alt="logo-estadistica" />
              <h2>Visión</h2>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique distinctio modi itaque nihil doloribus officiis commodi provident harum nobis eaque, ratione consequuntur sed cum, id optio adipisci repellat labore cumque.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
