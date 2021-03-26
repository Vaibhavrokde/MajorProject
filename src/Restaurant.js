import { Link } from 'react-router-dom';
import './App.css';


import resnam from './images/jm1.jpg';
import monarch from './images/m1.jpg';
import pasta from './images/pc1.jfif';
import hi from './images/hi.jfif';
import kabab from './images/kf3.jfif';

function Restaurant() {
  return (
    <div class="container-fluid">
       <div>
  {/* <div class="jai-res"><h2>Restaurants in Jaipur</h2></div> */}
</div> 


{/* ==================================================================================================== */}
<div class="container-fluid">
<div class="row">

  <div class="col-3">
    <div class="row">
    
      <div class="col-4"></div>
      <span class="border">
    <div class="col-8 mt-2">


    {/* <Link to='Guide'><b>Guide</b></Link> */}
    {/* <Link to='Registration'><b>Registration</b></Link> */}
    


      <h6>Meals</h6>
    <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Breakfast
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label class="form-check-label" for="flexCheckChecked">
    Brunch
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Lunch
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label class="form-check-label" for="flexCheckChecked">
    Dinner
  </label>
  
</div>

<hr/>

{/* =============================================================================================================== */}
<div>
      <h6>Price</h6>
    <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Cheap Eats
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label class="form-check-label" for="flexCheckChecked">
    Mid-range
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Fine Dining
  </label>
</div>
<hr/>
{/* ============================================================================================================== */}
<div>
      <h6>Cuisine</h6>
    <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Indian
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label class="form-check-label" for="flexCheckChecked">
    Chinese
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Fast Food
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Mughlai
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Pizza
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Afgani
  </label>
</div>

<hr/>

</div>

{/* ============================================================================================================================ */}

<div>
  
      <h6>Dietary</h6>
    <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Vegetarian Food
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label class="form-check-label" for="flexCheckChecked">
    Non-Vegetarian Food
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Vegan Food
  </label>
</div>
<hr/>
</div>
{/* ================================================================================================================= */}
</div>

</div>
</span>
    </div>
   
    
  </div>
  {/* ========================================================================================= */}
  <div class="col-8">
    <div class="row shadow mt-2">
    
      <div class="col-4">
      <img src={resnam} alt="resnam" class="img-responsive mt-1" />
      </div>
     
      <div class="col-5">
      <h3>1. Jaipur Modern</h3>
      <hr/>
       <ul>
         <ul>
           <li>
           “Wonderful experience”
           </li>
           <li>
           “Excellent hospitality”
           </li>
           
           <a class="btn btn-warning rounded-pill mt-4" href="#" role="button">Order Online</a>
         </ul>
       </ul>
      </div>
      
      {/* <div class="col-3">hi</div>   */}
    </div>
{/* ======================================================================================================== */}
    <div class="row shadow mt-2">
      <div class="col-4">
      <img src={monarch} alt="resnam" class="img-responsive mt-1" />
      </div>
      <div class="col-5">
      <h3>2. Monarch Restaurant</h3>
      <hr/>
       <ul>
         <ul>
           <li>
           “Awesome food, service and hospitality”
           </li>
           <li>
           “Lovely restaurant good food”
           </li>
           
           <a class="btn btn-warning rounded-pill mt-4" href="#" role="button">Order Online</a>
         </ul>
       </ul>
      </div>
      {/* <div class="col-3">hi</div> */}
    </div>
{/* ==================================================================================================== */}
    <div class="row shadow mt-2">
      <div class="col-4">
      <img src={pasta} alt="resnam" class="img-responsive mt-1" />
      </div>
      <div class="col-5">
      <h3>3. Pasta Cucina</h3>
      <hr/>
       <ul>
         <ul>
           <li>
           “Excellent mini-pizzas”
           </li>
           <li>
           “Loveliest ravioli preparations”
           </li>
           
           <a class="btn btn-warning rounded-pill mt-4" href="#" role="button">Order Online</a>
         </ul>
       </ul>
      </div>
      {/* <div class="col-3">hi</div> */}
    </div>
    {/* ============================================================================================================ */}
    <div class="row shadow mt-2">
      <div class="col-4">
      <img src={hi} alt="resnam" class="img-responsive" />
      </div>
      <div class="col-5">
      <h3>4. Hi-LiFE The Rooftop Grill</h3>
      <hr/>
       <ul>
         <ul>
           <li>
           “Excellent”
           </li>
           <li>
           “Nice”
           </li>
           
           <a class="btn btn-warning rounded-pill mt-4" href="#" role="button">Order Online</a>
         </ul>
       </ul>
      </div>
      {/* <div class="col-3">hi</div> */}
    </div>
    {/* ======================================================================================================================= */}
    <div class="row shadow mt-2">
      <div class="col-4">
      <img src={kabab} alt="resnam" class="img-responsive " />
      </div>
      <div class="col-5">
      <h3>5. The Great Kabab Factory</h3>
      <hr/>
       <ul>
         <ul>
           <li>
        “so delicious, nice chicken curry and freshly made fish starter.”
           </li>
           <li>
           “Best Biryani”
           </li>
           
           <a class="btn btn-warning rounded-pill mt-4" href="#" role="button">Order Online</a>
         </ul>
       </ul>
      </div>
      
      {/* <div class="col-3">hi</div> */}
    </div>

  </div>
  <div class="col"></div>
</div>
</div>
{/* ================================================================================================================== */}
    </div>
  );
}

export default Restaurant;
