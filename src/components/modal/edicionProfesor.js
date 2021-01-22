import React, { useRef, useState, useEffect } from 'react'
import { subirImagen, actProfesorAdmin, guardarProfesorAdmin } from '../../api'
import PropTypes from 'prop-types';

const Edicion = React.forwardRef((props, ref) => {

    let reftxtNombres = useRef();

    const [nombres, estNombres] = useState('');
    const [apellidos, estApellidos] = useState('');
    const [img, estImg] = useState(null);
    const [pais, estPais] = useState('');
    const [likes, estLikes] = useState(0);
    const [etiquetas, estEtiquetas] = useState('');
    const [logros, estLogros] = useState('');
    const [sobreMi, estSobreMi] = useState('');
    const [experiencia, estExperiencia] = useState('');
    const [github, estGithub] = useState('');
    const [patreon, estPatreon] = useState('');
    const [youtube, estYoutube] = useState('');

    useEffect(() => {
        reftxtNombres.current.focus();
    }, [])

    useEffect(() => {
        estNombres(props.data?.nombres);
        estApellidos(props.data?.apellidos);
        estPais(props.data?.pais);
        estLikes(props.data?.likes);
        estEtiquetas(props.data?.etiquetas?.join(', '));
        estLogros(props.data?.logros?.join(', '));
        estSobreMi(props.data?.sobreMi);
        estExperiencia(props.data?.experiencia);
        estGithub(props.data?.redes?.gh);
        estPatreon(props.data?.redes?.pt);
        estYoutube(props.data?.redes?.yt);
    }, [props.data]);

    const actNombres = (ev) => {
        estNombres(ev.target.value);
    }
    const actApellidos = (ev) => {
        estApellidos(ev.target.value);
    }
    const actImg = (ev) => {
        estImg(ev.target.files[0]);
    }
    const actPais = (ev) => {
        estPais(ev.target.value);
    }
    const actLikes = (ev) => {
        estLikes(ev.target.value);
    }
    const actEtiquetas = (ev) => {
        estEtiquetas(ev.target.value);
    }
    const actLogros = (ev) => {
        estLogros(ev.target.value);
    }
    const actSobreMi = (ev) => {
        estSobreMi(ev.target.value);
    }
    const actExperiencia = (ev) => {
        estExperiencia(ev.target.value);
    }
    const actGithub = (ev) => {
        estGithub(ev.target.value);
    }
    const actPatreon = (ev) => {
        estPatreon(ev.target.value);
    }
    const actYoutube = (ev) => {
        estYoutube(ev.target.value);
    }

    const guardarPerfil = (url) => {

        const dataNueva = {
            ...props.data,
            nombres,
            apellidos,
            pais,
            likes,
            etiquetas: etiquetas.split(','),
            logros: logros.split(','),
            sobreMi,
            experiencia,
            img: url,
            redes: {
                gh: github,
                pt: patreon,
                yt: youtube
            },
        };

        switch (props.modo) {
            case 'CREACION':
                guardarProfesorAdmin(dataNueva).then(() => {
                    props.guardarCambios();
                })
                break;

            case 'EDICION':
                actProfesorAdmin({
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
            subirImagen('profesores', props.data.id, img)
                .then(url => {
                    guardarPerfil(url);
                })
                .catch(error => {
                    alert('Error al subir la imagen. Reintente')
                    console.log(error);
                })
        } else {
            guardarPerfil(props.data.img);
        }
    }

    const encabezado = props.modo == 'CREACION' ? 'Crear profesor' : 'Editar profesor';

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
                                <label htmlFor="txtNombres">Nombres</label>
                                <input ref={reftxtNombres} type="text" value={nombres} onChange={actNombres} className="form-control form-control-lg" id="txtNombres" placeholder="Ingresa los nombres" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtApellidos">Apellidos</label>
                                <input type="text" value={apellidos} onChange={actApellidos} className="form-control form-control-lg" id="txtApellidos" placeholder="Ingresa los apellidos" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="imgProfesor">Imagen profesor</label>
                                <input type="file" accept="image/*" onChange={actImg} className="form-control-file" id="imgProfesor" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtPais">País</label>
                                <input type="text" value={pais} onChange={actPais} className="form-control form-control-lg" id="txtPais" placeholder="Ejemplo: Perú" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtLikes">Likes</label>
                                <input type="number" min={0} max={99} value={likes} onChange={actLikes} className="form-control form-control-lg" id="txtLikes" placeholder="0-99" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtEtiquetas">Etiquetas</label>
                                <input type="text" value={etiquetas} onChange={actEtiquetas} className="form-control form-control-lg" id="txtEtiquetas" placeholder="Ejemplo: C++, Java, Javascript" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtLogros">Logros</label>
                                <input type="text" value={logros} onChange={actLogros} className="form-control form-control-lg" id="txtLogros" placeholder="Logro 1, Logro 2, Logro 3" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtSobreMi">Sobre mí</label>
                                <textarea value={sobreMi} onChange={actSobreMi} className="form-control" id="txtSobreMi" rows="3"></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtExperiencia">Experiencia</label>
                                <textarea value={experiencia} onChange={actExperiencia} className="form-control" id="txtExperiencia" rows="3"></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtGithub">Github</label>
                                <input type="text" value={github} onChange={actGithub} className="form-control form-control-lg" id="txtGithub" placeholder="Ejemplo: C++, Java, Javascript" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtPatreon">Patreon</label>
                                <input type="text" value={patreon} onChange={actPatreon} className="form-control form-control-lg" id="txtPatreon" placeholder="Ejemplo: C++, Java, Javascript" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtYoutube">Youtube</label>
                                <input type="text" value={youtube} onChange={actYoutube} className="form-control form-control-lg" id="txtYoutube" placeholder="Ejemplo: C++, Java, Javascript" />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={guardarCambios}>Guardar</button>
                        <button type="button" className="btn btn-danger" onClick={props.cancelar}>Cancelar</button>
                        {/*
                        <button onClick={() => { reftxtNombres.current.focus() }}>Enfócame</button>
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
        nombres: PropTypes.string,
        apellidos: PropTypes.string,
        pais: PropTypes.string,
        likes: PropTypes.number,
        etiquetas: PropTypes.arrayOf(PropTypes.string),
        logros: PropTypes.arrayOf(PropTypes.string),
        sobreMi: PropTypes.string,
        experiencia: PropTypes.string,
        img: PropTypes.string,
        redes: PropTypes.shape({
            github: PropTypes.string,
            patreon: PropTypes.string,
            youtube: PropTypes.string,
        })
    })
}

Edicion.defaultProps = {
    data: {
        id: null,
        nombres: '',
        apellidos: '',
        pais: '',
        likes: 0,
        etiquetas: [],
        logros: [],
        sobreMi: '',
        experiencia: '',
        img: '',
        redes: {
            gh: '',
            pt: '',
            yt: ''
        }
    }
}

export default Edicion;