 import * as ReactBootStrap from "react-bootstrap";
import {useEffect,useState} from 'react';
import axios from 'axios';
import { Card } from "react-bootstrap";
import Adminmodal from './Modelviewhotel';
import Dummy from './images/Trident.jpg';

const Allhotel = ()=>{
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
    
      const renderCard = (card, index) => {
        return (
          <div className="shadow  ">
            <Card  key={index}>

            <img src={Dummy} class="img-responsive guide-image mt-2 ml-3" />
              <Card.Body>
                <Card.Title> Reg_No:{card.hotel_id}</Card.Title>
                <hr />
                <br />
                <Card.Text><h4>🏢 Name:{card.hotel_name}</h4></Card.Text>
                <Card.Text><h5>📧 Email:{card.city}</h5></Card.Text>
                <Card.Text><h5> 📍 Location No:{card.address}</h5></Card.Text>
                <Card.Text><h6>📝 Features:{card.features}</h6></Card.Text>
                <Adminmodal itemData={card} />
              </Card.Body>
          </Card>
          <br/>
          </div>
          );
      };
    
      return <div className="grid">{guidebook.map(renderCard)}</div>;
}
export default Allhotel;