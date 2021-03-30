
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import { Route, BrowserRouter as Router,Switch, BrowserRouter } from 'react-router-dom';
import Guide from './Guide.js';
import Restaurant from './Restaurant.js';
import Register from './Register.js';
import Login from './Login.js';
import Footer from './Footer.js';
import Home from './Home.js';
import Home1 from './Home1.js';
import AboutUs from './AboutUs.js';
import Hotel from './Hotel';
import Guide_booking from './Guide_booking';
import Hotel_booking from './Hotel_booking';
import MyProfile from './MyProfile.js';
import ThingsToDo from './ThingsToDo.js';
import Logout from "./logout.js";
import Guide_Details from './Guide_Details';
import Tourist_Details from './Tourist_Details';
import Hotel_Details from './Hotel_Details';
import AllGuideBookings from './AllGuideBookings';
import AllHotelBookings from "./AllHotelBookings";
import Allguide from './Allguide';
import Allhotel from './Allhotel';
import Contactus from './Contactus';
import TouristProfile from './TouristProfile';
import GuideProfile from './GuideProfile';
import HotelProfile from './HotelProfile';
import MainHeader from "./MainHeader";
import AllhotelAdmin from './AllhotelAdmin';
import AllguideAdmin from './AllguideAdmin';
import AlltouristAdmin from './AlltouristAdmin';
import MyGuideBooking from './MyGuideBooking'
import MyHotelBooking from './MyHotelBooking';
import GuideBookingByGuide from './GuideBookingByGuide';
import HotelBookingByHotel from './HotelBookingByHotel';
import Header1 from './Header1';

function App({handleLogged}) {
  return (
    <BrowserRouter>
   <body>
   <div>
<Router>

 <MainHeader /> 
{/* <Header1 /> */}
<Switch>

      <Route exact path="/">

            <Home />
            <Home1 />
         
          </Route>

           <Route path="/guide_booking/:guide_id" component={Guide_booking}/>
           <Route path="/Guide" exact={true} component={Guide}/> 

           <Route path="/hotel_booking/:hotel_id" component={Hotel_booking}/>
           <Route path="/Hotel" exact={true} component={Hotel}/>

          <Route path="/ThingsToDo">
            <ThingsToDo />
          </Route>

          <Route path="/AllGuideBookings">
            <AllGuideBookings />
          </Route>

          <Route path="/AllHotelBookings">
            <AllHotelBookings />
          </Route>

          <Route path="/Allguide">
            <Allguide />
          </Route>
          <Route path="/AllguideAdmin">
            <AllguideAdmin />
          </Route>
          
          <Route path="/AllhotelAdmin">
            <AllhotelAdmin />
          </Route>
          <Route path="/AlltouristAdmin">
            <AlltouristAdmin />
          </Route>

          <Route path="/MyGuideBooking">
            <MyGuideBooking />
          </Route>
          <Route path="/MyHotelBooking">
            <MyHotelBooking />
          </Route>

          <Route path="/GuideBookingByGuide">
            <GuideBookingByGuide />
          </Route>

          <Route path="/HotelBookingByHotel">
            <HotelBookingByHotel />
          </Route>

          <Route path="/Allhotel">
            <Allhotel />
          </Route>

          <Route path="/Contactus">
            <Contactus />
          </Route>

          <Route path="/AboutUs">
            <AboutUs />
          </Route>

          <Route path="/Register">
            <Register />
          </Route>

          <Route path="/Guide_Details">
            <Guide_Details />
          </Route>

          <Route path="/Tourist_Details">
            <Tourist_Details />
          </Route>

          <Route path="/Hotel_Details">
            <Hotel_Details />
          </Route>

          <Route path="/Login">
            <Login />
          </Route>
      
           <Route path="/TouristProfile">
             <TouristProfile />
             </Route>

             <Route path="/GuideProfile">
             <GuideProfile />
             </Route>

             <Route path="/HotelProfile">
             <HotelProfile />
             </Route>

             <Route path="/logout">
              <Logout />
          </Route>


          <Route path="/MainHeader">
              <Header1 />
          </Route> 
  
       </Switch>
       <Footer />
       
       </Router>
 </div>

   </body>
    
 
 </BrowserRouter>
  )
}


export default App;

