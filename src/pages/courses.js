import React from "react"
import Card from "../components/card/card"
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"

export default function Courses() {
  return (
    <div>
      <Navbar />
      <div className="cuerpo-pagina">
        <h1>Cursos disponibles</h1>
        <div className="courses-container">
          <Card
            name="Introducción a Git y Github"
            description="Breve introducción al versionamiento de código con Git y Github"
          />
          <Card
            name="Introducción a Git y Github"
            description="Breve introducción al versionamiento de código con Git y Github"
          />
          <Card
            name="Introducción a Git y Github"
            description="Breve introducción al versionamiento de código con Git y Github"
          />
        </div>
        <Footer />
      </div>
    </div>
  )
}
