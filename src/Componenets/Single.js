import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { BiRupee } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Star from './Star';
import Addtocart from './Addtocart';

function Single() {
  const { id } = useParams();

  const [Products, setproducts] = useState({});
  const [main , setmain] = useState('');

  const [val, setval] = useState(false);
   
  const [rate , setrate] = useState('');

  const [price,setprice] = useState(1);

  const [quntity , setquntity] = useState('')

  const setDec =()=>{
    price > 1 ? setprice(price - 1) : setprice(1);
  }
  const setInc = ()=>{
     price < quntity ? setprice (price + 1) : setprice(quntity);
  }


  

  useEffect(() => {
    const fetchproducts = async () => {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();

      //  const pro = data.find((item)=>item.id === parseInt(id));
      console.log(data);

      setproducts(data);
      setval(true);
      setmain(data.thumbnail);
      setrate(data.rating);
      setquntity(data.stock);
    }

    fetchproducts();
  }, []);

  if (val) {



    return (
      <div className='Container'>
        <div className='row'>
          <div className='col-xs-12 col-md-12 col-lg-5'>
            <img src={main} alt="" className='pro_img' />


            <div>
              {
                Products.images.map((e) => {
                  return (
                    <img src={e} className='prodimg' alt="" onClick={()=> setmain(e)} />
                  )
                })
              }

            </div>
          </div>
          <div className='col-xs-12 col-md-12 col-lg-5 detail'>
            <h1 className='title'>{Products.title}</h1>
            <p className='des'>{Products.description}</p>
            <h1 className=''> <BiRupee className='mb-2' />{Products.price}.00</h1>

            
            {/* rating Function */}
              <Star rate={rate}/>

            <ul className='list mt-3'>
              <li>Bank Offer10% off on Kotak Bank Credit Cards and Credit EMI Trxns, up to ₹1,250. On orders of ₹5,000 and aboveT&C</li>
              <li>Bank Offer10% instant discount on SBI Credit Card EMI Transactions, up to ₹1,250 on orders of ₹5,000 and aboveT&C</li>
              <li>Bank Offer10% off on Kotak Bank Debit Card Transactions, up to ₹500. On orders of ₹5,000 and aboveT&C</li>
              <li>Special PriceGet extra 4% off (price inclusive of cashback/coupon)T&C</li>
            </ul>

            <Link to='/cart'>
              <button className='btn mx-3 mt-3'>Add to Cart</button> <br/>
            </Link>

            <Addtocart price={price}
                       setDec={setDec}
                       setInc={setInc}
            />
           </div>
          
        </div>
         
      </div>


    )
  }
}

export default Single