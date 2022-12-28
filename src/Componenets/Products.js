import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Products() {

  const [menu, setmenu] = useState([]);
  // const [loading , setloading] = useState(false);

  useEffect(() => {
    const fetchproducts = async () => {
      const res = await fetch('https://dummyjson.com/products');
      const data = await res.json();

      console.log(data.products);

      setmenu(data.products);
    }

    fetchproducts();
  }, [])

  return (

    <>
      <h1 className='our'>Our Products</h1>
      <section className='products'>
        {
          menu.map((e) => {
            return (
              <>
                <div id="card">
                  <img src={e.thumbnail} alt="" />
                  <div id="content">
                    {e.title}

                    <div id="price">
                      <Link to={`/single/${e.id}`}>
                        <button> View</button>
                      </Link>
                      <Link to='/cart'>
                        <button>Add</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )
          })
        }

      </section>



    </>

  );
}
export default Products;