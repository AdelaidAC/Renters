import React, { useEffect, useState} from 'react';
import Input from "../../Input";
import Logo from "../../Logo";
import Title from "../../Title";

export default function HO4({name, initials}) {

    const [c1, setC1] = useState('');
    const [c2, setC2] = useState('');
    const [c3, setC3] = useState('');
    const [c4, setC4] = useState('');
    const [c5, setC5] = useState('');
    const [c6, setC6] = useState('');
    const [c7, setC7] = useState('');
    const [c8, setC8] = useState('');

    const [inputC, setInputC] = useState('');
    const [inputD, setInputD] = useState('');
    const [inputE, setInputE] = useState('');
    const [inputF, setInputF] = useState('');
    const [deductible, setDeductible] = useState(''); /* Input Deductible */

    const [chkCYes, setChkCYes] = useState(false);
    const [chkCNo, setChkCNo] = useState(false);

    const [chkDYes, setChkDYes] = useState(false);
    const [chkDNo, setChkDNo] = useState(false);

    const [chkEYes, setChkEYes] = useState(false);
    const [chkENo, setChkENo] = useState(false);

    const [chkFYes, setChkFYes] = useState(false);
    const [chkFNo, setChkFNo] = useState(false);

    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);

    useEffect(() => {
        checked1 === true ? setC6("Included") : setC6("Not Included");
    }, [checked1])

    useEffect(() => {
        checked2 === true ? setC7("Included") : setC7("Not Included");
    }, [checked2])

    useEffect(() => {
        checked3 === true ? setC8("Included") : setC8("Not Included");
    }, [checked3])

    useEffect(() => {
        if (inputC.trim().length !== 0) {
            setC1("Included");
            setChkCYes(true);
            setChkCNo(false);
        } else {
            setC1("Not Included");
            setChkCYes(false);
            setChkCNo(true);
        }
    }, [inputC])

    useEffect(() => {
        if (inputD.trim().length !== 0) {
            setC2("Included");
            setChkDYes(true);
            setChkDNo(false);
        } else {
            setC2("Not Included");
            setChkDYes(false);
            setChkDNo(true);
        }
    }, [inputD])

    useEffect(() => {
        if (inputE.trim().length !== 0) {
            setC3("Included");
            setChkEYes(true);
            setChkENo(false);
        } else {
            setC3("Not Included");
            setChkEYes(false);
            setChkENo(true);
        }
    }, [inputE])

    useEffect(() => {
        if (inputF.trim().length !== 0) {
            setC4("Included");
            setChkFYes(true);
            setChkFNo(false);
        } else {
            setC4("Not Included");
            setChkFYes(false);
            setChkFNo(true);
        }
    }, [inputF])

    useEffect(() => {
        if (deductible.trim().length !== 0) {
            setC5("Included");
        } else {
            setC5("Not Included");
        }
    }, [deductible])

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
                        <br/>
                        HO4
                    </td>
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
                    <td>D. Loss of Use</td>
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
                    <td>E. Personal Liability</td>
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
                    <td rowspan="2" className='text-center'>
                        Occupant Type: 
                        <br/> 
                        <br/>
                        Tenant
                        
                    </td>
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
                        <u><b><i>Personal Property</i></b></u> is any property of an insured other than real property.
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
                        I have been offered <u><b><i>Loss of Use | ALE</i></b></u> coverage, which reimburses the extra cost of living elsewhere while
                        the house is being restored after a loss. I have elected to refuse this coverage.
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
                        I have been offered <u><b><i>Personal Liability</i></b></u> coverage which pays for damage/injury you accidentally cause to
                        others for which you are legally responsible for. I have elected to refuse this coverage.
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
                        I have been offered <u><b><i>Medical Payments</i></b></u> in which the insurer agrees to reimburse the insured and others up
                        to a certain limit for medical or funeral expenses as a result of bodily injury or death by accident.
                        Payments are without regard to fault. I have elected to refuse this coverage.
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
                        The <u><b><i>Deductible</i></b></u> is the amount that the policyholder has agreed to pay on each claim. I understand and agree
                        that my <u><b><i>Deductible</i></b></u> is <b>$<Input className="text-center" value={deductible} width="80px"/></b>.
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
                    <td>
                        <input 
                            type="checkbox" 
                            checked={checked1} 
                            onChange={e => setChecked1(e.target.checked)}
                        />
                    </td>
                    <td>
                        <b>6.</b>
                    </td>
                    <td className="col-9">
                        I have been offered <u><b><i>Animal Liability</i></b></u> and I have elected to refuse such coverage.
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
                    <td>
                        <input 
                            type="checkbox" 
                            checked={checked2} 
                            onChange={e => setChecked2(e.target.checked)}
                        />
                    </td>
                    <td>
                        <b>7.</b>
                    </td>
                    <td className="col-9">
                        I have been offered <u><b><i>Earthquake</i></b></u> coverage and decided to reject this coverage.
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
                            checked={checked3} 
                            onChange={e => setChecked3(e.target.checked)}
                        />
                    </td>
                    <td>
                        <b>8.</b>
                    </td>
                    <td className="col-9">
                        I have been offered <u><b><i>Flood</i></b></u> coverage and decided to reject this coverage.
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