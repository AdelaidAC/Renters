import React from "react";
import Input from "../../Input";
import Logo from "../../Logo";
import Title from "../../Title";
import CDate from '../../CDate';

export default function VDFloodInternals({name, initials, address, phone}) {
    return (
        <div className="sheet font-12">
            
            <Logo />

            <Title text="VERBAL DISCLOSURE" />
            
            <p>
                I <Input width="400px" name="VDTO_ApplicantName2"/> hereby appoint Adriana's Insurance Services Inc. as my Broker / Attorney in fact
                to sign papers, applications, documents that are necessary in order to secure the insurance coverage 
                specified below. I have also been advised of the importance of the effective date of the policy and have 
                chosen to have coverage start on: <Input width="100px" name="VDTO_CoverageStart"/>
            </p>

            <table className="d-flex justify-content-center fw-bold">
                <tbody>
                    <tr>
                    <td colspan="2"></td>
                    <td className="text-decoration-underline text-center">
                        Limits
                    </td>
                    <td className="text-center">
                        YES
                    </td>
                    <td className="text-center">
                        NO
                    </td>
                    <td></td>
                    </tr>
                    <tr>
                    <td className="text-center">
                        Policy Type:
                    </td>
                    <td>
                        A. Dwelling
                    </td>
                    <td>
                        <Input/>
                    </td>
                    <td>
                        <input className="me-1" type="checkbox" name="CD1" value="1"/>
                    </td>
                    <td>
                        <input className="me-1" type="checkbox" name="CD1" value="1"/>
                    </td>
                    <td>
                        Initials <Input/> 
                    </td>
                    </tr>
                    <tr>
                    <td className="text-center">
                        <select className="ms-1" name="myELLimits">
                        <option value="250,000">250,000</option>
                        <option value="500,000">500,000</option>
                        <option value="1,000,000">1,000,000</option>
                        </select>
                    </td>
                    <td>
                        B. Other Structures
                    </td>
                    <td>
                        <Input/>
                    </td>
                    <td>
                        <input className="me-1" type="checkbox" name="CD1" value="1"/>
                    </td>
                    <td>
                        <input className="me-1" type="checkbox" name="CD1" value="1"/>
                    </td>
                    <td>
                        Initials <Input/> 
                    </td>
                    </tr>
                    <tr>
                    <td></td>
                    <td>
                        C. Personal Property
                    </td>
                    <td>
                        <Input/>
                    </td>
                    <td>
                        <input className="me-1" type="checkbox" name="CD1" value="1"/>
                    </td>
                    <td>
                        <input className="me-1" type="checkbox" name="CD1" value="1"/>
                    </td>
                    <td>
                        Initials <Input/> 
                    </td>
                    </tr>
                    <tr>
                    <td className="text-center">
                        Occupant Type: 
                    </td>
                    <td>
                        D. <select className="ms-1" name="myELLimits">
                            <option value="250,000">250,000</option>
                            <option value="500,000">500,000</option>
                            <option value="1,000,000">1,000,000</option>
                        </select>
                    </td>
                    <td>
                        <Input/>
                    </td>
                    <td>
                        <input className="me-1" type="checkbox" name="CD1" value="1"/>
                    </td>
                    <td>
                        <input className="me-1" type="checkbox" name="CD1" value="1"/>
                    </td>
                    <td>
                        Initials <Input/> 
                    </td>
                    </tr>
                    <tr>
                    <td className="text-center">
                        <select className="ms-1" name="myELLimits">
                        <option value="250,000">250,000</option>
                        <option value="500,000">500,000</option>
                        <option value="1,000,000">1,000,000</option>
                        </select>
                    </td>
                    <td>
                        E. <select className="ms-1" name="myELLimits">
                            <option value="250,000">250,000</option>
                            <option value="500,000">500,000</option>
                            <option value="1,000,000">1,000,000</option>
                        </select>
                    </td>
                    <td>
                        <Input/>
                    </td>
                    <td>
                        <input className="me-1" type="checkbox" name="CD1" value="1"/>
                    </td>
                    <td>
                        <input className="me-1" type="checkbox" name="CD1" value="1"/>
                    </td>
                    <td>
                        Initials <Input/> 
                    </td>
                    </tr>
                </tbody>
            </table>
    
            <ol className="list-group list-group-numbered px-5">
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    I understand that <b><i><u>Dwelling</u></i></b> coverage covers my house and attached structures against fire. 
                    Dwelling Amount is based on the square footage given by the insured and multiplied by 
                    labor costs in that area. I understand and agree with the dwelling amount of <Input/>.
                    </div>
                    1. <Input/>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    I understand that <b><i><u>Other Structures</u></i></b> covers structures such as a garage or storage shed, which are
                    separated from an insured dwelling by a clear space, or are connected only by a fence or utility line.
                    I have elected to refuse such coverage.
                    </div>
                    2. <select className="ms-1" name="myELLimits">
                        <option selected value=""></option>
                        <option value="INCLUDED">INCLUDED</option>
                    </select>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <b><i><u>Personal Property</u></i></b> is any property of an insured other than real property. I have elected to refuse coverage.
                    </div>
                    3. <select className="ms-1" name="myELLimits">
                        <option selected value=""></option>
                        <option value="INCLUDED">INCLUDED</option>
                    </select>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    I have been offered <input className="me-1" type="checkbox" name="CD1" value="1"/> <b><i><u>Loss of use/ALE</u></i></b> <input className="me-1" type="checkbox" name="CD1" value="1"/> <b><i><u>Fair Rental           Value</u></i></b> coverage, which reimburses the extra cost of living elsewhere while the house is being restored after a loss. I have elected to refuse this coverage.
                    </div>
                    4. <select className="ms-1" name="myELLimits">
                        <option selected value=""></option>
                        <option value="INCLUDED">INCLUDED</option>
                    </select>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    I have been offered <input className="me-1" type="checkbox" name="CD1" value="1"/> <b><i><u>Debris Removal</u></i></b> coverage which pays the additional cost incurred up to limit for
                    the unexpected costs of removing Debris left behind after a loss in the covered premises or have been
                    offered <input className="me-1" type="checkbox" name="CD1" value="1"/> <b><i><u>Increased Cost/Material</u></i></b> which covers any additional cost for material which supersedes the
                    amount of coverage provided to complete the process. I have elected to refuse such coverage.
                    </div>
                    5. <select className="ms-1" name="myELLimits">
                        <option selected value=""></option>
                        <option value="INCLUDED">INCLUDED</option>
                    </select>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    The <b><i><u>Deductible</u></i></b> is the amount that the policyholder has agreed to pay on each claim. I understand and agree
                    that my <b><i><u>Deductibles</u></i></b> are as follows: 
                    <table className="d-inline text-end fw-bold text-decoration-underline fst-italic">
                        <tr>
                        <td>
                            Earthquake:
                        </td>
                        <td>
                            <input className="me-1" type="checkbox" name="CD1" value="1"/>
                        </td>
                        <td>
                            <select className="ms-1" name="myELLimits">
                            <option value="250,000">250,000</option>
                            <option value="500,000">500,000</option>
                            <option value="1,000,000">1,000,000</option>
                            </select>
                        </td>
                        <td>
                            Landslide:
                        </td>
                        <td>
                            <input className="me-1" type="checkbox" name="CD1" value="1"/>
                        </td>
                        <td>
                            <select className="ms-1" name="myELLimits">
                            <option value="250,000">250,000</option>
                            <option value="500,000">500,000</option>
                            <option value="1,000,000">1,000,000</option>
                            </select>
                        </td>
                        </tr>
                        <tr>
                        <td>
                            Flood:
                        </td>
                        <td>
                            <input className="me-1" type="checkbox" name="CD1" value="1"/>
                        </td>
                        <td>
                            <select className="ms-1" name="myELLimits">
                            <option value="250,000">250,000</option>
                            <option value="500,000">500,000</option>
                            <option value="1,000,000">1,000,000</option>
                            </select>
                        </td>
                        <td>
                            Coverage D:
                        </td>
                        <td>
                            <input className="me-1" type="checkbox" name="CD1" value="1"/>
                        </td>
                        <td>
                            <select className="ms-1" name="myELLimits">
                            <option value="250,000">250,000</option>
                            <option value="500,000">500,000</option>
                            <option value="1,000,000">1,000,000</option>
                            </select>
                        </td>
                        </tr>
                    </table>
                    </div>
                    6. <Input/>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    I have been offered <b><i><u>Replacement Cost</u></i></b> coverage which is the amount it costs to replace lost or damaged
                    property with new property of the like, kind, and quality in the local market and reject this coverage. In place
                    of such coverage, I have opted to choose Actual Cash Value which is the amount the property is currently
                    valued without the land value in the current market.
                    </div>
                    7. <select className="ms-1" name="myELLimits">
                        <option selected value=""></option>
                        <option value="INCLUDED">INCLUDED</option>
                    </select>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    I have been offered <b><i><u>Earthquake</u></i></b> coverage which is coverage for direct damage to property resulting from
                    an earthquake and elected to refuse such coverage.
                    </div>
                    8. <select className="ms-1" name="myELLimits">
                        <option selected value=""></option>
                        <option value="INCLUDED">INCLUDED</option>
                    </select>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    I have been offered <b><i><u>Landslide</u></i></b> coverage which covers when there is a geological phenomenon in which a
                    wide range of ground movement, such as rock falls, deep failure of slopes, and shallow debris flows. I have
                    elected to refuse such coverage.
                    </div>
                    9. <select className="ms-1" name="myELLimits">
                        <option selected value=""></option>
                        <option value="INCLUDED">INCLUDED</option>
                    </select>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    I am aware that regardless of the <b><i><u>Deductibles</u></i></b> choosen, a separate <b><i><u>$1000</u></i></b> deductible for <b><i><u>Additional Living
                    Expense</u></i></b> will automatically apply at the time of the loss.
                    </div>
                    10. <select className="ms-1" name="myELLimits">
                        <option selected value=""></option>
                        <option value="INCLUDED">N/A</option>
                        </select>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    I am aware that coverage is <b><i><u>Effective 12:01am</u></i></b>, local time, on the <b><i><u>fifteenth calendar day</u></i></b> after the inception
                    date of the Certificate issued by the Insurance Company, not Adriana's Insurance Svcs, Inc. regardless of
                    what proposed effective date was on this and other forms signed.
                    </div>
                    11. <Input/>
                </li>
            </ol>

            <div className="d-flex justify-content-between my-3">
                <div>
                    Insured’s Signature:
                    <Input width="400px" name="VDTruckingOne_ISignature"/>
                </div>
                <div>
                    Date: <CDate/>
                </div>
            </div>
            
        </div>
    );
}