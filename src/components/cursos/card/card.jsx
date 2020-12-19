import React from 'react'
import './card.css';

function Card(props) {

  return (
    <div className="card mb-5">
        <img src={props.img} className="card-img-top rounded-img-course" alt="img-curso" /> 
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
        </div>
    </div>
  );
}
export default Card;