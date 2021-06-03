import React from "react";
import "./top.css";
import { CgProfile } from "react-icons/cg";


const top = () => {
  return (
    <div className="main">
      <div className="nav">
        <div className="sides">
          <div className="lhs">
            <li className="logo"></li>
            <li>
              <select className="cars" id="cars">
                <option value="volvo">Categories</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </li>
          </div>
          <div className="rhs">
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
          <select className="cars" id="cars">
            <option value="volvo">Categories</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default top;
