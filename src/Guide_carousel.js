import React from "react";

import { CardView } from "react-card-with-image";
import "react-card-with-image/dist/index.css";
//import "./card.css";
import Carousel from "react-bootstrap/Carousel";
import dummy from "./images/dummy.png";
import amerfort from "./images/amerfort.jpg";
import hawamahal from "./images/hawamahal.jfif";
import jalmahal1 from "./images/jalmahal1.jfif";
import nahargarh from "./images/nahargarh.jfif";
import citypalace1 from "./images/citypalace1.jpg";
import handicraft from "./images/handicraft.jpg";
import handicraft2 from "./images/handicraft2.jpg";
import handicraft3 from "./images/handicraft3.jpg";
import bluepottery1 from "./images/bluepottery1.jfif";
import bluepottery2 from "./images/bluepottery2.jfif";
import bluepottery3 from "./images/bluepottery3.jpg";
import shopping from "./images/shopping.jpg";
import shopping1 from "./images/shopping1.jpg";
import shopping2 from "./images/shopping2.jpg";

const Guide_carousel = () => {
  return (
    <div class="col-10">
    <h2 class="d-flex align-items-center justify-content-center">
      Top attractions of Jaipur
    </h2>
    <div>
      <Carousel>
        <Carousel.Item interval={5000}>
          <img
            src={amerfort}
            alt="amerfort"
            class="img-responsive "
          />
          <Carousel.Caption>
            <h3>Amer Fort</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            src={hawamahal}
            alt="hawamahal"
            class="img-responsive"
          />
          <Carousel.Caption>
            <h3>Hawa Mahal</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src={jalmahal1}
            alt="jalmahal1"
            class="img-responsive"
          />
          <Carousel.Caption>
            <h3>Jal Mahal</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src={nahargarh}
            alt="nahargarh"
            class="img-responsive"
          />
          <Carousel.Caption>
            <h3>Nahargarh Fort</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src={citypalace1}
            alt="citypalace1"
            class="img-responsive"
          />
          <Carousel.Caption>
            <h3>City Palace</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>

    <div class="mt-3">
      <Carousel>
        <Carousel.Item interval={5000}>
          <img
            src={handicraft}
            alt="handicraft"
            class="img-responsive "
          />
          <Carousel.Caption>
            <h3>Handicraft</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            src={handicraft2}
            alt="handicraft2"
            class="img-responsive"
          />
          <Carousel.Caption>
            <h3>Handicraft</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src={handicraft3}
            alt="handicraft3"
            class="img-responsive"
          />
          <Carousel.Caption>
            <h3>Handicraft</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    <div class="mt-3">
      <Carousel>
        <Carousel.Item interval={5000}>
          <img
            src={bluepottery1}
            alt="bluepottery1"
            class="img-responsive "
          />
          <Carousel.Caption>
            <h3>Blue Pottery</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            src={bluepottery2}
            alt="bluepottery2"
            class="img-responsive"
          />
          <Carousel.Caption>
            <h3>Blue Pottery</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src={bluepottery3}
            alt="bluepottery3"
            class="img-responsive"
          />
          <Carousel.Caption>
            <h3>Blue Pottery</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    <div class="mt-3">
      <Carousel>
        <Carousel.Item interval={5000}>
          <img
            src={shopping}
            alt="shopping}"
            class="img-responsive "
          />
          <Carousel.Caption>
            <h3>Mojery</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            src={shopping1}
            alt="shopping1"
            class="img-responsive"
          />
          <Carousel.Caption>
            <h3>Jaipury Dupatta</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src={shopping2}
            alt="shopping2"
            class="img-responsive"
          />
          <Carousel.Caption>
            <h3>Laheriya print sarees</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  </div>
  );
};

export default Guide_carousel;
