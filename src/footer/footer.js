import React from "react";
import "./footer.css";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
// import Grid from '@material-ui/core/Grid'

const footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="about">
          <h2>ABOUT US</h2>
          <h6 className="eazi">
            EAZZI
            <mark style={{ color: "#27AADE", backgroundColor: "transparent" }}>
              CLUTTER
            </mark>
          </h6>
          <p>
            EazziDeclutter was founded in 2019. It is your one stop hub for all your quality and affordable deals on furniture, electronics, home and office equipment, household items, computer...
          </p>
        </div>

        <div className="tags">
          <h2>POPULAR TAGS</h2>
          <div className="grid-container">
            <buttons className="grid-items">Furniture</buttons>
            <buttons className="grid-items">Electric cooker</buttons>
            <buttons className="grid-items">Electronic</buttons>
            <buttons className="grid-items">Air conditioner</buttons>
            <buttons className="grid-items">Home and Office</buttons>
            <buttons className="grid-items">Home</buttons>
            <buttons className="grid-items">Generator</buttons>
            <buttons className="grid-items">Kitchen</buttons>
            <buttons className="grid-items">Offices</buttons>
            <buttons className="grid-items">Furniture</buttons>
            <buttons className="grid-items">Electric cooker</buttons>
            <buttons className="grid-items">Electronic</buttons>
            <buttons className="grid-items">Air conditioner</buttons>
            <buttons className="grid-items">Home and Office</buttons>
            <buttons className="grid-items">Home</buttons>
          </div>
        </div>

        <div className="socials">
          <h2>Follow Us</h2>
          <h4>
            <FiFacebook />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Facebook
          </h4>
          <h4>
            <AiOutlineTwitter />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Twitter
          </h4>
          <h4>
            <FaLinkedinIn />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Linkedln
          </h4>
          <h4>
            <AiOutlineInstagram />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Instagram
          </h4>
        </div>

        <div className="contact">
          <h2>
            Address: <h4>64, Adeniyi Jones Avenue, Ikeja, Lagos State.</h4>
          </h2>
          <h2>
            Email <h4>helpdesk@eazzideclutter.com</h4>
          </h2>
          <h2>
            PHONE NUMBER <h4>234-803-276-1011</h4>
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default footer;
