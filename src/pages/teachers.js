import React from "react"
import Carrusele from "../components/carrusel/carrusele"
import Card_Teacher from "../components/card_teacher/card_teacher"
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import { graphql } from "gatsby"

export default function teachers({ data }) {
  return (
    <div>
      <Navbar />
      <Carrusele
      imgbanner1={data.fotobanner1.childImageSharp.fluid}
      imgbanner2={data.fotobanner2.childImageSharp.fluid}
      imgbanner3={data.fotobanner3.childImageSharp.fluid}
      imgbanner4={data.fotobanner4.childImageSharp.fluid}
      />
      <div className="teacher-container">
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

<Card_Teacher
          rutafoto={data.foto3.childImageSharp.fixed}
          name="Jorge Stiedemann"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
          The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content 
          here, content here', making it look like readable English. It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
          seguidores="99"
          
          patreon="Jorge"
          urlpatreon="/courses"
          facebook="Jorge"
          urlfacebook="/courses"
          instagram="@Jorge"
          urlinstagram="/courses"

          hashta1="#Gatsby"
          urlhashta1="/courses"
          hashta2="#Angular"
          urlhashta2="/courses"
          hashta3="#React"
          urlhashta3="/courses"

          urlconocercurso="/courses"

        />

<Card_Teacher
          rutafoto={data.foto4.childImageSharp.fixed}
          name="Israel Wunsch"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
          The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content 
          here, content here', making it look like readable English. It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
          seguidores="99"
          
          patreon="Israel"
          urlpatreon="/courses"
          facebook="Israel"
          urlfacebook="/courses"
          instagram="@Israel"
          urlinstagram="/courses"

          hashta1="#Gatsby"
          urlhashta1="/courses"
          hashta2="#Angular"
          urlhashta2="/courses"
          hashta3="#React"
          urlhashta3="/courses"

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
    fotobanner1: file(relativePath: { eq: "Banner1.jpg" }) {
      childImageSharp {
        fluid(maxWidth:1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fotobanner2: file(relativePath: { eq: "Banner2.jpg" }) {
      childImageSharp {
        fluid(maxWidth:1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fotobanner3: file(relativePath: { eq: "Banner3.jpg" }) {
      childImageSharp {
        fluid(maxWidth:1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fotobanner4: file(relativePath: { eq: "Banner4.jpg" }) {
      childImageSharp {
        fluid(maxWidth:1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    foto1: file(relativePath: { eq: "Profe1.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 136, height: 136) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    foto2: file(relativePath: { eq: "Profe2.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 136, height: 136) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    foto3: file(relativePath: { eq: "Profe3.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 136, height: 136) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    foto4: file(relativePath: { eq: "Profe4.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 136, height: 136) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    foto5: file(relativePath: { eq: "Profe5.jpg" }) {
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
