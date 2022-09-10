import React from 'react'
import "../css/Services.css"
import "../css/index.css"
import { HiDatabase } from "react-icons/hi"
import { MdPalette } from "react-icons/md"
import { BsGraphUp } from "react-icons/bs"
import { FaYinYang, FaLongArrowAltRight } from "react-icons/fa"
import { BiCommand } from "react-icons/bi"
import { TbHexagons } from "react-icons/tb"

function Services() {
  return (
    <section id="service">
      <div className="wrapper">
        <h2>our services</h2>
        <div className='title-border-simple'>
          <div className='title-border-colored'></div>
        </div>
        <div className="grid1">
          <div className="card">
            <div className="icon">
              <HiDatabase/>
            </div>
            <a>Awesome Support</a>
            <p>Sed ut perspiciatis unde sit omnise iste natus voluptatem site accusantium doloremque laudantium combined with a handful totam.</p>
            <a className="more" href="http://zooki.react.themesbrand.com/">LEARN MORE <FaLongArrowAltRight/></a>
          </div>
          <div className="card">
            <div className="icon">
              <MdPalette/>
            </div>
            <a>Unlimited Colors</a>
            <p>Sed ut perspiciatis unde sit omnise iste natus voluptatem site accusantium doloremque laudantium combined with a handful totam.</p>
            <a  className="more" href="http://zooki.react.themesbrand.com/">LEARN MORE <FaLongArrowAltRight/></a>
          </div>
          <div className="card">
            <div className="icon">
              <BsGraphUp />
            </div>
            <a>Strategy Solutions</a>
            <p>Sed ut perspiciatis unde sit omnise iste natus voluptatem site accusantium doloremque laudantium combined with a handful totam.</p>
            <a  className="more" href="http://zooki.react.themesbrand.com/">LEARN MORE <FaLongArrowAltRight/></a>
          </div><div className="card">
            <div className="icon">
              <FaYinYang />
            </div>
            <a>Digital Design</a>
            <p>Sed ut perspiciatis unde sit omnise iste natus voluptatem site accusantium doloremque laudantium combined with a handful totam.</p>
            <a  className="more" href="http://zooki.react.themesbrand.com/">LEARN MORE <FaLongArrowAltRight/></a>
          </div>
          <div className="card">
            <div className="icon">
              <BiCommand/>
            </div>
            <a>Easy to customize</a>
            <p>Sed ut perspiciatis unde sit omnise iste natus voluptatem site accusantium doloremque laudantium combined with a handful totam.</p>
            <a  className="more" href="http://zooki.react.themesbrand.com/">LEARN MORE <FaLongArrowAltRight/></a>
          </div>
          <div className="card">
            <div className="icon">
              <TbHexagons/>
            </div>
            <a>Truly Multipurpose</a>
            <p>Sed ut perspiciatis unde sit omnise iste natus voluptatem site accusantium doloremque laudantium combined with a handful totam.</p>
            <a  className="more" href="http://zooki.react.themesbrand.com/">LEARN MORE <FaLongArrowAltRight/></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services