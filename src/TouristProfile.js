 import * as ReactBootStrap from "react-bootstrap";
import {useCallback, useEffect,useState} from 'react';
import axios from 'axios';
import { Card } from "react-bootstrap";
import Adminmodal from './Modelviewguide';
import Dummy from './images/dummy.png';
import { Button, Modal } from "react-bootstrap";

const TouristProfile = ()=>{
    const [tourist,setTourist]= useState([]);


    useEffect(()=>{
      let variable = localStorage.getItem('CurrentSession');
      variable= JSON.parse(variable);
      setTourist({...tourist,tourist_username: variable.username});

    },[]);

    const handleForm=()=>{
      postDatatoServer(tourist);
    }

    
      const postDatatoServer=(data)=> {
         axios.post(`http://localhost:8080/user/readtourist`,data).then(
            (response)=>{
              console.log(response.data);
              setTourist(response.data);
            },(error)=>{
              console.log(error);
            } 
      
          )
        }; 

         console.log(tourist);  

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
          <h4>{tourist.tourist_name}</h4>
          <hr />
          <br />
          <h4>📧 {tourist.tourist_email}</h4>
          <h6><b>📱  Mobile No:</b> {tourist.mobile_no}</h6>
          <h6><b>🆔 ID Proof:</b> {tourist.id_proof}</h6>
          <h6><b>📍 country:</b> {tourist.country}</h6>

          
          </div>
          <div className="col-1"></div>
       
      </div>

                       
        );
   

}
export default TouristProfile;