import { NavLink, Link} from "react-router-dom";
import { useState, useContext } from "react";
import SignedInContext from '../../Context/SignedInContext';

import { Container } from "react-bootstrap";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

import svg from "./cart.svg";

export default function Header()  {

  const [signedIn, setSignedIn] = useContext(SignedInContext);
  const [signOutWasPressed, setSignOutWasPressed] = useState(false);

  const handleSignOut = () => {
      setSignOutWasPressed(true);
      window.localStorage.clear();  
      setSignedIn(false);
  }
  
  return (
    <header className="nav-panel">
      <Navbar expand="lg shadow-sm h-100 p-0" collapseOnSelect = "true">
        <Container fluid>
          <div>
            <div className="logo-homeLink d-inline-block">
              <div className="logo-container d-none d-sm-block">
                <Image 
                  className = 'rp-10'src= {require ('./flg_logo.png')}  
                  fluid alt="logo" 
                  width={60}
                />
              </div>
            </div>
            <div className="ps-sm-3 d-inline-block">
              <NavLink 
                to="/books" 
                className="d-inline h6 h5-sm link-underline-opacity-0"
              >
                X-course task / Yevhen Shcherbak 
              </NavLink>
            </div>
          </div>  
          <div className="kostilechek"></div>               
          {(signedIn || window.localStorage.currentUser) && 
          <Navbar.Toggle 
            id="navbarToggle" 
            aria-controls="navbarScroll" 
            className="focus-ring-none"
          />}
          {(signedIn || window.localStorage.currentUser) && <Navbar.Collapse id="navbarScroll">                     
            <Nav 
              aria-label="Basic example" 
              className="ms-auto my-2 my-lg-0 d-flex gap-0"
              >                      
              <Nav.Link 
                as={Link} 
                to= "/cart" href='/cart' 
                className="p-1 ps-5 pe-5 ps-lg-1 pe-lg-1"
              >
                <Button variant="rounded-1" className="cart-button border w-100 h-100">
                  <Image src= { svg }
                    fluid alt="cart" 
                    width={35}
                    className="svg"
                  />
                  <Badge bg="warning">9</Badge>
                </Button >
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to= "/signin" 
                href='/signin' 
                onClick={ handleSignOut } 
                className="p-1 ps-5 pe-5 ps-lg-1 pe-lg-1"
              >
                <Button variant="btn btn-primary border" className="h-100 rounded-2 w-100">
                  <span className="h6 text-white">Sign-Out</span>                                 
                </Button>
              </Nav.Link>
              <Nav className="d-flex justify-content-center align-items-center gap-lg-1">
                  <div>
                      <Image 
                        className = 'mt-2 mt-lg-0 ms-lg-1 avatar-small'
                        src= {require ('../../assets/avatar.png')}
                        fluid alt="avatar" 
                        width={49}
                        roundedCircle
                      />
                  </div>
                  <span className="fs-6 me-lg-2 mb-0 align-baseline">
                      {window.localStorage.currentUser}
                  </span>
              </Nav>
            </Nav>                       
          </Navbar.Collapse>}
        </Container>
      </Navbar>
    </header>
  );
};




