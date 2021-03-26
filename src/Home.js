// import React from "react";
// import Carousel from "react-bootstrap/Carousel";
// import "./Home.css";
// import a11 from './images/11.jpg';
// import a12 from './images/12.jpg';
// import a13 from './images/13.jpg';

// function Home() {
//   return (
//     <>
//       <br />
//       <div>
//         <Carousel>
//           <Carousel.Item interval={1000}>
//           <img src={a11} alt="11" class="img-responsive d-block w-100 h-50" />
             
//           </Carousel.Item>
//           <Carousel.Item interval={500}>
//           <img src={a12} alt="a13" class="img-responsive d-block w-100 h-50" />
           
//           </Carousel.Item>
        
//           <Carousel.Item>
//           <img src={a13} alt="a13" class="img-responsive d-block w-100 h-50" />
         
//           </Carousel.Item>
//         </Carousel>
//       </div>
//     </>
//   );
// }

// export default Home;

// ===================================================================================
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Home.css";
import a11 from './images/11.jpg';
import a12 from './images/12.jpg';
import a13 from './images/13.jpg';

function Home() {
  return (
   
      <>
      <br />
      <div class="mt-4">
        <Carousel>
          <Carousel.Item interval={1000}>
          <img src={a11} alt="11" class="img-responsive d-block w-100 h-50" />
             
          </Carousel.Item>
          <Carousel.Item interval={500}>
          <img src={a12} alt="a13" class="img-responsive d-block w-100 h-50" />
           
          </Carousel.Item>
        
          <Carousel.Item>
          <img src={a13} alt="a13" class="img-responsive d-block w-100 h-50" />
         
          </Carousel.Item>
        </Carousel>
      </div>
    </>

    
  );
}

export default Home;
