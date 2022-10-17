import React from "react";
import Input from "../../Input";
import RadioB from "../../RadioYN";
import Logo from "../../Logo";

export default function DiligentSearchReport({name, initials, address, phone}) {
    return (

        <div className="sheet font-11 text-justify">

            <Logo />

            <div className="text-center mb-4">
                <h5 className="mb-0">
                    <strong> DILIGENT SEARCH REPORT </strong>
                </h5>
                <p className="mb-0">(Please Refer to the Instructions on Page 3 of This Form)</p>
            </div>
            
            <div>
                <p>
                    1.
                    <span className="mx-3">
                        <Input />
                    </span>
                    hereby submits that he/she is:
                    <br />
                    <strong className="mx-3"> (A)</strong> Duly licensed under California
                    Department of Insurance license number <Input />;
                    <br />
                    <strong className="mx-3"> (B)</strong> Duly licensed and authorized
                    to act as an endorsee on the organizational license of <Input />,
                    <br />
                    <strong className="mx-4"></strong> California Department of Insurance
                    license number <Input />;
                    <br />
                    <strong className="mx-3"> (C)</strong> that he/she or said
                    organizational licensee was engaged by the insured named herein, or
                    the insured’s broker, to obtain insurance as described in this report;
                </p>
                <div className="border border-1 border-dark mt-0 mb-1"></div>
                <div className="border border-1 border-dark mt-0 mb-1"></div>
                <p>
                    2.
                    <strong className=" mx-2">
                        (A) Name of Insured: <Input />
                    </strong>
                    <br />
                    <strong className=" mx-3">
                        (B) Address of Insured: <Input />
                    </strong>
                    <br />
                    <strong className=" mx-3 text-red">
                        Address & Location are the same <Input /> <Input /> <Input />
                    </strong>
                    <br />
                    <strong className=" mx-3">
                        (C) Description of Risk: <Input />
                    </strong>
                    <br />
                    <strong className=" mx-3">
                        (D) Location of Risk: <Input />
                    </strong>
                    <br />
                    <span className=" mx-3">
                        <Input /> <Input /> <Input />
                    </span>
                    <br />
                    <strong className=" mx-3">
                        (E) Type of Insurance Coverage: <Input />
                    </strong>
                </p>
                <div className="border border-1 border-dark mt-0 mb-1"></div>
                <div className="border border-1 border-dark mt-0 mb-1"></div>
                <div className="my-0">
                    3.
                    <strong className=" ms-2 mb-0">
                        If Private Passenger Automobile Liability Insurance
                    </strong>
                    is identified on line 2(E), complete the following:
                    <br />
                    <strong className=" mt-0 mx-3"> (A)</strong> Does the insured qualify as a
                    "Good Driver" under Section 1861.025 of the California Insurance Code?
                    <br /> <RadioB />

                    <strong className=" mx-3"> (B)</strong> Does the coverage that you
                    have placed include, in whole or in part, the limits of coverage
                    provided under the California Automobile Assigned Risk Plan
                    (CAARP)?
                    <br /> <RadioB />
                    <strong className=" mx-3"> (C)</strong> If YES, has this risk been
                    submitted to and found to be ineligible by CAARP?
                    <br /> <RadioB />
                    <span className="mx-3">
                        If your answer is NO, then this coverage cannot be placed with a
                        non-admitted insurer. (See Insurance Code section 1763.5)
                    </span>
                </div>
                <div className="border border-1 border-dark mt-0 mb-1"></div>
                <div className="border border-1 border-dark mt-0 mb-1"></div>
                <div className="my-0">
                    4.
                    <strong className="mb-0 ms-2">
                        If Health Insurance is identified on line 2(E), does the insured
                        qualify as a "Small Employer" under Section 10700(x) of the
                        California Insurance Code?
                    </strong>
                    <br /> <RadioB />
                </div>
                <div className="border border-1 border-dark mt-0 mb-1"></div>
                <div className="border border-1 border-dark mt-0 mb-1"></div>
                <div className="my-0">
                    5.
                    <span className=" ms-2">
                        If this insurance was placed pursuant to Section 125 <u>et seq.</u>
                        of the California Insurance Code governing transactions with risk
                        purchasing groups authorized by the Federal Liability Risk Retention
                        Act of 1986, complete the following:
                    </span>
                    <br /> <RadioB />
                    <strong className=" mx-3"> (A)</strong> Provide the name and address
                    of the purchasing group of which the insured is a member
                    <Input />
                </div>
                <div className="border border-1 border-dark mt-0 mb-1"></div>
                <div className="border border-1 border-dark mt-0 mb-1"></div>'
                <div className="my-0">
                    6.
                    <strong className=" mx-2">
                        <span className="mx-1">(A)</span> <u>Describe</u> the diligent
                        efforts made to place this coverage with admitted insurers and
                        describe how the search was performed (please add additional
                        pages if necessary):
                    </strong>
                    <div className="mb-1">
                        <Input />
                    </div>
                    <div className="mb-1">
                        <Input />
                    </div>
                    <div className="mb-1">
                        <Input />
                    </div>
                    <strong className=" mx-4"> (B)</strong> If search was performed
                    by someone <u>other</u>than the person named on line 1, please provide
                    full name of that individual:
                </div>
            </div>

        </div>
    );
}