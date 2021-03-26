import axios from "axios";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import swal from "sweetalert";
import {useHistory} from 'react-router-dom';
import Moment from "moment";
import DatePicker from "react-date-picker";

function Modelviewhotel(props) {

  let history= useHistory();

  const [show, setShow] = useState(false);

  const [booking, setBooking] = useState({
    hotel_id: props.itemData.hotel_id,
    hotel_name:props.itemData.hotel_name,
    tourist_id : (localStorage.getItem("CurrentSession") && JSON.parse(localStorage.getItem("CurrentSession")).registration_id ) ,
    tourist_name : (localStorage.getItem("CurrentSession") && JSON.parse(localStorage.getItem("CurrentSession")).name) ,
    reg_date:Moment(new Date()).format("YYYY-MM-DD"),
    to_date:"",
    from_date:"",
    rooms:null,
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const handleForm =()=>{
  
  if ( localStorage.getItem("CurrentSession")===null) 
  {
      setTimeout(() => {
      swal("!!", "Please Login First", "error");
    }, 1000);
    
    history.push("/login");
    window.location.reload();
   
  }else{
    //console.log(booking);  
    PostDataonServer(booking);
  }
  
}

  const PostDataonServer = (data) => {

    axios.post("http://localhost:8080/hotelbooking/book", data)
      .then((response) => {
       if(response.data==="Hotel Booking Successfully"){
        handleClose();
        swal("Success", "Booking Done Successfully", "success");
       }else{
        handleClose();
        swal("Success", "Hotel is not available at this hour", "success");
       }
        
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  return (
    <>
      <Button variant="primary btn-sm" onClick={handleShow}>
        Hotel Booking
      </Button>
      

      <Modal show={show} onHide={handleClose} style={{ color: "black" }}>
        <Modal.Header closeButton>
          <Modal.Title>Hotel Booking </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
                    <div className="col-12 shadow mt-3 " style={{backgroundColor: '#c0ded9', fontWeight: 'bold'}}>
                      <br/>
                      <form className="form ml-3 mr-3  "> 
                           <div className="row">
                            <label for="date"> Registration Date : </label>
                            <input type="date" class="form-control  border-dark calendar " name="date" id="date" onChange={(e)=>{setBooking({...booking, reg_date: e.target.value});}} required  placeholder="From" />
                            </div>
                            

                            <br/> 
                            <div className="row">
                                <label for="numer">Number of Rooms:</label>
                                <input style={{width:"100%"}} type="number" name="number" id="number" value={booking.rooms} onChange={(e)=>{setBooking({...booking, rooms: e.target.value});}} required   required/>

                            </div>

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
            Book Hotel
          </Button>

        </Modal.Footer>
        </Modal>

        
    </>
  );
}

export default Modelviewhotel;