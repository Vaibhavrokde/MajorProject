
import "./Guide_booking.css";
import dummy from './images/dummy.png';
import SingleCalendar from 'react-single-calendar';
import data from './data';
import { BrowserRouter, Route, Link} from 'react-router-dom';
// import HomeScreen from './Screens/HomeScreen';
import Guide from './Guide';
import './App.css';


// import { Button, Container, Form, FormGroup, Input, Label, Row, Col} from 'reactstrap';


function Guide_booking(props){


  console.log(props.match.params.guide_id);
  
  const guide_info = data.guides.find(x => x.guide_id === props.match.params.guide_id);




  
  return  (
  <div>
    <div className="container-fluid">
      <div className="row">
        {/* =============================1st column========================================================== */}
        <div className="col"></div>
        {/* ==============================2nd column===================================================================== */}
        <div className="col-5 mr-3 mt-3">
        <div className="row shadow">
          <div className="col-3 mt-2">
          <img src={dummy} alt="resnam" class="img-responsive guide-image" />
          </div>

          <div className="col-9 guide-text mt-2">
          <h4>{guide_info.guide_name}</h4>
          <h6><i>{guide_info.city}</i></h6>
                              <hr/><br/>
                              <h5><b>{guide_info.rating}</b></h5>
                              <h5><b>Mobile:</b>{guide_info.mobile}</h5>
                              <h5><b>Emali Id:</b>{guide_info.guide_email}</h5>
            
            <h5><b>Languages:</b> {guide_info.Languages}</h5>
                                <h5><b>Credentials:</b>{guide_info.Credentials}</h5>
          </div>
          </div>
{/* ====================review section================================================================================ */}
           
           <div className=" col shadow mt-5" style={{backgroundColor: '#f9d5e5', fontWeight: 'bold'}}>
           <h3 className="d-flex align-items-center justify-content-center pt-2"><b>Write a review </b></h3><br/>
           <h5>How was your experience?</h5>
           <h5>{guide_info.rating}stars({guide_info.numReviews}Reviews)</h5>
           <textarea id="input" class="form-textarea" name="review" cols="50" rows="6" data-component="textarea" aria-labelledby="label_4"></textarea>
           <br/><br/>
           <button type="submit" class="btn btn-warning rounded-pill p-2" value="Post">Post Review</button>
           </div>
         </div> 
      
         


        {/* ==========================3rd column============================================================================ */}
        <div className="col-6 shadow mt-3" style={{backgroundColor: '#c0ded9', fontWeight: 'bold'}}>
      <form className="form"> 
      <div className="row">
    {/* <div className="col-3"> */}
    <label for="date">Registration Date:</label>
       {/* </div> */}
    {/* <div className="col-9 box-size"> */}
<input type="date" class="form-control  border-dark" name="date" id="date" required  />
 
    {/* </div> */}
    
    </div>
<br/> 



<div className="row">
    {/* <div className="col-3"> */}
    <label for="numer">Number of Travellers:</label>
    {/* </div> */}
    {/* <div className="col-9 box-size"> */}
    <input  type="number" name="number" id="number" required/>
    </div>
    {/* </div> */}
    <br/>


<div className="row">
    {/* <div className="col-3"> */}
    <label for="date"> Select Date(From): </label>
    
    
    
       {/* </div> */}
    {/* <div className="col-9 calendar"> */}
<input type="date" class="form-control  border-dark calendar mb-3" name="date" id="date" required  placeholder="From" />
<label for="date"> Select Date(To): </label>
 <input type="date" class="form-control border-dark calendar" placeholder="To" />
    </div>
{/*     
    </div> */}
<br/>




    

    <div className="row">
    {/* <div className="col-3"> */}
    <label for="exampleInputEmail1">Choose Language:</label>
    {/* </div> */}
    {/* <div className="col-9 box-size"> */}
    <select class="custom-select border-dark">
   <option selected>Choose Language</option>
   <option name="role" value="role">American English</option>
   <option name="role" value="role">British English</option>
   <option name="role" value="role">Chinese</option>
   <option name="role" value="role">French</option>
   <option name="role" value="role">German</option>
   <option name="role" value="role">Hindi</option>
   <option name="role" value="role">Italian</option>
  
   
   <option name="role" value="role">Korean</option>
   <option name="role" value="role">Portugese</option>
   <option name="role" value="role">Russian</option>
   <option name="role" value="role">Spanish</option>
  
   </select>
    </div>
    {/* </div> */}
    <br/>

    <br/>
    
    <div className="row">
    <div className="col-4"></div>
    <div className="col-8">
   
    <button type="submit" class="btn btn-warning rounded-pill" value="Post">Confirm Booking</button>
   
    </div>
    </div>
    <br/>
      </form>
          
        </div>
        {/* ==========================4th column================================================================================= */}
        <div className="col"></div>
{/* ===================================end================================================================================= */}

      </div>
      
      </div>
      </div>
  )
}
export default Guide_booking;
