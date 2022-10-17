import React from 'react'
import CDate from '../../CDate'
import Input from '../../Input'
import Logo from '../../Logo'
import Title from '../../Title'

export default function PAAutoInternals({name}) {
    return (
        
        <div className='sheet font-11'>
            
            <Logo />

            <Title text="PROMISE TO PROVIDE AGREEMENT" />

            <div className='d-flex justify-content-between my-4'>
                <div className='d-flex col-8'>
                    <b>Client Name:</b>
                    <span className="flex-fill">
                        <Input className="w-100 ms-1 text-center" maxlength="40" value={name}/>
                    </span>
                </div>
                <div>
                    <b>Date: </b><CDate/>
                </div>
            </div>

            <p className='mt-4 text-justify'>
                It is my stated intention to obtain insurance coverage effective <input type="date"/>, however I do not have copies of the following information with me:
            </p>
            
            <div className='font-10'>
                
                <input className="me-1 mb-3" type="checkbox"/> 
                PROOF OF PRIOR INSURANCE FOR THE LAST
                <input className="ms-3 me-1" type="checkbox"/> 6 Months
                <input className="ms-3 me-1" type="checkbox"/> 1 Year
                <input className="ms-3 me-1" type="checkbox"/> 2 Years
                <input className="ms-3 me-1" type="checkbox"/> 3 Years
                <br/>
                <input className="me-1 mb-3" type="checkbox"/> 
                PROOF OF NON-FAULT OR NON-INJURY ACCIDENT FOR THE FOLLOWING DATE(S):
                <Input className="ms-1 text-center" width="160px" maxlength="25"/>
                <br/>
                <input className="me-1 mb-3" type="checkbox"/> 
                VALID LICENSE FOR:
                <input className="ms-3 me-1" type="checkbox"/> Driver 1
                <input className="ms-3 me-1" type="checkbox"/> Driver 2
                <input className="ms-3 me-1" type="checkbox"/> Driver 3
                <input className="ms-3 me-1" type="checkbox"/> Driver 4
                <input className="ms-3 me-1" type="checkbox"/> Driver 5
                <input className="ms-3 me-1" type="checkbox"/> Driver 6
                <br/>
                <input className="me-1 mb-3" type="checkbox"/> 
                VALID VEHICLE REGISTRATION FOR:
                <div className='mx-3 d-flex justify-content-between'>
                    <div>
                        <input className="me-3" type="checkbox"/>
                        <Input maxlength="6" className="text-center"/>
                        <Input maxlength="15" className="ms-1 text-center" width="140px"/>
                    </div>
                    <div>
                        <input className="me-3" type="checkbox"/>
                        <Input maxlength="6" className="text-center"/>
                        <Input maxlength="15" className="ms-1 text-center" width="140px"/>
                    </div>
                    <div>
                        <input className="me-3" type="checkbox"/>
                        <Input maxlength="6" className="text-center"/>
                        <Input maxlength="15" className="ms-1 text-center" width="140px"/>
                    </div>
                </div>
                <div className='mx-3 d-flex justify-content-between'>
                    <div>
                        <input className="me-3" type="checkbox"/>
                        <Input maxlength="6" className="text-center"/>
                        <Input maxlength="15" className="ms-1 text-center" width="140px"/>
                    </div>
                    <div>
                        <input className="me-3" type="checkbox"/>
                        <Input maxlength="6" className="text-center"/>
                        <Input maxlength="15" className="ms-1 text-center" width="140px"/>
                    </div>
                    <div>
                        <input className="me-3" type="checkbox"/>
                        <Input maxlength="6" className="text-center"/>
                        <Input maxlength="15" className="ms-1 text-center" width="140px"/>
                    </div>
                </div>
                <br/>
                <input className="me-1 mb-3" type="checkbox"/> 
                VEHICLE FOR INSPECTIONS AND PHOTOS OF ALL FOUR SIDES:
                <div className='mx-3 d-flex justify-content-between'>
                    <div>
                        <input className="me-3" type="checkbox"/>
                        <Input maxlength="6" className="text-center"/>
                        <Input maxlength="15" className="ms-1 text-center" width="140px"/>
                    </div>
                    <div>
                        <input className="me-3" type="checkbox"/>
                        <Input maxlength="6" className="text-center"/>
                        <Input maxlength="15" className="ms-1 text-center" width="140px"/>
                    </div>
                    <div>
                        <input className="me-3" type="checkbox"/>
                        <Input maxlength="6" className="text-center"/>
                        <Input maxlength="15" className="ms-1 text-center" width="140px"/>
                    </div>
                </div>
                <div className='mx-3 d-flex justify-content-between'>
                    <div>
                        <input className="me-3" type="checkbox"/>
                        <Input maxlength="6" className="text-center"/>
                        <Input maxlength="15" className="ms-1 text-center" width="140px"/>
                    </div>
                    <div>
                        <input className="me-3" type="checkbox"/>
                        <Input maxlength="6" className="text-center"/>
                        <Input maxlength="15" className="ms-1 text-center" width="140px"/>
                    </div>
                    <div>
                        <input className="me-3" type="checkbox"/>
                        <Input maxlength="6" className="text-center"/>
                        <Input maxlength="15" className="ms-1 text-center" width="140px"/>
                    </div>
                </div>
                <br/>
                <input className="me-1 mb-3" type="checkbox"/> 
                PROOF OF GARAGING ADDRESS
                <input className="ms-5 me-1 mb-3" type="checkbox"/> 
                TELEMATICS
                <br/>
                <input className="me-1 mb-3" type="checkbox"/> 
                PROOF OF MARRIAGE
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input className="ms-5 me-1 mb-3" type="checkbox"/> 
                PROOF OF BUSINESS
                <br/>
                <input className="me-1 mb-3" type="checkbox"/> 
                SALES OR LEASE AGREEMENT
                &nbsp;&nbsp;
                <input className="ms-5 me-1 mb-3" type="checkbox"/> 
                PROOF OF GENERAL LIABILITY
                <br/>
                <input className="me-1 mb-3" type="checkbox"/> 
                BALANCE DUE
                <br/>
                <input className="me-1" type="checkbox"/> 
                OTHER
                <Input className="ms-1" width="90%" maxlength="100"/>
            
            </div>

            <p className="text-center my-4">
                I hereby promise to provide the above-indicated information by 
                <CDate/> to Adriana's Insurance Services, Inc.
            </p>
            
            <p className="mb-5 text-justify">
                In the event that the information is not provided by the above-mentioned date, I understand that some or all of my coverage may be subject to a premium increase, cancellation, or rejection, 
                with no coverage in effect. I further understand that if a premium increase, cancellation or rejection occurs because I fail to provide the above indicated information, I may lose all or part 
                of my down payment and fully-earned Broker’s Fee, and I may incur a financial loss.
            </p>

            <div className='d-flex justify-content-center text-center pt-4'>
                <div className='border-top border-dark' style={{ width: "300px"}}>
                    <p className='mb-0 fw-bold'>Broker's Signature</p>
                </div>
            </div>

        </div>

    )
}