
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import swal from "sweetalert";
import './contactus.css';


function App() {

const [user, setUser] = useState({
        name: "",
        email: "",
        mobile: "",
        message:"",
      });
      const syncName = (e) => setUser({ ...user, name: e.target.value });
      const syncMessage = (e) =>setUser({ ...user, message: e.target.value });
      const syncEmail = (e) => setUser({ ...user, email: e.target.value });
      const syncMobile = (e) => setUser({ ...user, mobile: e.target.value });

      const sendFeedback = () => {
        var filter=/^[987][0-9]{9}$/;

        var filter2= /^[a-zA-Z]+$/; 
        // var eval=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      
        
        if( user.name == "" || !filter2.test(user.name)){
            swal("Error!", "Enter Valid Name", "error");
          return;
        }else if(!filter.test(user.mobile)){
            swal("Error!", "Enter Valid Mobile Number", "error");
            return;

        }else{
            swal("Success!", "Feedback submitted Successfully!!", "success");
            console.log("user", user);
            localStorage.setItem("app-user", JSON.stringify(user));
        }
        
}
  return(


    
    <div id="contact">
                    <footer>
                        <div className="row ">
                            <div className="col-md-4 justify-content-left p-5">
                                {/* <img   src={img} alt="Arahan"/> */}
                                <p>At pur core is collection of design and development solution that represents
                                    everything your business need to compete in mordern marketplace
                                </p>
                                <strong>Contact Info</strong>
                                <p>(888) 888-8888 email@email.com</p>
                            </div>
                            <div className="col-md-8 justify-content-right p-5">
                                <form>
                                    <label>Full name</label><br/>
                                    <input type="text"  value={user.name} onChange={syncName} placeholder="Enter your name" name="username"  /> <br/>
                                    <label>Email</label><br/>
                                    <input type="email" value={user.email} onChange={syncEmail} placeholder="Enter your Email" name="passaward"  /><br/>
                                    <label>Mobile</label><br/>
                                    <input type="number"  value={user.mobile} onChange={syncMobile} placeholder="Enter your Number" name="Email"  /><br/>
                                    <label >Message</label><br/>
                                    <textarea onChange={syncMessage} value={user.message} placeholder="Enter your message"></textarea><br/>
                                    <input type="submit" onClick={sendFeedback}></input><br/>
                                </form>
                            </div>
                        </div>
                    </footer>
                </div>

  );

}

export default App;
