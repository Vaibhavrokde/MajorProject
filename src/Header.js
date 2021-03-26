
import React from "react";
import { Link, Route,useHistory} from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import "./Header.css";

import { NavDropdown, Nav,Navbar} from "react-bootstrap";
export default function Header() {
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
          <Link to="/Hotel">
            <li>
              {" "}
              <a>
                <b>Hotel</b>
              </a>
            </li>
          </Link>
         
          <li>
            {" "}
            <Link to='Guide'><b>Guide</b></Link>
          </li>
      

          <li>
            {" "}
            <Link to='ThingsToDo'>
              <b>Things To Do</b>
            </Link>
          </li>

          
          <li>
            {" "}
            <Link to='AboutUs'><b>About Us</b></Link>
            
          </li>
          <li>
            {" "}
              <Link to='Contactus'><b>Contactus</b></Link>
          </li>

          {  localStorage.getItem("CurrentSession")===null && 

          <li>
            {" "}
             <Link to='Register'><b>Register</b></Link>
           </li>
          }

          {/* { sessionStorage.getItem("CurrentSession") != null && 
               <li>
                {" "}
                <Link to='Mybookings'><b>Mybookings</b></Link>
               </li>
          } */}

      { localStorage.getItem("CurrentSession") && JSON.parse(localStorage.getItem("CurrentSession")).role==="Admin" && 
          <li>
          {" "}
          <DropdownButton title="All Bookings "  id="dropdown-menu-align-right" class="dropdown bg-grey">
            <Dropdown.Item><Link to='AllHotelBookings'>Hotel Bookings</Link></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item><Link to='AllGuideBookings'>Guide Bookings</Link></Dropdown.Item>    
          </DropdownButton>
           </li>
        }
        
         { localStorage.getItem("CurrentSession") && JSON.parse(localStorage.getItem("CurrentSession")).role==="Admin" && 
          <li>
          {" "}
          <DropdownButton title={localStorage.getItem("CurrentSession") && JSON.parse(localStorage.getItem("CurrentSession")).username} id="dropdown-menu-align-right" class="dropdown bg-grey">
            <Dropdown.Item> <Link onClick={logout} ><b>Logout</b></Link></Dropdown.Item>
      </DropdownButton>
           </li>
        }

           
        { localStorage.getItem("CurrentSession") && JSON.parse(localStorage.getItem("CurrentSession")).role==="tourist" && 
          <li>
          {" "}
          <DropdownButton title={localStorage.getItem("CurrentSession") && JSON.parse(localStorage.getItem("CurrentSession")).username} id="dropdown-menu-align-right" class="dropdown bg-grey">
            <Dropdown.Item><Link to='TouristProfile'>My Profile</Link></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item><Link to='Mybookings'>My Bookings</Link></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item> <Link onClick={logout} ><b>Logout</b></Link></Dropdown.Item>
      </DropdownButton>
           </li>
        }
        { localStorage.getItem("CurrentSession") && JSON.parse(localStorage.getItem("CurrentSession")).role==="guide" && 
          <li>
          {" "}
          <DropdownButton title={localStorage.getItem("CurrentSession") && JSON.parse(localStorage.getItem("CurrentSession")).username} id="dropdown-menu-align-right" class="dropdown bg-grey">
            <Dropdown.Item><Link to='GuideProfile'>My Profile</Link></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item><Link to='Mybookings'>My Bookings</Link></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item> <Link onClick={logout} ><b>Logout</b></Link></Dropdown.Item>
      </DropdownButton>
           </li>
        }
         { localStorage.getItem("CurrentSession") && JSON.parse(localStorage.getItem("CurrentSession")).role==="hotel" && 
          <li>
          {" "}
          <DropdownButton title={localStorage.getItem("CurrentSession") && JSON.parse(localStorage.getItem("CurrentSession")).username} id="dropdown-menu-align-right" class="dropdown bg-grey">
            <Dropdown.Item><Link to='HotelProfile'>My Profile</Link></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item><Link to='Mybookings'>My Bookings</Link></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item> <Link onClick={logout} ><b>Logout</b></Link></Dropdown.Item>
      </DropdownButton>
           </li>
        }
       


           

           
 </ul>
      </div>
    
     
    </div>
  );
}
