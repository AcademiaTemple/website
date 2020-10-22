import React from 'react'
import './calendar.css'
const CalendarCourses = (props) => {
    const { name, time, url } = props
    return (
        <div>
            <div style={{ display: 'flex' }}>
                <h3>{name} </h3>
                <img className="calendar__imagecourse" src={url}></img>
            </div>
            <span style={{ color: '#4DC6F3' }}>{time}</span>
        </div>
    )
}

export default CalendarCourses
