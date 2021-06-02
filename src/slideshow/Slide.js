import React from 'react'
import Item from "./Item";
import Carousel from "react-elastic-carousel";
import car from './car.jpeg'
import ps5 from './ps5.jpeg'
import chair from './chair.jpeg'
import iphone from './iphone.jpeg'
import camera from './camera.jpeg'
import fridge from './fridge.jpeg'
import pad from './pad.jpeg'
import shoe from './shoe.jpeg'
import laptop from './laptop.jpeg'
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
                    <Item> <img src={camera} alt='' className='think'/> </Item>
                    <Item> <img src={fridge} alt='' className='think'/> </Item>
                    <Item> <img src={laptop} alt='' className='think'/> </Item>
                    <Item> <img src={pad} alt='' className='think'/> </Item>
                    <Item> <img src={shoe} alt='' className='think'/> </Item>
                  </Carousel>
                </div>
              </div>
            );
}

export default Slide
