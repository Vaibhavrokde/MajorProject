 import * as ReactBootStrap from "react-bootstrap";
import {useEffect,useState} from 'react';
import axios from 'axios';
import { Card } from "react-bootstrap";
import Adminmodal from './Modelviewguide';
import Dummy from './images/dummy.png';

const AllhotelAdmin = ()=>{
    const [guidebook,setguidebook]= useState([]);


    useEffect(()=>{
        postDatatoServer(guidebook);
    },[]);

    const postDatatoServer= (data)=> {
        axios.post(`http://localhost:8080/user/readallhotel`).then(
          (response)=>{
            console.log(response.data);
            setguidebook(response.data);
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
            <th>Hotel ID</th>
            <th>Hotel UserName</th>
            <th>City</th>
            <th>Address</th>
            <th>Features</th>
            <th>Registration No</th>
            <th>Email</th>
            
          </tr>
        </thead>
        <tbody>
           {  guidebook &&
           guidebook.map((item)=>{
           return (
              <tr>
                <td>{item.hotel_id} </td>
                <td>{item.hotel_username} </td>
                <td>{item.city}</td>
                <td>{item.address}</td>
                <td>{item.features}</td>
                <td>{item.reg_no}</td>
                <td>{item.hotel_email}</td>
                
              </tr>
            )})
            } 

        </tbody> 
      </ReactBootStrap.Table>

      
    </div>
                       
        );
      };
export default AllhotelAdmin;