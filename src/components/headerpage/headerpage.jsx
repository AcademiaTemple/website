import React from "react"
import { Link } from "gatsby"
import "./headerpage.css"
export default function Headerpage() {
  return (
    <header>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Temple</Link>
            </li>
            <li>
              <Link to="/about">Acerca de</Link>
            </li>
            <li>
              <Link to="/courses">Cursos</Link>
            </li>
            <li>
              <Link to="/teachers">Docentes</Link>
            </li>
            <li>
              <Link to="/contact">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
