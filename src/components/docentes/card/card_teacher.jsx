import React from "react"
import "./card_teacher.css"
import { Link } from "gatsby"

export default function Card_Teacher({ data }) {
  return (
    <div className="card card-teacher">
      <div className="row">
        <div className="col-12 col-md-2 contenedor-img pb-4 pb-md-0">
          <img alt="..." src={data.img} className="rounded-circle avatar-card-teacher" />
        </div>

        <div className="col-12 col-md-6 pl-md-0">
          <h2 className="mb-4">
            {data.nombres + ' ' + data.apellidos}
          </h2>
          <p className="mb-4">{data.sobreMi}</p>
          <div className="btn-toolbar mb-5 etiquetas-card-teacher">
            {
              data.etiquetas.map((etiqueta,indice) => (
                <button key={indice} type="button" className="etiquetas">
                  {etiqueta}
                </button>
              ))
            }
          </div>
          <Link className="boton btn-principal" to={`/teacher_detail/?id=${data.id}`}>
            Ver perfil
          </Link>
        </div>
        <div className="col-12 col-md-2 d-none d-md-block likes">
          <h6>{data.likes}</h6>
          <i className="fas fa-thumbs-up"></i>
        </div>
        <div className="col-12 col-md-2 d-none d-md-flex redes-sociales pr-5">
          {
            data.redes.pt &&
            <div className="redes-docentes">
              <i className="fab fa-patreon"></i>
              <p className="red-social">Patreon</p>
              <a target="_blank" rel="noreferrer" href={data.redes.pt} className="red-usuario">Visitar</a>
            </div>
          }
          {
            data.redes.gh &&
            <div className="redes-docentes">
              <i className="fab fa-github"></i>
              <p className="red-social">Github</p>
              <a target="_blank" rel="noreferrer" href={data.redes.gh} className="red-usuario">Visitar</a>
            </div>
          }
          {
            data.redes.yt &&
            <div className="redes-docentes">
              <i className="fab fa-youtube"></i>
              <p className="red-social">Youtube</p>
              <a target="_blank" rel="noreferrer" href={data.redes.yt} className="red-usuario">Visitar</a>
            </div>
          }
        </div>
      </div>
    </div>
  )
}
