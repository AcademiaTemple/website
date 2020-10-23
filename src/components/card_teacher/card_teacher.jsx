import React from "react"
import "./card_teacher.css"
import imgcarazon from "../../../static/corazon.svg"
import imgpatreon from "../../../static/patreon.svg"
import imgfacebook from "../../../static/facebook.svg"
import imginstagram from "../../../static/instagram.svg"
import Img from "gatsby-image"
import { Link } from "gatsby"
export default function Card_Teacher(props) {
  return (
    <div className="card card-blue">
      <div className="card-body">
        <div className="row">
          <div className="col-sm-2" width="20%">
            <Img fixed={props.rutafoto} className="rounded-circle" />
            {/* <img
              src={props.rutafoto}
              className="rounded-circle"
              width="136"
              height="136"
            /> */}
          </div>

          <div className="col-sm-6">
            <h2>
              <b>{props.name}</b>
            </h2>
            <p>{props.description}</p>
          </div>

          <div className="col-sm-2">
            <h1 className="display-1 p-2">{props.seguidores}</h1>
            <img
              className="p-2"
              src={imgcarazon}
              width="50px"
              height="48px"
            ></img>
          </div>
          <div className="col-sm-2">
            <h3> </h3>
            <img
              className="p-2"
              src={imgpatreon}
              width="24px"
              height="24px"
            ></img>
            Patreon
            <br></br>
            {/* <a className="text-info">{props.patreon}</a> */}
            <Link className="text-info" to={props.urlpatreon}> {props.patreon} </Link>
            <br></br>
            <img
              className="p-2"
              src={imgfacebook}
              width="24px"
              height="24px"
            ></img>
            Facebook
            <br></br>
            {/* <a className="text-info">{props.facebook}</a> */}
            <Link className="text-info" to={props.urlfacebook}> {props.facebook} </Link>
            <br></br>
            <img
              className="p-2"
              src={imginstagram}
              width="24px"
              height="24px"
            ></img>
            Instagram
            <br></br>
            {/* <a className="text-info">{props.instagram}</a> */}
            <Link className="text-info" to={props.urlinstagram}> {props.instagram} </Link>
          </div>
        </div>
    
        <div className="row">
          <div className="col-sm-2" width="20%"></div>
          <div className="col-sm-9">

          <Link className="btn btn-outline-info rounded-pill btn-sm" to={props.urlhashta1}> {props.hashta1} </Link>

            {/* <a href="#" className="btn btn-outline-info rounded-pill btn-sm">
              {props.hashta1}
            </a> */}
            <a> </a>
            <Link className="btn btn-outline-info rounded-pill btn-sm" to={props.urlhashta2}> {props.hashta2} </Link>

            {/* <a href="#" className="btn btn-outline-info rounded-pill btn-sm">
              {props.hashta2}
            </a> */}
            <a> </a>
            <Link className="btn btn-outline-info rounded-pill btn-sm" to={props.urlhashta3}> {props.hashta3} </Link>
            {/* <a href="#" className="btn btn-outline-info rounded-pill btn-sm">
              {props.hashta3}
            </a> */}
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-2" width="20%"></div>
          <div className="col-sm-9">
            {/* <a href="#" class="btn btn-primary rounded-pill btn-lg">
              Conocer Cursos
            </a> */}

            <Link className="btn btn-primary rounded-pill btn-lg" to={props.urlconocercurso}>
              Conocer Cursos
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
