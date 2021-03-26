import React from "react";
import "./App.css";
import Guide_carousel from './Guide_carousel';
import Allhotel from './Allhotel';

const Hotel = () => {
  
  
    return (
      <div>
        <div className="row ">
          <div className="col-1 mt-3"></div>
          <div className="col-6 mt-3 "><Allhotel/></div>
          <div className="col-5 mt-3"><Guide_carousel/></div>
          <div className="col-1 mt-3"></div>
        </div>
      </div>
      
    );

};



export default Hotel;