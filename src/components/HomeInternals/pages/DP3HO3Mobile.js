import React, { useEffect, useState} from 'react';
import Input from "../../Input";
import Logo from "../../Logo";
import Title from "../../Title";

export default function DP3HO3Mobile({name, initials}) {
    
    const [d, setD] = useState('');
    const [e, setE] = useState('');

    const [c1, setC1] = useState('');
    const [c2, setC2] = useState('');
    const [c3, setC3] = useState('');
    const [c4, setC4] = useState('');
    const [c5, setC5] = useState('');
    const [c6, setC6] = useState('');
    const [c7, setC7] = useState('');
    const [c8, setC8] = useState('');
    const [c9, setC9] = useState('');
    const [c10, setC10] = useState('');
    const [c11, setC11] = useState('');

    const [dwelling, setDwelling] = useState(''); /* Input A */
    const [inputB, setInputB] = useState('');
    const [inputC, setInputC] = useState('');
    const [inputD, setInputD] = useState('');
    const [inputE, setInputE] = useState('');
    const [inputF, setInputF] = useState('');
    const [deductible, setDeductible] = useState(''); /* Input Deductible */

    const [chkAYes, setChkAYes] = useState(false);
    const [chkANo, setChkANo] = useState(false);

    const [chkBYes, setChkBYes] = useState(false);
    const [chkBNo, setChkBNo] = useState(false);

    const [chkCYes, setChkCYes] = useState(false);
    const [chkCNo, setChkCNo] = useState(false);

    const [chkDYes, setChkDYes] = useState(false);
    const [chkDNo, setChkDNo] = useState(false);

    const [chkEYes, setChkEYes] = useState(false);
    const [chkENo, setChkENo] = useState(false);

    const [chkFYes, setChkFYes] = useState(false);
    const [chkFNo, setChkFNo] = useState(false);

    const [checked8, setChecked8] = useState(false);
    const [checked9, setChecked9] = useState(false);
    const [checked10, setChecked10] = useState(false);
    const [checked11, setChecked11] = useState(false);


    const [occupantType, setOccupantType] = useState("owner");
    {/*const [policyType, setPolicyType] = useState("selectPolicyType");*/}

    const handleOccupantType = (e) => {
        setOccupantType(e.target.value);
    }

    {/*const handlePolicyType = (e) => {
        setPolicyType(e.target.value);
    }*/} 

    useEffect(() => {
        if(occupantType === "owner" || occupantType === "secondary" || occupantType === "seasonal" || occupantType === "vacant"){
          setD("Loss of Use"); 
          setE("Personal Liability");
          console.log(d);
        }
        else if(occupantType === "tenant"){
          setD("Fair Rental Value");
          setE("OL & Tenant");
          console.log(e);
        }
    }, [occupantType])

    useEffect(() => {
        checked8 === true ? setC8("Included") : setC8("Not Included");
    }, [checked8])

    useEffect(() => {
        checked9 === true ? setC9("Included") : setC9("Not Included");
    }, [checked9])

    useEffect(() => {
        checked10 === true ? setC10("Included") : setC10("Not Included");
    }, [checked10])

    useEffect(() => {
        checked11 === true ? setC11("Included") : setC11("Not Included");
    }, [checked11])

    useEffect(() => {
        if (dwelling.trim().length !== 0) {
            setC1("Included");
            setChkAYes(true);
            setChkANo(false);
        } else {
            setC1("Not Included");
            setChkAYes(false);
            setChkANo(true);
        }
    }, [dwelling])

    useEffect(() => {
        if (inputB.trim().length !== 0) {
            setC2("Included");
            setChkBYes(true);
            setChkBNo(false);
        } else {
            setC2("Not Included");
            setChkBYes(false);
            setChkBNo(true);
        }
    }, [inputB])

    useEffect(() => {
        if (inputC.trim().length !== 0) {
            setC3("Included");
            setChkCYes(true);
            setChkCNo(false);
        } else {
            setC3("Not Included");
            setChkCYes(false);
            setChkCNo(true);
        }
    }, [inputC])

    useEffect(() => {
        if (inputD.trim().length !== 0) {
            setC4("Included");
            setChkDYes(true);
            setChkDNo(false);
        } else {
            setC4("Not Included");
            setChkDYes(false);
            setChkDNo(true);
        }
    }, [inputD])

    useEffect(() => {
        if (inputE.trim().length !== 0) {
            setC5("Included");
            setChkEYes(true);
            setChkENo(false);
        } else {
            setC5("Not Included");
            setChkEYes(false);
            setChkENo(true);
        }
    }, [inputE])

    useEffect(() => {
        if (inputF.trim().length !== 0) {
            setC6("Included");
            setChkFYes(true);
            setChkFNo(false);
        } else {
            setC6("Not Included");
            setChkFYes(false);
            setChkFNo(true);
        }
    }, [inputF])

    useEffect(() => {
        if (deductible.trim().length !== 0) {
            setC7("Included");
        } else {
            setC7("Not Included");
        }
    }, [deductible])

      {/*useEffect(() => {
        policyType === "dp3" ? setBondVisible(true) : setBondVisible(false);
        policyType === "ho3" ? setCommercialAutoVisible(true) : setCommercialAutoVisible(false);
        policyType === "mobile" ? setFloodVisible(true) : setFloodVisible(false);
      }, [policyType])*/}

    return (
        <div className="sheet font-11 lh-1 text-justify">
            
            <Logo />

            <Title text="VERBAL DISCLOSURE" />
            
            <p className="mx-0 mb-0 mt-3">
                I <Input className="text-center" width="400px" value={name}/>hereby appoint Adriana's Insurance Services Inc. as my Broker / Attorney in fact
                to sign papers, applications, documents that are necessary in order to secure the insurance coverage specified below. I have
                also been advised of the importance of the effective date of the policy and have chosen to have coverage start on: <input type="date" className='text-center'/>
            </p>

            <table className="fw-bold my-3">
                <tr className="text-center">
                    <td colspan="2"></td>
                    <td>Limits</td>
                    <td>Yes</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td rowspan="3" className='text-center'>
                        Policy Type: 
                        <br/> 
                        <select>
                        <option>DP3</option>
                        <option>HO3</option>
                        <option>Mobile</option>
                        </select>
                    </td>
                    <td>A. Dwelling</td>
                    <td>
                        $
                        <input 
                            className='input-default text-center'
                            id = "inputA"
                            name = "inputA"
                            type = "text" 
                            autoComplete = "off"
                            style = {{width:"80px"}}
                            maxlength="10"
                            onChange = {e => setDwelling(e.target.value)}
                        />
                    </td>
                    <td><input type="checkbox" checked={chkAYes}/></td>
                    <td><input type="checkbox" checked={chkANo}/></td>
                    <td>Initials <Input value={initials} width="60px" className="text-center"/></td>
                </tr>
                <tr>
                    <td>B. Other Structures</td>
                    <td>
                        $
                        <input
                            className='input-default text-center' 
                            id = "inputB"
                            name = "inputB"
                            type = "text" 
                            autoComplete = "off"
                            style = {{width:"80px"}}
                            maxlength="10" 
                            onChange = {e => setInputB(e.target.value)}
                        />
                    </td>
                    <td><input type="checkbox" checked={chkBYes}/></td>
                    <td><input type="checkbox" checked={chkBNo}/></td>
                    <td>Initials <Input value={initials} width="60px" className="text-center"/></td>
                </tr>
                <tr>
                    <td>C. Personal Property</td>
                    <td>
                        $
                        <input
                            className='input-default text-center' 
                            id = "inputC"
                            name = "inputC"
                            type = "text" 
                            autoComplete = "off"
                            style = {{width:"80px"}}
                            maxlength="10" 
                            onChange = {e => setInputC(e.target.value)}
                        />
                    </td>
                    <td><input type="checkbox" checked={chkCYes}/></td>
                    <td><input type="checkbox" checked={chkCNo}/></td>
                    <td>Initials <Input value={initials} width="60px" className="text-center"/></td>
                </tr>
                <tr>
                    <td rowspan="3" className='text-center'>
                        Occupant Type: 
                        <br/> 
                        <select value={occupantType} onChange={handleOccupantType}>
                            <option value="owner" default>Owner</option>
                            <option value="tenant">Tenant</option>
                            <option value="secondary">Secondary</option>
                            <option value="seasonal">Seasonal</option>
                            <option value="vacant">Vacant</option>
                        </select>
                    </td>
                    <td>D. {d}</td> {/* D. Loss Of Use */}
                    <td>
                        $
                        <input
                            className='input-default text-center' 
                            id = "inputD"
                            name = "inputD"
                            type = "text" 
                            autoComplete = "off"
                            style = {{width:"80px"}}
                            maxlength="10" 
                            onChange = {e => setInputD(e.target.value)}
                        />
                    </td>
                    <td><input type="checkbox" checked={chkDYes}/></td>
                    <td><input type="checkbox" checked={chkDNo}/></td>
                    <td>Initials <Input value={initials} width="60px" className="text-center"/></td>
                </tr>
                <tr>
                    <td>E. {e}</td> {/* E. Personal Liability */}
                    <td>
                        $
                        <input
                            className='input-default text-center' 
                            id = "inputE"
                            name = "inputE"
                            type = "text" 
                            autoComplete = "off"
                            style = {{width:"80px"}}
                            maxlength="10" 
                            onChange = {e => setInputE(e.target.value)}
                        />
                    </td>
                    <td><input type="checkbox" checked={chkEYes}/></td>
                    <td><input type="checkbox" checked={chkENo}/></td>
                    <td>Initials <Input value={initials} width="60px" className="text-center"/></td>
                </tr>
                <tr>
                    <td>F. Medical Payments</td>
                    <td>
                        $
                        <input
                            className='input-default text-center' 
                            id = "inputF"
                            name = "inputF"
                            type = "text" 
                            autoComplete = "off"
                            style = {{width:"80px"}}
                            maxlength="10" 
                            onChange = {e => setInputF(e.target.value)}
                        />
                    </td>
                    <td><input type="checkbox" checked={chkFYes}/></td>
                    <td><input type="checkbox" checked={chkFNo}/></td>
                    <td>Initials <Input value={initials} width="60px" className="text-center"/></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Deductible</td>
                    <td>
                        $
                        <input 
                            className='input-default text-center'
                            type="text" 
                            style={{width:"80px"}}
                            maxlength="10" 
                            onChange={e => setDeductible(e.target.value)}
                        />
                    </td>
                    <td colspan="2"></td>
                    <td>Initials <Input value={initials} width="60px" className="text-center"/></td>
                </tr>
            </table>
    
            <table>
                <tr>
                    <td></td>
                    <td>
                        <b>1.</b>
                    </td>
                    <td className="col-9">
                        I understand that <u><b><i>Dwelling</i></b></u> coverage covers my house and attached structures against fire. Dwelling
                        Amount is based on the square footage given by the insured and multiplied by labor costs in that area. I
                        understand and agree with the dwelling amount of <b>$<Input className="text-center" value={dwelling} width="80px"/></b>.
                    </td>
                    <td className='text-end'>
                        <span>
                            <b>1.</b> 
                            <Input 
                                className="text-center fw-bold"
                                width="90px" 
                                value={c1}
                            />
                        </span>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <b>2.</b>
                    </td>
                    <td className="col-9">
                        I understand that <u><b><i>Other Structures</i></b></u> covers structures such as a garage or storage shed, which are
                        separated from an insured dwelling by a clear space, or are connected only by a fence or utility line.
                        I have elected to refuse such coverage.
                    </td>
                    <td className='text-end'>
                        <span>
                            <b>2.</b> 
                            <Input 
                                className="text-center fw-bold"
                                width="90px" 
                                value={c2}
                            />
                        </span>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <b>3.</b>
                    </td>
                    <td className="col-9">
                        <u><b><i>Personal Property</i></b></u> is any property of an insured other than real property. I have elected to refuse coverage.
                    </td>
                    <td className='text-end'>
                        <span>
                            <b>3.</b> 
                            <Input 
                                className="text-center fw-bold"
                                width="90px" 
                                value={c3}
                            />
                        </span>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <b>4.</b>
                    </td>
                    <td className="col-9">
                        I have been offered <u><b><i>{d}</i></b></u> coverage, which reimburses the extra cost of living elsewhere while
                        the house is being restored after a loss. I have elected to refuse this coverage.
                    </td>
                    <td className='text-end'>
                        <span>
                            <b>4.</b> 
                            <Input 
                                className="text-center fw-bold"
                                width="90px" 
                                value={c4}
                            />
                        </span>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <b>5.</b>
                    </td>
                    <td className="col-9">
                        I have been offered <u><b><i>{e}</i></b></u> coverage which pays for damage/injury you accidentally cause to
                        others for which you are legally responsible for. I have elected to refuse this coverage.
                    </td>
                    <td className='text-end'>
                        <span>
                            <b>5.</b> 
                            <Input 
                                className="text-center fw-bold"
                                width="90px" 
                                value={c5}
                            />
                        </span>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <b>6.</b>
                    </td>
                    <td className="col-9">
                        I have been offered <u><b><i>Medical Payments</i></b></u> in which the insurer agrees to reimburse the insured and others up
                        to a certain limit for medical or funeral expenses as a result of bodily injury or death by accident.
                        Payments are without regard to fault. I have elected to refuse this coverage.
                    </td>
                    <td className='text-end'>
                        <span>
                            <b>6.</b> 
                            <Input 
                                className="text-center fw-bold"
                                width="90px" 
                                value={c6}
                            />
                        </span>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <b>7.</b>
                    </td>
                    <td className="col-9">
                        The <u><b><i>Deductible</i></b></u> is the amount that the policyholder has agreed to pay on each claim. I understand and agree
                        that my <u><b><i>Deductible</i></b></u> is <b>$<Input className="text-center" value={deductible} width="80px"/></b>.
                    </td>
                    <td className='text-end'>
                        <span>
                            <b>7.</b> 
                            <Input 
                                className="text-center fw-bold"
                                width="90px" 
                                value={c7}
                            />
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input 
                            type="checkbox" 
                            checked={checked8} 
                            onChange={e => setChecked8(e.target.checked)}
                        />
                    </td>
                    <td>
                        <b>8.</b>
                    </td>
                    <td className="col-9">
                        I have been offered <u><b><i>Water Damage</i></b></u> coverage which covers against sudden and accidental water damage
                        from bust pipes and I have elected to refuse such coverage.
                    </td>
                    <td className='text-end'>
                        <span>
                            <b>8.</b>
                            <Input 
                                className="text-center fw-bold" 
                                width="90px" 
                                value={c8}
                            />
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input 
                            type="checkbox" 
                            checked={checked9} 
                            onChange={e => setChecked9(e.target.checked)}
                        />
                    </td>
                    <td>
                        <b>9.</b>
                    </td>
                    <td className="col-9">
                        I have been offered <u><b><i>Animal Liability</i></b></u> and I have elected to refuse such coverage.
                    </td>
                    <td className='text-end'>
                        <span>
                            <b>9.</b> 
                            <Input 
                                className="text-center fw-bold"
                                width="90px" 
                                value={c9}
                            />
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input 
                            type="checkbox" 
                            checked={checked10} 
                            onChange={e => setChecked10(e.target.checked)}
                        />
                    </td>
                    <td>
                        <b>10.</b>
                    </td>
                    <td className="col-9">
                        I have been offered <u><b><i>Earthquake</i></b></u> coverage and decided to reject this coverage.
                    </td>
                    <td className='text-end'>
                        <span>
                            <b>10.</b> 
                            <Input 
                                className="text-center fw-bold" 
                                width="90px" 
                                value={c10}
                            />
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input 
                            type="checkbox" 
                            checked={checked11} 
                            onChange={e => setChecked11(e.target.checked)}
                        />
                    </td>
                    <td>
                        <b>11.</b>
                    </td>
                    <td className="col-9">
                        I have been offered <u><b><i>Flood</i></b></u> coverage and decided to reject this coverage.
                    </td>
                    <td className='text-end'>
                        <span>
                            <b>11.</b> 
                            <Input 
                                className="text-center fw-bold" 
                                width="90px" 
                                value={c11}
                            />
                        </span>
                    </td>
                </tr>
            </table>

            <div className="d-flex justify-content-between my-3">
                <div></div>
                <div>
                    <b>Date:</b> <input className='text-center' type="date"/>
                </div>
            </div>
            
        </div>
    );
}