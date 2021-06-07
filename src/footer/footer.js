import React from 'react'
import './footer.css'
import { FiFacebook } from "react-icons/fi";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import Grid from '@material-ui/core/Grid'


const footer = () => {
    return (
        <div className='footer'>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
            <div className='about'>
                <h6>ABOUT US</h6>
                <h6 className='eazi'>EAZZI<mark style={{color:'#27AADE', backgroundColor:'transparent'}}>CLUTTER</mark></h6>
                <p>EazziDeclutter was founded in 2019. It is <br/>your one stop hub for all your quality<br/> and affordable deals on furniture,<br/> electronics, home and office<br/> equipment, household items, computer...</p>
            </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <div className='tags'>
                <li>POPULAR TAGS</li>
                {/* <Grid item xs={12} sm={6} md={3}> */}
                <div className='grid-container'>
                    <buttons className='grid-items'>Furniture</buttons>
                    <buttons className='grid-items'>Electric cooker</buttons>
                    <buttons className='grid-items'>Electronic</buttons>
                    <buttons className='grid-items'>Air conditioner</buttons>
                    <buttons className='grid-items'>Home and Office</buttons>
                    <buttons className='grid-items'>Home</buttons>
                    <buttons className='grid-items'>Generator</buttons>
                    <buttons className='grid-items'>Kitchen</buttons>
                    <buttons className='grid-items'>Offices</buttons>
                    <buttons className='grid-items'>Furniture</buttons>
                    <buttons className='grid-items'>Electric cooker</buttons>
                    <buttons className='grid-items'>Electronic</buttons>
                    <buttons className='grid-items'>Air conditioner</buttons>
                    <buttons className='grid-items'>Home and Office</buttons>
                    <buttons className='grid-items'>Home</buttons>
                </div>
                {/* </Grid> */}
            </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <div className='socials'>
                <li>Follow Us</li>
                <li><FiFacebook/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Facebook</li>
                <li><AiOutlineTwitter/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Twitter</li>
                <li><FaLinkedinIn/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Linkedln</li>
                <li><AiOutlineInstagram/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Instagram</li>
            </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <div className='contact'>
                <li>Address: <h4>64, Adeniyi Jones Avenue, Ikeja, Lagos State.</h4></li>
                <li>Email <h4>helpdesk@eazzideclutter.com</h4></li>
                <li>PHONE NUMBER <h4>234-803-276-1011</h4></li>
            </div>
            </Grid>
            </Grid>
        </div>
    )
}

export default footer
