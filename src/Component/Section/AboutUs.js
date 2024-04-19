import React from 'react'
import img1 from "./img/img1.jpg"
export default function AboutUs() {
  return (
    <div><section className="about-one">
    <div className="auto-container">
      <div className="row clearfix">
        {/* Image Column */}
        <div className="about-one_image-column col-lg-6 col-md-12 col-sm-12">
          <div className="about-one_image-outer">
            <div
              className="about-one_pattern"
              style={{ backgroundImage: "url(./assets/images/background/pattern-1.png)" }}
            />
            <div
              className="about-one_image wow fadeInLeft"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <img src={img1} alt="" style={{height:"600px" , width:"500px"}} />
              <div className="about-one_color-layer" />
              <div className="about-one_color-layer-two" />
            </div>
            <div className="about-one_image-two" data-parallax='{"y" : 60}'>
              <img src="https://images.unsplash.com/photo-1524414621493-7dec026782c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGJsYWNrJTIwcGVvcGxlfGVufDB8MHwwfHx8MA%3D%3D" alt="" style={{height:"300px", width:"300px"}} />
            </div>
          </div>
        </div>
        {/* Content Column */}
        <div className="about-one_content-column col-lg-6 col-md-12 col-sm-12">
          <div className="about-one_content-outer">
            <div className="sec-title">
              <div className="sec-title_title tx-split-text split-in-right">
                WHO WE ARE
              </div>
              <h2 className="sec-title_heading tx-split-text split-in-right">
              Title here <br /> for about
              </h2>
            </div>
            <div className="about-one_bold-text" style={{textAlign:"justify", color:"black"}}>
            This is BEE Channel!  Achieving BLACK ECONOMIC EXCELLENCE. 
Aiming to improve Africa by breaking from the conventional global narrative, BEE seeks to establish a global network of African voices to expand economic potential. It is a brand-new television network that aims to highlight African-style wealth-building techniques, success stories, and the economic empowerment of the black people. BEE: Promotes financial literacy, entrepreneurship, and economic integration among Black people globally.
.
            </div>
            {/* <div className="about-one_feature">
              <div className="about-one_feature-icon flaticon-cyber-security" />
              <strong>Secure internet</strong>
              Risus commodo viverra maecenas accumsan lacus vel metus erat
              facilisis.
            </div> */}
            {/* <ul className="about-one_lists">
              <li>
                <i className="arrow fa fa-arrow-circle-right" /> Internet &amp; TV
                service solutions
              </li>
              <li>
                <i className="arrow fa fa-arrow-circle-right" /> Top quality
                services with reasonable price
              </li>
              <li>
                <i className="arrow fa fa-arrow-circle-right" /> Live sports and
                TV shows with ultra fast speed      
              </li>
            </ul> */}
            {/* Button Box */}
            <div className="about-one_button">
              <a className="btn-style-two theme-btn" href="about.html">
                <div className="btn-wrap">
                  <span className="text-one">Discover More</span>
                  <span className="text-two">Discover More</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}
