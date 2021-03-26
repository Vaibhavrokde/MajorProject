import amerfort8 from './images/amerfort8.jfif';
import amerfort7 from './images/amerfort7.jfif';
import jaigarh from './images/jaigarh.jfif';
import amerfort4 from './images/amerfort4.jfif';
import rajasthani_thali from './images/rajasthani_thali.jfif';
import ghevar from './images/ghevar.jfif';
import mirch from './images/mirch.JPG';
import kachori from './images/kachori.jpg';
import handicraft3 from './images/handicraft3.jpg';
import bluepottery2 from './images/bluepottery2.jfif';
import shopping from './images/shopping.jpg';
import shopping2 from './images/shopping2.jpg';



import './App.css';

function ThingsToDo(){
    return(

        <div><br/><br/><br/>
 {/* ============starting div================================================================= */}
    <div class="container-fluid">
    <h1 class="mt-4 text-center">Places to visit in Jaipur</h1>
    </div>
    {/* ======================================================================================== */}

  <div class="row  mt-4">
      <div class="col-1"></div>
          <div class="col">
       
            <img src={amerfort8} alt="paneer" class="img-responsive1 shadow-lg bg-white" />
       
           <h3 className="text d-flex justify-content-center mt-2">Amer Palace</h3>
          </div>
          <div class="col">
          
              <img src={amerfort7} alt="pav" class="img-responsive1 shadow-lg bg-white" />
           
              <h3 className="text d-flex justify-content-center mt-2">Amer Fort</h3>
          </div>
     
          <div class="col">
         
            <img src={jaigarh} alt="pulao" class="img-responsive1 shadow-lg bg-white" />
          
            <h3 className="text d-flex justify-content-center mt-2">Jaigarh</h3>
          </div>

          <div class="col">
         
            <img src={amerfort4} alt="dalbati" class="img-responsive1 shadow-lg bg-white" />
          
            <h3 className="text d-flex justify-content-center mt-2">Maotha Sarovar</h3>
          </div>
          <div class="col-1"></div>
        </div>
        {/* ======================================================================================== */}

    <div class="container-fluid">
    <h1 class=" text-center">Taste of Rajasthan</h1>
    </div>
    {/* ======================================================================================== */}

  <div class="row mt-4">
      <div class="col-1"></div>
          <div class="col">
       
            <img src={rajasthani_thali} alt="paneer" class="img-responsive2 shadow-lg bg-white"  />
       
           <h3 className="text d-flex justify-img-explore mt-2">Traditional Thali</h3>
          </div>
          <div class="col">
          
              <img src={ghevar} alt="pav" class="img-responsive2 shadow-lg bg-white"  />
           
              <h3 className="text d-flex justify-content-center mt-2">Ghevar</h3>
          </div>
     
          <div class="col">
         
            <img src={mirch} alt="pulao" class="img-responsive2 shadow-lg bg-white" />
          
            <h3 className="text d-flex justify-content-center mt-2">Mirchi Vada</h3>
          </div>

          <div class="col">
         
            <img src={kachori} alt="dalbati" class="img-responsive2 shadow-lg bg-white"  />
          
            <h3 className="text d-flex justify-content-center mt-2">kachori</h3>
          </div>
          <div class="col-1"></div>
        </div>

<br/><br/><br/>
 {/* ========================================================================= */}

 <div class="container-fluid  mt-5">
    <h1 class=" text-center">Attractions of Jaipur</h1>
    </div>
    {/* ======================================================================================== */}

  <div class="row mt-4">
      <div class="col-1"></div>
          <div class="col">
       
            <img src={handicraft3}  class="img-responsive2 shadow-lg bg-white"  />
       
           <h3 className="text d-flex justify-img-explore mt-2">Handicraft</h3>
          </div>
          <div class="col">
          
              <img src={bluepottery2}  class="img-responsive2 shadow-lg bg-white"  />
           
              <h3 className="text d-flex justify-content-center mt-2">Blue Pottery</h3>
          </div>
     
          <div class="col">
         
            <img src={shopping}  class="img-responsive2 shadow-lg bg-white" />
          
            <h3 className="text d-flex justify-content-center mt-2">Jaipury Mojery</h3>
          </div>

          <div class="col">
         
            <img src={shopping2}  class="img-responsive2 shadow-lg bg-white"  />
          
            <h3 className="text d-flex justify-content-center mt-2">Laheriya Saree</h3>
          </div>
          <div class="col-1"></div>
        </div>


{/* ============================ending div================================================================= */}
        </div>
    )
}
export default ThingsToDo;