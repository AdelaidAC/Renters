import React, { useEffect, useState} from 'react';
import moment from 'moment/moment'
import Badge from "../Badge.";
import BFHomeInternals from "./pages/BFHomeInternals";
import CCHomeInternals from "./pages/CCHomeInternals";
import HO4 from "./pages/HO4";
import PAHomeInternals from "./pages/PAHomeInternals";
import PNHomeInternals from "./pages/PNHomeInternals";
import RentersIS from "./pages/RentersIS";
import SBFHomeInternals from "./pages/SBFHomeInternals";

export default function Home({pages, name, address, phone, date}) {

    let brokerFee, balanceDue, creditCard, hO4, renters, promiseA;
    let count = 0;

    const [dateHO, setDateHO] = useState('')

    let date2 = moment(dateHO).format('MM-DD-YYYY');

    count++;
    renters = <><Badge text={count}/><RentersIS/></>;

    count++;
    hO4 = <><Badge text={count}/><HO4 name={name} date={date} setDateHO={setDateHO}/></>;
    
    count++;
    promiseA = <><Badge text={count}/><PAHomeInternals name={name} date={date} date2={date2}/></>;

    if (Object.values(pages).includes("spanishBF")) {
        count++;
        brokerFee = <><Badge text={count}/><SBFHomeInternals name={name} date={date}/></>;
    } else {
        count++;
        brokerFee = <><Badge text={count}/><BFHomeInternals name={name} date={date}/></>;
    }

    if (Object.values(pages).includes("balanceDue")) {
        count++;
        balanceDue = <><Badge text={count}/><PNHomeInternals name={name} address={address} phone={phone}/></>;
    }

    if (Object.values(pages).includes("creditCard")) {
        count++;
        creditCard = <><Badge text={count}/><CCHomeInternals name={name} address={address}/></>;
    }

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>

            {renters}

            {hO4}

            {promiseA}

            {brokerFee}
            {balanceDue}
            {creditCard}
            
        </div>
    );
}