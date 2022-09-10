import React from 'react'
import "../css/Home.css"
function Home() {
  return (
      <section id="home">
      <div className="wrapper">
         <div className="left">
            <h1>Make Your Marketing Real.</h1>
            <p>Ut enim ad minima veniam quis nostrum exercitationem ullam corporis at suscipit laboriosam nisi ut aliquid a commodi consequatur Quis autem.</p>
            <div className="btn">
              <a href="http://zooki.react.themesbrand.com/">Learn More</a>
            </div>
         </div>
         <div className="right">
            <img src="http://zooki.react.themesbrand.com/static/media/home-2-img.1c7314c691a2af56e41b.png" alt="main" />
         </div>
      </div>
    </section>
  )
}

export default Home
