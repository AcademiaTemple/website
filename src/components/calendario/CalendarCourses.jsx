import React from 'react'
import './calendario.css'

const CalendarCourses = (props) => {
    const { name, time, url } = props
    return (
        <div className='calendar-courses'>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '10px' }}>
                <h3>{name}</h3>
                {/*<img className="calendar__imagecourse" src={url}></img>*/}
            </div>
            <span style={{ color: '#4DC6F3' }}>{time}</span>
        </div>
    )
}

export default CalendarCourses
