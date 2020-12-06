import React, { useEffect } from 'react'
import { useState } from 'react';
import { cursos } from './cursos-data';
import ImgFlechita from '../../../static/flechita.png'
import Calendar from 'react-calendar';
import CalendarCourses from './CalendarCourses';
import moment from "moment";
import 'moment/locale/es';

import 'react-calendar/dist/Calendar.css';
import './calendario.css'

const CalendarA = () => {
  const [fecha, estFecha] = useState(new Date());
  const [day, setday] = useState({
    courses: []
  });

  useEffect(() => {
    if (fecha.getDay() === 0) {
      setday({
        ...day,
        courses: cursos.domingo
      })
    }
    if (fecha.getDay() === 1) {
      setday({
        ...day,
        courses: cursos.lunes
      })
    }
    if (fecha.getDay() === 2) {
      setday({
        ...day,
        courses: cursos.martes
      })
    }
    if (fecha.getDay() === 3) {
      setday({
        ...day,
        courses: cursos.miercoles
      })
    }
    if (fecha.getDay() === 4) {
      setday({
        ...day,
        courses: cursos.jueves
      })
    }
    if (fecha.getDay() === 5) {
      setday({
        ...day,
        courses: cursos.viernes
      })
    }
    if (fecha.getDay() === 6) {
      setday({
        ...day,
        courses: cursos.sabado
      })
    }

  }, [fecha])

  const formatShortWeekday = (locale, date) => {
    return moment(date).format('ddd')[0];
  }

  const mes = moment(fecha).format('MMMM');

  return (

    <section className="seccion">
      <div className="contenedor contenedor-85">
        <h2 className="titulo-seccion">¡No te pierdas ni una clase!</h2>
        <div className="contenedor-cursos-calendario">
          <div className="contenedor-titulo-cursos-calendario">
            <img src={ImgFlechita} className='r-180' alt="flechita" />
            <p>Clases del día</p>
            <img src={ImgFlechita} alt="flechita" />
          </div>
          <div className="cursos-calendario">
            {
              cursos.map(e => (
                <div className="curso-calendario">
                  <p className="titulo-curso-calendario">{e.nombre}</p>
                  <div className="contenedor-img">
                    <img src={e.icono} alt="icono-curso" />
                  </div>
                  <p className="horario-curso-calendario">{e.horario}</p>
                </div>
              ))
            }
          </div>
        </div>

      </div>
    </section>
  )
}

export default CalendarA