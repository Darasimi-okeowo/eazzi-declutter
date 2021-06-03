import React from 'react'
import './footer.css'
import { FiFacebook } from "react-icons/fi";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

const footer = () => {
    return (
        <div className='footer'>
            <div className='about'>
                <li>ABOUT US</li>
                <li className='eazi'>EAZZI<mark style={{color:'#27AADE', backgroundColor:'transparent'}}>CLUTTER</mark></li>
                <li>EazziDeclutter was founded in 2019. It is <br/>your one stop hub for all your quality<br/> and affordable deals on furniture,<br/> electronics, home and office<br/> equipment, household items, computer...</li>
            </div>

            <div className='tags'>
                <li>POPULAR TAGS</li>
                <li className='grid-container'>
                    <p className='grid-items'>Furniture</p>
                    <p className='grid-items'>Electric cooker</p>
                    <p className='grid-items'>Electronic</p>
                    <p className='grid-items'>Air conditioner</p>
                    <p className='grid-items'>Home and Office</p>
                    <p className='grid-items'>Home</p>
                    <p className='grid-items'>Generator</p>
                    <p className='grid-items'>Kitchen</p>
                    <p className='grid-items'>Offices</p>
                    <p className='grid-items'>Furniture</p>
                    <p className='grid-items'>Electric cooker</p>
                    <p className='grid-items'>Electronic</p>
                    <p className='grid-items'>Air conditioner</p>
                    <p className='grid-items'>Home and Office</p>
                    <p className='grid-items'>Home</p>
                </li>
            </div>

            <div className='socials'>
                <li>Follow Us</li>
                <li><FiFacebook/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Facebook</li>
                <li><AiOutlineTwitter/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Twitter</li>
                <li><FaLinkedinIn/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Linkedln</li>
                <li><AiOutlineInstagram/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Instagram</li>
            </div>

            <div className='contact'>
                <li>Address: <h4>64, Adeniyi Jones Avenue, Ikeja, Lagos State.</h4></li>
                <li>Email <h4>helpdesk@eazzideclutter.com</h4></li>
                <li>PHONE NUMBER <h4>234-803-276-1011</h4></li>
            </div>
        </div>
    )
}

export default footer
