import React from "react";

const gLServices = [
    {
        id: 'gLEndorsements',
        service: 'Endorsements', 
        fee: 'From $200.00'
    }, 
    {
        id: 'gLMVR',
        service: 'MVR', 
        fee: '$10.00 per MVR'
    }, 
    {
        id: 'gLVRegistration',
        service: 'Vehicle Registration', 
        fee: '$10.00 per copy'
    }, 
    {
        id: 'gLRRenewal',
        service: 'Registration Renewal', 
        fee: '$25.00'
    }, 
    {
        id: 'gLEZBuy',
        service: 'EZBuy:', 
        fee: '$10.00'
    }, 
    {
        id: 'gLPServices',
        service: 'Promotional Services', 
        fee: '$25.00'
    }, 
    {
        id: 'gLPayments',
        service: 'Payments', 
        fee: '$10.00'
    }, 
    {
        id: 'gLLPFee',
        service: 'Late Payment Fee', 
        fee: 'Up to $50.00'
    }, 
    {
        id: 'gLARenewal',
        service: 'Agency Renewal', 
        fee: 'Up to 100% of original broker fee'
    }, 
    {
        id: 'gLNSFC',
        service: 'Non-Sufficient Funds on Credit Card/Check', 
        fee: '$35.00'
    }, 
]

export default function AdditionalServices(props) {
    return (
        
        <div className='services'>
            {gLServices.map((e) => {
                return (
                    <div key={e.id} className='d-flex service'>
                        <label>{e.service}</label>
                        <label>{e.fee}</label>
                    </div>
                ) 
            })}
        </div>

    )
}