 import * as ReactBootStrap from "react-bootstrap";
import {useEffect,useState} from 'react';
import axios from 'axios';
import { Card } from "react-bootstrap";
import Adminmodal from './Modelviewguide';
import Dummy from './images/dummy.png';

const AlltouristAdmin = ()=>{
    const [guidebook,setguidebook]= useState([]);


    useEffect(()=>{
        postDatatoServer(guidebook);
    },[]);

    const postDatatoServer= (data)=> {
        axios.post(`http://localhost:8080/user/readalltourist`).then(
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
            <th>Tourist ID</th>
            <th>Tourist UserName</th>
            <th>Tourist Email</th>
            <th> Mobile No</th>
            <th>ID Proof</th>
            <th>Country</th>
            
          
            
          </tr>
        </thead>
        <tbody>
           {  guidebook &&
           guidebook.map((item)=>{
           return (
              <tr>
                <td>{item.tourist_id} </td>
                <td>{item.tourist_username} </td>
                <td>{item.tourist_email}</td>
                <td>{item.mobile_no}</td>
                <td>{item.id_proof}</td>
                <td>{item.country}</td>
              </tr>
            )})
            } 

        </tbody> 
      </ReactBootStrap.Table>

      
    </div>
                       
        );
      };
export default AlltouristAdmin;