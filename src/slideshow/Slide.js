import React from 'react'
import Item from "../slideshow/Item";
import Carousel from "react-elastic-carousel";
import car from './car.png'
import ps5 from './ps5.png'
import chair from './chair.png'
import iphone from './iphone.png'
// import './style.css';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

const Slide = () => {
            return (
              <>
                <h1 style={{ textAlign: "center" }}>Example to setup your carousel in react</h1>
                <div className="App">
                  <Carousel breakPoints={breakPoints}>
                    <Item> <img src={car} alt=''/> </Item>
                    <Item> <img src={ps5} alt=''/> </Item>
                    <Item> <img src={chair} alt=''/> </Item>
                    <Item> <img src={iphone} alt=''/> </Item>
                  </Carousel>
                </div>
              </>
            );
}

export default Slide
