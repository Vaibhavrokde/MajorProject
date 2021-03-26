 import * as ReactBootStrap from "react-bootstrap";
import {useEffect,useState} from 'react';
import axios from 'axios';
import { Card } from "react-bootstrap";
import Adminmodal from './Modelviewguide';
import Dummy from './images/dummy.png';

const Allguide = ()=>{
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
    
      const renderCard = (card, index) => {
        
        return (
          <div className="shadow  ">
             <Card  key={index}>
             <img src={Dummy} class="img-responsive guide-image mt-2 ml-3" />
             
                <Card.Body>
                <Card.Title> Reg_No:{card.guide_id}</Card.Title>
                <hr />
                <br />
                  <Card.Text><h4>👳🏾‍♀️ Name:{card.guide_name}</h4></Card.Text>
                  <Card.Text><h4>📍  City:{card.city}</h4></Card.Text>
                  <Card.Text><h5>📧 Email:{card.guide_email}</h5></Card.Text>
                  <Card.Text><h5>📝 Biography:{card.testimony}</h5></Card.Text>
                  <Card.Text><h6>📜 Credentials:{card.credentials}</h6></Card.Text>
                    <Adminmodal itemData={card} />
                </Card.Body>
              </Card> 
              <br/>
          </div>
                       
        );
      };

     
    
      return <div className="grid">{guidebook.map(renderCard)}</div>;
}
export default Allguide;