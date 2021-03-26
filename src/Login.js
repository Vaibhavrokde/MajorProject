// function Login()
// {
//   return (<div>
//     <div className="row" style={{background:'azure'}}>
//            <div className="col-4"></div>

//            <div className="col-4" style={{marginTop:'3%', marginBottom:'3%'}} >
//              <h2 style={{textAlign: 'center', fontWeight: 'bold'}}> Tourist Escort Login</h2><br/>

//            <form>
//   <div class="form-group">
//     <label for="exampleInputEmail1">Email address</label>
//     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

//   </div>
//   <div class="form-group">
//     <label for="exampleInputPassword1">Password</label>
//     <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
//   </div>
  
//   <button type="submit" class="btn btn-primary d-flex justify-content-center align-items-center">Submit</button>
//   <p className="d-flex justify-content-center align-items-center">Don't have an Account? 
//   <a href="/Register">Sign Up!</a></p>
// </form>

//            </div>

//            <div className="col-4">

      

//            </div>
//     </div>

//   </div>
//   );
// }
// export default Login;

// ===========================================================================================


import {useCallback, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import base_url from "./Api/Url";
import swal from 'sweetalert';

function Login()
{

const [user,setUser]= useState({});
// const [user1,setUser1]= useState({
//   role:""
// });
//const initialState={};
//const [initial,setInitial]= useState(initialState);
const history= useHistory();


const handleForm= (e)=>{
  postLogineonServer(user);
  e.preventDefault();
 
}

const postLogineonServer = useCallback((user)=>{

  axios.post(`${base_url}/login`,user).then(
    (response)=>{  
      console.log(response);
      if(response.data===""){
        swal("Error","credential Error","error");
      }else{
        // sessionStorage.setItem('CurrentSession',JSON.stringify(response.data));
        // let variable = sessionStorage.getItem('CurrentSession');
        // variable= JSON.parse(variable);
        localStorage.setItem("CurrentSession",JSON.stringify(response.data));
        

        setTimeout(() => {
          swal("success!","Logine Successfull","success");
        }, 1000);
        redirect(response.data.role);
      }     

    }).catch(
      (error)=>{
        swal("Error!","Server Error","error");
      // console.log("Something went wrong");

    })
  },[user]);



const redirect= (role1)=>{
    if(role1===""){
      swal("Error","credential Error","error");
      window.location.reload();
    }else if(role1==="tourist"){
      swal("success!","Logine Successfull","success");
       history.push("/");
       window.location.reload();
      
    }else if(role1==="guide"){
      swal("success!","Logine Successfull","success");
       history.push("/");
       window.location.reload();
     
    }else if(role1==="hotel"){
      swal("success!","Logine Successfull","success");
       history.push("/");
       window.location.reload();
     
    }else{
      swal("success!","Logine Successfull","success");
      history.push("/");
      window.location.reload();
    }
}

// const reset= ()=>{
//   setUser(initialState);
// }

// useEffect(() => {
//   postLogineonServer()
// }, [])


  return (
  
  <div>
    <div className="row" style={{background:'azure'}}>
           <div className="col-4"></div>

           <div className="col-4" style={{marginTop:'3%', marginBottom:'3%'}} >
             <h2 style={{textAlign: 'center', fontWeight: 'bold'}}> Tourist Escort Login</h2><br/>

        <form >
          <div class="form-group">
            <label for="exampleInputEmail1">Username</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={(e)=>{setUser({...user, username: e.target.value});}} placeholder="Enter email" />
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control p1" id="exampleInputPassword1"onChange={(e)=>{setUser({...user, password: e.target.value});}}  placeholder="Password"/>
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" onClick={handleForm} class="btn btn-primary" >Submit</button>
        </form>

      </div>

           <div className="col-4">

           <div className="col-4" style={{float:'right'}}>
                <a href="/Register" className="btn btn-primary m-1" value="Register">Register</a>

           </div>

           </div>
    </div>

    {/* <div className="row align-items-center justify-content-center" style={{background:'bisque', textAlign:'center'}}>
                  The Tourist Escort <br/>
                  The leading site for tourist support<br/>
    </div> */}
  </div>
  );
}


export default Login;