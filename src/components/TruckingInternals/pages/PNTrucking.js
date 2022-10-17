import React from 'react'
import Input from '../../Input'
import Logo from '../../Logo'
import Signature from '../../Signature'
import Title from '../../Title'

export default function PNTrucking({firstSignature, secondSignature, name, initials, address, phone}) {
    return (
        <div className='sheet font-11'>
            
            <Logo />

            <Title text="PROMISSORY NOTE" />

            <p>
                Pursuant to U.C.C. Article 3, §§104-311, the following Note is a negotiable instrument, which legally binds you, the Maker, to legal
                performance of the terms therein. Consequently, because this instrument carries the full force and effect of a negotiable instrument,
                it grants certain rights and powers to the Holder of the Note. Any person who executes this instrument with the intent to dishonor it
                may be liable for fraud and other civil and/or criminal charges. Further, in consideration of this credit extension, I authorize
                Adriana’s Insurance Services, Inc. (“Adriana’s”) to obtain my credit report and to report my credit status to the credit bureau(s).
            </p>

            <p>
                I (We), <Input width = "550px"/>, the undersigned Maker(s), Presently residing at <Input width = "625px"/>, for value received, hereby promise to pay to the order of Adriana’s Insurance Services Inc. ,
                the sum of <Input width = "270px"/> (<Input width = "80px"/>), without interest, by no later than, <Input width = "250px"/>. In the event that my payment of the full amount of this note is not
                received by the aforementioned due date, the entire balance of principal then remaining unpaid, shall immediately become due and
                payable with interest from the date of this note, at the rate of 18% per annum, along with an added late charge of Twenty dollars ($20.00).
            </p>
            
            <Signature firstSignature={firstSignature} secondSignature={secondSignature}/>

            <Title text="POWER TO CANCEL INSURANCE FOR NON-PAYMENT" />
            
            <div className="mx-4">
                <p className="my-0">
                    <strong className="mx-1">
                        <Input />
                    </strong>{" "}
                    <strong className="me-3">Initials</strong>
                    I understand and agree that, if this Promissory Note to Adriana’s is not paid as agreed, I hereby grant Adriana’s the
                    power to request cancellation of my policy(ies) applied for through the California Automobile Assigned Risk Plan or
                    any other Company. I also understand that I shall be liable for any allowed charges, earned premiums, fully earned
                    fees, including broker fees, as well as, any collection or attorneys fees, if this should occur.
                </p>
            </div>

            <Title text="PROMISSORY NOTE GUARANTEE" />
            
            <div className="mx-4">
                <p className="my-0">
                    <strong className="mx-1">
                        <Input />
                    </strong>{" "}
                    <strong className="me-3">Initials</strong>
                    By initialing this Promissory Note GUARANTEE and signing the Promissory Note above, I understand and
                    acknowledge that I am legally bound, under the California Civil Code and the Uniform Commercial Code to make the
                    payment below to Adriana’s (including its successors and assigns). If I should dishonor this Promissory Note:

                    <br />
                    <br />

                    <strong>1.</strong> I may be sent to a Collection Agency, without further notice of calls, for the total amount of this Promissory Note,
                    interest, late fees, and any other fees or penalties;
                    <br />
                    <strong>2.</strong> I may be sued and be liable for the total amount of this Promissory Note, and other fees/penalties, including
                    interest and attorneys fees; and
                    <br />
                    <strong>3.</strong> My insurance coverage may be cancelled, which may result in additional charges by the insurance company(ies)
                    and which may cause me to be in violation of Sections 16020-16028 of the California Vehicle Code.
                </p>
            </div>

            <strong><p className='text-center fst-italic mb-0'>I hereby agree and acknowledge that my initials against the clauses above are endorsed by my handwritten
            statement and signature below.</p></strong>

            <div className='d-flex justify-content-between mt-5 mx-5 text-center'>
                <div className='border-top border-dark w-33'>
                    <p className='mb-0'>Insured's Signature</p>
                </div>
                <div className='border-top border-dark w-25'>
                    <p className='mb-0'>Date</p>
                </div>
                <div className='border-top border-dark w-33'>
                    <p className='mb-0'>Insured’s Name</p>
                </div>
            </div>

            <div className='d-flex justify-content-between mt-5 mx-5 text-center'>
                <div>
                    <Input width = "250"/>
                    <p className='mb-0'>Social Security Number</p>
                </div>
                <div>
                    <Input width = "250"/>
                    <p className='mb-0'>Cell Phone Number</p>
                </div>
                <div>
                    <Input width = "250"/>
                    <p className='mb-0'>Home Phone Number</p>
                </div>
                <div className='row'>
                    <div className='col-md-8'>
                        <Input width = "250"/>
                        <p className='mb-0'>Work Phone Number</p>
                    </div>
                    <div className='col-md-4'>
                        <Input/>
                        <p className='mb-0'>Ext.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}