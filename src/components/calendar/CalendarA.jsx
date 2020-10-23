import React, { useEffect } from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import CalendarCourses from './CalendarCourses';
import { datacourses } from './DataCourses'
import moment from "moment";
import 'moment/locale/es';

import 'react-calendar/dist/Calendar.css';
import './calendar.css'

const CalendarA = () => {
  const [fecha, estFecha] = useState(new Date());
  const [day, setday] = useState({
    courses: []
  })

  useEffect(() => {
    if (fecha.getDay() === 0) {
      setday({
        ...day,
        courses: datacourses.domingo
      })
    }
    if (fecha.getDay() === 1) {
      setday({
        ...day,
        courses: datacourses.lunes
      })
    }
    if (fecha.getDay() === 2) {
      setday({
        ...day,
        courses: datacourses.martes
      })
    }
    if (fecha.getDay() === 3) {
      setday({
        ...day,
        courses: datacourses.miercoles
      })
    }
    if (fecha.getDay() === 4) {
      setday({
        ...day,
        courses: datacourses.jueves
      })
    }
    if (fecha.getDay() === 5) {
      setday({
        ...day,
        courses: datacourses.viernes
      })
    }
    if (fecha.getDay() === 6) {
      setday({
        ...day,
        courses: datacourses.sabado
      })
    }

  }, [fecha])

  const formatShortWeekday = (locale, date) => {
    return moment(date).format('ddd')[0];
  }

  const mes = moment(fecha).format('MMMM');

  return (
    <div className="calendar">
      <div className="calendar__container">
        <div className="calendar__courses" >
          <h3>Cursos del día</h3>
          {
            day.courses.map(item => (<CalendarCourses id={item.id} name={item.name} time={item.time} url={item.url} />))
          }
        </div>
        <div className="calendar__calendar">
          <h4 className='calendar-month'>{mes[0].toUpperCase() + mes.substr(1, mes.length - 1)}</h4>
          <Calendar
            onChange={estFecha}
            calendarType={'US'}
            showNavigation={false}
            formatShortWeekday={formatShortWeekday}
            // Usar esta propiedad para cambiar la fecha dinámicamente
            //activeStartDate={fecha}
            //onClickDay={() => {
            //}}
            // maxDetail=" "
            showNeighboringMonth={false}
          />
        </div>
      </div>
    </div>
  )
}

export default CalendarA
