import React from 'react'
import "../css/Feature.css"
import "../css/index.css"
import { FaLongArrowAltRight, FaReact } from "react-icons/fa"
import { BsArrowsMove } from "react-icons/bs"
import { AiOutlineMonitor } from "react-icons/ai"

function Feature() {
  return (
      <section id="feature">
      <div class="container">
        <h2>our Features</h2>
        <div className='title-border-simple'>
          <div className='title-border-colored'></div>
        </div>
        <div className="wrapper">
          <div className="text">
            <span className="head-icon">
              <FaReact/>
            </span>
            <h3>Marketing Performance</h3>
            <p>Itaque earum rerum hic tenetur sapiente delectut reiciendis voluptatibus perspiciatis unde omnis iste natus error sit maiores alias consequatur perferendisthat doloribus asperiores repellat.</p>
            <p>Nam libero tempore cum soluta nobis eligendi optio cumque nihil impedit minusidquod maxime placeat facere possimus.</p>
            <a  className="more" href="http://zooki.react.themesbrand.com/">LEARN MORE <FaLongArrowAltRight/></a>
          </div>
          <div className="image">
            <img src="http://zooki.react.themesbrand.com/static/media/img-1.1bb1c555fb21d91778ad.png" alt="feature-first"/>
          </div>
        </div>
        <div className="wrapper">
          <div className="image">
            <img src="http://zooki.react.themesbrand.com/static/media/img-2.73bbfc3f31770042da4d.png" alt="feature-first"/>
          </div>
          <div className="text">
            <span className="head-icon">
              <BsArrowsMove/>
            </span>
            <h3>Strategy Solutions</h3>
            <p>Itaque earum rerum hic tenetur sapiente delectut reiciendis voluptatibus perspiciatis unde omnis iste natus error sit maiores alias consequatur perferendisthat doloribus asperiores repellat.</p>
            <p>Nam libero tempore cum soluta nobis eligendi optio cumque nihil impedit minusidquod maxime placeat facere possimus.</p>
            <a  className="more" href="http://zooki.react.themesbrand.com/">LEARN MORE <FaLongArrowAltRight/></a>
          </div>
        </div>
        <div className="wrapper">
          <div className="text">
            <span className="head-icon">
              <AiOutlineMonitor/>
            </span>
            <h3>Marketing business</h3>
            <p>Itaque earum rerum hic tenetur sapiente delectut reiciendis voluptatibus perspiciatis unde omnis iste natus error sit maiores alias consequatur perferendisthat doloribus asperiores repellat.</p>
            <p>Nam libero tempore cum soluta nobis eligendi optio cumque nihil impedit minusidquod maxime placeat facere possimus.</p>
            <a  className="more" href="http://zooki.react.themesbrand.com/">LEARN MORE <FaLongArrowAltRight/></a>
          </div>
          <div className="image">
            <img src="http://zooki.react.themesbrand.com/static/media/img-3.1dbfd73268f019064e9f.png" alt="feature-first"/>
          </div>
        </div>
      </div>
      
      </section>
  )
}

export default Feature
