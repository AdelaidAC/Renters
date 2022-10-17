import React from 'react'
import Input from '../../Input'
import Logo from '../../Logo'
import Signature from '../../Signature'
import Title from '../../Title'
import Subtitle from '../../Subtitle'
import CDate from '../../CDate'

const services = 
[
    {
        service: 'Endorsements', 
        fee: 'From $200.00'
    }, 
    {
        service: 'MVR', 
        fee: '$10.00 per MVR'
    }, 
    {
        service: 'Vehicle Registration', 
        fee: '$10.00 per copy'
    }, 
    {
        service: 'Registration Renewal', 
        fee: '$25.00'
    }, 
    {
        service: 'EZBuy:', 
        fee: '$10.00'
    }, 
    {
        service: 'Promotional Services', 
        fee: '$25.00'
    }, 
    {
        service: 'Payments', 
        fee: '$10.00'
    }, 
    {
        service: 'Late Payment Fee', 
        fee: 'Up to $50.00'
    }, 
    {
        service: 'Agency Renewal', 
        fee: 'Up to 100% of original broker fee'
    }, 
    {
        service: 'Non-Sufficient Funds on Credit Card/Check', 
        fee: '$35.00'
    }, 
]

export default function BFDisclosure({firstSignature, secondSignature, name, initials, address, phone}) {


    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (

        <div className='sheet font-11 text-justify'>
            
            <Logo />

            <div className="d-flex justify-content-between mt-4">
                <label>
                    Client Name:
                    <Input width="400px" name="PAT_ClientName" className="ms-1" value={name}/>
                </label>
                <label>
                    Date: 
                    <CDate/>
                </label>
            </div>

            <Title text="STANDARD BROKER FEE DISCLOSURE" />

            <p className='text-center fw-bold'>This disclosure was prepared by California Insurance Commissioner: READ IT CAREFULLY!</p>
            
            <p>
                <strong>I. </strong>Do not sign any broker fee agreement unless all of its blank lines and spaces have been filled-in and you have read the entire document and the agreement carefully.
                <br />
                <strong>II. </strong>Your insurance broker represents you, the consumer, and is entitled to charge a broker fee if he/she chooses. This fee is not set by law, and may be negotiable
                between you and the broker.
                <br />
                <strong>III. </strong>It is illegal for an insurance broker to charge you a fee for placing coverage solely with the California Automobile Assigned Risk Plan or the California Fair Plan.
                Fees may be charged for placement of other coverage’s.
                <br />
                <strong>IV. </strong>Broker fees are often non-refundable even if you cancel your coverage. Refer to your broker fee agreement to see if your broker fee is non-refundable. However,
                you may be entitled to a full refund of a broker fee if your broker acted incompetently or dishonestly. Unresolved disputes over non-refunded broker fees can be
                forwarded to the Department of Insurance for review.
                <br />
                <strong>V. </strong>You are entitled to obtain and keep a completed copy of this disclosure and any broker fee agreement you sign.
                <br />
                <strong>VI. </strong>Your broker may receive a commission from insurance company(ies) for placing your insurance. This commission may be paid to your broker by the insurance
                company(ies) in addition to any broker fee you pay.
                <br />
                <strong>VII. </strong>If you will be paying your premium in installments to a finance company, by law you must receive a copy of a premium finance disclosure and agreement. Be
                sure to obtain and read those documents before signing a premium finance agreement. Also, ask the broker if the insurer offers its own installment payment plan.
                Insurer installment plans are often cheaper than premium financing through a separate premium finance company.
                <br />
                <strong>VIII. </strong>If your broker is placing automobile coverage; your broker must provide you with a copy of the current Department of Insurance pamphlet Automobile
                Insurance. If your broker is placing residential coverage, your broker must provide you with a copy of the current Department of Insurance pamphlet Residential
                Insurance. By signing this disclosure, you acknowledge receipt of the appropriate pamphlet(s).
            </p>

            <label>
                Client Initials:
                <Input width="100px" className="ms-1" value={initials}/>
            </label>

            <Subtitle text="Appointment of Insurance Broker and Agreement to Pay Broker Fee"/>

            <p>
                As of today, the undersigned ("Client") appoints Adriana's Insurance Service, Inc. ("Broker") as his/her insurance broker of record. This Agreement shall continue in
                full force until terminated by either party. Broker agrees to represent Client honestly and competently in obtaining and servicing the desired insurance coverage, as
                may be available, and Client agrees to act in good faith with Broker and provide Broker with full disclosure of all information and documentation necessary to allow
                Broker to procure an insurance policy. Client agrees to pay a broker fee for Broker's services. The broker fee is in addition to: (i) any commissions, contingent
                commissions, or bonuses, which may be paid to Broker by the insurance company; and (ii) the Additional Services, listed below. Client authorizes Broker to cancel
                insurance if premiums or fees remain unpaid to Broker.
            </p>

            <p>
                CLIENT agrees to pay BROKER a broker fee for BROKER’S services. The <strong>Broker Fee is</strong> <Input width="100px"/> (Client Initials: <Input width="100px" value={initials}/>). Client understands
                this fee and understands that the broker fee IS/IS NOT REFUNDABLE , irrespective of whether the policy is cancelled or rejected by the Client or insurer. Client
                authorizes Broker to maintain premium payments in interest-bearing trust accounts and to receive any interest income there from until paid to the insurance company.
                Additional Services: Broker may charge the following fees for the following services in addition to the broker fee:
            </p>

            <div className='services py-1'>
                {services.map((elem, i) => {
                    return (
                        <div key={i} className='d-flex service'>
                            <label>{elem.service}</label>
                            <label>{elem.fee}</label>
                        </div>
                    ) 
                })}
            </div>

            <p>
                <strong>PREMIUM PAYMENTS: </strong> 
                Broker may, at its sole option, accept premium installment payments and transmit the payments to the insurer for an additional fee of
                $10.00 for each payment received. Payments must be received by Broker not less than two (2) business days prior to the installment due date. Broker shall not be
                responsible for late payments, reinstatement fees, or resulting cancellation of your policy. Broker's liability for accepting premium payments shall be limited to the
                amount of the premium payment.
            </p>
            
            <Subtitle text="CANCELLATION AND OTHER MISCELLANEOUS PROVISIONS"/>
            
            <p>
                Broker will only honor cancellation requests made in writing and signed by the Client. Broker may provide client with insurance identification cards upon completion
                of the applications process. Client acknowledges and understands that insurance coverage is not provided until the application is underwritten and accepted by the
                insurance company. Accordingly, the identification cards cannot be used as proof of the insurance by the Client until the insurance company has bound and issued
                coverage as evidenced by a declaration page and/or policy. Client understands that a "binder" number is not evidence of insurance under the declaration page is
                issued. Broker and Client agree to binding arbitration with ADR of any disputes in which the amount claimed exceeds the small Claims Court jurisdiction under the
                rules set up by the DR, in accordance with California Code of Civil Procedure, without right of appeal.
            </p>
            
            <Signature firstSignature={firstSignature} secondSignature={secondSignature}/>
            
            <p className='text-center mt-2'>
                <strong>
                If you have any questions or complaints please call our customer service toll free number at 1-888-290-4040. In any case of questions/problems concerning broker fees or insurance,
                contact the Department of Insurance at 1-800-927-HELP
                </strong>
            </p>

        </div>

    )
}