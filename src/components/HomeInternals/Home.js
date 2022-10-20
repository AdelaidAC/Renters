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

    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div>
            <Badge text="1"/> 
            <ISHome name={name}/>
            <Badge text="2"/> 
            <DP3HO3Mobile name={name} initials={initials}/>
            <Badge text="3"/> 
            <HO4 name={name} initials={initials}/>
            <Badge text="4"/> 
            <HO6 name={name} initials={initials}/>
            <Badge text="5"/> 
            <PAHomeInternals name={name}/>
            <Badge text="6"/> 
            <PNHomeInternals name={name} address={address} phone={phone}/>
            <Badge text="7"/> 
            <BFHomeInternals name={name}/>
            <Badge text="8"/> 
            <SBFHomeInternals name={name}/>
            <Badge text="9"/> 
            <CCHomeInternals name={name}/>
        </div>
    );
}