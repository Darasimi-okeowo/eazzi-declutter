import React from "react";
import "./top.css";
import Slide from './slideshow/Slide'
import { CgProfile } from "react-icons/cg";
import landingCurve from './landingCurve.svg'
import landingImage from './landingImage.png'

const top = () => {
  return (
    <div class="main">
      <div class="nav">
        <div class="sides">
          <div class="lhs">
            <li class="logo"></li>
            <li>
              <select class="cars" id="cars">
                <option value="volvo">Categories</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </li>
          </div>
          <div class="rhs">
            <li>About</li>
            <li>Contact Us</li>
            <li>Favourites</li>
            <li>Sign In</li>
            <li>Dont have an account yet?Sign Up</li>
            <li>
              <CgProfile />
            </li>
          </div>
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="🔍         type your search here"
          ></input>
          <select class="cars" id="cars">
            <option value="volvo">Categories</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
          <button>Search</button>
        </div>
      </div>


      <div class="body"> 
        <img src={landingCurve} alt=''/>
        <div class='image'>
          <img src={landingImage} alt=''/>
          <div className='text'>
            <h1>Do you know your <mark style={{color:'blue', backgroundColor:'transparent'}}>CLUTTER</mark> <br/>is someone's <mark style={{color:'#43E673', backgroundColor:'transparent'}}>TREASURE?</mark></h1>
            <p>Buy and sell your preloved and new items at affordable prices.<br/> Make money from decluttering your space. Buy quality for less</p>
          </div>
        </div>
      </div>

      <Slide/>
    </div>
  );
};

export default top;
