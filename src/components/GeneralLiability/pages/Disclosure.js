import React from "react";
import CDate from "../../CDate";
import Input from "../../Input";
import Logo from "../../Logo";
import Signature from "../../Signature";
import Subtitle from "../../Subtitle";
import Title from "../../Title";

const disclosures = [
    {
        disclosure:
            "I understand and acknowledge that there is included in each monthly payment a billing fee. Payments must reach the insurance company on or before the due date to avoid cancellation. I understand that even if I do not receive a bill, it is my responsibility to pay the premium due. If the policy is cancelled, the insurance company may offer to reinstate the policy with a lapse in coverage. If the insurance company refuses to reinstate the policy, a new down payment will be required in order to replace the cancelled policy.",
        title: "BILLING FEE",
    },
    {
        disclosure:
            "Please be advised that the insurance company will send your policy and billing statements to the same address listed in Insured Statement form which was completed personally by you at the time of the insurance purchase. I acknowledge and agree that if my mailing address changes, I will immediately notify Broker of my new address. Disclosing false and/or incorrect information can affect my Insurance Coverage.",
        title: "CLIENT MAILING ADDRESS",
    },
    {
        disclosure:
            "I hereby understand that Adriana's Insurance Svcs, Inc. is not an insurance company but a broker; therefore, any claim will be resolved and paid directly by the insurer and not by the broker. In case I am entitled to receive a refund, the money will be paid by the insurer or finance company and in none of the cases by the broker. I also understand refunds will be processed by the insurer or the finance company within 90 days or more after effective date of cancellation.",
        title: "STATEMENT OF BROKER",
    },
    {
        disclosure:
            "I hereby understand that in case of early cancellation at anytime of this policy, the broker and policy fee will be considered earned and non refundable in any case. I hereby understandd that my current insurer will be charging a percentage of earned premium, which has been disclosed to me in my receipt, as minimum earned premium and not as pro-rated premium for the days I was insured. I also accept that in these cases. I have to wait for the insurer to refund the money to the finance company in order to balance the account and to be entitled to receive a refund if there will be any. In none of these cases will a verbal or telephone order of cancellation will be accepted by Adriana's Insurance Svcs, Inc.",
        title: "EARLY CANCELLATION",
    },
    {
        disclosure:
            "I hereby declare that no verbal agreements of any kind have been made between Adriana's Insurance Svcs. Inc., its representatives, its customer service personnel, and myself that is not in writing or disclosed on this disclosure. I hereby accept that there will be no exceptions in following this rule and any agreement to modify my policy will be in writing and subject to the approval and acceptance of Adriana's Insurance Svcs, Inc. and the insurer. Changes to my policy also have to be in writing submitted directly to Adriana's Insurance Svcs, Inc. I thereafter will be reponsible for any premium increase resulting from the change requested, what ever it may be, and the required down payment will be higher than the one used at inception.",
        title: "WRITTEN REQUESTS ONLY",
    },
    {
        disclosure:
            "I hereby understand, since I do not have the money to pay the premium of my policy, Adriana's Insurance Svcs, Inc.will sign an agreement, on my behalf, and will finance the net premium excluding taxes and fees through a Finance Company who will charge a legal finance interest and who will be in control of my account and I accept it in that way. I understand I have to make my payments on time ontime and if not, the finance company might apply legal late charges. In the event of cancellation, interest charges are accrued until all premiums are returned by the Insurance Company to the premium finance company. I am responsible for making my payments on time even if I have notreceived my bill and it will be up to the company to reinstate after a late payment.",
        title: "FINANCED PREMIUM",
    },
];

export default function Disclosure({name, initials, address, phone}) {
    return (
        
        <div className="sheet font-11 text-justify">
            
            <Logo />

            <div className="d-flex justify-content-between mt-4">
                <label>Insured's Name:
                    <Input width="400px" name="PAT_ClientName" className="ms-1" value={name}/>
                </label>
                <label>Date:
                    <CDate/>
                </label>
            </div>

            <Title text="DISCLOSURE FORM" />

            <div className="border border-1 border-dark my-2 mx-4"></div>

            <div className="row text-center">
                <div className="col">
                    <strong>CHANGES ON POLICY(IES)</strong>
                </div>
                <div className="col">
                    <strong>CANCELLATIONS</strong>
                </div>
                <div className="col">
                    <strong>ADDRESS CHANGE</strong>
                </div>
            </div>

            <p className="mx-4">
                I understand and agree that if at any time I want to make any changes
                through my Broker on my policy(ies), including upon renewal(s), it is
                my obligation to request such changes in writing to my Broker. I will
                thereafter be responsible for any titles or premium increase resulting
                from such changes.
            </p>
            
            {disclosures.map((elem, i) => {
                return (
                    <div key={i} >
                        <div className="border border-1 border-dark my-2 mx-4"></div>
                        <div className="mx-4">
                            <Subtitle text={elem.title}/>
                            <p className="my-0">
                                <Input value={initials}/>
                                <strong className="ms-1 me-3">Initials</strong> {elem.disclosure}
                            </p>
                        </div>
                    </div>
                );
            })}
            <div className="border border-1 border-dark my-2 mx-4"></div>
            
            <div className="ms-4 me-3" >
                <p>
                    I certify by my signature below that all information contained in my
                    application(s) for insurance is true and accurate. I understand that
                    additional efforts may be made by Broker or the insurance company to
                    verify the accuracy of the information contained in the Application,
                    and that if I provided inaccurate information, it may result in an
                    increase in my premium, rejection of my application, and/or
                    cancellation of my policy(ies).
                </p>

                <div className="border border-1 border-dark my-2"></div>

                <label className="d-block text-center fw-bold">I AGREE TO THE CONDITIONS AND DISCLOSURES ABOVE AND ACKNOWLEDGE RECEIPT OF A COPY OF THIS DISCLOSURE</label>
                
                <div className="border border-1 border-dark my-2"></div>

                <Signature/>

            </div>

        </div>

    );
}
