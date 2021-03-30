import axios from "axios";
import React, { useCallback, useState} from "react";
import { Button, Modal } from "react-bootstrap";
import swal from "sweetalert";
import {useHistory} from 'react-router-dom';
import date from 'react-date-picker';
import Moment from "moment";
import DatePicker from "react-date-picker";


function Modelviewguide(props) {
  const history= useHistory();
  const [show, setShow] = useState(false);

  const [booking, setBooking] = useState({
    guide_id: props.itemData.guide_id,
    guide_name: props.itemData.guide_name,
    tourist_id : (localStorage.getItem("CurrentSession") && JSON.parse(localStorage.getItem("CurrentSession")).registration_id ) ,
    tourist_name : (localStorage.getItem("CurrentSession") && JSON.parse(localStorage.getItem("CurrentSession")).name ) ,
   
    reg_date: new Date().getFullYear() + '-0' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
    to_date:"",
    from_date:"",
    
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const handleStatus = (e) => setStatus(e.target.value);

const handleForm =useCallback(()=>{
  Validation();
},[booking]);

const Validation= useCallback( ()=>{

  // console.log(booking.reg_date <= booking.from_date  );
  // console.log(booking.reg_date <= booking.to_date  );
  // console.log(booking.from_date <= booking.to_date  );
  // console.log(booking);

  if ( localStorage.getItem("CurrentSession")===null) 
  {
      setTimeout(() => {
      swal("!!", "Please Login First", "error");
    }, 500);
    
    history.push("/login");
    window.location.reload();
   
  }  else if(booking.reg_date <= booking.from_date && booking.reg_date <= booking.to_date &&  booking.from_date <= booking.to_date){
    swal("Success", "Booking Complete Successfully", "success");
    console.log(booking);
     PostDataonServer(booking);
  }else{
    swal("!!", "Please Select Apropriate Booking Dates", "error");
  }
  
},[booking]);

  const PostDataonServer = (data) => {

    axios.post("http://localhost:8080/guidebooking/book", data)
      .then((response) => {
        if(response.data==="Guide Booking Successfully"){
          handleClose();
          swal("Success", "Booking Done Successfully", "success");
         }else{
           handleClose();
          swal("Error", "GUide is not available at this hour", "error");
         }
      })
      .catch((err) => {
        console.warn(err);
      });
  };

    if(props.itemData.status === true){
     
       return (
        <>
         <Button variant="primary btn-sm" onClick={handleShow}>
            Book Guide
          </Button>
     
            <Modal show={show} onHide={handleClose} style={{ color: "black" }}>
            <Modal.Header closeButton >
              <Modal.Title  >Guide Booking</Modal.Title>
            </Modal.Header>

            <Modal.Body>
             
                    <div className="col-12 shadow mt-3 " style={{backgroundColor: '#c0ded9', fontWeight: 'bold'}}>
                      <br/>
                    <form className="form ml-3 mr-3  "> 
                           
                            
                            <div className="row">
                            <label for="date"> Select Date(From): </label>
                            <input type="date" class="form-control  border-dark calendar " name="date" id="date" onChange={(e)=>{setBooking({...booking, from_date: e.target.value});}} required  placeholder="From" />
                            </div>
                           
                            <br/>
                            <div className="row">
                            <label for="date"> Select Date(To): </label>
                            <input type="date" class="form-control border-dark calendar" onChange={(e)=>{setBooking({...booking, to_date: e.target.value});}} placeholder="To" />
                            </div>
                      
    
                        </form>
                        <br/>
                    </div>
                            
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleForm}>
                Book Guide
              </Button>
    
            </Modal.Footer>
          </Modal>
        </>
      );
    }else{
     
       return (
        <>
           <Button variant="primary btn-sm" disabled="true" onClick={handleShow}>
              Book Guide
            </Button>
          <Modal show={show} onHide={handleClose} style={{ color: "black" }}>
            <Modal.Header closeButton>
              <Modal.Title>Guide Booking </Modal.Title>
            </Modal.Header>
            <Modal.Body>
             
                    <div className="col-6 shadow mt-3" style={{backgroundColor: '#c0ded9', fontWeight: 'bold'}}>
                    <form className="form"> 
                            <div className="row">
                            {/* <div className="col-3"> */}
                            <label for="date">Registration Date:</label>
                            {/* </div> */}
                            {/* <div className="col-9 box-size"> */}
                        <input type="date" class="form-control  border-dark" name="date" id="date" onChange={(e)=>{setBooking({...booking, reg_date: e.target.value});}} required  />
                        
                            {/* </div> */}
                            
                            </div>
                        <br/> 
    
    
    
                        <div className="row">
                            {/* <div className="col-3"> */}
                            <label for="numer">Number of Travellers:</label>
                            {/* </div> */}
                            {/* <div className="col-9 box-size"> */}
                            <input  type="number" name="number" id="number"  required/>
                            </div>
                            {/* </div> */}
                            <br/>
    
    
                        <div className="row">
                            {/* <div className="col-3"> */}
                            <label for="date"> Select Date(From): </label>
                            
                            
                            
                            {/* </div> */}
                            {/* <div className="col-9 calendar"> */}
                        <input type="date" class="form-control  border-dark calendar mb-3" name="date" id="date" onChange={(e)=>{setBooking({...booking, from_date: e.target.value});}} required  placeholder="From" />
                        <label for="date"> Select Date(To): </label>
                        <input type="date" class="form-control border-dark calendar" onChange={(e)=>{setBooking({...booking, to_date: e.target.value});}} placeholder="To" />
                        </div>
    
                        </form>
                    </div>
                            
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleForm}>
                Book Guide
              </Button>
    
            </Modal.Footer>
          </Modal>
        </>
      );
      <br/>
    }


   
}

export default Modelviewguide;