 import React from "react";

import { CardView } from "react-card-with-image";
import "react-card-with-image/dist/index.css";




const card = () => {
  const items = [
    {
      id: 1,
      header: "Forest Safari ",
      description:
        "Sprawling forest reserve with safari tours of wildlife, including leopards, jackals & civets.",
      image: "/images/1-11.jpg",
    },
    {
      id: 2,
      header: "Forts",
      description:
        "As the home of rich and prosperous Maharajas, Jaipur is well endowed in its share of palaces and architectural marvels. You can see the amalgamation of Indian and Mughal styles of architecture at the Amer Fort",
      image: "/images/ganesh-pol.jpg",
    },
    {
      id: 3,
      header: "Water House Resort ",
      description:
        "Sparkling under the watchful eyes of the Aravalli hills, Water House Resort is a luxurious destination that gracefully combines the glories of the past with contemporary comforts.",
      image: "/images/Resort.jpg",
    },
    {
      id: 4,
      header: "Jaipur City Tour",
      description:
        "Discover the royal aura that surrounds the walled-city, the numerous by-lanes, and the charisma that Jaipur holds. A Jaipur sightseeing tour is incomplete without exploring the mighty Amber Fort (while here, do not forget clicking a few pictures with the elephants).",
      image: "/images/city-tour.jpg",
    },
    {
      id: 5,
      header: "Shopping Tour",
      description:
        "aipur is popular for its royalty and wonderful monuments. Apart from this, it's a must-visit shopping destination. If you’re a shopaholic, then don’t look anywhere else for a shopper’s paradise! The classy beauty and the traditional touch on items will leave you smitten in no time. ",
      image: "/images/sahopping.jpg",
    },
  ];
  return (
    <CardView
      items={items}
      activeColor="#000"
      imageHeight="650px"
      imageWidth="800px"
      background-color="lightgoldenrodyellow"
    />
  );
};

export default card;
