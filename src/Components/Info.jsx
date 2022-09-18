import React from 'react'
import "../css/Info.css"

function Info() {
  return (
    <section id="info">
      <div className="container">
        <div>
          <p>about us</p>
          <ul>
            <li>Sed ut perspiciatis unde omnis iste natus error sit</li>
            <li>voluptatemthat is doloremque totam that</li>
            <li>laudantiume</li>
          </ul>
        </div>
        <div>
          <p>COMPANY</p>
          <ul>
            <li><a href="/">Monitoring Grader</a></li>
            <li><a>Job Opening</a></li>
            <li><a>Customers</a></li>
            <li><a>Privacy</a></li>
          </ul>
        </div>
        <div>
          <p>support</p>
          <ul>
            <li><a href="/">Get Started</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Knowledge Base</a></li>
          </ul>
        </div>
        <div>
          <p>LEGAL</p>
          <ul>
            <li><a href="/">Terms & Conditions</a></li>
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">Customers</a></li>
            <li><a href="/">Pricing</a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Info
