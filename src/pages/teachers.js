import React from "react"
import Carrusel from "../components/carrusel/carrusele"
import Card_Teacher from "../components/docentes/card/card_teacher"
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"

export default function teachres({ data }) {
  return (
    <div>
      <Navbar />
      <div className="cuerpo-pagina">
        <Carrusel />
        <div className="contenedor">
          <h2 className="titulo-seccion mt-5">¡Conoce a nuestros docentes!</h2>
        </div>

        <div className="contenedor my-5">
          <Card_Teacher
            imgUrl='/carrusel/Profe1.jpg'
            nombre="Juan Perez"
            descripcion="Docente del curso de Angular React Vuejs Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, ab
        doloribus. Autem, quibusdam. Quibusdam, ducimus voluptate enim similique
        ipsa repudiandae placeat laudantium eligendi cupiditate id, doloribus
        vitae provident dignissimos obcaecati minus asperiores mollitia!
        Deserunt eveniet quae in velit quasi totam adipisci ducimus earum?
        Voluptatem quam ex, deserunt soluta a reprehenderit." />

          <Card_Teacher
            imgUrl='/carrusel/Profe1.jpg'
            nombre="Vickie Schamberger"
            descripcion="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
          The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content 
          here, content here', making it look like readable English. It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." />

        </div>
        <Footer />
      </div>
    </div>
  )
}