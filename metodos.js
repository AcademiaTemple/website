// Esto obtiene los cursos de la página Cursos
const obtCursosMuestra = () => {
    return {
        id,
        titulo,
        urlImg,
        descBreve
    }
}

// Estos datos llenan el perfil del curso, incluidas sus clases
const obtCursoExtendido = (id) => {
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
        profesor: {
            id,
            img,
            nombres,
            apellidos,
            sobreMi
        },
        clases: [
            {
                titulo,
                descripcion,
                urlVideo,
                duracion,
                recursos: [
                    {
                        nombre,
                        url
                    }
                ]
            }
        ]
    }
}

// Esto obtiene todos los cursos para que el calendario pueda hacer el filtro
const obtCursosCalendario = () => {
    return {
        id,
        titulo,
        dias,
        hInicioFin,
        fInicioFin,
        excepciones,
        cancelaciones,
        urlInscripcion,
    }
}

// Esto obtiene la lista de profesores en la página Docentes
const obtProfesores = () => {
    return {
        id,
        img,
        nombres,
        apellidos,
        sobreMi,
        etiquetas: [],
        likes,
        redes: {
            fb,
            gh,
            yt,
            pt
        }
    }
}

// Esto obtiene el perfil del profesor
const obtPerfilProfesor = (id) => {
    return {
        id,
        img,
        nombres,
        apellidos,
        sobreMi,
        logros,
        pais,
        experiencia,
        etiquetas: [],
        likes,
        cursos: [
            {
                id,
                titulo,
                urlImg,
                descBreve,
            }
        ],
        redes: {
            fb,
            gh,
            yt,
            pt
        }
    }
}
