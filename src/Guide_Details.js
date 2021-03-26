
import {useState,useEffect} from "react";
import axios from "axios";
import base_url from "./Api/Url";
import bootstrap, { DropdownButton} from 'react-bootstrap';
import swal from "sweetalert";
import {useHistory} from 'react-router-dom';
import DropdownItem from "react-bootstrap/esm/DropdownItem";


function Guide_Details()
{

  const history= useHistory();
  const [user , setUser] = useState({
    licence_no:"",
    testimony:"",
    status:null,
    credentials:""
  });


  useEffect(()=>{
    let variable=localStorage.getItem("registerSession");
    variable=JSON.parse(variable);
    setUser({...user,guide_username:variable.username});
    console.log(user.guide_username);
},[])



  


  const regex =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  const regex1=/^([a-zA-Z\!\.\,\ \& \"])+$/;
  const regex2=/^([0-9])/;
  const regex3=/^([a-zA-Z\ ])+$/;



  const handleForm=(e)=>{

    e.preventDefault();
     // console.log(user);
          if(user.licence_no==="" || user.credentials===""|| user.testimony==="" )
          {
             swal("Error","Please fill every detail","error");

          }else if(!regex2.test(user.licence_no)){
            swal("Error!","Please Enter Valid licence_no","error");
          
          }else if(!regex1.test(user.credentials)){
            swal("Error!","Please Enter Valid Credentials","error");
        
           }else if(!regex1.test(user.testimony)){
            swal("Error!","Please Enter Valid Testimony","error");
      
          }else {
                  postDatatoServer(user);
                }
        
  }

  const postDatatoServer= (data)=> {
    axios.post(`${base_url}/addGuideDetails`,data).then(
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
             <h2 style={{textAlign: 'center', fontWeight: 'bold'}}> Tourist Escort Guide Details </h2><br/>

      <form onSubmit={handleForm} >
          
           <div class="form-group">
              <label for="exampleInputEmail1">Licence Number</label>
              <input name="licence_no" type="text" value={user.licence_no} onChange={(e)=>{setUser({...user, licence_no: e.target.value});}} class="form-control"  placeholder="Your Licence Number" />
             
            </div>
           

            <br/>

            <div class="form-group">
              <label for="exampleInputEmail1">Write Your Testimony</label>
              <textarea name="testimony" type="textArea" value={user.testimony} onChange={(e)=>{setUser({...user, testimony: e.target.value});}} class="form-control"  placeholder="Write about your experiences nad language proficiency..." />
             
            </div>

            <div class="form-group">
              <label for="exampleInputEmail1">Write Your Credential</label>
              <textarea name="testimony" type="textArea" value={user.credentials} onChange={(e)=>{setUser({...user, credentials: e.target.value});}} class="form-control"  placeholder="Write about your Licencing Imformation...." />
             
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

export default Guide_Details;