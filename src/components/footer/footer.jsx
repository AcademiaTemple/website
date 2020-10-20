import React, { useEffect } from "react"
import { Link } from "gatsby"
import "./footer.css"
import Logo from "../../../static/logo.svg"
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.css"

const Footer = () => {
  return (
    <footer className="">
      <div className="contenerdor">
        <div className="row">
          <div className="col-sm-4 ">
            <div className="Info">
              <div className="Logo">
                <Link to="/">
                  <img
                    src={Logo}
                    className="LogoFooter"
                    alt="Logo"
                    title="Logo"
                  />
                </Link>
              </div>
              <h3>Academia Temple</h3>
              <div className="correo">
                <p>Correo: </p>
                <p>academia_temple@temple.com</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 ">
            <div className="RedesGrupos">
              <div className="redes">
                <h5>Redes</h5>
                <div className="icons">
                  <ul className="icons">
                    <li>
                      <a href="#">
                        <i class="fab fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-whatsapp"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-discord"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grupos">
                <h5>Grupos</h5>
                <div className="icons">
                  <ul className="icons">
                    <li>
                      <a href="#">
                        <i class="fab fa-telegram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-discord"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-whatsapp"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 ">
            <div className="Terminos">
              <p>
                <a href="">Politicas de Privacidad</a>
              </p>
              <p>
                <a href="">Creadores y Contribuidores</a>
              </p>
              <p>
                <a href="">AcademiaTemple © 2020</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
