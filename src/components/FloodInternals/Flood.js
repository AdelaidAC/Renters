import React from "react";
import Badge from "../Badge.";
import BAFloodInternals from "./pages/BAFloodInternals";
import BAGCFloodInternals from "./pages/BAGCFloodInternals";
import MCLFloodInternals from "./pages/MCLFloodInternals";
import PNFloodInternals from "./pages/PNFloodInternals";
import PTPAFloodInternals from "./pages/PTPAFloodInternals";
import SBFDFFloodInternals from "./pages/SBFDFFloodInternals";
import TwoFloodInternals from "./pages/TwoFloodInternals";
import VDFloodInternals from "./pages/VDFloodInternals";

export default function Flood({pages, name, initials, address, phone}) {

    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div>
            <Badge text="1"/>
            <BAFloodInternals name={name} initials={initials} address={address} phone={phone}/>
            <Badge text="2"/>
            <BAGCFloodInternals name={name} initials={initials} address={address} phone={phone}/>
            <Badge text="3"/>
            <MCLFloodInternals name={name} initials={initials} address={address} phone={phone}/>
            <Badge text="4"/>
            <PNFloodInternals firstSignature="Signature" secondSignature="Witness" name={name} initials={initials} address={address} phone={phone}/>
            <Badge text="5"/>
            <PTPAFloodInternals name={name} initials={initials} address={address} phone={phone}/>
            <Badge text="6"/>
            <SBFDFFloodInternals name={name} initials={initials} address={address} phone={phone}/>
            <Badge text="7"/>
            <TwoFloodInternals name={name} initials={initials} address={address} phone={phone}/>
            <Badge text="8"/>
            <VDFloodInternals name={name} initials={initials} address={address} phone={phone}/>

        </div>
    );
}