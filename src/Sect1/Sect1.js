import React from 'react'
import "./Sect1.css";
import curve from './landingCurve.svg'
import image from './woman.png'

const Sect1 = () => {
    return (
        <div class="body"> 
            <img src={curve} alt=''/>
            <div className='image'>
            <img src={image} alt=''/>
            <div className='text'>
                <h1>Do you know your <mark style={{color:'blue', backgroundColor:'transparent'}}>CLUTTER</mark> <br/>is someone's <mark style={{color:'#43E673', backgroundColor:'transparent'}}>TREASURE?</mark></h1>
                <p>Buy and sell your preloved and new items at affordable prices.<br/> Make money from decluttering your space. Buy quality for less</p>
            </div>
            </div>
        </div>
    )
}

export default Sect1
