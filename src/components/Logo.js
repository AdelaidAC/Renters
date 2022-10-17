import React from 'react'
import logo from '../img/adrianaslogo.jpg'

export default function Logo(props) {
    return (
        <div className='d-flex justify-content-center'>
            <img style={{ width: props.width }}  src={logo} alt="Adriana's Logo" />
        </div>
    )
}

Logo.defaultProps = {
    width: "30%", // Propiedad interna
};