import React from "react";
import CDate from "../../CDate";
import Input from "../../Input";
import Logo from "../../Logo";
import Title from "../../Title";

export default function VDWorkersComp({name, initials, address, phone}) {
    return (
        <div className="sheet font-11 text-justify">
            
            <Logo />
            
            <Title text="VERBAL DISCLOSURE" />

            <div class="row">
                <div class="col d-flex">
                    <b>Named Insured:</b>
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" maxlength="40" value={name}/>
                    </span>
                </div>
                <div class="col d-flex">
                    <b>DBA:</b>
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" maxlength="40"/>
                    </span>
                </div>
            </div>

            <div className='d-flex justify-content-between'>
                <div className='d-flex col-8'>
                    <b>Company Name:</b>
                    <span className="flex-fill">
                        <Input className="w-100 ms-1" maxlength="40"/>
                    </span>
                </div>
                <div>
                    <b>Date Coverage Starts: </b><CDate/>
                </div>
            </div>

            <p className="my-3">
                I, <Input width="260px" maxlength="40" value={name}/> hereby appoint Adriana’s Insurance Svcs, Inc. as my Broker/Attorney in fact
                to sign papers, applications, documents that are necessary in order to secure the insurance coverage specified below.
            </p>

            <p className="text-center text-decoration-underline">
                THIS POLICY INCLUDES THE FOLLOWING COVERAGES
            </p>
            
            <table className="table table-fit text-center table-borderless">
                <thead>
                    <tr style={{style: "text-align:center;"}}>
                        <td scope="col"><strong>Worker's Compensation</strong></td>
                        <td className="fst-italic" scope="col">LIMITS</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            A. Bodily Injury by Accident
                        </td>
                        <td>
                            <label>
                            $ <input list="BIAccident" name="myBIAccident" />
                            </label>
                            <datalist id="BIAccident">
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
                            B. Bodily Injury by Disease
                        </td>
                        <td>
                            <label>
                                $ <input list="BIDisease" name="myBIDisease" />
                            </label>
                            <datalist id="BIDisease">
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
                            C. Bodily Injury by Disease
                        </td>
                        <td>
                            <label>
                                $ <input list="BIDisease" name="myBIDisease" />
                            </label>
                            <datalist id="BIDisease">
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
                            Waivers of Subrogation
                        </td>
                        <td>
                            <label>
                                &nbsp;&nbsp;&nbsp;
                                <input list="WSubrogation" name="myWSubrogation" />
                            </label>
                            <datalist id="WSubrogation">
                                <option value="Not Purchased"></option>
                                <option value="1 Purchased"></option>
                                <option value="2 Purchased"></option>
                                <option value="3 Purchased"></option>
                                <option value="4 Purchased"></option>
                                <option value="5 Purchased"></option>
                                <option value="Blanket"></option>
                            </datalist>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Class Codes
                        </td>
                        <td>
                            <div>&nbsp;&nbsp;&nbsp;<Input maxlength="5"/>&nbsp;<Input maxlength="5"/>&nbsp;<Input maxlength="5"/></div>
                            <div>&nbsp;&nbsp;&nbsp;<Input maxlength="5"/>&nbsp;<Input maxlength="5"/>&nbsp;<Input maxlength="5"/></div>
                            <div>&nbsp;&nbsp;&nbsp;<Input maxlength="5"/>&nbsp;<Input maxlength="5"/>&nbsp;<Input maxlength="5"/></div>
                            <div>&nbsp;&nbsp;&nbsp;<Input maxlength="5"/>&nbsp;<Input maxlength="5"/>&nbsp;<Input maxlength="5"/></div>
                            <div>&nbsp;&nbsp;&nbsp;<Input maxlength="5"/>&nbsp;<Input maxlength="5"/>&nbsp;<Input maxlength="5"/></div>
                            <div>&nbsp;&nbsp;&nbsp;<Input maxlength="5"/>&nbsp;<Input maxlength="5"/>&nbsp;<Input maxlength="5"/></div>
                            <div>&nbsp;&nbsp;&nbsp;<Input maxlength="5"/>&nbsp;<Input maxlength="5"/>&nbsp;<Input maxlength="5"/></div>
                            
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className="d-flex ">
                <label><strong>Description of Operations:</strong></label>
                <strong className="flex-fill">
                    <Input className="w-100 ms-1" maxlength="70"/>
                </strong>
            </div>

            <div className="d-flex">
                <b>Restrictions:</b>
                <span className="flex-fill">
                    <Input className="w-100 ms-1" maxlength="83"/>
                </span>
            </div>

            <div>
                <div className="flex-fill">
                    <Input className="w-100" maxlength="93"/>
                </div>
                <div className="flex-fill">
                    <Input className="w-100" maxlength="93"/>
                </div>
            </div>

            <p className='my-3 text-center font-10'>
                <i>
                    BY SIGNING THIS YOU ARE ACCEPTING ALL EXCLUSIONS AND AGREE TO THE LIMITS PROVIDED
                </i>
            </p>
            
            <div className='d-flex justify-content-between text-center'>
                <div>
                    <p className='mb-0'><strong>Gross Annual Sales:</strong></p>
                    <Input width = "170px" maxlength="20"/>
                </div>
                <div>
                    <p className='mb-0'><strong>Employee Payroll:</strong></p>
                    <Input width = "170px" maxlength="20"/>
                </div>
                <div>
                    <p className='mb-0'><strong>P.T. Employees:</strong></p>
                    <Input width = "170px" maxlength="20"/>
                </div>
                <div>
                    <p className='mb-0'><strong>F.T. Employees:</strong></p>
                    <Input width = "170px" maxlength="20"/>
                </div>
            </div>

            <div className="mx-5 mt-3">
                <div className="border border-1 border-dark mt-4 mb-1"></div>
                <div className='d-flex justify-content-between text-center'>
                    <div >
                        <label><strong>TOTAL:</strong></label>
                        <Input width = "125px" maxlength="16"/>
                    </div>
                    <div>
                        <label><strong>Down Payment:</strong></label>
                        <Input width = "125px" maxlength="16"/>
                    </div>
                    <div>
                        <label><strong>Payments of:</strong></label>
                        <Input width = "125px" maxlength="16"/>
                    </div>
                </div>
                <div className="border border-1 border-dark mt-1 mb-4"></div>
            </div>

            <div className="d-flex justify-content-between my-3">
                <div></div>
                <div>
                    <b>Date:</b> <CDate/>
                </div>
            </div>
            
        </div>
    );
}