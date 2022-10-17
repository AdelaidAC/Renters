import React from 'react'
import CDate from '../../CDate'
import Input from '../../Input'
import Logo from '../../Logo'
import Signature from '../../Signature'
import Title from '../../Title'

const agreementValues = 
[
    "PROOF OF PRIOR FOR THE LAST", 
    "BUSINESS TAX LICENSE", 
    "CONTRACTOR'S LICENSE", 
    "VALID IDENTIFICATION FOR APPLICANT", 
    "ADDITIONAL INSURED'S INFORMATION", 
    "VERIFICATION OF LOCATION INFORMATION", 
    "RECEIPTS OR ESTIMATE FOR EQUIPMENT", 
    "INSPECTION OF PREMISES AND/OR OPERATIONS", 
    "BALANCE DUE", 
    "OTHER"
]

export default function PromiseAgreement({name, initials, address, phone}) {
    return (
        
        <div className='sheet font-14 text-justify'>

            <Logo />

            <div className="d-flex justify-content-between mt-4">
                <label>Client Name:
                    <Input width="400px" name="PAT_ClientName" className="ms-1" value={name}/>
                </label>
                <label>Date:
                    <CDate/>
                </label>
            </div>

            <Title text="PROMISE TO PROVIDE AGREEMENT" />

            <p>
                It is my stated intention to obtain insurance coverage effective <CDate/>, however I do not have copies of the following information with me:
            </p>
            
            <div>
                {agreementValues.map((elem, i) => {
                if (i === 0) {
                    return (
                    <>
                        <label className='form-check form-check-inline'><input type="checkbox" className='form-check-input' />{elem}</label>
                        <label className='form-check form-check-inline'><input type="checkbox" className='form-check-input' />6 Months</label>
                        <label className='form-check form-check-inline'><input type="checkbox" className='form-check-input' />1 Year</label>
                        <label className='form-check form-check-inline'><input type="checkbox" className='form-check-input' />2 Years</label>
                        <label className='form-check form-check-inline'><input type="checkbox" className='form-check-input' />3 Years</label>
                    </>
                    )
                } else if (i === agreementValues.length-1) {
                    return (
                        <>
                            <label className='form-check mt-2'>
                                <input type="checkbox" className='form-check-input' />
                                {elem}: 
                                <span className='flex-fill'>
                                <Input width="91.5%" className="ms-1"/>
                                </span>
                            </label>
                        </>
                    
                    
                    )
                }
                return (
                    <label className='form-check mt-2'><input type="checkbox" className='form-check-input' />{elem}</label>
                )
                })}
            </div>

            <h5 className="text-center my-2 text-red text-decoration-underline">URGENT NOTICE!</h5>

            <p className="border border-dark border-3 p-2 mx-3">
                In the event that the information is not provided by the above-mentioned date, I understand that some or all of my coverage may be subject to a premium increase, cancellation, or rejection, with no coverage in effect. An inspection will be conducted either in person or via other means per the sole choice of the insurance carrier placed. <strong>If inspection process is not completed, the insurance carrier may opt to change the premium upon their discretion or in most cases even cancel the policy and no refunds will be awarded.</strong> I will not hold my broker (Adriana's Insurance Svcs, Inc.) accountable for any losses incurred in any way from my failure to participate in such inspection. I further understand that if a premium increase, cancellation, or rejection occurs because I fail to provide the above indicated information, I may lose all or part of my down payment and fully-earned Broker’s Fee, and I may incur a financial loss.
            </p>

            <p className="text-center my-4">
                I hereby promise to provide the above-indicated information by <CDate/> to Adriana's Insurance Services, Inc.
            </p>

            <p className="mx-3 mb-5">
                In the event that the information is not provided by the above-mentioned date, I understand that some or all of my coverage may be subject to a premium increase, cancellation, or rejection, with no coverage in effect. I further understand that if a premium increase, cancellation or rejection occurs because I fail to provide the above indicated information, I may lose all or part of my down payment and fully-earned Broker’s Fee, and I may incur a financial loss.
            </p>

            <Signature />

        </div>

    )
}