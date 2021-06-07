import React from "react";
import { CgProfile } from "react-icons/cg";
import logo from "./logo.jpeg";
import "./top.css";

const top = () => {
  return (
    <div className="main">
      <div className="nav">
        <div className="lhs">
          <p className="logo">
            <img src={logo} alt="" />
          </p>
          <p>
            <select className="cars" id="cars">
              <option value="volvo">Categories</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </p>
        </div>
        <div className="rhs">
          <p>About</p>
          <p>Contact Us</p>
          <p>Favourites</p>
          <p>Sign In</p>
          <p>Dont have an account yet?Sign Up</p>
          <p>
            <CgProfile />
          </p>
        </div>
      </div>
      <div className="input">
        <input
          type="text"
          placeholder="🔍         type your search here"
        ></input>
        <select className="car" id="cars">
          <option value="volvo">Categories</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <button>Search</button>
      </div>
    </div>
  );
};

export default top;
