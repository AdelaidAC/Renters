import React from "react";
import Badge from "../Badge.";
import BFHomeInternals from "./pages/BFHomeInternals";
import CCHomeInternals from "./pages/CCHomeInternals";
import DP3HO3Mobile from "./pages/DP3HO3Mobile";
import HO4 from "./pages/HO4";
import HO6 from "./pages/HO6";
import ISHome from "./pages/ISHome";
import PAHomeInternals from "./pages/PAHomeInternals";
import PNHomeInternals from "./pages/PNHomeInternals";
import RentersIS from "./pages/RentersIS";
import SBFHomeInternals from "./pages/SBFHomeInternals";

export default function Home({pages, name, initials, address, phone}) {

    let brokerFee, balanceDue, creditCard, dP3, hO4, hO6, renters, promiseA;
    let count = 0;

    if (Object.values(pages).includes("renters")) {
        count++;
        renters = <><Badge text={count}/><RentersIS/></>;
    } else {
        count++;
        renters = <><Badge text={count}/><ISHome/></>;
    }

    if (Object.values(pages).includes("dp3")) {
        count++;
        dP3 = <><Badge text={count}/><DP3HO3Mobile name={name} initials={initials}/></>;
    }

    if (Object.values(pages).includes("ho4")) {
        count++;
        hO4 = <><Badge text={count}/><HO4 name={name} initials={initials}/></>;
    }

    if (Object.values(pages).includes("ho6")) {
        count++;
        hO6 = <><Badge text={count}/><HO6 name={name} initials={initials}/></>;
    }
    
    count++;
    promiseA = <><Badge text={count}/><PAHomeInternals name={name}/></>;

    if (Object.values(pages).includes("spanishBF")) {
        count++;
        brokerFee = <><Badge text={count}/><SBFHomeInternals name={name}/></>;
    } else {
        count++;
        brokerFee = <><Badge text={count}/><BFHomeInternals name={name}/></>;
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

            {dP3}
            {hO4}
            {hO6}

            {promiseA}

            {brokerFee}
            {balanceDue}
            {creditCard}
            
        </div>
    );
}