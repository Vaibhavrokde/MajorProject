
import React from "react";
import { Link, Route,useHistory} from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import "./Header.css";
import Heaedrguide from './Headerguide';
import HeaderHotel from "./HeaderHotel";
import HeaderAdmin from "./HeaderAdmin";
import Header from "./Header";
import Header1 from './Header1';
import Headerguide1 from './Headerguide1';
import HeaderAdmin1 from './HeaderAdmin1';
import Headerhotel1 from './Headerhotel1';



import { NavDropdown, Nav,Navbar} from "react-bootstrap";

export default function MainHeader() {
 
  return (
  <div>
{/* <Header /> */}
     { localStorage.getItem("CurrentSession") == null  &&
          // <Header />
          <Header1 />
    }
    { localStorage.getItem("CurrentSession") && JSON.parse(localStorage.getItem("CurrentSession")).role==="tourist"  &&
      // <Header />
      <Header1 />
    }

    { localStorage.getItem("CurrentSession") && JSON.parse(localStorage.getItem("CurrentSession")).role==="guide" &&
      // <Heaedrguide />
      <Headerguide1 />
      }
      { localStorage.getItem("CurrentSession") && JSON.parse(localStorage.getItem("CurrentSession")).role==="hotel"&&
      // <HeaderHotel />
      <Headerhotel1 />
      }
      { localStorage.getItem("CurrentSession") && JSON.parse(localStorage.getItem("CurrentSession")).role==="Admin"&&
      // <HeaderAdmin />
      <HeaderAdmin1 />
      }

  </div>
  );
}
