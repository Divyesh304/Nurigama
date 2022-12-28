import React from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';

function Star({rate}) {

   const ratingstar = Array.from({length:5} , (elem, index) => {
          let number = index + 0.5;
          return(
              <span key={index} className='starr mx-1'>
                  {
                      rate >= index + 1 ? (<FaStar/>) : rate >= number ? (<FaStarHalf/>) : (<AiOutlineStar/>)
                  }
              </span>
          )
    });
  return (
    <div>
       {ratingstar}
    </div>
  )
}

export default Star;