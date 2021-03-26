 import * as ReactBootStrap from "react-bootstrap";
import {useEffect,useState} from 'react';
import axios from 'axios';

const AllGuideBookings = () => {
    const [Mybook,Setmybook]= useState([]);

    useEffect(()=>{
        postDatatoServer(Mybook);
    },[]);

    const postDatatoServer= (data)=> {
        axios.post(`http://localhost:8080/guidebooking/readallguidebookings` ).then(
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
            <th>Guide Name</th>
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
                <td>{item.guide_name} </td>
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

export default AllGuideBookings;