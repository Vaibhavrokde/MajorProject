import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./Home1.css";
import Hotel1 from './images/Hotel1.jpg';
import Tree from './images/Tree.jpg';

export default function home1() {
  return (
    <div>
      <hr />
      <div class="container">
        <div class="row">
          <div class="column-66">
            <div>
              <h1>Best Hotels in Jaipur</h1> 
              <p>
                When you are in Jaipur, make sure that you are making your
                bookings in one of the heritage hotels. You will totally love
                the experience you will get in these kinds of heritage hotels.
              </p>
              <Button variant="primary">Explore More</Button>{" "}
            </div>
          </div>
          <div class="column-33">
          <img src={Hotel1} alt="Hotel1" class="img1" />
            {/* <img className="img1" src="./img/Hotel1.jpg"></img> */}
          </div>
        </div>
      </div>
      <hr />
      <div class="container">
        <div class="row">
          <div class="column-33">
          <img src={Tree} alt="Tree" class="img1" />
            {/* <img className="img1" src="./img/Tree.jpg"></img> */}
          </div>
          <div class="column-66">
            <h1>Glamping at Tree Resorts</h1>
            <p>
              The tree resorts available in Jaipur are way too cool to be
              missed. These are designed so beautifully that they can tempt and
              attract any of the persons. And above all, they offer its visitors
              the option of experiencing Glamping.
            </p>
            <Button variant="primary">Explore More</Button>{" "}
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
