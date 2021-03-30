import React from "react";
import { Link, Route,useHistory} from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import "./Header.css";

import { NavDropdown, Nav,Navbar} from "react-bootstrap";
export default function HeaderAdmin1() {
  const history= useHistory();
  let logout=()=>{

    sessionStorage.removeItem("CurrentSession");
    localStorage.removeItem("CurrentSession");

    history.push("/Login");
    window.location.reload();

  }
  return(
      <div>
          <Navbar id="header" expand="lg">
            <Navbar.Brand href="/">Tourist Escort</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" inline>
                <Nav className="ml-auto d-flex justify-content-end" >
                  




                <DropdownButton title="All Bookings "  id="dropdown-menu-align-right" class="dropdown bg-grey">
            <Dropdown.Item><Link to='AllHotelBookings'>Hotel Bookings</Link></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item><Link to='AllGuideBookings'>Guide Bookings</Link></Dropdown.Item>    
          </DropdownButton>
      
          <DropdownButton title="All Customers "  id="dropdown-menu-align-right" class="dropdown bg-grey">
            <Dropdown.Item><Link to='AllguideAdmin'>All Guides</Link></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item><Link to='AllhotelAdmin'>All Hotels</Link></Dropdown.Item>    
            <Dropdown.Divider />
            <Dropdown.Item><Link to='AlltouristAdmin'>All Tourists</Link></Dropdown.Item>    
          </DropdownButton>
     
          <DropdownButton title={localStorage.getItem("CurrentSession") && JSON.parse(localStorage.getItem("CurrentSession")).username} id="dropdown-menu-align-right" class="dropdown bg-grey">
            <Dropdown.Item> <Link onClick={logout} ><b>Logout</b></Link></Dropdown.Item>
          </DropdownButton>
           





                  
                </Nav>
              
            </Navbar.Collapse>
        </Navbar>



      </div>
  )
};