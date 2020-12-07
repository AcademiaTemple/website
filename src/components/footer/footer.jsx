import React, { useEffect } from "react"
import { Link } from "gatsby"
import "./footer.css"
import Logo from "../../../static/logo.png"
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.css"

const Footer = () => {
  return (
    <footer className="">
      <div className="contenedor contenedor-footer">
        <div className="logo-contacto">

          <Link to="/">
            <img
              src={Logo}
              className="logo-footer"
              alt="logo"
              title="logo"
            />
          </Link>

          <div className="contacto-footer">
            <h4>Academia Temple</h4>
            <p>Correo</p>
            <p>gricardov@gmail.com</p>
          </div>

        </div>
        <div className="redes">
          <p>Grupos</p>
          <ul className="iconos-redes">
            <li>
              <a href="https://www.facebook.com/groups/academiatemple/">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://discord.gg/4Hzhwfb8Pf">
                <i className="fab fa-discord"></i>
              </a>
            </li>
            <li>
              <a href="https://t.me/joinchat/RjdRFRnHY0tR8vpkHxDNow">
                <i className="fab fa-telegram"></i>
              </a>
            </li>
          </ul>
          <p>Redes</p>
          <ul className="iconos-redes">
            <li>
              <a href="https://www.facebook.com/templealumnos/">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="administrativo">
          <p>Política de privacidad</p>
          <p>Creadores y contribuyentes</p>
          <p>Temple ® - 2020</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
