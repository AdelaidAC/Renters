import React from "react";
import CDate from "../../CDate";
import Input from "../../Input";
import Logo from "../../Logo";
import Title from "../../Title";

export default function VDBInternalsTwo({name, address}) {
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
            
            <table>
                <thead>
                    <tr>
                        <th className="text-center fw-bold text-decoration-underline" colspan="4">
                            Surety Bond Type:
                        </th>
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
                        <td>
                            Contractor's License #:
                        </td>
                        <td>
                            <Input className="min-w text-center" width="200px"/>
                        </td>
                        <td>
                            SSN: XXX-XX-
                        </td>
                        <td>
                            <Input className="min-w text-center" width="150px"/>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-end pt-5" colspan="2">
                            Bond Amount:
                        </td>
                        <td className="pt-5" colspan="2">
                            <Input width="150px" className="text-center"/>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-end" colspan="2">
                            Term:
                        </td>
                        <td colspan="2">
                            <Input width="150px" className="text-center"/>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center fw-bold text-decoration-underline pt-5 pb-3" colspan="4">
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