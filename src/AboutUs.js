import './App.css';
// import {NavLink} from "react-router-dom";
import vaibhav1 from './images/vaibhav1.jfif';
import pranav from './images/pranav.jpg';
import shubham from './images/shubham.JPG';
import hawamahal2 from './images/hawamahal2.jfif';
import suniti from './images/suniti.jfif';
import rushikesh1 from './images/rushikesh1.jfif';
import suraj from './images/suraj.jfif';

function App() {
  return (
    <div className="App">

      <section className="about" id="about">
        <div className="container">

          <div className="row">
            <div className="col">
              <h2 className="titleText"><span style={{ color: '#ff0157', fontSize: '1.5em' }}>A</span>bout Us</h2>
              <p style={{ textAlign: 'justify' }}> Jaipur holds the distinction of being the first planned city of India. 
              Renowned globally for its coloured gems, the capital city of Rajasthan combines the allure of its ancient history with all the advantages of a metropolis.
               The bustling modern city is one of the three corners of the golden triangle that includes Delhi, Agra and Jaipur.

The story goes that in 1876, the Prince of Wales visited India on a tour. 
Since the colour pink was symbolic of hospitality, Maharaja Ram Singh of Jaipur painted the entire city pink.
 The pink that colours the city makes for a marvellous spectacle to behold. 
 Jaipur rises up majestically against the backdrop of the forts Nahargarh, Jaigarh and Garh Ganesh Temple.

Jaipur traces back its origins to 1727 when it was established by Jai Singh II, the Raja of Amber. 
He shifted his capital from Amber to the new city because of the rapidly-growing population and an increasing water scarcity. 
Noted architect Vidyadhar Bhattacharya used the established principles of Vastu Shastra to build the city. <br /><br />
              
              
            </p>
            </div>
            <div className="col">
              <div className="img1" >
              <img src={hawamahal2} alt="hawamahal2" class="img-thumbnail"  style={{ padding: '5%', marginTop: '20%' }}/>
                {/* <img src="/images/fort.jpg" className="img-thumbnail" style={{ padding: '5%', marginTop: '20%' }} /> */}
              </div>
            </div>





            <div class="w-100"></div>

            <div className="col" style={{ marginTop: '10%' }}>
              <h2 className="titleText"><span style={{ color: '#ff0157', fontSize: '1.5em' }}>w</span>hy choose us</h2>
              <p style={{ textAlign: 'justify' }}>Tourist Escort provides one of best travel experiences in Rajasthan. 
              We offer affordable prices and well-planned tours featuring friendly and experienced guides. 
              We???re committed to providing travelers with an amazing experience every time.
               And we do it by following these core values. <br /><br />
                
            </p>
            </div><br />
            <div className="col" style={{ marginTop: '10%' }}>
              <h2 className="titleText"><span style={{ color: '#ff0157', fontSize: '1.5em' }}>w</span>ho we are</h2>
              <p style={{ textAlign: 'justify' }}>Tourism Escort is a crown entity governed by Board members who are appointed by the Minister of Tourism. 
              Tourism Escort leadership team is responsible for the organisation's business operations.  <br /><br />
  
            </p>
            </div>

            <div class="w-100"></div>

            <div className="col" style={{ marginTop: '10%' }}>
              <h2 className="titleText"><span style={{ color: '#ff0157', fontSize: '1.5em' }}>Our Team</span></h2><br /><br />
            </div>
          </div>

          <div className="row">

            <div className="col-md-4" >
              <div className="card text-center"  >
              <img src={shubham} alt="shubham" className="card-img-top"  style={{ padding: '10%', height: '350px' }}/>
                {/* <img className="card-img-top" src="/images/shubham.jpg" style={{ padding: '10%', height: '350px' }} /> */}
                <div className="card-body">
                  <h4>Shubham Itkare</h4>
                  <p>I have experience over 2 year in technology and haven't worked with
                  better team than TOURIST ESCORT.
                          </p>
                </div>
              </div>
            </div>

            <div className="col-md-4"  >
              <div className="card text-center">
              <img src={vaibhav1} alt="vaibhav1" className="card-img-top"  style={{ padding: '10%', height: '350px' }}/>
                {/* <img className="card-img-top" src="/images/vaibhav.jpg" style={{ padding: '10%', height: '350px' }} /> */}
                <div className="card-body">
                  <h4>Vaibhav Rokde</h4>
                  <p>I have experience over 2 year in technology and haven't worked with
                  better team than TOURIST ESCORT.
                          </p>
                </div>
              </div>
            </div>

            <div className="col-md-4" >
              <div className="card text-center"  >
              <img src={pranav} alt="pranav" className="card-img-top"  style={{ padding: '10%', height: '350px' }}/>
                {/* <img className="card-img-top" src="/images/pranav.jpg" style={{ padding: '10%', height: '350px' }} /> */}
                <div className="card-body">
                  <h4>Pranav Jadhav</h4>
                  <p>I have experience over 2 year in technology and haven't worked with
                  better team than TOURIST ESCORT.
                          </p>
                </div>
              </div>
            </div>
          </div>




          <br /><br />

          <div className="row">


            <div className="col-md-4" >
              <div className="card text-center"  >
              <img src={suniti} alt="suniti" className="card-img-top"  style={{ padding: '10%', height: '350px' }}/>
                {/* <img className="card-img-top" src="/images/shubham.jpg" style={{ padding: '10%', height: '350px' }} /> */}
                <div className="card-body">
                  <h4>Suniti Jha</h4>
                  <p>I have experience over 2 year in technology and haven't worked with
                  better team than TOURIST ESCORT.
                </p>
                </div>
              </div>
            </div>

            <div className="col-md-4"  >
              <div className="card text-center">
              <img src={rushikesh1} alt="rushikesh1" className="card-img-top"  style={{ padding: '10%', height: '350px' }}/>
                {/* <img className="card-img-top" src="/images/shubham.jpg" style={{ padding: '10%', height: '350px' }} /> */}
                <div className="card-body">
                  <h4>Rushikesh Joshi</h4>
                  <p>I have experience over 2 year in technology and haven't worked with
                  better team than TOURIST ESCORT.
                </p>
                </div>
              </div>
            </div>

            <div className="col-md-4" >
              <div className="card text-center"  >
              <img src={suraj} alt="suraj" className="card-img-top"  style={{ padding: '10%', height: '350px' }}/>
                {/* <img className="card-img-top" src="/images/shubham.jpg" style={{ padding: '10%', height: '350px' }} /> */}
                <div className="card-body">
                  <h4>Suraj Tavhare</h4>
                  <p>I have experience over 2 year in technology and haven't worked with
                  better team than TOURIST ESCORT.
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>


  );
}

export default App;