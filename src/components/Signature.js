import React from 'react'

export default function Signature(props) {
    return (
        <div className='d-flex justify-content-between mt-5 mx-5 pt-5 text-center'>
            <div className='border-top border-dark w-40'>
                <p className='mb-0'>{props.firstSignature}</p>
            </div>
            <div className='border-top border-dark w-40'>
                <p className='mb-0'>{props.secondSignature}</p>
            </div>
        </div>
    )
}

Signature.defaultProps = {
    firstSignature: "Insured's Signature",
    secondSignature: "Broker's Signature",
}