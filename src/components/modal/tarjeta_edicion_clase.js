import React, { useState, useEffect } from 'react'
import { stringToArray, arrayToStringList } from '../../helpers/funcionesArreglo'
import PropTypes from 'prop-types';

const TarjetaEdicion = ({ nueva, clase, idCurso, correlativo, agregar, actualizar, eliminar }) => {

    const [orden, estOrden] = useState(0);
    const [titulo, estTitulo] = useState('');
    const [descripcion, estDescripcion] = useState('');
    const [duracion, estDuracion] = useState('');
    const [link, estLink] = useState('');
    const [recursos, estRecursos] = useState('');

    const actOrden = (ev) => {
        estOrden(parseInt(ev.target.value));
    }
    const actTitulo = (ev) => {
        estTitulo(ev.target.value);
    }
    const actDescripcion = (ev) => {
        estDescripcion(ev.target.value);
    }
    const actDuracion = (ev) => {
        estDuracion(ev.target.value);
    }
    const actLink = (ev) => {
        estLink(ev.target.value);
    }
    const actRecursos = (ev) => {
        estRecursos(ev.target.value);
    }

    const cadenaAObjRecursos = (cadena) => {
        if (cadena) {
            let regFinal = [];
            try {
                const regRecursos = stringToArray(cadena);
                regFinal = regRecursos.map(reg => {
                    const objRecurso = stringToArray(reg, '--');
                    var nombre = objRecurso[0].replace("titulo:", "").trim();
                    var url = objRecurso[1].replace("link:", "").trim();
                    return { nombre, url };
                })
            } catch (error) {
                return { error, lista: [] };
            }
            return { lista: regFinal };
        } else {
            return { lista: [] };
        }
    }

    const agregarClase = () => {
        if (!isNaN(orden) && orden != '' && titulo != '' && duracion != '' && link != '') {
            const { lista, error } = cadenaAObjRecursos(recursos);
            if (!error) {
                const nuevaData = {
                    descripcion,
                    duracion,
                    idCurso: idCurso,
                    orden,
                    titulo,
                    urlVideo: link,
                    recursos: lista
                };
                agregar(nuevaData);
            } else {
                alert('Recursos de clase ' + orden + ' no válido');
            }
        } else {
            alert('Hay campos inválidos en la clase ' + orden);
        }
    }

    const actualizarClase = () => {
        if (!isNaN(orden) && orden != '' && titulo != '' && duracion != '' && link != '') {
            const { lista, error } = cadenaAObjRecursos(recursos);
            if (!error) {
                const nuevaData = {
                    id: clase.id,
                    descripcion,
                    duracion,
                    idCurso: clase.idCurso,
                    orden,
                    titulo,
                    urlVideo: link,
                    recursos: lista
                };
                actualizar(nuevaData);
            } else {
                alert('Recursos de clase ' + orden + ' no válido');
            }
        } else {
            alert('Hay campos inválidos en la clase ' + orden);
        }
    }

    const eliminarClase = () => {
        eliminar(clase.id);
    }

    useEffect(() => {
        estOrden(correlativo ? correlativo : clase.orden);
        estTitulo(clase?.titulo);
        estDescripcion(clase?.descripcion);
        estDuracion(clase?.duracion);
        estLink(clase?.urlVideo);
        estRecursos(arrayToStringList(clase?.recursos));
    }, [clase]);

    return (
        <form>
            <legend class="col-form-label mb-4">{nueva ? 'Nueva clase' : 'Clase N° ' + orden}</legend>
            <div class="form-row">
                <div className="form-group col-3">
                    <label htmlFor="txtOrden">Orden</label>
                    <input min="1" type="number" value={orden} onChange={actOrden} className="form-control form-control-lg" id="txtOrden" placeholder="Ingresa el número de orden" />
                </div>
                <div className="form-group col-9">
                    <label htmlFor="txtTitulo">Título</label>
                    <input type="text" value={titulo} onChange={actTitulo} className="form-control form-control-lg" id="txtTitulo" placeholder="Ingresa el título" />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="txtDescripcion">Descripción</label>
                <textarea value={descripcion} onChange={actDescripcion} className="form-control" id="txtDescripcion" rows="3"></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="txtDuracion">Duración (Xh Ym)</label>
                <input type="text" value={duracion} onChange={actDuracion} className="form-control form-control-lg" id="txtDuracion" placeholder="Ejemplo: 1h 50m" />
            </div>
            <div className="form-group">
                <label htmlFor="txtLink">Id video Youtube</label>
                <input type="text" value={link} onChange={actLink} className="form-control form-control-lg" id="txtLink" placeholder="Ejemplo: KxWQCsE_GTo" />
            </div>
            <div className="form-group">
                <label htmlFor="txtRecursos">Recursos (titulo: A1 -- link: B1, titulo: A2 -- link: B2)</label>
                <textarea value={recursos} onChange={actRecursos} className="form-control" id="txtRecursos" rows="3"></textarea>
            </div>
            {
                nueva
                    ?
                    <button type="button" className="btn btn-success btn-block mb-4" onClick={agregarClase}>Agregar</button>
                    :
                    <>
                        <button type="button" className="btn btn-primary btn-block mb-4" onClick={actualizarClase}>Actualizar</button>
                        <button type="button" className="btn btn-danger btn-block mb-4" onClick={eliminarClase}>Eliminar</button>
                    </>
            }
        </form>
    )
}

TarjetaEdicion.propTypes = {
    clase: PropTypes.shape({
        id: PropTypes.string,
        descripcion: PropTypes.string,
        duracion: PropTypes.string,
        idCurso: PropTypes.string,
        orden: PropTypes.number,
        titulo: PropTypes.string,
        urlVideo: PropTypes.string,
        recursos: PropTypes.arrayOf(PropTypes.shape({
            nombre: PropTypes.string,
            url: PropTypes.string
        }))
    })
}

TarjetaEdicion.defaultProps = {
    clase: {
        id: '',
        descripcion: '',
        duracion: '0h 0m',
        idCurso: '',
        orden: 1,
        titulo: '',
        urlVideo: '',
        recursos: []
    }
}

export default TarjetaEdicion;