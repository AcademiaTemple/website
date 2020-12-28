import React, { useState, useEffect } from "react"
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import CourseTeacher from "../components/course_teacher/course_teacher"
import ParrafoTeacher from "../components/parrafo_teacher/parrafo_teacher"
import foto from "../../static/carrusel/Profe3.jpg"
import teacher from "../../static/carrusel/Profe1.jpg"

const api = "https://restcountries.eu/rest/v2/all";

export default function Teacher_detail(props) {

  const [pais, estPais] = useState({});

  useEffect(() => {
    fetch(api)
      .then(response => response.json())
      .then(paises => {
        const encontrado = paises.find(pais => pais.name === 'Mexico');
        estPais(encontrado);
      })
  }, []);

  return (
    <div>
      <Navbar />
      <div className="contenedor cuerpo-pagina">
        <div className="row encabezado-perfil-docente">
          <div className="col-12 col-md-2">
            <img
              src={teacher}
              className="rounded-circle img-perfil-profesor"              
              alt="foto-perfil"
            />
          </div>
          <div className="col-12 col-md-5 datos-perfil-docente">
            <h2 className="name-teacher">
              <b>Juan Perez</b>
            </h2>
            <div className="contenedor-nacionalidad-profesor">
              <h3 className="pais-profesor">
                {pais.name}
              </h3>
              <img className="banera-pais-profesor" src={pais.flag} alt="" width="30px" />
            </div>
            <div className="titulos-docente">{
              [
                "Desarrollador Frontend",
                "Deseñador de interfaces",
                "Desarrollador Backend",
              ].map((titulo, index) => (
                <p key={index} className="titulo-carrera">
                  {titulo}
                </p>
              ))
            }</div>

            <div className="btn-toolbar contenedor-etiquetas-perfil">
              <button type="button" className="etiquetas">
                #html
                </button>
              <button type="button" className="etiquetas">
                #html
                </button>
              <button type="button" className="etiquetas">
                #html
                </button>
            </div>

          </div>

          <div className="col-12 col-md-2 d-none d-md-block likes">
            <h6>98</h6>
            <i className="fas fa-thumbs-up"></i>
          </div>

          <div className="col-12 col-md-2 d-none d-md-flex redes-sociales pr-5">
            <div className="redes-docentes">
              <i className="fab fa-patreon"></i>
              <p className="red-social">Patreon</p>
              <p className="red-usuario">@hola</p>
            </div>
            <div className="redes-docentes">
              <i className="fab fa-facebook-square"></i>
              <p className="red-social">Facebook</p>
              <p className="red-usuario">@hola</p>
            </div>
            <div className="redes-docentes">
              <i className="fab fa-instagram"></i>
              <p className="red-social">Instagram</p>
              <p className="red-usuario">@hola</p>
            </div>
          </div>
        </div>
      </div>

      <div className="contenedor">
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

        <ParrafoTeacher titulo="Mis cursos" parrafo={null} />
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
    </div>
  )
}