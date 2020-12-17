import React, { useEffect } from 'react'
import { useState } from 'react';
import { cursos } from './cursos-data';
import ImgFlechita from '../../../static/flechita-blanca.png'
import ImgCalendario from '../../../static/calendario-blanco.png'
import Calendar from 'react-calendar';
import moment from "moment";
import 'moment/locale/es';

import 'react-calendar/dist/Calendar.css';
import './calendario.css'

const Calendario = () => {
  const [fecha, estFecha] = useState(new Date());
  const [textoFecha, estTextoFecha] = useState("Clases de hoy");
  const [clasesActuales, estClasesActuales] = useState([]);

  useEffect(() => {
    if (!(moment().isSame(moment(fecha), 'day'))) {
      estTextoFecha("Clases del " + moment(fecha).format('DD/MM/YYYY'));
    }
    const clases = cursos.filter(e => e.fecha === moment(fecha).format('DD/MM/YYYY'));
    estClasesActuales(clases);

  }, [fecha, textoFecha]);



  return (
    <section className="seccion">
      <div className="contenedor contenedor-85">
        <h2 className="titulo-seccion">¡No te pierdas ni una clase!</h2>
        <div className="contenedor-agenda">
          <div className="contenedor-cursos-calendario">
            <div className="contenedor-titulo-cursos-calendario">
              <p>{textoFecha}</p>

              <div className="controles d-md-none">
                <img src={ImgFlechita} className='r-180' alt="flechita" />
                <img src={ImgCalendario} className="img-calendario" alt="calendario" />
                <img src={ImgFlechita} alt="flechita" />
              </div>
            </div>
            <div className="cursos-calendario">
              {
                clasesActuales.map((e, i) => (
                  <div key={i} className="curso-calendario">
                    <p className="titulo-curso-calendario">{e.nombre}</p>
                    <div className="contenedor-img">
                      <img src={e.icono} alt="icono-curso" />
                    </div>
                    <p className="horario-curso-calendario">{e.horario}</p>
                  </div>
                ))
              }
              {
                clasesActuales==0 &&
                <p className="titulo-curso-calendario">No hay clases para este día</p>
              }
            </div>
          </div>
          <div className="contenedor-calendario d-none d-md-flex">
            <Calendar
              value={fecha}
              onChange={(e) => estFecha(e)}
              formatShortWeekday={(locale, date) => moment(date).format('dd')[0]}
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Calendario;