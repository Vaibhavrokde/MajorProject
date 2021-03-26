 import * as ReactBootStrap from "react-bootstrap";
import {useCallback, useEffect,useState} from 'react';
import axios from 'axios';
import { Button, Modal } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Adminmodal from './Modelviewguide';
import Dummy from './images/dummy.png';
import GuideProfileModelView from "./GuideProfileModelView";

const GuideProfile = ()=>{
    const [guide,setGuide]= useState([]);


    useEffect(()=>{
      let variable = localStorage.getItem('CurrentSession');
      variable= JSON.parse(variable);
      setGuide({...guide,guide_username: variable.username});

    },[]);

    const handleForm=()=>{
      postDatatoServer(guide);
    }

    
      const postDatatoServer=(data)=> {
         axios.post(`http://localhost:8080/user/readguide`,data).then(
            (response)=>{
              console.log(response.data);
              setGuide(response.data);
            },(error)=>{
              console.log(error);
            } 
      
          )
        }; 

        // const postDatatoServer=(data)=> {
        //   axios.post(`http://localhost:8080/user/readguide`,data).then(
        //      (response)=>{
        //        console.log(response.data);
        //        setGuide(response.data);
        //      },(error)=>{
        //        console.log(error);
        //      } 
       
        //    )
        //  }; 
 



         console.log(guide);  

       
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
              {/* <Button variant="primary btn-sm col-4 mr-3 " style={{float:'right'}} onClick={updateForm}>
                EDIT PROFILE
              </Button> */}
              {/* <div class="col-4 mr-3">
                < GuideProfileModelView itemData={guide}/>
              </div> */}
              <br />
              <br />
              <h4>{guide.guide_name}</h4>
              <hr />
              <br />
              <h4>📧 {guide.guide_email}</h4>
              <h6><b>📱  Mobile No:</b> {guide.mobile_no}</h6>
              <h6><b>🆔 Licence No:</b> {guide.licence_no}</h6>
              <h6><b>📃 Testimony:</b> {guide.testimony}</h6>
              {/* <h6><b>🏷️ Status:</b> {guide.status}</h6> */}
              <h6><b>🧾 Credential:</b> {guide.credentials}</h6>

              {/* <div className="col-4" style={{float:'right'}}>
                  
                    <button onClick={handleForm}>Profile</button>

              </div> */}
            
              
              </div>
              <div className="col-1"></div>

            </div>   );
         
          
                    

                       
     
   

}
export default GuideProfile;