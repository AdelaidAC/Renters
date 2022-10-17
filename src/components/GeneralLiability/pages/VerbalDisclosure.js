import React from "react";
import CDate from "../../CDate";
import Input from "../../Input";
import Logo from "../../Logo";
import Title from "../../Title";

export default function VerbalDisclosure({name, initials, address, phone}) {
    return (
        <div className="sheet font-11 text-justify">
            <Logo />
            <Title text="VERBAL DISCLOSURE" />

            <div className='d-flex justify-content-between my-2 text-center'>
                <div>
                    <label>Named Insured:</label>
                    <Input width = "400px" className="ms-1" value={name}/>
                </div>
                <div>
                    <label>DBA:</label>
                    <Input width = "400px" className="ms-1"/>
                </div>
            </div>

            <div className='d-flex justify-content-between mb-5 text-center'>
                <div>
                    <label>Company Name:</label>
                    <Input width = "450px" className="ms-1"/>
                </div>
                <div>
                    <label><strong>Date Coverage Starts:</strong></label>
                    <CDate/>
                </div>
            </div>

            

            <p className="mb-5">
                I, <Input width="400px"/> hereby appoint Adriana’s Insurance Svcs, Inc. as my
                Broker/Attorney in fact to sign papers, applications, documents that are
                necessary in order to secure the insurance coverage specified below.
            </p>
            
            <p className="text-center mb-2">
                <u>
                    THIS POLICY INCLUDES THE FOLLOWING COVERAGES
                </u>
            </p>
            
            <table className="table table-fit table-borderless text-center my-4">
                <thead>
                    <tr style={{style: "text-align:center;"}}>
                        <td scope="col"><strong>COMMERCIAL GENERAL LIABILITY</strong></td>
                        <td className="fst-italic" scope="col">LIMITS</td>
                        
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>
                            Each Occurrence
                        </td>
                        <td>
                            $
                            <input list="EOcurrence" name="myEOcurrence" className="ms-1"/>
                            <datalist id="EOcurrence">
                                <option value="25,000"></option>
                                <option value="50,000"></option>
                                <option value="100,000"></option>
                                <option value="300,,000"></option>
                                <option value="500,000"></option>
                                <option value="1,000,000"></option>
                            </datalist>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            General Aggregate
                        </td>
                        <td>
                            $
                            <input list="GAggregate" name="myGAggregate" className="ms-1"/>
                            <datalist id="GAggregate">
                                <option value="25,000"></option>
                                <option value="50,000"></option>
                                <option value="100,000"></option>
                                <option value="300,,000"></option>
                                <option value="500,000"></option>
                                <option value="1,000,000"></option>
                                <option value="2,000,000"></option>
                            </datalist>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Products and Completed Operations
                        </td>
                        <td>
                            $
                            <input list="PCOperations" name="myPCOperations" className="ms-1"/>
                            <datalist id="PCOperations">
                                <option value="25,000"></option>
                                <option value="50,000"></option>
                                <option value="100,000"></option>
                                <option value="300,,000"></option>
                                <option value="500,000"></option>
                                <option value="1,000,000"></option>
                                <option value="Included"></option>
                                <option value="Not Purchased"></option>
                            </datalist>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Personal Advertising Injury
                        </td>
                        <td>
                            $
                            <input list="PAInjury" name="myPAInjury" className="ms-1"/>
                            <datalist id="PAInjury">
                                <option value="25,000"></option>
                                <option value="50,000"></option>
                                <option value="100,000"></option>
                                <option value="300,,000"></option>
                                <option value="500,000"></option>
                                <option value="1,000,000"></option>
                                <option value="Not Purchased"></option>
                            </datalist>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Fire Damage Limit
                        </td>
                        <td>
                            $
                            <input list="FDLimit" name="myFDLimit" className="ms-1"/>
                            <datalist id="FDLimit">
                                <option value="25,000"></option>
                                <option value="50,000"></option>
                                <option value="100,000"></option>
                                <option value="300,,000"></option>
                                <option value="Not Purchased"></option>
                            </datalist>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Medical Expense Limit
                        </td>
                        <td>
                            $
                            <input list="MELimit" name="myMELimit" className="ms-1"/>
                            <datalist id="MELimit">
                                <option value="1,000"></option>
                                <option value="3,000"></option>
                                <option value="5,000"></option>
                                <option value="Not Purchased"></option>
                            </datalist>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Deductible
                        </td>
                        <td>
                            $
                            <input list="deductible" name="myDeductible" className="ms-1"/>
                            <datalist id="deductible">
                                <option value="500"></option>
                                <option value="1,000"></option>
                                <option value="1,500"></option>
                                <option value="2,000"></option>
                                <option value="2,500"></option>
                                <option value="None"></option>
                            </datalist>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Building
                        </td>
                        <td>
                            $
                            <input list="building" name="myBuilding" className="ms-1"/>
                            <datalist id="building">
                                <option value="Not Purchased"></option>
                            </datalist>
                        </td>
                        <td>
                            Deductible 
                        </td>
                        <td>
                            $
                            <input list="sDeductibleB" name="mySDeductibleB" className="ms-1"/>
                            <datalist id="sDeductibleB">
                                <option value="500"></option>
                                <option value="1,000"></option>
                                <option value="1,500"></option>
                                <option value="2,000"></option>
                                <option value="2,500"></option>
                                <option value="None"></option>
                                <option value="Not Purchased"></option>
                            </datalist>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Contents
                        </td>
                        <td>
                            $
                            <input list="contents" name="myContents" className="ms-1"/>
                            <datalist id="contents">
                                <option value="Not Purchased"></option>
                            </datalist>
                        </td>
                        <td>
                            Deductible 
                        </td>
                        <td>
                            $
                            <input list="sDeductibleC" name="mySDeductibleC" className="ms-1"/>
                            <datalist id="sDeductibleC">
                                <option value="500"></option>
                                <option value="1,000"></option>
                                <option value="1,500"></option>
                                <option value="2,000"></option>
                                <option value="2,500"></option>
                                <option value="None"></option>
                                <option value="Not Purchased"></option>
                            </datalist>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Theft Sublimit
                        </td>
                        <td>
                            $
                            <input list="TSublimit" name="myTSublimit" className="ms-1"/>
                            <datalist id="TSublimit">
                                <option value="Not Purchased"></option>
                            </datalist>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Additional Insured
                        </td>
                        <td>
                            $
                            <input list="AInsured" name="myAInsured" className="ms-1"/>
                            <datalist id="AInsured">
                                <option value="Not Purchased"></option>
                                <option value="Landlord"></option>
                                <option value="Blanket"></option>
                            </datalist>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Terrorism Coverage
                        </td>
                        <td>
                            $
                            <input list="TCoverage" name="myTCoverage" className="ms-1"/>
                            <datalist id="TCoverage">
                                <option value="Excluded"></option>
                                <option value="Included"></option>
                            </datalist>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <Input width = "150px"/>
                        </td>
                        <td>
                            $
                            <input list="EmptyOne" name="myEmptyOne" className="ms-1"/>
                            <datalist id="EmptyOne">
                                <option value="Not Purchased"></option>
                            </datalist>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <Input width = "150px"/>
                        </td>
                        <td>
                            $
                            <input list="EmptyTwo" name="myEmptyTwo" className="ms-1"/>
                            <datalist id="EmptyTwo">
                                <option value="Not Purchased"></option>
                            </datalist>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <Input width = "150px"/>
                        </td>
                        <td>
                            $
                            <input list="EmptyThree" name="myEmptyThree" className="ms-1"/>
                            <datalist id="EmptyThree">
                                <option value="Not Purchased"></option>
                            </datalist>
                        </td>
                    </tr>
                    
                    
                </tbody>
            </table>

            <div className="d-flex">
                <label className="fw-bold">Description of Operations:</label>
                <span className="flex-fill">
                    <Input className="w-100 ms-1"/>
                </span>
            </div>

            <div className="d-flex my-2">
                <label className="fw-bold">Restrictions:</label>
                <span className="flex-fill">
                    <Input className="w-100 ms-1"/>
                </span>
            </div>

            <Input className="mb-2 w-100"/>
            <Input className="w-100"/>

            <p className='my-4 text-center'>
                <i>
                    BY SIGNING THIS YOU ARE ACCEPTING ALL EXCLUSIONS AND AGREE TO THE LIMITS PROVIDED
                </i>
            </p>
            
            <div className='d-flex justify-content-between mx-5 text-center'>
                <div>
                    <p className='mb-0'><strong>Gross Annual Sales:</strong></p>
                    <Input width = "250"/>
                </div>
                <div>
                    <p className='mb-0'><strong>Employee Payroll:</strong></p>
                    <Input width = "250"/>
                </div>
                <div>
                    <p className='mb-0'><strong>P.T. Employees:</strong></p>
                    <Input width = "250"/>
                </div>
                <div>
                    <p className='mb-0'><strong>F.T. Employees:</strong></p>
                    <Input width = "250"/>
                </div>
            </div>

            <div className="mx-5 my-4">
                <div className="border border-1 border-dark mt-1 mb-2"></div>
                <div className='d-flex justify-content-between mx-5 text-center py-2'>
                    <div >
                        <label><strong>TOTAL:</strong></label>
                        <Input width = "250" className="ms-1"/>
                    </div>
                    <div>
                        <label><strong>Down Payment:</strong></label>
                        <Input width = "250" className="ms-1"/>
                    </div>
                    <div>
                        <label><strong>Payments of:</strong></label>
                        <Input width = "250" className="ms-1"/>
                    </div>
                </div>
                <div className="border border-1 border-dark mt-2 mb-1"></div>
            </div>

            <div className="d-flex justify-content-between my-5">
                <div className='d-flex flex-fill'>
                    <label>Insured’s Signature:</label>
                    <Input width="400px" className="ms-1"/>
                </div>

                <div>
                    <label>Date:</label>
                    <CDate/>
                </div>
            </div>
            
        </div>
    );
}