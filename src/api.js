import firebase from './firebase';
import { navigate } from "gatsby"

// Profesor
export const obtProfesoresMuestra = async () => {
    return firebase.firestore().collection('docentes').where('activo', '==', 1).orderBy('nombres', 'asc').get()
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

export const obtProfesoresCombo = async () => {
    return firebase.firestore().collection('docentes').where('activo', '==', 1).orderBy('nombres', 'asc').get()
        .then(qsn => {
            let lista = [];
            qsn.forEach(doc => {
                const { img, nombres, apellidos } = doc.data();
                lista.push({ id: doc.id, nombres, apellidos });
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
    return firebase.firestore().collection('episodios')
        .where('idCurso', '==', idCurso)
        .orderBy('orden', 'desc')
        .get()
        .then(qsn => {
            let lista = [];
            qsn.forEach(doc => {
                const data = doc.data();
                lista.push({ id: doc.id, ...data });
            });
            return lista;
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

// País
export const obtPais = (prefijo) => {
    return fetch('https://restcountries.eu/rest/v2/alpha/' + prefijo)
        .then(response => response.json())
        .then(pais => pais);
}

// Admin

// Profesor
export const obtRegistrosPaginadosAdmin = async (coleccion, campo, limite = 10, antesDe, despuesDe, incluirRegistro) => {

    const campoConsulta = campo;

    let ref = firebase.firestore().collection(coleccion).orderBy(campoConsulta).limit(limite + 1);

    if (antesDe) {
        ref = ref.endBefore(antesDe[campoConsulta]).limitToLast(limite + 1);
    }

    if (despuesDe) {
        if (incluirRegistro) {
            ref = ref.startAt(despuesDe[campoConsulta]);
        } else {
            ref = ref.startAfter(despuesDe[campoConsulta]);
        }

    }

    return ref
        .get()
        .then(qsn => {
            let lista = [];
            qsn.forEach(doc => {
                lista.push({ ...doc.data(), id: doc.id });
            });

            let haySiguiente = false;
            if (lista.length == limite + 1) { // Esto significa que hay siguiente
                haySiguiente = true;
                if (antesDe) {
                    lista.shift(); // Elimino el primero, porque he retrocedido
                }
                else {
                    lista.pop(); // Elimino el último
                }
            }
            return {
                lista,
                haySiguiente
            };
        })
        .catch(error => {
            console.log(error);
            return {
                lista: []
            };
        });
}

export const actEstadoProfesorAdmin = async (id, estado) => {
    return firebase.firestore().collection('docentes').doc(id).set(
        {
            activo: estado
        }, { merge: true });
}

export const actProfesorAdmin = async (profesor) => {
    return firebase.firestore().collection('docentes').doc(profesor.id).set(
        profesor, { merge: true });
}

export const guardarProfesorAdmin = async (profesor) => {
    return firebase.firestore().collection('docentes').add({ ...profesor, activo: 1 });
}

// Curso
export const actEstadoCursoAdmin = async (id, estado) => {
    return firebase.firestore().collection('cursos').doc(id).set(
        {
            activo: estado
        }, { merge: true });
}

export const actCursoAdmin = async (curso) => {
    return firebase.firestore().collection('cursos').doc(curso.id).set(
        curso, { merge: true });
}

export const guardarCursoAdmin = async (curso) => {
    return firebase.firestore().collection('cursos').add({ ...curso, activo: 1 });
}

// Clase
export const guardarClaseAdmin = async (clase) => {
    return firebase.firestore().collection('episodios').add(clase);
}

export const actClaseAdmin = async (clase) => {
    return firebase.firestore().collection('episodios').doc(clase.id).set(
        clase, { merge: true });
}

export const eliminarClaseAdmin = async(idClase)=> {
    return firebase.firestore().collection('episodios').doc(idClase).delete();
}

// Archivos
export const subirImagen = async (ruta, id, archivo) => {
    return new Promise((resolve, reject) => {
        let storageRef = firebase.storage().ref();
        let imgRef = storageRef.child(`${ruta}/${id}`);
        const task = imgRef.put(archivo);

        task.on('state_changed', function (snapshot) {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;
            }
        }, function (error) {
            reject(error);
        }, function () {
            task.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                resolve(downloadURL);
            });
        });
    })

}