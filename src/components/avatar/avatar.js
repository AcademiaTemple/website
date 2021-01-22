import React, { useState, useEffect } from 'react'
import ImgUsuarioGenerico from '../../../static/usuario-generico.svg'

const Avatar = ({ img, clases }) => {
    const [imgProfesor, estImgProfesor] = useState(ImgUsuarioGenerico);

    useEffect(() => {
        estImgProfesor(img);
    }, [img])

    return (
        <img onError={() => estImgProfesor(ImgUsuarioGenerico)} alt='img-avatar' src={imgProfesor} className={clases} />
    )
}

export default Avatar;
