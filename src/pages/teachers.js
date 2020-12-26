import React from "react"
import Carrusel from "../components/carrusel/carrusele"
import Card_Teacher from "../components/docentes/card/card_teacher"
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import { graphql } from "gatsby"

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
            rutafoto={data.foto1.childImageSharp.fixed}
            name="Juan Perez"
            description="Docente del curso de Angular React Vuejs Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, ab
        doloribus. Autem, quibusdam. Quibusdam, ducimus voluptate enim similique
        ipsa repudiandae placeat laudantium eligendi cupiditate id, doloribus
        vitae provident dignissimos obcaecati minus asperiores mollitia!
        Deserunt eveniet quae in velit quasi totam adipisci ducimus earum?
        Voluptatem quam ex, deserunt soluta a reprehenderit."
          />

          <Card_Teacher
            rutafoto={data.foto2.childImageSharp.fixed}
            name="Vickie Schamberger"
            description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
          The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content 
          here, content here', making it look like readable English. It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
            seguidores="99"

            patreon="Vickie"
            urlpatreon="/courses"
            facebook="Vickie"
            urlfacebook="/courses"
            instagram="@Vickie"
            urlinstagram="/courses"

            hashta1="#Gatsby"
            urlhashta1="/courses"
            hashta2="#Angular"
            urlhashta2="/courses"
            hashta3="#React"
            urlhashta3="/courses"
            urlconocercurso="/courses"
          />

        </div>
        <Footer />
      </div>
    </div>
  )
}

export const query = graphql`
  query {    
    foto1: file(relativePath: { eq: "carrusel/Profe1.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    foto2: file(relativePath: { eq: "carrusel/Profe2.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    foto4: file(relativePath: { eq: "carrusel/Profe4.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    foto5: file(relativePath: { eq: "carrusel/Profe5.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
