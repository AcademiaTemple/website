import React, { useEffect } from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import './calendar.css'
import CalendarCourses from './CalendarCourses';
import {mes3} from './MonthCalendar'
import {datacourses} from './DataCourses'
const CalendarA = () => {
    const [value, onChange] = useState(new Date());
    const [day, setday] = useState({
      courses:[]
    })

    useEffect(() => {

      if(value.getDay() === 0){
        setday({
          ...day,
          courses: datacourses.domingo
        })
      }
      if(value.getDay() === 1){
        setday({
          ...day,
          courses: datacourses.lunes
        })
      }
      if(value.getDay() === 2){
        setday({
          ...day,
          courses: datacourses.martes
        })
      }
      if(value.getDay() === 3){
        setday({
          ...day,
          courses: datacourses.miercoles
        })
      }
      if(value.getDay() === 4){
        setday({
          ...day,
          courses: datacourses.jueves
        })
      }
      if(value.getDay() === 5){
        setday({
          ...day,
          courses: datacourses.viernes
        })
      }
      if(value.getDay() === 6){
        setday({
          ...day,
          courses: datacourses.sabado
        })
      }
      
    }, [value])


    return (
      <div style={{display:'flex',justifyContent:'center'}}>
        <div className="calendar__container">
          <div className="calendar__courses" >
            <h3>Cursos del Día</h3>
            {
              day.courses.map(item =>{
                return (<CalendarCourses id={item.id} name={item.name} time={item.time} url={item.url}></CalendarCourses>)
              })
            }
            
          </div>
          <div className="calendar__calendar">
          <h3>{mes3}</h3>
          <Calendar
            onChange={onChange}
            showNavigation={false}
            value={value}      
            // maxDetail=" "
            showNeighboringMonth={false}
          />
          </div>
      </div>
      </div>
    )
}

export default CalendarA
