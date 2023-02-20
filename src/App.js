import React, { useEffect, useState, useRef} from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import ReactToPrint from 'react-to-print';

import Home from './components/HomeInternals/Home';

import CurrencyFormat from 'react-currency-format';
import moment from 'moment';


const Page = React.forwardRef((
  {
    pageH,
    nameI,
    snI,
    cityI,
    stateI,
    zipcodeI,
    //addressI,
    phoneI,
    dateI
  }, ref) => {
  return (
    <div ref={ref} className="container">
      
      <style>{getPageMargins()}</style>

      <Home pages={pageH} name={nameI} sn={snI} city={cityI} state={stateI} zipcode={zipcodeI} /*address={addressI}*/ phone={phoneI} date={dateI}/>
      
    </div>
  )
}) 

const getPageMargins = () => {
  let marginTop = "0.4in"
  let marginBottom = "0.39in"
  let marginLeft = "0.4in"
  let marginRight = "0.39in"

  return `@page { margin: ${marginTop} ${marginRight} ${marginBottom} ${marginLeft} !important; }`;
};

function App() {

  /* ELEGIR PAGINAS */

  const [pageHInfo, setPageHInfo] = useState({
    pagesH: []
  });

  const { pagesH } = pageHInfo;

  const [nameInsured, setNameI] = useState('');
  const [sn, setSN] = useState(''); // Street & Number
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipCode] = useState('');
  //const [addressInsured, setAddressI] = useState('');
  const [phoneInsured, setPhoneI] = useState('');
  const [dateInsured, setDateI] = useState('');

  var dateFormat = moment(dateInsured).format('MM/DD/YYYY');

  const handleH = (e) => {
    
    // Destructuring
    const { value, checked } = e.target;
           
    // Case 1 : The user checks the box
    if (checked) {
      setPageHInfo({
        pagesH: [...pagesH, value]
      });
    }
  
    // Case 2  : The user unchecks the box
    else {
      setPageHInfo({
        pagesH: pagesH.filter((e) => e !== value)
      });
    }
  };

  /* OTROS */

  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (!visible) {
      window.print()
      setVisible(true)
    }
    
  }, [visible])
  
  const componentRef = useRef();

  return (
    <main className='letter'>


    <nav className="mb-5 text-white">
    <div class="d-flex justify-content-between text-center bg-nav p-3">
        <div>
          <label className="mx-1 fw-bold" for="nameI">Insured’s Name:</label>
          <input className="text-center input-default" style={{width: "250px"}} id="nameI" type="text" autocomplete="off" maxlength="40" onChange={e => setNameI(e.target.value)}/>
        </div>
        <div>
          <label className="mx-1 fw-bold" for="snI">Street & Number:</label>
          <input className="text-center input-default" style={{width: "160px"}} id="snI" type="text" autocomplete="off" maxlength="30" onChange={e => setSN(e.target.value)}/>
        </div>
        <div>
          <label className="mx-1 fw-bold" for="cI">City:</label>
          <input className="text-center input-default" style={{width: "120px"}} id="cI" type="text" autocomplete="off" maxlength="30" onChange={e => setCity(e.target.value)}/>
        </div>
        <div>
          <label className="mx-1 fw-bold" for="sI">State:</label>
          <input className="text-center input-default" style={{width: "120px"}} id="sI" type="text" autocomplete="off" maxlength="30" onChange={e => setState(e.target.value)}/>
        </div>
        <div>
          <label className="mx-1 fw-bold" for="zI">Zip Code:</label>
          <input className="text-center input-default" style={{width: "80px"}} id="zI" type="text" autocomplete="off" maxlength="9" onChange={e => setZipCode(e.target.value)}/>
        </div>
        {/* <div>
          <label className="mx-1 fw-bold" for="addressI">Address:</label>
          <input className="text-center input-default" style={{width: "550px"}} id="addressI" type="text" autocomplete="off" maxlength="80" onChange={e => setAddressI(e.target.value)}/>
        </div> */}
        <div>
          <label className="mx-1 fw-bold" for="phoneI">Cell:</label>
          <CurrencyFormat format="(###) ###-####" mask="_" className="text-center input-default" placeholder='(###) ###-####' style={{width: "130px"}} id="phoneI" onChange={e => setPhoneI(e.target.value)}/>
        </div>
        <div>
          <label className="mx-1 fw-bold" for="dateI">Date:</label>
          <input className="text-center" id="dateI" type="date" onChange={e => setDateI(e.target.value)}/>
        </div>
      </div>
      <div className='text-center py-2 bg-nav2'>
          <label className="ms-2 fw-bold" for="doc">Pages:</label>
          <input class="ms-2 me-1" type="checkbox" value="balanceDue" name="pagesH" onChange={handleH}/> Balance Due
          <input class="ms-2 me-1" type="checkbox" value="creditCard" name="pagesH" onChange={handleH}/> Credit Card
          <input class="ms-2 me-1" type="checkbox" value="spanishBF" name="pagesH" onChange={handleH}/> Spanish BF
      </div>
    </nav>

      <Page 
        ref = {componentRef} 
        pageH = {pagesH}
        nameI = {nameInsured}
        snI = {sn}
        cityI = {city}
        stateI = {state}
        zipcodeI = {zipcode}
        //addressI = {addressInsured}
        phoneI = {phoneInsured}
        dateI = {dateFormat}
        />

        {document !== "selectDocument" &&
          <ReactToPrint
            content={() => componentRef.current}
            trigger={() => <div className='d-flex justify-content-center my-5'><Button className='btn'>Download PDF</Button></div>}
          />
        }
      

    </main>
  );
}

export default App;
