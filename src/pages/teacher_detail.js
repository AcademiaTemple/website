import React from "react"
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import CourseTeacher from "../components/course_teacher/course_teacher"
import EncabezadoTeacher from "../components/tarjeta_teacher/tarjeta_teacher"
import ParrafoTeacher from "../components/parrafo_teacher/parrafo_teacher"
import foto from "../img/Profe3.jpg"
import teacher from "../img/Profe1.jpg"

export default function teacher_detail() {
  return (
    <>
      <Navbar />
      <div className="course-teacher">
        <EncabezadoTeacher
          country="Mexico"
          perfil={teacher}
          name="Juan Perez"
          titulos={[
            "Desarrollador Frontend",
            "Deseñador de interfaces",
            "Desarrollador Backend",
          ]}
        />
        <ParrafoTeacher
          titulo="Un poco de mi historia"
          parrafo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ex
            quam, consectetur nec laoreet non, rhoncus quis dolor. Sed tempus
            purus quis felis feugiat, quis sollicitudin massa semper. In laoreet
            posuere pretium. Phasellus viverra felis at nisi aliquam, at commodo
            ligula tempor. Pellentesque eu odio eget mi tincidunt fermentum et
            non justo. Vestibulum a mi eu diam semper ornare. Sed vel velit
            cursus, pulvinar lectus at, dictum sapien. Donec tincidunt malesuada
            turpis quis eleifend. Donec nec tincidunt enim. Pellentesque
            placerat tristique ante, vitae varius massa. Maecenas molestie
            aliquam neque id tempor. Nulla sed augue volutpat, viverra ipsum sit
            amet, vehicula elit. Morbi in congue augue, a eleifend sem.
            Phasellus vestibulum ac ipsum quis efficitur. Curabitur sodales
            metus ac porttitor interdum. Quisque rutrum ullamcorper porta.
            Mauris dapibus odio eu lorem mollis, ac blandit felis volutpat.
            Donec tincidunt ex ac bibendum auctor. Etiam sit amet tempor tellus.
            Nulla ut risus sed purus tristique tincidunt id ac erat. Mauris
            semper ligula vitae porta hendrerit."
        />
        <ParrafoTeacher
          titulo="Mi experiencia"
          parrafo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ex
            quam, consectetur nec laoreet non, rhoncus quis dolor. Sed tempus
            purus quis felis feugiat, quis sollicitudin massa semper. In laoreet
            posuere pretium. Phasellus viverra felis at nisi aliquam, at commodo
            ligula tempor. Pellentesque eu odio eget mi tincidunt fermentum et
            non justo. Vestibulum a mi eu diam semper ornare. Sed vel velit
            cursus, pulvinar lectus at, dictum sapien. Donec tincidunt malesuada
            turpis quis eleifend. Donec nec tincidunt enim. Pellentesque
            placerat tristique ante, vitae varius massa. Maecenas molestie
            aliquam neque id tempor. Nulla sed augue volutpat, viverra ipsum sit
            amet, vehicula elit. Morbi in congue augue, a eleifend sem.
            Phasellus vestibulum ac ipsum quis efficitur. Curabitur sodales
            metus ac porttitor interdum. Quisque rutrum ullamcorper porta.
            Mauris dapibus odio eu lorem mollis, ac blandit felis volutpat.
            Donec tincidunt ex ac bibendum auctor. Etiam sit amet tempor tellus.
            Nulla ut risus sed purus tristique tincidunt id ac erat. Mauris
            semper ligula vitae porta hendrerit."
        />

        <ParrafoTeacher titulo="Mis cursos" />
        <CourseTeacher
          star={4.5}
          rutafoto={foto}
          name="Git y GitHub en HTML"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, ab
        doloribus. Autem, quibusdam. Quibusdam, ducimus voluptate enim similique
        ipsa repudiandae placeat laudantium eligendi cupiditate id, doloribus
        vitae provident dignissimos obcaecati minus asperiores mollitia!
        Deserunt eveniet quae in velit quasi totam adipisci ducimus earum?
        Voluptatem quam ex, deserunt soluta a reprehenderit."
        />
        <CourseTeacher
          star={2}
          rutafoto={foto}
          name="GitHub y HTML"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, ab
        doloribus. Autem, quibusdam. Quibusdam, ducimus voluptate enim similique
        ipsa repudiandae placeat laudantium eligendi cupiditate id, doloribus
        vitae provident dignissimos obcaecati minus asperiores mollitia!
        Deserunt eveniet quae in velit quasi totam adipisci ducimus earum?
        Voluptatem quam ex, deserunt soluta a reprehenderit."
        />
        <CourseTeacher
          star={3.5}
          rutafoto={foto}
          name="GitHub y HTML"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, ab
        doloribus. Autem, quibusdam. Quibusdam, ducimus voluptate enim similique
        ipsa repudiandae placeat laudantium eligendi cupiditate id, doloribus
        vitae provident dignissimos obcaecati minus asperiores mollitia!
        Deserunt eveniet quae in velit quasi totam adipisci ducimus earum?
        Voluptatem quam ex, deserunt soluta a reprehenderit."
        />
      </div>
      <Footer />
    </>
  )
}
