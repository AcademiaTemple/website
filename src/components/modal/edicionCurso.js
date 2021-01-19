import React, { useState } from 'react'

const Confirmacion = React.forwardRef((props, ref) => {

    const [registro, estRegistro] = useState(props.registro);

    return (
        <div ref={ref} className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true" id="mi-modal">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Editar curso</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {props.texto}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" onClick={props.confirmar}>Sí</button>
                        <button type="button" className="btn btn-primary" onClick={props.cancelar}>No</button>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Confirmacion;