import React from "react"
import Header from "../components/header/header"
import Carrusele from "../components/carrusel/carrusele"
import Card_Teacher from "../components/card_teacher/card_teacher"
import foto from "../img/Banner4.jpg"
export default function teachers() {
  return (
    <div >
        <Header />
        <Carrusele />
        <div className="teacher-container">
        <Card_Teacher
          rutafoto={foto}
          name="Juan Perez"
          description= "Docente del curso de Angular React Vuejs"
        />
        <Card_Teacher
          rutafoto={foto}
          name="Vickie Schamberger"
          description= "Docente del curso de Angular React Vuejs"
        />
        <Card_Teacher
          rutafoto={foto}
          name="Gage Waelchi"
          description= "Docente del curso de Angular React Vuejs"
        />
        <Card_Teacher
          rutafoto={foto}
          name="Ronaldo Waelchi"
          description= "Docente del curso de Angular React Vuejs"
        />
        <Card_Teacher
          rutafoto={foto}
          name="Jett Waelchi"
          description= "Docente del curso de Angular React Vuejs"
        />
        <Card_Teacher
          rutafoto={foto}
          name="Ron Waelchi"
          description= "Docente del curso de Angular React Vuejs"
        />
        </div>
    </div>
  )
}
