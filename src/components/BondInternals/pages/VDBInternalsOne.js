import React from "react";
import CDate from "../../CDate";
import Input from "../../Input";
import Logo from "../../Logo";
import Title from "../../Title";

export default function VDBInternalsOne({name, address}) {
    return (
        <div className="sheet font-14">
            <Logo />
            <Title text="Verbal Disclosure" />

            <div className='d-flex justify-content-between mt-3 text-center'>
                <div>
                    <label>Named Insured:</label>
                    <Input width = "250px" value={name} className="ms-1 text-center"/>
                </div>
                <div>
                    <label>DBA:</label>
                    <Input width = "350px" className="ms-1 text-center"/>
                </div>
            </div>

            <div className='d-flex justify-content-between mt-2 text-center'>
                <div>
                    <label>Company Name:</label>
                    <Input width = "350px" className="ms-1 text-center"/>
                </div>
                <div>
                    <label><strong>Date Coverage Starts:</strong></label> <CDate/>
                </div>
            </div>

            

            <p>
                I, <Input width="400px" className="text-center" value={name}/> hereby appoint Adriana’s Insurance Svcs, Inc. as my
                Broker/Attorney in fact to sign papers, applications, documents that are
                necessary in order to secure the insurance coverage specified below.
            </p>
            
            <table style={{"margin-left": "auto", "margin-right": "auto"}}>
                <thead>
                    <tr>
                        <td colspan="4" className="fw-bold text-decoration-underline text-center">
                            Surety Bond Type
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="4">
                            <Input className="min-w mb-4 text-center" placeholder="DMV Defective Title Bond"/>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-end">
                            Applicant Name:
                        </td>
                        <td colspan="3">   
                            <Input className="min-w text-center" value={name}/>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-end">
                            Address:
                        </td>
                        <td colspan="3">
                            <Input className="min-w text-center" value={address}/>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-end">
                            License Number:
                        </td>
                        <td>
                            <Input width="200px" className="text-center"/>
                        </td>
                        <td className="text-end">
                            SSN: XXX-XX-
                        </td>
                        <td>
                            <Input width="150px" className="text-center"/>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-end pt-5">
                            Year:
                        </td>
                        <td className="pt-5">
                            <Input width="200px" className="text-center"/>
                        </td>
                        <td>
                            &nbsp;
                        </td>
                        <td>
                            &nbsp;
                        </td>
                    </tr>
                    <tr>
                        <td className="text-end">
                            Make:
                        </td>
                        <td>
                            <Input width="200px" className="text-center"/>
                        </td>
                        <td>
                            &nbsp;
                        </td>
                        <td>
                            &nbsp;
                        </td>
                    </tr>
                    <tr>
                        <td className="text-end">
                            Model:
                        </td>
                        <td>
                            <Input width="200px" className="text-center"/>
                        </td>
                        <td className="text-end">
                            Bond Amount:
                        </td>
                        <td>
                            <Input width="150px" className="text-center"/>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-end">
                            Plate:
                        </td>
                        <td>
                            <Input width="200px" className="text-center"/>
                        </td>
                        <td className="text-end">
                            Term:
                        </td>
                        <td>
                            <Input width="150px" className="text-center"/>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-end">
                            VIN:
                        </td>
                        <td colspan="3">
                            <Input className="min-w text-center"/>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="4" className="fw-bold text-decoration-underline text-center pt-5 pb-3">
                            Breakdown of Charges
                        </td>
                    </tr>
                    <tr>
                        <td className="text-end fw-bold" colspan="2">
                            Premium per Term:
                        </td>
                        <td colspan="2">
                            <Input width="150px" className="text-center"/>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-end fw-bold" colspan="2">
                            Fees:
                        </td>
                        <td colspan="2">
                            <Input width="150px" className="text-center"/>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-end fw-bold" colspan="2">
                            Total Due:
                        </td>
                        <td colspan="2">
                            <Input width="150px" className="text-center"/>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className="d-flex justify-content-between my-3">
                <div className='d-flex flex-fill'>
                    <label>Insured’s Signature: </label>
                    <strong className='flex-fill mx-1'>
                        <Input width="400px" className="text-center"/>
                    </strong>
                </div>
                <div className='d-flex'>
                    Date: <CDate/>
                </div>
            </div>
            
        </div>
    );
}