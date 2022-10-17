import React from "react";
import CDate from "../../CDate";
import Input from "../../Input";
import RadioB from "../../RadioYN";

export default function DiligentTwo({name, initials, address, phone}) {
    return (
        <div className="sheet font-11">
            <div className="border border-1 border-dark mt-0 mb-1"></div>
            <div className="border border-1 border-dark mt-0 mb-1"></div>
            <div>
                <p>
                    7.
                    <strong className=" mx-3"> (A)</strong> Was the risk described in
                    Section 2 submitted by you or by someone under your supervision to at
                    least (3) insurers that are admitted in California and who actually
                    write the type of insurance described on lines 2(C) and 2(E)? or ""
                    <br />
                    <RadioB />
                    <strong className=" mx-3"> (B)</strong> If <strong>YES</strong>,
                    please complete
                    <strong>
                        <u>ALL</u>
                    </strong>
                    sections of the following table; if <strong>NO</strong>, skip to
                    Section 8:
                    <br />
                </p>
                <table class="table table-bordered border-dark mb-0">
                    <thead>
                        <tr>
                            <th scope="col">Full Name of Admitted Company</th>
                            <th scope="col">Full Name of Admitted Company</th>
                            <th scope="col">Check if Employee (E) or Agent (A)</th>
                            <th scope="col">Month, Year of Declination</th>
                            <th scope="col">Declination Code*</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">
                                1.
                                <br /> Safeco Ins Co of Amer NAIC # 24740
                            </th>
                            <td>
                                Patty Nordhoff <br /> (888) 374-2970 or "Online Declination"
                                Website
                            </td>
                            <td>
                                E
                                <label className=" form-check-inline">
                                    <input type="checkbox" className="form-check-input" />
                                </label>
                                <br />A
                                <label className=" form-check-inline">
                                    <input type="checkbox" className="form-check-input" />
                                </label>
                            </td>
                            <td>
                                <Input />/<Input />
                            </td>
                            <td className="font-12">2</td>
                        </tr>
                        <tr>
                            <th scope="row">
                                2.
                                <br /> Zurich Amer Ins Co NAIC # 16535
                            </th>
                            <td>
                                Jeanette Wilson <br /> (888) 291-4484 or "Online Declination"
                                Website
                            </td>
                            <td>
                                E
                                <label className=" form-check-inline">
                                    <input type="checkbox" className="form-check-input" />
                                </label>
                                <br />A
                                <label className=" form-check-inline">
                                    <input type="checkbox" className="form-check-input" />
                                </label>
                            </td>
                            <td>
                                <Input />/<Input />
                            </td>
                            <td className="font-12">2</td>
                        </tr>
                        <tr>
                            <th scope="row">
                                3.
                                <br /> Hartford Cas Ins Co NAIC # 29424
                            </th>
                            <td>
                                Ruben Pacheco <br /> (888) 427-7777 or "Online Declination"
                                Website
                            </td>
                            <td>
                                E
                                <label className=" form-check-inline">
                                    <input type="checkbox" className="form-check-input" />
                                </label>
                                <br />A
                                <label className=" form-check-inline">
                                    <input type="checkbox" className="form-check-input" />
                                </label>
                            </td>
                            <td>
                                <Input />/<Input />
                            </td>
                            <td className="font-12">2</td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <strong className="me-5">*Declination Codes:</strong>
                    <span className="mx-4">1.- Company's capacity reached</span>
                    <span className="mx-5">2.- underwriting reason</span>
                    <span className="mx-2">3.- refused to state</span>
                    <span className="mx-5">4.- other</span>
                </div>
                <div className="border border-1 border-dark mt-0 mb-1"></div>
                <div className="border border-1 border-dark mt-0 mb-1"></div>
                <p>
                    8.
                    <strong className="mx-2">
                        If 7(A) was answered NO, complete the following:
                    </strong>
                    <br />
                    <strong className=" mx-3"> (A)</strong> Did you determine that fewer
                    than 3 admitted insurers actually write the type of insurance
                    described on lines 2(C) and 2(E)?
                    <br />
                    <RadioB />
                    <strong className=" mx-3"> (B)</strong> If <strong>NO</strong>, please
                    explain in detail why the risk was submitted to
                    <u> less than three </u>
                    admitted insurers in California that write this type of insurance.
                    <Input />
                    <br />
                    <strong className=" mx-3"> (B)</strong> If <strong>YES</strong>,
                    please describe how you made this determination
                    <Input />
                    <br />
                    The undersigned licensee hereby certifies that this report is true and
                    correct, and that this risk is not being placed with a non- admitted
                    insurer for the sole purpose of securing a rate or premium lower than
                    the lowest rate or premium available from an admitted insurer.
                </p>

                <div className='d-flex justify-content-between mt-5 mx-5 text-center'>
            <div className='border-top border-dark w-50'>
                <p className='mb-0'>(Signature of Licensee Named on Line 1)</p>
            </div>
            <div className='border-dark w-25'>
            <label>Date: <strong><CDate/></strong></label>
            </div>
        </div>
            </div>
        </div>
    );
}