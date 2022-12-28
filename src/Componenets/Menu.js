import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { BsCart4 } from 'react-icons/bs';
import Search from './Search';



function Menu() {
  return (
    <div>
      <Navbar bg="light" expand="lg" fixed="top" >
        <Container>
          <Navbar.Brand href="/">Nurigama Kart</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 btn_t"
              style={{ maxHeight: '250px' }}
              navbarScroll
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to='/products'>Products</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact">Contact us</NavLink>
              <NavLink to='/cart'><BsCart4 className='carticon' /></NavLink>
              {/* <NavLink to='/search'>{<Search />}</NavLink> */}

              {/* <NavLink>
                <Search/>
              </NavLink> */}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Menu