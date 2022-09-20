import React from 'react'
import "../css/GetyInTouch.css"

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
            <input type="text" placeholder="Email"></input>
            <input type="text" placeholder="Subject"></input>
            <input type="textarea" placeholder="Message"></input>
            <button type="submit" value="Send Message"></button>

          </div>
          <div className="right"></div>

        </div>
      </div>
    </section>
  )
}

export default GetInTouch
