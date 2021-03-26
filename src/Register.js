
import {useState,useCallback} from "react";
import axios from "axios";
import base_url from "./Api/Url";
import { toast } from "react-toastify";
import swal from "sweetalert";
import {useHistory} from 'react-router-dom';

function Register()
{
  const history= useHistory();

  const [user , setUser] = useState({
      name:"",
      username:"",    
      password:"",
      mobile_no:"",
      role:"",
      user_email:"",
     
  });


  const regex =/^([a-zA-Z0-9_\.\-\ ])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  const regex1=/^([a-zA-Z\ ])+$/;
  const regex2=/^([0-9])/;



  const handleForm=(e)=>{
    e.preventDefault();
     // console.log(user);
          if(user.name==="" || 
          user.username==="" || 
          user.password==="" || 
          user.mobile_no==="" || 
          user.role===""||
          user.user_email==="" )
          {
            swal("Error","Please fill every detail","error");

          }else if(!regex1.test(user.name)){

            swal("Error!","Please Enter Valid name","error");
          
        }
        else if (!regex.test(user.user_email))
        {
          swal("Error!","Please Enter Valid Email Address","error");
        
        } 
        else if(user.password.length< 6)
        {
          swal("Error!","Please Enter password with minimum 6 characters","error");
          
        }else if(!regex2.test(user.mobile_no) || user.mobile_no.length < 10 ||  user.mobile_no.length > 10){
            swal("Error!!","Please Enter mobileNo with minimum 10 characters","error");
            
        }else{
          //console.log(user);
          postDatatoServer(user);
          e.preventDefault();
        }
        
  }

  const postDatatoServer= useCallback( (data)=> {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("username", data.username);
    formData.append("password", data.password);
    formData.append("mobile_no", data.mobile_no);
    formData.append("role", data.role);
    formData.append("user_email", data.user_email);
  

    axios.post(`http://localhost:8080/user/register`, data).then(
      (response)=>{
        if(response.data===""){
         
          swal("Error!","User Already Exist","error");
         //console.log("User Already Exist");
        }else{
          localStorage.setItem('registerSession',JSON.stringify(response.data));
         // console.log(response.data.role);
          swal("Success","Registration successfull","success");
          redirect(response.data.role);
        }
       
      },(error)=>{
        swal("Error!","Server Error","error");
        console.log(error);
      }

    )
  },[user]);


  const redirect=  (role1)=>{
     if(role1==="tourist"){
      history.push("/Tourist_Details");  
    }else if(role1==="guide"){
      history.push("/Guide_Details");
     }else if(role1==="hotel"){
      history.push("/Hotel_Details");
    }
};
console.log(user);
  return (<div>
    <div className="row" style={{background:'azure'}}>
           <div className="col-4"></div>

           <div className="col-4" style={{marginTop:'3%', marginBottom:'3%'}} >
             <h2 style={{textAlign: 'center', fontWeight: 'bold'}}> Tourist Escort Register </h2><br/>

      <form onSubmit={handleForm} >
           <div class="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input name="name" type="text" value={user.name} onChange={(e)=>{setUser({...user, name: e.target.value});}} class="form-control"  placeholder="Your Name" />
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Username</label>
              <input name="username" type="text" value={user.username} onChange={(e)=>{setUser({...user, username: e.target.value});}} class="form-control"  placeholder="Create Username" />
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input name="password" class="form-text" type="password" class="form-control p1" value={user.password} onChange={(e)=>{setUser({...user, password: e.target.value});}} placeholder="Create Password"/>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Mobile</label>
              <input name="mobile" type="text" value={user.mobile_no} onChange={(e)=>{setUser({...user, mobile_no: e.target.value});}} class="form-control"  placeholder="Create Mobile" />
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <label for="exampleInputEmail1">Choose one</label><br/>
            <select class="custom-select p1" value={user.role} onChange={(e)=>{setUser({...user, role: e.target.value});}}>
            <option selected>Open this select menu</option>
            <option name="role" value="tourist">Tourist</option>
            <option name="role" value="guide">Guide</option>
            <option name="role" value="hotel">Hotel</option>
            </select>

            <br/> <br/>

            <label for="exampleInputEmail1">Email</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={user.user_email} onChange={(e)=>{setUser({...user, user_email: e.target.value});}} placeholder="Provide your email" />
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              <br/>

             
               

          <br/>
            {/* <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" />
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div> */}
            <button type="submit" class="btn btn-primary">Submit</button>
      </form>

           </div>

           <div className="col-4">
                
           <div className="col-4" style={{float:'right'}}>
                <a href="/Login" className="btn btn-primary m-1" value="Login">Login</a>
                {/* <form method="get" action="/Login">
              <button  className="submit1 d-flex justify-content-center align-items-content" type="submit">Login </button> */}

           </div>

           </div>
    </div>

    <div className="row align-items-center justify-content-center" style={{background:'bisque', textAlign:'center'}}>
                  The Tourist Escort <br/>
                  The leading site for tourist support<br/>
    </div>
  </div>
  );
}
export default Register;