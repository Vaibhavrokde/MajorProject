 import * as ReactBootStrap from "react-bootstrap";
import {useEffect,useState} from 'react';
import axios from 'axios';
import { Card } from "react-bootstrap";
import Adminmodal from './Modelviewguide';
import Dummy from './images/dummy.png';

const AllguideAdmin = ()=>{
    const [guidebook,setguidebook]= useState([]);


    useEffect(()=>{
        postDatatoServer(guidebook);
    },[]);

    const postDatatoServer= (data)=> {
        axios.post(`http://localhost:8080/user/readallguide`).then(
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
            <th>Guide ID</th>
            <th>Guide UserName</th>
            <th>Guide Name</th>
            <th>Guide Email</th>
            <th>Mobile No</th>
            <th>Licence No</th>
            <th>Tesetimony</th>
            <th>Credential</th>
            
          </tr>
        </thead>
        <tbody>
           {  guidebook &&
           guidebook.map((item)=>{
           return (
              <tr>
                <td>{item.guide_id} </td>
                <td>{item.guide_username} </td>
                <td>{item.guide_name} </td>
                <td>{item.guide_email}</td>
                <td>{item.mobile_no}</td>
                <td>{item.licence_no}</td>
                <td>{item.testimony}</td>
                <td>{item.credentials}</td>
                
              </tr>
            )})
            } 

        </tbody> 
      </ReactBootStrap.Table>

      
    </div>
                       
        );
      };
export default AllguideAdmin;