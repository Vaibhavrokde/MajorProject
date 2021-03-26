import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
// import Dummy from './images/dummy.png';
import Allguide from './Allguide';
import Guide_carousel from './Guide_carousel';
import './App.css';


const Guide = () => {

    return (
      <div>
        <div className="row ">
          <div className="col-1 mt-3"></div>
          <div className="col-6 mt-3 "><Allguide/></div>
          <div className="col-5 mt-3"><Guide_carousel/></div>
          <div className="col-1 mt-3"></div>
        </div>
      </div>
      
    );
    
};
export default Guide;
