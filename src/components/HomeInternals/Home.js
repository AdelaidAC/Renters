import React from "react";
import Badge from "../Badge.";
import ISHome from "./pages/ISHome";

export default function Home({pages, name, initials, address, phone}) {

    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div>
            <Badge text="1"/> 
            <ISHome name={name}/>

        </div>
    );
}