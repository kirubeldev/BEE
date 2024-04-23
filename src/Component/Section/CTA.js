import React from 'react'
import bgi from "./img/bgi.jpg"
export default function CTA() {
  return (
    <div ><section
    className="cta-one"
    style={{ backgroundImage: `url(${bgi})`  , backgroundSize: "cover" , backgroundPosition:"center center"}}
  >
<div
  className="cta-one_pattern"
  style={{ 
    backgroundImage: "url(./assets/images/background/pattern-4.png)",
   
  }}
  data-parallax='{"x" : 40}'
></div>

    <div className="auto-container">
      <div className="sec-title light text-right">
        <div className="sec-title_title tx-split-text split-in-right">
        
        </div>
        <h2>
        THE FUTURE OF BEE
        </h2>
      </div>
      {/* Button Box */}
      <div className="cta-one_button-box">
        <a className="btn-style-one theme-btn" href="about.html">
          <div className="btn-wrap">
            <span className="text-one">Let’s started</span>
            <span className="text-two">Let’s started</span>
          </div>
        </a>
      </div>
      <a
        href="https://www.youtube.com/watch?v=kxPCFljwJws"
        className="lightbox-video cta-one_play"
      >
        <span className="fa-solid fa-play fa-fw">
          <i className="ripple" />
        </span>
      </a>
    </div>
  </section>
  </div>
  )
}
