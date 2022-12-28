import React from 'react';
import {NavLink} from 'react-router-dom';

function About(image) {
  return (
    <div>

      <section id='header'>
        <div className='container-fluid nav-lg'>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='row'>
                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1'>
                  <h1 className='my-5 py-5'>To Make  <br /> <strong className='brandname'>customer's</strong>  ideas into <br /> reality.</h1>
                  <h2 className='my-5'>We build and believe in <strong className='brandname'>Shopping Experince</strong> </h2>
                  <div className='mt-3'>
                    <NavLink to='/contact' className='btn_get'>
                      Get Started
                    </NavLink>
                  </div>
                </div>

                <div className='col-lg-6 order-1 order-lg-2'>
                  <img src="https://miro.medium.com/max/1200/1*pRPdKvHckRRzna8DisJy8g.jpeg" className='img-fluid  animated' alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About