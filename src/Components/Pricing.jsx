import React from 'react'
import "../css/Pricing.css"

function Pricing() {
  return (
    <section id="pricing">
      <div className="wrapper">
        <h2>our pricing</h2>
        <div className='title-border-simple'>
          <div className='title-border-colored'></div>
        </div>
        <div id="container">
          <div className="price-card">
            <div className="card-top">
              <p>Basic <small>$</small><strong> 19.00</strong></p>
            </div>
            <div className="text">
              <p>Bandwidth: 1GB</p>
              <p>Onlinespace: 100MB</p>
              <p>Support: No</p>
              <p>Domain: 05</p>
              <p>Hidden Fees: No</p>
            </div>
            <div className="buy-btn">
              <a href="http://zooki.react.themesbrand.com/">Buy Now</a>
            </div>
          </div>
          <div className="price-card">
            <div className="card-top">
              <p>Popular<small> $ </small><strong> 39.00</strong></p>
            </div>
            <div className="text">
              <p>Bandwidth: 1.5GB</p>
              <p>Onlinespace: 500MB</p>
              <p>Support: Yes</p>
              <p>Domain: 10</p>
              <p>Hidden Fees: No</p>
            </div>
            <a href="http://zooki.react.themesbrand.com/">Buy Now</a>
          </div>
          <div className="price-card">
            <div className="card-top">
              <p>Advance<small> $ </small><strong> 80.00</strong></p>
            </div>
            <div className="text">
              <p>Bandwidth: 2GB</p>
              <p>Onlinespace: 1MB</p>
              <p>Support: Yes</p>
              <p>Domain: 15</p>
              <p>Hidden Fees: No</p>
            </div>
            <a href="http://zooki.react.themesbrand.com/">Buy Now</a>
          </div>
          <div className="price-card">
            <div className="card-top">
              <p>Premium<small> $ </small><strong> 99.00</strong></p>
            </div>
            <div className="text">
              <p>Bandwidth: 2.5GB</p>
              <p>Onlinespace: 1.5MB</p>
              <p>Support: no</p>
              <p>Domain: 20</p>
              <p>Hidden Fees: No</p>
            </div>
            <a href="http://zooki.react.themesbrand.com/">Buy Now</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
