
import React from "react";
import { Link, Route,useHistory} from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import "./Header.css";

import { NavDropdown, Nav,Navbar} from "react-bootstrap";
export default function header() {
  const history= useHistory();
  let logout=()=>{

    sessionStorage.removeItem("CurrentSession");
    localStorage.removeItem("CurrentSession");

    history.push("/Login");
    window.location.reload();

  }
  return (
    <div id="header">

      <Link to="/">
        <div id="logo">
          <h1>Tourist Escort</h1>
        </div>
      </Link>
      <div id="menu">
        <ul>
        

     <li>
          {" "}
          <DropdownButton title="All Bookings "  id="dropdown-menu-align-right" class="dropdown bg-grey">
            <Dropdown.Item><Link to='AllHotelBookings'>Hotel Bookings</Link></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item><Link to='AllGuideBookings'>Guide Bookings</Link></Dropdown.Item>    
          </DropdownButton>
      </li>
      <li>
          {" "}
          <DropdownButton title="All Customers "  id="dropdown-menu-align-right" class="dropdown bg-grey">
            <Dropdown.Item><Link to='AllguideAdmin'>All Guides</Link></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item><Link to='AllhotelAdmin'>All Hotels</Link></Dropdown.Item>    
            <Dropdown.Divider />
            <Dropdown.Item><Link to='AlltouristAdmin'>All Tourists</Link></Dropdown.Item>    
          </DropdownButton>
      </li>
        
        
         <li>
          {" "}
          <DropdownButton title={localStorage.getItem("CurrentSession") && JSON.parse(localStorage.getItem("CurrentSession")).username} id="dropdown-menu-align-right" class="dropdown bg-grey">
            <Dropdown.Item> <Link onClick={logout} ><b>Logout</b></Link></Dropdown.Item>
          </DropdownButton>
           </li>
                 
      </ul>
    </div>
    
     
  </div>
  );
}
