import firebase from './firebase';
import { cursos } from './components/cursos/cursos-data';
import { docentes } from './components/docentes/docentes-data';
import { episodios } from './components/episodio/episodios-data';

const obtProfesorCurso = async (idProfesor) => {
    const { id, img, nombres, apellidos, sobreMi } = docentes.find(docente => docente.id === idProfesor) || {};
    return { id, img, nombres, apellidos, sobreMi };
}

const obtCursosPorProfesor = async (idProfesor) => {
    const resultado = cursos.filter(curso => curso.idProfesor === idProfesor) || [];
    return resultado.map(({ id, titulo, urlImg, descBreve }) => ({ id, titulo, urlImg, descBreve }));
}

export const obtCursosMuestra = async () => {
    return cursos.map(({ id, titulo, urlImg, descBreve }) => ({ id, titulo, urlImg, descBreve }));
}

export const obtClasesCurso = async (idCurso) => {
    const resultado = episodios.find(episodio => episodio.idCurso === idCurso);
    return resultado ? resultado.lista : [];
}

export const obtCursoExtendido = async (idCurso) => {
    const { id, idProfesor, titulo, urlImg, dias, hInicioFin, fInicioFin, excepciones, cancelaciones, urlInscripcion, descBreve, descExtendida, objetivo, requisitos } = cursos.find(curso => curso.id === idCurso) || {};
    return {
        id,
        titulo,
        urlImg,
        dias,
        hInicioFin,
        fInicioFin,
        excepciones,
        cancelaciones,
        urlInscripcion,
        descBreve,
        descExtendida,
        objetivo,
        profesor: await obtProfesorCurso(idProfesor),
        clases: await obtClasesCurso(idCurso),
        requisitos
    };
}

export const obtCursosCalendario = async () => {

    let lista = [];

    firebase.firestore().collection('cursos').get().then(qsn => {
        qsn.forEach(doc => {
            const { id, titulo, dias, hInicioFin, fInicioFin, excepciones, cancelaciones, urlInscripcion } = doc.data();
            lista.push({ id, titulo, dias, hInicioFin, fInicioFin, excepciones, cancelaciones, urlInscripcion });
        });
    }).catch(error => {
        console.log(error);
        lista = [];
    });

    return lista;
    /*return cursos.map(({ id, titulo, dias, hInicioFin, fInicioFin, excepciones, cancelaciones, urlInscripcion, }) => ({
        id,
        titulo,
        dias,
        hInicioFin,
        fInicioFin,
        excepciones,
        cancelaciones,
        urlInscripcion,
    }));*/

}

export const obtProfesores = async () => {
    const filtrados = docentes.map(({ id, img, nombres, apellidos, sobreMi, etiquetas, likes, redes }) => ({
        id,
        img,
        nombres,
        apellidos,
        sobreMi,
        etiquetas,
        likes,
        redes
    }));
    return filtrados;
}

export const obtPerfilProfesor = async idProfesor => {
    const { id, img, nombres, apellidos, sobreMi, logros, pais, experiencia, etiquetas, likes, redes } = docentes.find(docente => docente.id === idProfesor) || {};
    return { cursos: await obtCursosPorProfesor(idProfesor), id, img, nombres, apellidos, sobreMi, logros, pais, experiencia, etiquetas, likes, redes };
}