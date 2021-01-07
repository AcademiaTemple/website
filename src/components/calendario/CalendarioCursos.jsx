import React, { useEffect } from "react"
import { useState } from "react"
import { diasSemana } from "../cursos/cursos-data"
import { obtCursosCalendario } from '../../api'
import { navigate } from "gatsby"
import Calendar from "react-calendar"
import DatePicker from "react-datepicker"
import moment from "moment"
import "moment/locale/es"
import "react-datepicker/dist/react-datepicker.css"
import "react-calendar/dist/Calendar.css"
import "./calendario.css"

const Calendario = () => {
  const [cursos, estCursos] = useState([]);
  const [fecha, estFecha] = useState(new Date());
  const [clasesActuales, estClasesActuales] = useState([]);

  useEffect(() => {
    obtCursosCalendario()
      .then(cursos => estCursos(cursos));
  }, [])

  useEffect(() => {
    const obtenerClasesPorFecha = () => {
      const clases = cursos.filter(
        curso =>
          (moment(fecha).isBetween(
            moment(curso.fInicioFin[0], "DD/MM/YYYY"),
            moment(curso.fInicioFin[1], "DD/MM/YYYY")
          ) && // Verifico si está en el rango de inicio fin
            curso.dias.includes(diasSemana[moment(fecha).isoWeekday() - 1]) && // Verifico si incluye los días de la semana especificados
            !curso.cancelaciones.includes(moment(fecha).format("DD/MM/YYYY"))) || // Y que no esté en una fecha cancelada
          curso.excepciones.includes(moment(fecha).format("DD/MM/YYYY")) // Si no se cumple lo primero, otra opción es que esté agregada como excepción
      )
      return clases
    }
    const clases = obtenerClasesPorFecha()
    estClasesActuales(clases)
  }, [fecha, cursos])

  const navegar = (idCurso) => {
    navigate(`/course/?id=${idCurso}`);
  }

  const retrocederDia = () => {
    const nuevaFecha = moment(fecha).subtract(1, "days").toDate()
    estFecha(nuevaFecha)
  }

  const avanzarDia = () => {
    const nuevaFecha = moment(fecha).add(1, "days").toDate()
    estFecha(nuevaFecha)
  }

  const IconoCalendario = ({ value, onClick }) => (
    <button onClick={onClick} className="fa fa-calendar-alt" aria-label="Icono"></button>
  )

  return (
    <section className="seccion">
      <div className="contenedor contenedor-85">
        <h2 className="titulo-seccion">¡No te pierdas ni una clase!</h2>
        <div className="contenedor-agenda">
          <div className="contenedor-cursos-calendario">
            <div className="contenedor-titulo-cursos-calendario">
              <p>
                {!moment().isSame(moment(fecha), "day")
                  ? "Clases del " + moment(fecha).format("DD/MM/YYYY")
                  : "Clases de hoy"}
              </p>

              <div className="controles-agenda d-md-none">
                <button onClick={retrocederDia} className="fa fa-arrow-left" aria-label="Retroceder"></button>
                <div>
                  <DatePicker
                    selected={fecha}
                    onSelect={e => estFecha(e)}
                    popperPlacement="bottom"
                    popperModifiers={{
                      flip: {
                        behavior: ["bottom"], // don't allow it to flip to be above
                      },
                      preventOverflow: {
                        enabled: false, // tell it not to try to stay within the view (this prevents the popper from covering the element you clicked)
                      },
                      hide: {
                        enabled: false, // turn off since needs preventOverflow to be enabled
                      },
                    }}
                    customInput={<IconoCalendario />}
                  />
                </div>
                <button onClick={avanzarDia} className="fa fa-arrow-right"aria-label="Avanzar"></button>
              </div>
            </div>
            <div className="cursos-calendario">
              {clasesActuales.map((e, i) => (
                <div key={i} className="curso-calendario">
                  <p className="titulo-curso-calendario">{e.titulo}</p>
                  <div className="controles-curso">
                    <a target="_blank" rel="noreferrer" href={e.urlInscripcion}>
                      <i className="fa fa-clipboard-list"></i>
                    </a>
                    <button onClick={() => navegar(e.id)} className="fa fa-eye" aria-label="Visualizar"></button>
                  </div>
                  <p className="horario-curso-calendario">
                    {moment(e.hInicioFin[0], "HH:mm").format("hh:mm a") +
                      " - " +
                      moment(e.hInicioFin[1], "HH:mm").format("hh:mm a")}
                  </p>
                </div>
              ))}
              {clasesActuales === 0 && (
                <p className="titulo-curso-calendario">
                  No hay clases para este día
                </p>
              )}
            </div>
          </div>
          <div className="contenedor-calendario d-none d-md-flex">
            <Calendar
              value={fecha}
              onChange={e => estFecha(e)}
              formatShortWeekday={(locale, date) =>
                moment(date).format("dd")[0]
              }
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Calendario
