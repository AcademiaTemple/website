import React, { useState } from 'react';
import { Link } from "gatsby";
import './card.css';

function Card(props) {

  const [cargandoImg, estCargandoImg] = useState(true);

  return (
    <div className="card mb-5">
      <div className="contenedor-spinner-img">
        {
          cargandoImg &&
          <div class="contenedor-tarjeta-curso">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        }
        <img onLoad={() => estCargandoImg(false)} src={props.img} className="card-img-top rounded-img-course" alt="img-curso" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <Link className="boton btn-principal d-block" to="/course">
          Ingresar
        </Link>
      </div>
    </div>
  );
}
export default Card;