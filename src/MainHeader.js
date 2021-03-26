
import React from "react";
import { Link, Route,useHistory} from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import "./Header.css";
import Heaedrguide from './Headerguide';
import HeaderHotel from "./HeaderHotel";
import HeaderAdmin from "./HeaderAdmin";
import Header from "./Header";

import { NavDropdown, Nav,Navbar} from "react-bootstrap";
export default function MainHeader() {
 
  return (
  <div>
{/* <Header /> */}
     { localStorage.getItem("CurrentSession") == null  &&
          <Header />
    }
    { localStorage.getItem("CurrentSession") && JSON.parse(localStorage.getItem("CurrentSession")).role==="tourist"  &&
      <Header />
    }

    { localStorage.getItem("CurrentSession") && JSON.parse(localStorage.getItem("CurrentSession")).role==="guide" &&
      <Heaedrguide />
      }
      { localStorage.getItem("CurrentSession") && JSON.parse(localStorage.getItem("CurrentSession")).role==="hotel"&&
      <HeaderHotel />
      }
      { localStorage.getItem("CurrentSession") && JSON.parse(localStorage.getItem("CurrentSession")).role==="Admin"&&
      <HeaderAdmin />
      }

  </div>
  );
}
