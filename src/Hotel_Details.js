
import {useState,useEffect} from "react";
import base_url from "./Api/Url";
import bootstrap from 'react-bootstrap';
import swal from "sweetalert";
import axios from 'axios';
import {useHistory} from 'react-router-dom';

function Hotel_Details()
{
  const history= useHistory();

  const [user , setUser] = useState({
    hotel_username:"",
     reg_no:"",
     address:"",
     rooms:0,
     city:"",
     features:""
  });

  useEffect(()=>{
    let variable=localStorage.getItem("registerSession");
    variable=JSON.parse(variable);
    setUser({...user,hotel_username:variable.username});
    //console.log(user.hotel_username);
},[])

 


const regex =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
const regex1=/^([a-zA-Z\!\.\,\ \& \"])+$/;
const regex2=/^([0-9])/;
const regex4=/^([0-9A-Za-z])/;
const regex3=/^([a-zA-Z\ ])+$/;


  const handleForm=(e)=>{

    e.preventDefault();
     // console.log(user);
          if(user.reg_no==="" || user.address==="" || user.rooms===0 || user.city=="" || user.features==="" )
          {
            swal("Error","Please fill every detail","error");

          }else if(!regex2.test(user.reg_no)){

            swal("Error!","Please Enter Valid Registration ","error");
          
        }
        else if (!regex4.test(user.address))
        {
          swal("Error!","Please Enter Valid Address","error");
        
        }else if (!regex2.test(user.rooms))
        {
          swal("Error!","Please Enter Valid Rooms","error");
        
        }else if (!regex3.test(user.city))
        {
          swal("Error!","Please Enter Valid city","error");
        
        }else if (!regex1.test(user.features))
        {
          swal("Error!","Please Enter Valid Features","error");
        
        }
        else{
          postDatatoServer(user)
        }
        
  }

  const postDatatoServer= (data)=> {
    axios.post(`${base_url}/addHotelDetails`,data).then(
      (response)=>{
        console.log(response);
        swal("success!","Details updated successfully","success");
        history.push("/Login");
      },(error)=>{
        swal("Error!","Something Went Wrong","error");
        console.log(error);
      }
    )
  }

  console.log(user);


  return (<div>
    <div className="row" style={{background:'azure'}}>
           <div className="col-4"></div>

           <div className="col-4" style={{marginTop:'3%', marginBottom:'3%'}} >
             <h2 style={{textAlign: 'center', fontWeight: 'bold'}}> Tourist Escort Hotel Details </h2><br/>

      <form onSubmit={handleForm} >
          
           <div class="form-group">
              <label for="exampleInputEmail1">Registration Number</label>
              <input name="reg_no" type="text" value={user.reg_no} onChange={(e)=>{setUser({...user, reg_no: e.target.value});}} class="form-control"  placeholder="Enter Registration Number" />
             
            </div>

            <br/>

            <div class="form-group">
              <label for="exampleInputEmail1">Address</label>
              <input name="location" type="text" value={user.address} onChange={(e)=>{setUser({...user, address: e.target.value});}} class="form-control"  placeholder="Enter Your Location" />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">City</label>
              <input name="location" type="text" value={user.city} onChange={(e)=>{setUser({...user, city: e.target.value});}} class="form-control"  placeholder="Enter Your Location" />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Features</label>
              <input name="location" type="text" value={user.features} onChange={(e)=>{setUser({...user, features: e.target.value});}} class="form-control"  placeholder="Enter Your Location" />
            </div>

            <br/>
            <div class="form-group">
              <label for="exampleInputEmail1">Available Rooms</label>
              <input name="location" type="number" value={user.rooms} onChange={(e)=>{setUser({...user, rooms: e.target.value});}} class="form-control"  placeholder="Enter Your Location" />
            </div>

            <br/>

            <button type="submit" class="btn btn-primary">Submit</button>
      </form>

           </div>

    </div>

    <div className="row align-items-center justify-content-center" style={{background:'bisque', textAlign:'center'}}>
                  The Tourist Escort <br/>
                  The leading site for tourist support<br/>
    </div>
  </div>
  );
}

export default Hotel_Details;