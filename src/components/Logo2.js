import React from 'react'
import logo2 from '../img/golden-bear-logo.svg'

export default function Logo2(props) {
    return (
        <div className='d-flex justify-content-center'>
            <img style={{ width: props.width }}  src={logo2} alt="Golden Bear Logo" />
        </div>
    )
}

Logo2.defaultProps = {
    width: "50%", // Propiedad interna
};