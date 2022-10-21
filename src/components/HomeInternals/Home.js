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
import SBFHomeInternals from "./pages/SBFHomeInternals";

export default function Home({pages, name, initials, address, phone}) {

    let brokerFee, balanceDue, creditCard, dP3, hO4, hO6;

    if (Object.values(pages).includes("spanishBF")) {
        brokerFee = <SBFHomeInternals name={name}/>;
    } else {
        brokerFee = <BFHomeInternals name={name}/>;
    }

    if (Object.values(pages).includes("balanceDue")) {
        balanceDue = <><Badge text="5"/><PNHomeInternals name={name} address={address} phone={phone}/></>;
    }

    if (Object.values(pages).includes("creditCard")) {
        creditCard = <><Badge text="6"/><CCHomeInternals name={name} address={address}/></>;
    }

    if (Object.values(pages).includes("dp3")) {
        dP3 = <><Badge text="6"/><DP3HO3Mobile name={name} initials={initials}/></>;
    }

    if (Object.values(pages).includes("ho4")) {
        hO4 = <><Badge text="6"/><HO4 name={name} initials={initials}/></>;
    }

    if (Object.values(pages).includes("ho6")) {
        hO6 = <><Badge text="6"/><HO6 name={name} initials={initials}/></>;
    }

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Badge text="1"/> 
            <ISHome/>
            <Badge text="2"/> 
            <PAHomeInternals name={name}/>

            {brokerFee}
            {balanceDue}
            {creditCard}
            {dP3}
            {hO4}
            {hO6}
            
        </div>
    );
}