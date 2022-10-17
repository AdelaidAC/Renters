import {useRef} from 'react';



const RadioB = () => {

    const Yes = useRef(null);
    const No = useRef(null);

    const handleClick = (name) =>{
        if (name === 'Yes') {
            No.current.checked = false;
        }
         else if (name === 'No') {          
              Yes.current.checked = false;
            }
    }

    return (
        <div className='d-flex justify-content-center mb-0'>
            YES<label className='form-check form-check-inline'><input type="checkbox" className='form-check-input' ref={Yes}  name="Yes" onClick={e => handleClick(e.target.name)}/></label>
            NO<label className='form-check form-check-inline'><input type="checkbox" className='form-check-input' ref={No} name="No" onClick={e => handleClick(e.target.name)}/></label>
        </div>
    );
};

export default RadioB