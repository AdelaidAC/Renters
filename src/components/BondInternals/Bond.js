import React from "react";
import Badge from "../Badge.";
import VDBInternalsOne from "./pages/VDBInternalsOne";
import VDBInternalsTwo from "./pages/VDBInternalsTwo";

export default function Bond({pages, name, initials, address, phone}) {
    
    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      console.log(address);
      
    return (
        <div>
            <Badge text="1"/>
            <VDBInternalsOne name={name} initials={initials} address={address} phone={phone}/>
            <Badge text="2"/>
            <VDBInternalsTwo name={name} initials={initials} address={address} phone={phone}/>
            
        </div>
    );
}