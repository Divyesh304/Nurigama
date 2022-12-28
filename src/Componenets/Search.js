import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Ser from './Ser';

function Search(props) {

    const [data , setdata] = useState('') 
    
    const inputval = (e)=>{
       const res = e.target.value;
       console.log(res);
    }
   
  return (
    <div>
        <input type='text' value={data} placeholder='search' className='searchmenu' onChange={inputval}></input>
        <Ser/>
    </div>
  )
}

export default Search