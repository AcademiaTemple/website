import React from "react"
import { Link } from "gatsby"
import Header from "../components/header/header"

export default function Home() {
  return <div>
    <Header />
    <h1>Academia Temple</h1>
    <p>Mejorando la educación a nivel global</p>
    <Link to="/about">Entérate más sobre nosotros</Link>
  </div>
}
