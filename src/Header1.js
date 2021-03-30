import React from "react";
import { Link, Route,useHistory} from "react-router-dom";

import {Dropdown, DropdownButton, Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import './Header.css';

export default function Header1() {
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
                    <Nav.Link href="Hotel">Hotel</Nav.Link>
                  
                    <Nav.Link href="Guide">Guide</Nav.Link>
                    <Nav.Link href="ThingsToDo">Things To Do</Nav.Link>
                    <Nav.Link href="AboutUs">About Us</Nav.Link>
                    <Nav.Link href="Contactus">Contact Us</Nav.Link>
                    {  
                    localStorage.getItem("CurrentSession")===null && 
                             
                    <Nav.Link href="Register">Register</Nav.Link>
                     }




{ localStorage.getItem("CurrentSession") && JSON.parse(localStorage.getItem("CurrentSession")).role==="tourist" && 
          
          
          <DropdownButton title={localStorage.getItem("CurrentSession") && JSON.parse(localStorage.getItem("CurrentSession")).username} id="dropdown-menu-align-right" class="dropdown mr-5 bg-grey">
            <Dropdown.Item><Link to='TouristProfile'>My Profile</Link></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item><Link to='MyGuideBooking'>My Guide Booking</Link></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item><Link to='MyHotelBooking'>My Hotel Booking</Link></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item> <Link onClick={logout} ><b>Logout</b></Link></Dropdown.Item>
      </DropdownButton>
        
        }
        { localStorage.getItem("CurrentSession") && JSON.parse(localStorage.getItem("CurrentSession")).role==="guide" && 
          
          
          <DropdownButton title={localStorage.getItem("CurrentSession") && JSON.parse(localStorage.getItem("CurrentSession")).username} id="dropdown-menu-align-right" class="dropdown bg-grey">
            <Dropdown.Item><Link to='GuideProfile'>My Profile</Link></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item><Link to='Mybookings'>My Bookings</Link></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item> <Link onClick={logout} ><b>Logout</b></Link></Dropdown.Item>
      </DropdownButton>
           
        }
         { localStorage.getItem("CurrentSession") && JSON.parse(localStorage.getItem("CurrentSession")).role==="hotel" && 
        
          
          <DropdownButton title={localStorage.getItem("CurrentSession") && JSON.parse(localStorage.getItem("CurrentSession")).username} id="dropdown-menu-align-right" class="dropdown  bg-grey">
            <Dropdown.Item><Link to='HotelProfile'>My Profile</Link></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item><Link to='AllGuideBookings'>My Bookings</Link></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item> <Link onClick={logout} ><b>Logout</b></Link></Dropdown.Item>
      </DropdownButton>
           
        }






                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form> */}
            </Navbar.Collapse>
        </Navbar>

    </div>
    )
            }
// export default Header1;