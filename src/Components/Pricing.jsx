import React from 'react'
import "../css/Pricing.css"

function Pricing() {
  return (
    <section id="service">
      <div className="wrapper">
        <h2>our pricing</h2>
        <div className='title-border-simple'>
          <div className='title-border-colored'></div>
        </div>
        <div id="container" style={{backgroundColor: "red"}}>
          <div className="price-card">
            <h4>Basic<strong>$ 19.00</strong></h4>
            <p>Bandwidth: 1GB</p>
            <p>Onlinespace: 100MB</p>
            <p>Support: No</p>
            <p>Domain: 05</p>
            <p>Hidden Fees: No</p>
          </div>

          <div className="price-card">
            <h4>Popular<strong>$ 19.00</strong></h4>
            <p>Bandwidth: 1GB</p>
            <p>Onlinespace: 100MB</p>
            <p>Support: No</p>
            <p>Domain: 05</p>
            <p>Hidden Fees: No</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
