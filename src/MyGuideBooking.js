 import * as ReactBootStrap from "react-bootstrap";
import {useEffect,useState} from 'react';
import axios from 'axios';
import MyBookModelView from './MyBookModelViewguide';
import { Button, Modal } from "react-bootstrap";
const MyGuideBooking = () => {
    const [Mybook,Setmybook]= useState([]);
    const [data,setData]=useState({
      
    })

    useEffect(()=>{
    let variable=localStorage.getItem("CurrentSession");
    variable=JSON.parse(variable);
    setData({...data,tourist_id:variable.registration_id});
    console.log(data.tourist_id);
    },[]);

    const handleForm=()=>{
      postDatatoServer(data);
    }

    const postDatatoServer= (data)=> {
        axios.post(`http://localhost:8080/guidebooking/guidebookingbytourist`,data ).then(
          (response)=>{
            console.log(response.data);
            Setmybook(response.data);
          },(error)=>{
            console.log(error);
          }
    
        )
      }

  

  return (
    <div className="App">
      <Button variant="primary btn-sm ml-2" style={{float:'left'}} onClick={handleForm}>
                MY Bookings
      </Button>
      <ReactBootStrap.Table striped bordered hover variant="dark">
      
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Guide Id</th>
            <th>Guide Name</th>
            <th>From Date</th>
            <th>To Date</th>
            
          </tr>
        </thead>
        <tbody>
           {  Mybook &&
           Mybook.map((item)=>{
           return (
              <tr>
                <td>{item.booking_id} </td>
                <td>{item.guide_id} </td>
                <td>{item.guide_name} </td>
                <td>{item.from_date}</td>
                <td>{item.to_date}</td>
                <td><MyBookModelView itemData={item} /></td>
                
              </tr>
            )})
            } 

        </tbody> 
      </ReactBootStrap.Table>

      
    </div>
  );
};

export default MyGuideBooking;