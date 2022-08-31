import React from 'react'
import "../css/Feature.css"
import "../css/index.css"
import { FaLongArrowAltRight, FaReact } from "react-icons/fa"

function Feature() {
  return (
      <section id="feature">
      <div class="container">
        <h2>our Features</h2>
        <div className='title-border-simple'>
          <div className='title-border-colored'></div>
        </div>
        <div class="icon">
          <FaReact/>
        </div>
        <div className="wrapper">
          <div className="left">
            <h3>Marketing Performance</h3>
            <p>Itaque earum rerum hic tenetur sapiente delectut reiciendis voluptatibus perspiciatis unde omnis iste natus error sit maiores alias consequatur perferendisthat doloribus asperiores repellat.</p>
            <p>Nam libero tempore cum soluta nobis eligendi optio cumque nihil impedit minusidquod maxime placeat facere possimus.</p>
            <a  className="more" href="http://zooki.react.themesbrand.com/">LEARN MORE <FaLongArrowAltRight/></a>
          </div>
          <div className="right">
            <img src="http://zooki.react.themesbrand.com/static/media/img-1.1bb1c555fb21d91778ad.png" alt="feature-first"/>
          </div>
        </div>
      </div>
      </section>
  )
}

export default Feature
