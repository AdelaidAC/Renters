import React from "react";
import Badge from "../Badge.";
import BAWorkersComp from "./pages/BAWorkersComp";
import CCA from "./pages/CCA";
import ISWorkersComp from "./pages/ISWorkersComp";
import PAWorkersComp from "./pages/PAWorkersComp";
import PNWorkersComp from "./pages/PNWorkersComp";
import SpanishBFWorkersComp from "./pages/SpanishBFWorkersComp";
import VDWorkersComp from "./pages/VDWorkersComp";

export default function Workers({pages, name, initials, address, phone}) {

    let brokerFee, balanceDue, creditCard;

    if (Object.values(pages).includes("spanishBF")) {
        brokerFee = <SpanishBFWorkersComp name={name}/>;
    } else {
        brokerFee = <BAWorkersComp name={name}/>;
    }

    if (Object.values(pages).includes("balanceDue")) {
        balanceDue = <><Badge text="5"/><PNWorkersComp name={name} address={address} phone={phone}/></>;
    }

    if (Object.values(pages).includes("creditCard")) {
        creditCard = <><Badge text="6"/><CCA name={name}/></>;
    }

    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (

        <div>
            <Badge text="1"/>
            <ISWorkersComp name={name} initials={initials} address={address} phone={phone}/>
            <Badge text="2"/>
            <VDWorkersComp name={name} initials={initials} address={address} phone={phone}/>
            <Badge text="3"/>
            <PAWorkersComp name={name} initials={initials} address={address} phone={phone}/>
            <Badge text="4"/>
            {brokerFee}
            {balanceDue}
            {creditCard}
        </div>
        
    );
}