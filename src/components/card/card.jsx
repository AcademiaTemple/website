import React from "react"
import "./card.css"

export default function Card(props) {
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