import React from 'react'
import "../css/GetyInTouch.css"
import { MdFacebook } from "react-icons/md"
import { FaTwitter, FaGooglePlusG, FaLinkedin, FaWhatsapp } from "react-icons/fa"

// import { MdLightbulbOutline, MdOutlineNature } from 'react-icons/md';

function GetInTouch() {
  return (
    <section id="getInTouch">
      <div className="wrapper">
        <h2>get in touch</h2>
        <div className='title-border-simple'>
          <div className='title-border-colored'></div>
        </div>
        <div className="container">
          <div className="left">
            <input type="text" placeholder="Name"></input>
            <input type="text" placeholder="Email"></input><br/>
            <input type="text" placeholder="Subject"></input><br/>
            <input type="textarea" placeholder="Message"></input><br/>
            <button type="submit" value="Send Message"></button>
          </div>
          <div className="right">
            <p>Call :</p>
            <p>012-345-6789</p>
            <p>Email :</p>
            <p>youremailid@gmail.com</p>
            <p>Location :</p>
            <p>3179 Raccoon Run Seattle, WA 98109</p>
            <h3>Follow</h3>
            <MdFacebook/>
            <FaTwitter/>
            <FaGooglePlusG/>
            <FaLinkedin/>
            <FaWhatsapp/>
          </div>

        </div>
      </div>
    </section>
  )
}

export default GetInTouch
