import firebase from './firebase';
import { navigate } from "gatsby"

// Profesor
export const obtProfesoresMuestra = async () => {
    return firebase.firestore().collection('docentes').where('activo', '==', 1).get()
        .then(qsn => {
            let lista = [];
            qsn.forEach(doc => {
                const { img, nombres, apellidos, sobreMi, etiquetas, likes, redes } = doc.data();
                lista.push({ id: doc.id, img, nombres, apellidos, sobreMi, etiquetas, likes, redes });
            });
            return lista;
        })
        .catch(error => {
            console.log(error);
            return [];
        });
}

export const obtPerfilProfesor = async idProfesor => {
    return firebase.firestore().collection('docentes').doc(idProfesor).get()
        .then(async doc => {
            if (doc.exists) {
                const { img, nombres, apellidos, sobreMi, logros, pais, experiencia, etiquetas, likes, redes } = doc.data();
                return {
                    id: doc.id,
                    cursos: await obtCursosPorProfesor(idProfesor),
                    img,
                    nombres,
                    apellidos,
                    sobreMi,
                    logros,
                    pais,
                    experiencia,
                    etiquetas,
                    likes,
                    redes
                };
            } else {
                return {};
            }
        })
        .catch(error => {
            console.log(error);
            return {};
        });
}

const obtProfesorCurso = async (idProfesor) => {
    return firebase.firestore().collection('docentes').doc(idProfesor).get()
        .then(doc => {
            if (doc.exists) {
                const { img, nombres, apellidos, sobreMi } = doc.data();
                return {
                    id: doc.id, img, nombres, apellidos, sobreMi
                };
            } else {
                return {};
            }
        })
        .catch(error => {
            console.log(error);
            return {};
        });
}

// Curso
export const obtCursosCalendario = async () => {
    return firebase.firestore().collection('cursos').where('activo', '==', 1).get()
        .then(qsn => {
            let lista = [];
            qsn.forEach(doc => {
                const { id, titulo, dias, hInicioFin, fInicioFin, excepciones, cancelaciones, urlInscripcion } = doc.data();
                lista.push({ id, titulo, dias, hInicioFin, fInicioFin, excepciones, cancelaciones, urlInscripcion });
            });
            return lista;
        })
        .catch(error => {
            console.log(error);
            return [];
        });
}

export const obtCursosMuestra = async () => {
    return firebase.firestore().collection('cursos').where('activo', '==', 1).get()
        .then(qsn => {
            let lista = [];
            qsn.forEach(doc => {
                const { titulo, urlImg, descBreve } = doc.data();
                lista.push({ id: doc.id, titulo, urlImg, descBreve });
            });
            return lista;
        })
        .catch(error => {
            console.log(error);
            return [];
        });
    //firebase.firestore().collection('episodios').doc('88Ec4OtP23y1IQxf7c0o').set(episodios)
    //return cursos.map(({ id, titulo, urlImg, descBreve }) => ({ id, titulo, urlImg, descBreve }));
}

export const obtCursoExtendido = async (idCurso) => {
    return firebase.firestore().collection('cursos').doc(idCurso).get()
        .then(async doc => {
            if (doc.exists) {
                const { idProfesor, titulo, urlImg, dias, hInicioFin, fInicioFin, excepciones, cancelaciones, urlInscripcion, descBreve, descExtendida, objetivo, requisitos } = doc.data();
                return {
                    id: doc.id,
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
            } else {
                return {};
            }
        })
        .catch(error => {
            console.log(error);
            return {};
        });
}

const obtCursosPorProfesor = async (idProfesor) => {
    return firebase.firestore().collection('cursos').where('idProfesor', '==', idProfesor).get()
        .then(qsn => {
            let lista = [];
            qsn.forEach(doc => {
                const { titulo, urlImg, descBreve } = doc.data();
                lista.push({ id: doc.id, titulo, urlImg, descBreve });
            });
            return lista;
        })
        .catch(error => {
            console.log(error);
            return [];
        });
}

// Clase
export const obtClasesCurso = async (idCurso) => {
    return firebase.firestore().collection('episodios').doc(idCurso).get()
        .then(doc => {
            if (doc.exists) {
                return doc.data().lista;
            } else {
                return [];
            }
        })
        .catch(error => {
            console.log(error);
            return [];
        });
}

// Sesión
firebase.auth().onAuthStateChanged(function (user) {
    if (!user) {
        navigate('/login');
    }
});

export const iniciarSesion = async (usuario, contrasena) => {
    return firebase.auth().signInWithEmailAndPassword(usuario, contrasena)
        .then((user) => {
            return user;
        })
        .catch((error) => {
            console.log(error.message);
            //var errorCode = error.code;
            //var errorMessage = error.message;
        });
}

export const cerrarSesion = async () => {
    return firebase.auth().signOut().then(function () {
        return true;
    }).catch(function (error) {
        console.log(error.message);
    });
}

export const obtUsuario = async () => {
    return firebase.auth().currentUser;
}

// Admin

// Profesor
export const obtProfesoresAdmin = async () => {
    return firebase.firestore().collection('docentes').get()
        .then(qsn => {
            let lista = [];
            qsn.forEach(doc => {
                lista.push({ ...doc.data(), id: doc.id });
            });
            return lista;
        })
        .catch(error => {
            console.log(error);
            return [];
        });
}

export const actEstadoProfesorAdmin = async (id, estado) => {
    return firebase.firestore().collection('docentes').doc(id).set(
        {
            activo: estado
        }, { merge: true });
}

// Curso
export const obtCursosAdmin = async () => {
    return firebase.firestore().collection('cursos').get()
        .then(async qsn => {
            let lista = [];
            for await (let doc of qsn.docs) {
                const { idProfesor, activo, titulo, urlImg, dias, hInicioFin, fInicioFin, excepciones, cancelaciones, urlInscripcion, descBreve, descExtendida, objetivo, requisitos } = doc.data();
                lista.push({
                    id: doc.id,
                    activo,
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
                    requisitos,
                    profesor: await obtProfesorCurso(idProfesor),
                    clases: await obtClasesCurso(doc.id),
                });
            }
            return lista;
        })
        .catch(error => {
            console.log(error);
            return [];
        });
}

export const actEstadoCursoAdmin = async (id, estado) => {
    return firebase.firestore().collection('cursos').doc(id).set(
        {
            activo: estado
        }, { merge: true });
}