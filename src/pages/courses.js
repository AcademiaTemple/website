import React from "react"
import Card from "../components/cursos/card/card"
import cursos from "../components/cursos/cursos-data.jsx"
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"

export default function Courses() {
    return ( 
        <div>
            <Navbar />
            <div className = "cuerpo-pagina" >
            <div className = "row" > 
                {
                    cursos.map((props, index) => ( 
                        <div key = { index } className = "col-12 col-sm-3" >
                            <Card {...props }/> 
                        </div>
                    ))
                } 
            </div> 
            <Footer />
            </div> 
        </div>
    )
}