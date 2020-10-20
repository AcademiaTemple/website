import React from "react"
import Carrusele from "../components/carrusel/carrusele"
import Card_Teacher from "../components/card_teacher/card_teacher"
import foto from "../img/Profe1.jpg"
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
export default function teachers() {
  return (
    <div>
      <Navbar />
      <Carrusele />
      <div className="teacher-container">
        <Card_Teacher
          rutafoto={foto}
          name="Juan Perez"
          description="Docente del curso de Angular React Vuejs"
        />
        <Card_Teacher
          rutafoto={foto}
          name="Vickie Schamberger"
          description="Docente del curso de Angular React Vuejs"
        />
        <Card_Teacher
          rutafoto={foto}
          name="Gage Waelchi"
          description="Docente del curso de Angular React Vuejs"
        />
        <Card_Teacher
          rutafoto={foto}
          name="Ronaldo Waelchi"
          description="Docente del curso de Angular React Vuejs"
        />
        <Card_Teacher
          rutafoto={foto}
          name="Jett Waelchi"
          description="Docente del curso de Angular React Vuejs"
        />
        <Card_Teacher
          rutafoto={foto}
          name="Ron Waelchi"
          description="Docente del curso de Angular React Vuejs"
        />
      </div>
      <Footer />
    </div>
  )
}
