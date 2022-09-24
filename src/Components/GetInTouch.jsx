import React from 'react'
import "../css/GetyInTouch.css"
import { MdFacebook, MdOutlineLocationOn } from "react-icons/md"
import { AiOutlineMail } from "react-icons/ai"
import { FaTwitter, FaGooglePlusG, FaLinkedin, FaWhatsapp, FaHeadphones } from "react-icons/fa"

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
            <p><FaHeadphones /><span>Call :</span></p>
            <p><span>012-345-6789</span></p>
            <p><AiOutlineMail/><span>Email :</span></p>
            <p><span>youremailid@gmail.com</span></p>
            <p><MdOutlineLocationOn/><span>Location :</span></p>
            <p><span>3179 Raccoon Run Seattle, WA 98109</span></p>
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
