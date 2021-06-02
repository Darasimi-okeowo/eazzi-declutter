import React from 'react'
import Item from "../slideshow/Item";
import Carousel from "react-elastic-carousel";
import car from './car.png'
import ps5 from './ps5.png'
import chair from './chair.png'
import iphone from './iphone.png'
import './slide.css'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    // { width: 1200, itemsToShow: 4 },
  ];

const Slide = () => {
            return (
              <div className=''>
                <div className="car">
                  <Carousel breakPoints={breakPoints}>
                    <Item> <img src={car} alt='' className='think'/> </Item>
                    <Item> <img src={ps5} alt='' className='think'/> </Item>
                    <Item> <img src={chair} alt='' className='think'/> </Item>
                    <Item> <img src={iphone} alt='' className='think'/> </Item>
                  </Carousel>
                </div>
              </div>
            );
}

export default Slide
