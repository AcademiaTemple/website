import React from "react"
import Header from "../components/header/header"
import Carrusele from "../components/carrusel/carrusele"
import Card_Teacher from "../components/card_teacher/card_teacher"

export default function teachers() {
  return (
    <div >
      <div className="header">
        <Header/>
      </div>
      <div className="carrusel" >
        <Carrusele/>
      </div>
      <div className="teacher_container " height="100px">
        <Card_Teacher
          name="Juan Perez"
          description="Docente del curso de Angular React Vuejs"
        />
        <Card_Teacher
          name="Vickie Schamberger"
          description="Docente del curso de Angular React Vuejs"
        />
        <Card_Teacher
          name="Gage Waelchi"
          description="Docente del curso de Angular React Vuejs"
        />
        <Card_Teacher
          name="Juan Loret"
          description="Docente del curso de Angular React Vuejs"
        />
        <Card_Teacher
          name="Michael Andrade"
          description="Docente del curso de Angular React Vuejs"
        />
      </div>
    </div>
  )
}
