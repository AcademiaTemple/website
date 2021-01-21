import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { obtUsuarioStorage } from '../../helpers/obtUsuarioStorage'
import { cerrarSesion } from "../../api"
import { Location } from '@reach/router'
import Logo from "../../../static/logo.png"
import "./navbar.css"

const Navbar = ({ usarTransparencia, currentPage }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [usuario] = useState(obtUsuarioStorage());

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])
  let x = ["fixed-top"]
  if (!usarTransparencia || scrolled) {
    x.push("scrolled")
  }

  const handleScroll = () => {
    const offset = window.scrollY
    if (offset > 20) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  const salir = (e) => {
    e.preventDefault();
    cerrarSesion()
      .then(res => {
        if (res) {
          localStorage.removeItem('usuario');
        }
      })
  }

  return (
    <div className={x.join(" ")}>
      <div className="contenedor contenedor-navbar">
        <nav className="navbar navbar-expand-md navbar-dark">
          <Link className="navbar-brand logo" to="/">
            <img src={Logo} alt="Logo" title="Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto mr-5">
              {
                usuario && currentPage && currentPage == '/admin'
                  ?
                  <li className="nav-item">
                    <a onClick={salir}>Salir</a>
                  </li>
                  :
                  <>
                    <li className="nav-item">
                      <Link to="/">Inicio</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/courses">Cursos</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/teachers">Docentes</Link>
                    </li>
                  </>
              }
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
