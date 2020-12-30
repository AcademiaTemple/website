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
        <img onLoad={() => estCargandoImg(false)} src={props.urlImg} className="card-img-top rounded-img-course" alt="img-curso" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.titulo}</h5>
        <p className="card-text">{props.descBreve}</p>
        <Link className="boton btn-principal d-block" to={`/course/?id=${props.id}`}>
          Ingresar
        </Link>
      </div>
    </div>
  );
}
export default Card;