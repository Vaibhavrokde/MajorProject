 import * as ReactBootStrap from "react-bootstrap";
import {useEffect,useState} from 'react';
import axios from 'axios';

const AllHotelBookings= () => {
    const [Mybook,Setmybook]= useState([]);

    useEffect(()=>{
        postDatatoServer(Mybook);
    },[]);

    const postDatatoServer= (data)=> {
        axios.post(`http://localhost:8080/hotelbooking/readallhotelbookings` ).then(
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
      
      <ReactBootStrap.Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Hotel Name</th>
            <th>Tourist Name</th>
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
                <td>{item.hotel_name} </td>
                <td>{item.tourist_name} </td>
                <td>{item.from_date}</td>
                <td>{item.to_date}</td>
                
              </tr>
            )})
            } 

        </tbody> 
      </ReactBootStrap.Table>

      
    </div>
  );
};

export default AllHotelBookings ;