import React from "react"
import Header from "../components/header/header"
import Carrusele from "../components/carrusel/carrusele"
import Card_Teacher from "../components/card_teacher/card_teacher"
export default function teachers() {
  return (
    <div >
        <Header />
        <Carrusele />

        <div className="teacher-container">
        <Card_Teacher
          name="Juan Perez"
          description= "Docente del curso de Angular React Vuejs"
        />
        <Card_Teacher
          name="Vickie Schamberger"
          description= "Docente del curso de Angular React Vuejs"
        />
        <Card_Teacher
          name="Gage Waelchi"
          description= "Docente del curso de Angular React Vuejs"
        />
        </div>
    </div>
  )
}
