
import {useState,useEffect} from "react";
import base_url from "./Api/Url";
import bootstrap from 'react-bootstrap';
import swal from "sweetalert";
import axios from 'axios';
import {useHistory} from 'react-router-dom';

function Tourist_Details()
{

  const history= useHistory();

  const [user , setUser] = useState({
    tourist_username:"",
    id_proof:"",
     country:"",
  });


  useEffect(()=>{
    let variable=localStorage.getItem("registerSession");
    variable=JSON.parse(variable);
    setUser({...user,tourist_username:variable.username});
    console.log(user.tourist_username);
},[])

  const regex =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  const regex1=/^([a-zA-Z])+$/;
  const regex2=/^([0-9])/;



  const handleForm=(e)=>{

    e.preventDefault();
     // console.log(user);
          if(user.id_proof==="" || 
          user.country==="")
          {
            swal("Error","Please fill every detail","error");

          }else if(!regex2.test(user.id_proof)){

            swal("Error!","Please Enter Valid Id Proof","error");
        }
        else if (!regex1.test(user.country))
        {
          swal("Error!","Please Enter Valid Country","error");
          
        }else{
          postDatatoServer(user);
        }
        
  }

  const postDatatoServer= (data)=> {
    axios.post(`${base_url}/addTouristDetails`,data).then(
      (response)=>{
        console.log(response.data);
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
             <h2 style={{textAlign: 'center', fontWeight: 'bold'}}> Tourist Escort Tourist Details </h2><br/>

      <form onSubmit={handleForm} >
          
           <div class="form-group">
              <label for="exampleInputEmail1">ID Number</label>
              <input name="id_proof" type="text" value={user.id_proof} onChange={(e)=>{setUser({...user, id_proof: e.target.value});}} class="form-control"  placeholder="Provide Your ID" />
             
            </div>

            <br/>

            <div class="form-group">
              <label for="exampleInputEmail1">Country</label>
              <input name="country" type="text" value={user.country} onChange={(e)=>{setUser({...user, country: e.target.value});}} class="form-control"  placeholder="Enter Your Country" />
              
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

export default Tourist_Details;