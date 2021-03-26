 import * as ReactBootStrap from "react-bootstrap";
import {useCallback, useEffect,useState} from 'react';
import axios from 'axios';
import { Card } from "react-bootstrap";
import Adminmodal from './Modelviewguide';
import Dummy from './images/dummy.png';
import { Button, Modal } from "react-bootstrap";

const TouristProfile = ()=>{
    const [hotel,sethotel]= useState([]);


    useEffect(()=>{
      let variable = localStorage.getItem('CurrentSession');
      variable= JSON.parse(variable);
      sethotel({...hotel,hotel_username:variable.username});

    },[]);

    const handleForm=()=>{
      postDatatoServer(hotel);
    }

    
      const postDatatoServer=(data)=> {
         axios.post(`http://localhost:8080/user/readhotel`,data).then(
            (response)=>{
              console.log(response.data);
              sethotel(response.data);
            },(error)=>{
              console.log(error);
            } 
      
          )
        }; 

         console.log(hotel);  

        return (
          <div class="row shadow mt-5 p-5">
                 
          <div className="col-1"></div>
            <div className="col-4">
          <img src={Dummy} alt="resnam" class="img-responsive guide-image" style={{height:"auto", width:"50%"}}/>
          </div>
           <div className="col-6">
           <Button variant="primary btn-sm col-4" style={{float:'right'}} onClick={handleForm}>
                MY PROFILE
            </Button>
              <br />
              <br />
          <h4>{hotel.hotel_name}</h4>
          <hr />
          <br />
          <h4>📧 Email: {hotel.hotel_email}</h4>
          <h6><b>📱 Mobile No:</b> {hotel.mobile_no}</h6>
          <h6><b>📍 City :</b> {hotel.city}</h6>
          <h6><b>📍 Address:</b> {hotel.address}</h6>
          <h6><b>🧾 Features:</b> {hotel.features}</h6>
          <h6><b>💾 Reg. No:</b> {hotel.reg_no}</h6>

          
          </div>
          <div className="col-1"></div>
       
      </div>

                       
        );
   

}
export default TouristProfile;