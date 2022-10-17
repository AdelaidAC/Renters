import React from "react";
import Badge from "../Badge.";
import SBFDTrucking from "../TruckingInternals/pages/SBFDTrucking";
import BFDisclosure from "./pages/BFDisclosure";
import DiligentSearchReport from "./pages/DiligentSearchReport";
import DiligentTwo from "./pages/DiligentTwo";
import Disclosure from "./pages/Disclosure";
import PromiseAgreement from "./pages/PromiseAgreement";
import VerbalDisclosure from "./pages/VerbalDisclosure";


export default function GeneralLiability({pages, name, initials, address, phone}) {

    let render

    if (Object.values(pages).includes("spanishBF")) {
        render = <SBFDTrucking name={name} initials={initials} address={address} phone={phone}/>;
        console.log(Object.values(pages).includes("spanishBF"))
    } else {
        render = <BFDisclosure name={name} initials={initials} address={address} phone={phone}/>;
        console.log(Object.values(pages).includes("spanishBF"))
    }

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            
            {/*<BFDisclosure/>*/}

            <Badge text="1"/>

            <DiligentSearchReport name={name} initials={initials} address={address} phone={phone}/>

            <Badge text="2"/>


            <DiligentTwo name={name} initials={initials} address={address} phone={phone}/>

            <Badge text="3"/>

            <Disclosure name={name} initials={initials} address={address} phone={phone}/>

            <Badge text="4"/>

            <PromiseAgreement name={name} initials={initials} address={address} phone={phone}/>

            <Badge text="5"/>

            <VerbalDisclosure name={name} initials={initials} address={address} phone={phone}/>

            <Badge text="6"/>

            {/*spn && <SBFDTrucking/>*/}

            {render}
            
        </div>
    );

    

}