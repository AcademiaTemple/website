import React from "react"
import "./card_teacher.css"

export default function Card_Teacher(props) {
    return (
        <div className="card">
            <div className="container">
                <h4>
                    <b>{props.name}</b>
                </h4>
                <p>{props.description}</p>
            </div>
        </div>
    )
}