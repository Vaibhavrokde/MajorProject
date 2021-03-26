import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div class="footer">
    <div class="container">
        <div class="row">

            <div class="col-md-4 col-xs-12">
                <div class="first">
                    <h4>Tourist Escort</h4>
                    <ul>
                        <li>Discover a city with guide</li>
                        <li>Creating unique experiences</li>
                        <li>We work with exceptional guides  </li>
                        <a href="https://github.com" target="_blank"> <i class="fab fa-github fa-2x margin"></i></a>
                        <a href="https://twitter.com" target="_blank"> <i class="fab fa-twitter fa-2x margin"></i></a>
                    <a href="https://www.linkedin.com" target="_blank"> <i class="fab fa-linkedin fa-2x margin"></i></a>
                    </ul>
                  
                   
                  
                </div>
            </div>

            <div class="col-md-4 col-xs-12">
                <div class="second">
                    <h4> Navigate</h4>
                    <ul>
                        <li><a href="Home">Home</a></li>
                        <li><a href="Hotel">Hotel</a></li>
                        <li><a href="Guide"> Guide</a></li>
                       
                        <li><a href="About ">About</a></li>
                        <li><a href="Contact">Contact</a></li>
                    </ul>
                </div>
            </div>

            <div class="col-md-4 col-xs-12">
                <div class="third">
                    <h4> Contact</h4>
                    <ul>
                        <li>Tourist Escort Office</li>
                        <li><i class="fas fa-map-marker-alt"></i> jaipur,rajstan </li>
                        <li></li>


                      <li><i class="far fa-envelope"></i> touristescort@gmail.com</li>
                        <li><i class="far fa-envelope"></i>  touristescort@yahoo.com</li>


                     
                    </ul>
                </div>
            </div>
           

        </div>
        <hr />
            <div className="copy">
            
              <p>
                Copyright &copy; 2021 All rights reserved | Developed by India{" "}
              </p>
             
            </div>
    </div>
   
    
     </div> 
  );
}

export default Footer;