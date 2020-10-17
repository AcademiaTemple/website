import React from "react"
import { Link } from "gatsby"
import Navbar from "../components/navbar/navbar"
import CalendarA from "../components/calendar/CalendarA"
import Header from "../components/header/header"
export default function Home() {
    return <div>
        <Navbar />
        <Header />
        <h1> Academia Temple </h1> 
        <p> Mejorando la educación a nivel global </p> 
        <CalendarA></CalendarA>
        <Link to = "/about" > Entérate más sobre nosotros </Link> 
    </div>
}