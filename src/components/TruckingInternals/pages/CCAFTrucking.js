import React from 'react'
import Input from '../../Input'
import Logo from '../../Logo'
import Signature from '../../Signature'
import Title from '../../Title'

export default function CCAFTrucking({name, initials, address, phone}) {
    return (
        <div className='sheet font-12'>
            
            <div className="container">
      
                <div className="row text-center">
                    <div className="col-5">
                        <Logo width='70%'/>
                    </div>
                    <div className="col-7">
                        <Title text="CREDIT CARD AUTHORIZATION FORM"/>
                        <hr style={{border: '2px solid black'}}/>
                        FAX: <Input width = "30%" placeholder="N/A"/> CUSTOMER CODE: <Input width = "25%" placeholder="N/A"/>
                    </div>
                </div>
                
            </div>
            
            <div className="container border border-3 border-dark mt-3">
                
                <div className="row text-center" style={{background:'#b3b3b3'}}>
                    <div className="col">
                        CREDIT CARD HOLDER INFORMATION
                    </div>
                </div>
                
                <div className="row pt-2">
                    <div className="col-9">
                        LEGAL NAME OF BUSINESS OR INDIVIDUAL AUTHORIZING CHARGE (If corporation list full corporation name)
                    </div>
                    <div className="col-3">
                        <input type="radio" name="gender" value="male"/><strong style={{color:'red'}} className="ms-1">Different Card Holder</strong>
                    </div>
                </div>
                
                <div className="row text-center pb-2">
                    <div className="col-12">
                        <Input name="textinput" width="80%"/>
                    </div>
                </div>
                
                <div className="row pt-2" style={{borderTop: '2px solid black'}}>
                    <div className="col-12">
                        Physical Business Street Address (No. P.O. Boxes)
                    </div>
                </div>
                <div className="row text-center pb-2">
                    <div className="col-12">
                        <Input name="textinput" width="80%"/>
                    </div>
                </div>
                
                <div className="row" style={{borderTop: '2px solid black'}}>
                    <div className="col-6" style={{borderRight: '2px solid black'}}>
                        Business Phone:	
                    </div>
                    <div class="col-6">
                        Fax:
                    </div>
                </div>
                
                <div className="row text-center">
                    <div className="col-6" style={{borderRight: '2px solid black'}}>
                        <Input className="mb-2" name="textinput" width="80%"/>
                    </div>
                    <div className="col-6">
                        <Input name="textinput2" width="80%"/>
                    </div>
                </div>
                
            </div>
            
            <div className="container border border-3 border-dark mt-2">
                
                <div className="row text-center" style={{background:'#b3b3b3'}}>
                    <div className="col">
                        CREDIT CARD INFORMATION
                    </div>
                </div>
                
                <div className="row pt-2">
                    <div className="col-3">
                        <input className="me-1" type="checkbox" name="PAT_PendingTwo" value="Pending_Two"/> VISA
                    </div>
                    <div className="col-4 text-center">
                        <Input width = "100%"/>
                        <p className='mb-0'>Credit Card Number</p>
                    </div>
                    <div className="col-2 text-center">
                        Exp Date: 
                        <Input width = "20%" placeholder="mm" /> / 
                        <Input width = "30%" placeholder="yyyy"/>
                    </div>
                    <div className="col-3 text-center">
                        * CVV #: 
                        <Input width = "50%"/>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-3">
                        <input className="me-1" type="checkbox" name="PAT_PendingTwo" value="Pending_Two"/> MASTERCARD
                    </div>
                    <div className="col-4 text-center">
                        <Input width = "100%"/>
                        <p className='mb-0'>Credit Card Number</p>
                    </div>
                    <div className="col-2 text-center">
                        Exp Date: 
                        <Input width = "20%" placeholder="mm" /> / 
                        <Input width = "30%" placeholder="yyyy"/>
                    </div>
                    <div className="col-3 text-center">
                        * CVV #: 
                        <Input width = "50%"/>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-3">
                        <input className="me-1" type="checkbox" name="PAT_PendingTwo" value="Pending_Two"/> AMERICAN EXPRESS
                    </div>
                    <div className="col-4 text-center">
                        <Input width = "100%"/>
                        <p className='mb-0'>Credit Card Number</p>
                    </div>
                    <div className="col-2 text-center">
                        Exp Date: 
                        <Input width = "20%" placeholder="mm" /> / 
                        <Input width = "30%" placeholder="yyyy"/>
                    </div>
                    <div className="col-3 text-center">
                        * CVV #: 
                        <Input width = "50%"/>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-3">
                        <input className="me-1" type="checkbox" name="PAT_PendingTwo" value="Pending_Two"/> DISCOVER
                    </div>
                    <div className="col-4 text-center">
                        <Input width = "100%"/>
                        <p className='mb-0'>Credit Card Number</p>
                    </div>
                    <div className="col-2 text-center">
                        Exp Date: 
                        <Input width = "20%" placeholder="mm" /> / 
                        <Input width = "30%" placeholder="yyyy"/>
                    </div>
                    <div className="col-3 text-center">
                        * CVV #: 
                        <Input width = "50%"/>
                    </div>
                </div>
                
                <div className="row pb-2">
                    <div className="col-9">
                        Name, exactly as it appears on the card:
                        <Input width = "65%"/>
                    </div>
                    <div className="col-3 text-end">
                        * 3 digit # on the back of credit card
                    </div>
                </div>
                
                <div className="row pt-2"  style={{borderTop: '3px solid black'}}>
                    <div className="col-9">
                        Mailing Address on File with Credit Card Company (If you are unsure please call your Credit Card Company).
                        If this address is not correct; you will run the risk of your insurance policy being cancelled.
                    </div>
                    <div className="col-3">
                        <input type="radio" name="gender" value="male"/><strong style={{color:'red'}} className="ms-1">Address same as Address Above</strong>
                    </div>
                </div>
                
                
                <div className="row text-center pt-2">
                    <div className="col">
                        <Input name="textinput" width="80%"/>
                        <p className='mb-0'>Street</p>
                    </div>
                    <div className="col">
                        <Input name="textinput" width="80%"/>
                        <p className='mb-0'>City</p>
                    </div>
                    <div className="col">
                        <Input name="textinput" width="80%"/>
                        <p className='mb-0'>State</p>
                    </div>
                    <div className="col">
                        <Input name="textinput" width="80%"/>
                        <p className='mb-0'>Zip Code</p>
                    </div>
                </div>
                
            </div>
            
            <div className="container border border-3 border-dark mt-2">
                
                <div className="row text-center" style={{background:'#b3b3b3'}}>
                    <div className="col-12">
                        DATE OF TRANSACTION
                    </div>
                </div>
                
                <div className="row py-2">
                    <div className="col-12">
                        On the <Input width = "10%"/> of <Input width = "10%"/> of the year <Input width = "5%"/>, I authorize Adriana's Insurance Services to charge <Input width = "10%"/>. However,
                        if a balance is owed, the remaining balance of <Input width = "20%"/> will be charged on the <Input width = "10%"/> of <Input width = "10%"/> of the year <Input width = "5%"/>.
                    </div>
                </div>
                
            </div>
            
            <div className="container border border-3 border-dark mt-2">
                
                <div className="row py-2">
                    <div className="col-12">
                        <center>
                        **************************************************************IMPORTANT**********************************************************************
                        </center>
                        <p> 
                        If you intend for another individual pay for any policies purchased with Adriana’s Insurance Services, Inc. using your credit card, you must
                        give them authorization on this form. Please list the names of those individuals that are authorized to use your credit cards as payment for
                        policy premium. No other individuals will be allowed to request that these credit cards be used for any other policy payments.
                        </p>
                        <p>
                            Authorized User #1: <Input width = "35%" placeholder="N/A"/>  Authorized User #2: <Input width = "35%" placeholder="N/A"/>
                        </p> 
                        <p> 
                        The undersigned hereby declares that the credit Information listed above is true, accurate and appears in the name as stated and
                        authorization is hereby given to the above named individuals to use these cards for purchases from Adriana’s Insurance Services, Inc.
                        Further, I authorize my credit card company to accept and to charge to my account for purchases initiated by the above named individuals.
                        This authorization allows Adriana’s Insurance Services, Inc. to continue to use this information and such information shall remain in full
                        force and affect unless I revoke such authorization in writing.
                        </p>
                        <center>
                        Note: Any fee accrued due to chargeback’s or any other possible fees will be the responsibility of the card holder and/or authorized user.
                        </center>
                    </div>
                </div>
                
                <div className="row py-2"  style={{borderTop: '3px solid black'}}>
                    <div className="col-12">
                        <center> 
                        Amount for Sweep: <Input width = "300"/> 
                        </center>
                        (Please fill in the amount)
                        <Input width = "100%"/>
                        Date of Authorization: <Input className="mt-2" width = "30%"/> 
                    </div>
                </div>
                
                <div className="row text-center pt-5"  style={{borderTop: '3px solid black'}}>
                    <div className="col">
                        <Input name="textinput" width="80%"/>
                        <p className='mb-0'>Signature of Card Holder</p>
                    </div>
                    <div className="col">
                        <Input name="textinput" width="80%"/>
                        <p className='mb-0'>Print Name Here</p>
                    </div>
                </div>
                
            </div>

        </div>
    )
}