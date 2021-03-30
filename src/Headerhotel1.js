
import React from "react";
import { Link, Route,useHistory} from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import "./Header.css";

import { NavDropdown, Nav,Navbar} from "react-bootstrap";
export default function Headerhotel1() {
  const history= useHistory();
  let logout=()=>{

    sessionStorage.removeItem("CurrentSession");
    localStorage.removeItem("CurrentSession");

    history.push("/Login");
    window.location.reload();

  }
  return (<div>
     <Navbar id="header" expand="lg">
            <Navbar.Brand href="/">Tourist Escort</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" inline>
                <Nav className="ml-auto d-flex justify-content-end" >
                   
                  
                  
                    <Nav.Link href="Contactus">Contact Us</Nav.Link>

                    <Nav.Link href="GuideProfile">My Profile</Nav.Link>
                    <Nav.Link href="GuideBookingByGuide">My Bookings</Nav.Link>
                    
                    <DropdownButton title={localStorage.getItem("CurrentSession") && JSON.parse(localStorage.getItem("CurrentSession")).username} id="dropdown-menu-align-right" class="dropdown bg-grey">
            <Dropdown.Item> <Link onClick={logout} ><b>Logout</b></Link></Dropdown.Item>
           </DropdownButton>









            
                </Nav>
               
            </Navbar.Collapse>
        </Navbar>





  </div>
  )
}