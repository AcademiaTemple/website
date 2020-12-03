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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum cumque veritatis reiciendis quaerat saepe. Vitae ex, optio molestiae non sapiente aperiam quas qui doloremque at blanditiis voluptate dignissimos sequi nemo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente quos est necessitatibus deserunt quod quaerat consequuntur laudantium beatae? Labore, assumenda? Molestias asperiores eaque, hic minus sint dolorum unde natus debitis!</p>
          <div className="iconos">
            <div className="icono">
              <p className="numero-estadistica">540</p>
              <div className="contenedor-img">
                <div className="imagen-estadistica">
                  <img src={logoUsuario} alt="logo-alumnos" />
                </div>
              </div>

              <p className="texto-estadistica">Alumnos</p>
            </div>
            <div className="icono">
              <p className="numero-estadistica">540</p>
              <div className="contenedor-img">

                <div className="imagen-estadistica">
                  <img src={logoLentes} alt="logo-alumnos" />
                </div>
              </div>

              <p className="texto-estadistica">Docentes</p>
            </div>
            <div className="icono">
              <p className="numero-estadistica">540</p>
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
