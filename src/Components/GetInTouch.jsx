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
            <div>
              <span><FaHeadphones/></span>
              <span>Call :</span>
              <br/>
              <span className="content">012-345-6789</span>
            </div>
            <div>
              <span><AiOutlineMail/></span>
              <span>Email :</span>
              <br/>
              <span className="content">youremailid@gmail.com</span>
            </div>
            <div>
              <span><MdOutlineLocationOn/></span>
              <span>Location :</span>
              <br/>
              <span className="content">3179 Raccoon Run Seattle, WA 98109</span>
            </div>
            <div>
              <h3>Follow</h3>
              <span className="icon"><MdFacebook/></span>
              <span className="icon"><FaTwitter/></span>
              <span className="icon"><FaGooglePlusG/></span>
              <span className="icon"><FaLinkedin/></span>
              <span className="icon"><FaWhatsapp/></span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default GetInTouch
