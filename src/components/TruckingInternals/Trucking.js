import React from "react";
import Badge from "../Badge.";
import BFDTrucking from "./pages/BFDTrucking";
import CCAFTrucking from "./pages/CCAFTrucking";
import PNTrucking from "./pages/PNTrucking";
import PromiseAgreementTrucking from "./pages/PromiseAgreementTrucking";
import SBFDTrucking from "./pages/SBFDTrucking";
import VDTruckingOne from "./pages/VDTruckingOne";
import VDTruckingTwo from "./pages/VDTruckingTwo";

export default function Trucking({pages, name, initials, address, phone}) {

    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div>
            <Badge text="1"/>
            <BFDTrucking name={name} initials={initials} address={address} phone={phone}/>
            <Badge text="2"/>
            <CCAFTrucking name={name} initials={initials} address={address} phone={phone}/>
            <Badge text="3"/>
            <PNTrucking firstSignature="Signature" secondSignature="Witness" name={name} initials={initials} address={address} phone={phone}/>
            <Badge text="4"/>
            <PromiseAgreementTrucking name={name} initials={initials} address={address} phone={phone}/>
            <Badge text="5"/>
            <SBFDTrucking firstSignature="Firma del Asegurado" secondSignature="Firma del Agente" name={name} initials={initials} address={address} phone={phone}/>
            <Badge text="6"/>
            <VDTruckingOne name={name} initials={initials} address={address} phone={phone}/>
            <Badge text="7"/>
            <VDTruckingTwo name={name} initials={initials} address={address} phone={phone}/>

        </div>
    );
}