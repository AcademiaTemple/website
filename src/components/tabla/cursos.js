import React from 'react'

const Cursos = ({ cursos, editarModal, confirmarModal }) => {
    return (
        <div className="table-responsive-md">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Título</th>
                        <th scope="col">Días</th>
                        <th scope="col">Horas</th>
                        <th scope="col">Activo</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cursos.map((curso, indice) => (
                            <tr key={curso.id} className={curso.activo ? '' : 'table-danger'}>
                                <th scope="row">{indice + 1}</th>
                                <td>{curso.titulo}</td>
                                <td>{curso.dias.join(', ')}</td>
                                <td>{curso.hInicioFin.join(' a ')}</td>
                                <td>{curso.activo ? 'Sí' : 'No'}</td>
                                <td>
                                    <button onClick={() => editarModal({ ...curso, tipo: 'CURSO' })} className='btn btn-secondary'>
                                        <i className='fa fa-edit'></i>
                                    </button>
                                    {
                                        curso.activo
                                            ?
                                            <button onClick={() => confirmarModal({ ...curso, tipo: 'CURSO' })} className='btn btn-danger ml-3'>
                                                <i className='fa fa-power-off'></i>
                                            </button>
                                            :
                                            <button onClick={() => confirmarModal({ ...curso, tipo: 'CURSO' })} className='btn btn-success ml-3'>
                                                <i className='fa fa-power-off'></i>
                                            </button>
                                    }
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

    )
}

export default Cursos;