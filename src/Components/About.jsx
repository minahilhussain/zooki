import React from 'react'
import { MdLightbulbOutline, MdOutlineNature } from 'react-icons/md';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import "../css/About.css"
import "../css/index.css"

function About() {
  return (
    <section id="about">
      <div class="wrapper">
        <h2>about us</h2>
        <div className='title-border-simple'>
          <div className='title-border-colored'></div>
        </div>
        <div class="grid1">
          <div>
            <div class="icon">
              <MdLightbulbOutline/>
            </div>
            <a>Creative Design</a>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur at aut odit aut fugit sed quia consequuntur magni.</p>
          </div>
          <div>
            <div class="icon">
              <AiOutlineFundProjectionScreen />
            </div>
            <a>Strategy Solutions</a>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur at aut odit aut fugit sed quia consequuntur magni.
            </p>
          </div>
          <div>
            <div class="icon">
              <MdOutlineNature/>
            </div>
            <a>Dynamic Growth</a>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur at aut odit aut fugit sed quia consequuntur magni.</p>
          </div>
        </div>

        <div class="grid2">
          <div>
          <h5>Performancect Solution For Small Businesses</h5>
          <p>Temporibus autem quibusdam a aut officiis debitis rerum necessitatibus saepeeveniet ut et voluptates repudiandae sint a molestiae recusandae itaque earum rerum hic tenetur a sapiente delectus ut at aut reiciendis voluptatibus maiores alias consequatur perferendis doloribus asperiores rerum necessitat saepeeveniet.</p>

          <ul>
            <li>
              Learn More <a href="http://zooki.react.themesbrand.com/">About Us</a>
            </li>
          </ul>
          </div>
          <div class="right">
            <img src="http://zooki.react.themesbrand.com/static/media/about-img.cb735e1c0599d2b5739c.jpg" alt="img" />

          </div>
        </div>
      </div>
    </section >
  )
}

export default About
