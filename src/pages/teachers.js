import React from "react"
import Carrusele from "../components/carrusel/carrusele"
import Card_Teacher from "../components/card_teacher/card_teacher"
// import foto from "../img/Profe1.jpg"
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import { graphql } from "gatsby"

export default function teachers({ data }) {
  return (
    <div>
      <Navbar />
      <Carrusele />
      <div className="teacher-container">
        <Card_Teacher
          rutafoto={data.foto1.childImageSharp.fixed}
          name="Juan Perez"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
          The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content 
          here, content here', making it look like readable English. It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
          seguidores="94"
          patreon="Juandev"
          facebook="Juandev"
          instagram="@juandev"
          hashta1="#Angular"
          hashta2="#Vuejs"
          hashta3="#React"
          urlconocercurso="/courses"
        />

        <Card_Teacher
          rutafoto={data.foto2.childImageSharp.fixed}
          name="Vickie Schamberger"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
          The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content 
          here, content here', making it look like readable English. It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
          seguidores="98"
          patreon="Vickie"
          facebook="Vickie"
          instagram="@Vickie"
          hashta1="#Gatsby"
          hashta2="#Vuejs"
          hashta3="#Angular"
          urlconocercurso="/courses"
        />


        {/* <Card_Teacher
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
        /> */}
      </div>
      <Footer />
    </div>
  )
}

export const query = graphql`
  query {
    foto1: file(relativePath: { eq: "Profe1.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 136, height: 136) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    foto2: file(relativePath: { eq: "Profe1.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 136, height: 136) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
