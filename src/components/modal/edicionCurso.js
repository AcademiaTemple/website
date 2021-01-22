import React, { useRef, useState, useEffect } from 'react'
import { guardarCursoAdmin, actCursoAdmin, obtProfesoresCombo, subirImagen } from '../../api'
import PropTypes from 'prop-types';

const Edicion = React.forwardRef((props, ref) => {

    let refTxtTitulo = useRef();

    const [profesores, estProfesores] = useState([]);

    const [titulo, estTitulo] = useState('');
    const [img, estImg] = useState(null);
    const [urlInscripcion, estUrlInscripcion] = useState('');
    const [objetivo, estObjetivo] = useState('');
    const [descBreve, estDescBreve] = useState('');
    const [descExtendida, estDescExtendida] = useState('');
    const [requisitos, estRequisitos] = useState('');

    const [dias, estDias] = useState('');
    const [fInicioFin, estFInicioFin] = useState('');
    const [hInicioFin, estHInicioFin] = useState('');
    const [excepciones, estExcepciones] = useState('');
    const [cancelaciones, estCancelaciones] = useState('');
    const [idProfesor, estIdProfesor] = useState('');
    const [clases, estClases] = useState([]);

    useEffect(() => {
        refTxtTitulo.current.focus();
        obtProfesoresCombo().then((profesores) => {
            estProfesores(profesores);
        })
    }, [])

    useEffect(() => {
        estTitulo(props.data?.titulo);
        estUrlInscripcion(props.data?.urlInscripcion);
        estObjetivo(props.data?.objetivo);
        estDescBreve(props.data?.descBreve);
        estDescExtendida(props.data?.descExtendida);
        estRequisitos(props.data?.requisitos?.join(', '));
        estDias(props.data?.dias?.join(', '));
        estFInicioFin(props.data?.fInicioFin.join(', '));
        estHInicioFin(props.data?.hInicioFin.join(', '));
        estExcepciones(props.data?.excepciones.join(', '));
        estCancelaciones(props.data?.cancelaciones.join(', '));
        estIdProfesor(props.data?.idProfesor);
        estClases([]);
    }, [props.data]);

    const actTitulo = (ev) => {
        estTitulo(ev.target.value);
    }
    const actImg = (ev) => {
        estImg(ev.target.files[0]);
    }
    const actUrlInscripcion = (ev) => {
        estUrlInscripcion(ev.target.value);
    }
    const actObjetivos = (ev) => {
        estObjetivo(ev.target.value);
    }
    const actDescBreve = (ev) => {
        estDescBreve(ev.target.value);
    }
    const actDescExtendida = (ev) => {
        estDescExtendida(ev.target.value);
    }
    const actRequisitos = (ev) => {
        estRequisitos(ev.target.value);
    }
    const actDias = (ev) => {
        estDias(ev.target.value);
    }
    const actFinicioFin = (ev) => {
        estFInicioFin(ev.target.value);
    }
    const actHInicioFin = (ev) => {
        estHInicioFin(ev.target.value);
    }
    const actExcepciones = (ev) => {
        estExcepciones(ev.target.value);
    }
    const actCancelaciones = (ev) => {
        estCancelaciones(ev.target.value);
    }
    const actIdProfesor = (ev) => {
        estIdProfesor(ev.target.value);
    }

    const guardarCurso = (url) => {

        const dataNueva = {
            ...props.data,
            titulo,
            urlImg: url,
            urlInscripcion,
            objetivo,
            descBreve,
            descExtendida,
            requisitos: requisitos.split(','),
            dias: dias.split(','),
            fInicioFin: fInicioFin.split(','),
            hInicioFin: hInicioFin.split(','),
            excepciones: excepciones.split(','),
            cancelaciones: cancelaciones.split(','),
            idProfesor
        };

        switch (props.modo) {
            case 'CREACION':
                guardarCursoAdmin(dataNueva).then(() => {
                    props.guardarCambios();
                })
                break;

            case 'EDICION':
                actCursoAdmin({
                    ...props.data,
                    ...dataNueva
                }).then(() => {
                    props.guardarCambios();
                })
                break;
        }
    }

    const guardarCambios = () => {
        if (img) {
            subirImagen('cursos', props.data.id, img)
                .then(url => {
                    guardarCurso(url);
                })
                .catch(error => {
                    alert('Error al subir la imagen. Reintente')
                    console.log(error);
                })
        } else {
            guardarCurso(props.data.urlImg);
        }
    }

    const encabezado = props.modo == 'CREACION' ? 'Crear curso' : 'Editar curso';

    return (
        <div ref={ref} className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true" id="mi-modal">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{encabezado}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="txtTitulo">Título</label>
                                <input ref={refTxtTitulo} type="text" value={titulo} onChange={actTitulo} className="form-control form-control-lg" id="txtTitulo" placeholder="Ingresa el título" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="imgCurso">Imagen curso</label>
                                <input type="file" accept="image/*" onChange={actImg} className="form-control-file" id="imgCurso" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtUrlInscripcion">URL inscripción</label>
                                <input type="text" value={urlInscripcion} onChange={actUrlInscripcion} className="form-control form-control-lg" id="txtUrlInscripcion" placeholder="htpps://docs.google..." />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtObjetivo">Objetivo</label>
                                <input type="text" value={objetivo} onChange={actObjetivos} className="form-control form-control-lg" id="txtObjetivo" placeholder="Objetivo 1, objetivo 2" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtDescBreve">Descripción breve</label>
                                <textarea value={descBreve} onChange={actDescBreve} className="form-control" id="txtDescBreve" rows="3"></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtDescExtendida">Descripción extendida</label>
                                <textarea value={descExtendida} onChange={actDescExtendida} className="form-control" id="txtDescExtendida" rows="3"></textarea>
                            </div>
                            <legend class="col-form-label mt-4 mb-4">Horarios</legend>
                            <div className="form-group">
                                <label htmlFor="txtRequisitos">Requisitos</label>
                                <input type="text" value={requisitos} onChange={actRequisitos} className="form-control form-control-lg" id="txtRequisitos" placeholder="Requisito 1, requisito 2" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtDias">Días</label>
                                <input type="text" value={dias} onChange={actDias} className="form-control form-control-lg" id="txtDias" placeholder="LU, MA, MI, JU, VI, SA, DO" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtFInicioFin">Fecha inicio y fin</label>
                                <input type="text" value={fInicioFin} onChange={actFinicioFin} className="form-control form-control-lg" id="txtFInicioFin" placeholder="dd/mm/yyyy, dd/mm/yyyy" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtHInicioFin">Hora inicio y fin</label>
                                <input type="text" value={hInicioFin} onChange={actHInicioFin} className="form-control form-control-lg" id="txtHInicioFin" placeholder="hh:mm, hh:mm" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtExcepciones">Fechas excepciones</label>
                                <input type="text" value={excepciones} onChange={actExcepciones} className="form-control form-control-lg" id="txtExcepciones" placeholder="dd/mm/yyyy, dd/mm/yyyy, dd/mm/yyyy, etc" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtCancelaciones">Fechas cancelaciones</label>
                                <input type="text" value={cancelaciones} onChange={actCancelaciones} className="form-control form-control-lg" id="txtCancelaciones" placeholder="dd/mm/yyyy, dd/mm/yyyy, dd/mm/yyyy, etc" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cboProfesores">Profesor</label>
                                <select onChange={actIdProfesor} value={idProfesor} class="form-control form-control-lg" id="cboProfesores">
                                    {
                                        profesores.map(profesor => (
                                            <option value={profesor.id}>{profesor.nombres + ' ' + profesor.apellidos}</option>
                                        ))
                                    }
                                </select>
                            </div>

                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={guardarCambios}>Guardar</button>
                        <button type="button" className="btn btn-danger" onClick={props.cancelar}>Cancelar</button>
                        {/*
                        <button onClick={() => { refTxtTitulo.current.focus() }}>Enfócame</button>
                        */}
                    </div>
                </div>
            </div>
        </div>
    )
})

Edicion.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string,
        titulo: PropTypes.string,
        ulrImg: PropTypes.string,
        urlInscripcion: PropTypes.string,
        objetivo: PropTypes.string,
        descBreve: PropTypes.string,
        descExtendida: PropTypes.string,
        requisitos: PropTypes.arrayOf(PropTypes.string),
        dias: PropTypes.arrayOf(PropTypes.string),
        fInicioFin: PropTypes.arrayOf(PropTypes.string),
        hInicioFin: PropTypes.arrayOf(PropTypes.string),
        excepciones: PropTypes.arrayOf(PropTypes.string),
        cancelaciones: PropTypes.arrayOf(PropTypes.string),
        idProfesor: PropTypes.string,
        clases: PropTypes.arrayOf(PropTypes.object)
    })
}

Edicion.defaultProps = {
    data: {
        id: null,
        titulo: '',
        urlImg: '',
        urlInscripcion: '',
        objetivo: '',
        descBreve: '',
        descExtendida: '',
        requisitos: [],
        dias: [],
        fInicioFin: [],
        hInicioFin: [],
        excepciones: [],
        cancelaciones: [],
        idProfesor: '',
        clases: []
    }
}

export default Edicion;