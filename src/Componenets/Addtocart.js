import React from 'react';
import {FaPlus,FaMinus} from 'react-icons/fa';


function Addtocart({price , setDec ,setInc}) {
  return (
    <div className='Addto mx-3'>
        <button onClick={()=> setDec()}><FaMinus/></button>
          <h1 className='adi'>{price}</h1>
        <button onClick={()=> setInc()}><FaPlus/></button>
    </div>
  )
}

export default Addtocart