import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import axios from 'axios';

function MyBookModelViewguide(props) {
  const [show, setShow] = useState(false);
  const[data,setData]= useState({
    booking_id:props.itemData.booking_id
  });

  const handleForm=()=>{
    postDatatoServer(data);
  }

  const postDatatoServer= (data)=> {
    axios.post(`http://localhost:8080/guidebooking/deleteguidebook`,data ).then(
      (response)=>{
        if(response.data== true){
            handleClose();
            swal("Success", "Booking Cancel Successfully", "success");
           }else{
             handleClose();
            swal("error", "OOPS Something Went Wrong", "error");
           }
      },(error)=>{
        console.log(error);
      }

    )
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        View Status
      </Button>

      <Modal show={show} onHide={handleClose} style={{color: 'black'}}>
        <Modal.Header closeButton>
          <Modal.Title>Guide Bookings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> <strong>Booking ID: </strong> {props.itemData.booking_id}</p>
          <p><strong>Guide Id: </strong>{props.itemData.guide_id}</p>
          <p><strong>Guide Name: </strong>{props.itemData.guide_name}</p>
           <p><strong>From Date: </strong>{props.itemData.from_date}</p> 
           <p><strong>To Date: </strong>{props.itemData.to_date}</p> 

        </Modal.Body>
        { localStorage.getItem("CurrentSession") && JSON.parse(localStorage.getItem("CurrentSession")).role==="tourist"  &&
              <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleForm}>
                    Cancel Booking
                  </Button>
            </Modal.Footer>
        }

        { localStorage.getItem("CurrentSession") && JSON.parse(localStorage.getItem("CurrentSession")).role==="guide"  &&
              <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleForm}>
                    Reject Booking
                  </Button>
            </Modal.Footer>
        }
        </Modal>
    </>
  );
}

export default MyBookModelViewguide;