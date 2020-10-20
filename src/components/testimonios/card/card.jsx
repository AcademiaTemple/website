import React from "react"
import "./card.css"
import star from '../../../../static/star.svg'


export default function Card(props) {
    
    var getRating = () => {
        let rating = []
        for (let i = 1; i <= props.rating; i ++)
            rating.push(<img src={star} />)
        return rating
    }

    return (
        <div className="card card-blue">
            <div className="card-body">
                <div className="row">
                    <div className="col-3">
                        <img src={props.image} className="rounded-circle testimonio-img" />
                    </div>
                    <div className="col">
                        <h5 className="card-title">{props.name}</h5>
                        <h6 className="card-subtitle text-muted">{props.course}</h6>
                    </div>
                </div><br/>
                <div className="row">
                    <div className="col">
                        <div className="comillas"></div>
                        <p className="testimonio-text">{props.testimonio}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-right">
                        { getRating() }
                    </div>
                </div>
            </div>
        </div>
    )
}