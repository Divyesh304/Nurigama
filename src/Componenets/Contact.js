import React from 'react'

function Contact() {
  return (
    <>
      <div class="contact-form-container">
        <div class="contact-us">
          <div class="contact-header">
            <h1>
              &#9135;&#9135;&#9135;&#9135;&nbsp;&nbsp;CONTACT US
            </h1>
          </div>
          <div class="social-bar">
            <ul>
              <li>
                <i class="fab fa-facebook-f"></i>
              </li>
              <li>
                <i class="fab fa-twitter"></i>
              </li>
              <li>
                <i class="fab fa-instagram"></i>
              </li>
              <li>
                <i class="fab fa-dribbble"></i>
              </li>
            </ul>
          </div>
        </div>
        <div class="header">
          <h1>
            Let's Get Started
          </h1>
          <h2>
            Contact us to start your next project!
          </h2>
        </div>
        <div class="address">
          <i class="fas fa-map-marker-alt"></i>
          <h3>
            A-33,Godavari park.
          </h3>
          <h3>
            surat. India
          </h3>
        </div>
        <div class="phone">
          <i class="fas fa-phone-alt"></i>
          <h3>
             +91 99092 92684
          </h3>
        </div>
        <div class="email">
          <i class="fas fa-envelope"></i>
          <h3>
            savaliyadivyesh304@gmail.com
          </h3>
        </div>
        <div class="contact-form">
          <form action='https://formspree.io/f/mjvdbord' method='POST' >
            <input placeholder="Name" name='Your Name'  type="text" required autoComplete='off' />
            <input placeholder="Email" name='email' type="email" required autoComplete='off' />
            <textarea name="message" placeholder="Tell us about your project..." rows="4"></textarea>
            <button type="submit" value='send'>SEND </button>
           
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact