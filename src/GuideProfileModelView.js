import axios from "axios";
import React, { useState} from "react";
import { Button, Modal } from "react-bootstrap";
import swal from "sweetalert";
import {useHistory} from 'react-router-dom';

function GuideProfileModelView(props) {
  const history= useHistory();
  const [show, setShow] = useState(false);

  const [profile, setProfile] = useState({
    guide_id: props.itemData.guide_id,
    guide_name: props.itemData.guide_name,
    mobile_no : props.itemData.mobile_no,
    licence_no: props.itemData.licence_no,
    testimony: props.itemData.testimony,
    credentials: props.itemData.credentials
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  const PostDataonServer = (data) => {

    axios.post("http://localhost:8080/user/updateGuideDetails", data)
      .then((response) => {
        handleClose();
        swal("Success", "Booking Done Succesfully", "success");
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  const regex =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  const regex1=/^([a-zA-Z\!\.\,\ \& \"])+$/;
  const regex2=/^([0-9])/;
  const regex3=/^([a-zA-Z\ ])+$/;



  const handleForm=(e)=>{
    e.preventDefault();
     // console.log(user);
          if(profile.name==="" || 
          profile.mobile_no==="" || 
          profile.testimony==="" || 
          profile.credentials===""||
          profile.licence_no==="" )
          {
            swal("Error","Please fill every detail","error");

          }else if(!regex1.test(profile.name)){

            swal("Error!","Please Enter Valid name","error");
          
        }
        else if (!regex2.test(profile.mobile_no))
        {
          swal("Error!","Please Enter Valid Mobile Number","error");
        
        } 
        else if(!regex2.test(profile.mobile_no) || profile.mobile_no.length < 10 ||  profile.mobile_no.length > 10){
            swal("Error!!","Please Enter mobileNo with minimum 10 characters","error");
            
        }else{
          console.log(profile);
         // PostDataonServer(profile);
          e.preventDefault();
        }
        
  }


       return (
        <>
         <Button variant="primary btn-sm" onClick={handleShow}>
           Edit Details
          </Button>
     
            <Modal show={show} onHide={handleClose} style={{ color: "black" }}>
            <Modal.Header closeButton >
              <Modal.Title  >Profile Details</Modal.Title>
            </Modal.Header>

            <Modal.Body>
             
                    <div className="col-12 shadow mt-3 " style={{backgroundColor: '#c0ded9', fontWeight: 'bold'}}>
                      <br/>
                    <form className="form ml-3 mr-3  ">
                            <div className="row">
                            <label > Name : </label><br/> 
                            <input type="text" class="form-control border-dark calendar " name="name" value={profile.guide_name} onChange={(e)=>{setProfile({...profile, guide_name: e.target.value});}} required  placeholder="Name" />
                            </div>
                            <br/> 
                            <div className="row">
                            <label for="date"> Mobile No : </label><br/> 
                            <input type="number" class="form-control border-dark calendar " name="mobile no" value={profile.mobile_no} onChange={(e)=>{setProfile({...profile, mobile_no: e.target.value});}} required  placeholder="Mobile No" />
                            </div>
                            <br/> 
                            <div className="row">
                            <label for="date"> Licence No : </label><br/> 
                            <input type="number" class="form-control border-dark calendar " name="licence no"  value={profile.licence_no} onChange={(e)=>{setProfile({...profile, licence_no: e.target.value});}} required  placeholder="licence_no" />
                            </div>
                            <br/> 
                            <div className="row">
                            <label for="date"> Testimony : </label><br/> 
                            <textarea type="text" class="form-control border-dark calendar " name="testinomy"  value={profile.testimony} onChange={(e)=>{setProfile({...profile, testimony: e.target.value});}} required  placeholder="testimony" />
                            </div>
                            <br/> 
                            <div className="row">
                            <label for="date"> Credentials : </label><br/> 
                            <textarea type="text" class="form-control border-dark calendar " name="credentials" value={profile.credentials} onChange={(e)=>{setProfile({...profile, credentials: e.target.value});}} required  placeholder="credentials" />
                            </div>
                            <br/> 
                            
                        </form>
                        <br/>
                    </div>
                            
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleForm}>
                Update Profile
              </Button>
    
            </Modal.Footer>
          </Modal>
        </>
      );
   
      <br/>
    


   
}

export default GuideProfileModelView;