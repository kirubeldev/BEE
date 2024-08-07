import React from 'react'
import Footer from '../Section/Footer'

export default function AboutUs() {
  return (
    <div className='abou' style={{marginBottom:"-400px"}}>
      
      
        <>
        
        <>
 
  {/* End About Sidebar */}
  {/* Page Title */}
  <section
    className="page-title"
    style={{ backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiBH9AR4UGsIehYUhA9NEQ7q4T2__prtxk4D1gJvrLwvMW_0Mz)" , backgroundPosition:"center center" , backgroundSize:"cover" ,backgroundAttachment:"fixed" }}
  >
    <div className="auto-container">
      <h2>About our Company</h2>
      <ul className="bread-crumb clearfix">
        <li>
          <a href="index-2.html">Home</a>
        </li>
        <li>About Us</li>
      </ul>
    </div>
  </section>
  {/* End Page Title */}
  {/* Fiber One */}
  <section className="fiber-one">
    <div
      className="fiber-one_pattern"
      style={{
        backgroundImage: "url(./assets/images/background/fiber-one_pattern.png)"
      }}
    />
    <div
      className="fiber-one_pattern-two"
      style={{
        backgroundImage: "url(./assets/images/background/fiber-one_pattern-1.png)"
      }}
    />
    
  </section>
  {/* End Fiber One */}
  {/* Fluid Two */}
  <section className="fluid-two" >
    <div className="outer-container clearfix">
      {/* Left Box */}
      <div className="left-box clearfix">
        <div className="left-box_inner">
          <div className="fluid-one_color-layer" />
         
          <div className="sec-title">
            <div className="sec-title_title tx-split-text split-in-up">
              Who we are
            </div>
            <h2 className="sec-title_heading tx-split-text split-in-up">
            Title for  About
            </h2>
          </div>
          <div className="fluid-two_feature" style={{textAlign:"justify"}}>
            
            change the content here <br/>
            It is with great pleasure and excitement that we introduce to you the launch of our newest media channel, the Black Economy Excellence Channel (BBE Channel). The BEE Channel will be broadcasting globally in English with a mission to become the global nexus for African voices, promoting economic empowerment, commanding the narrative of the Global Black experience, and encouraging Africa-to-Africa collaboration. 
          </div>
          <div className="fluid-two_text" style={{textAlign:"justify"}}>
          We invite you to join us on this journey of empowerment and transformation as we strive to build a more prosperous and equitable future for black communities everywhere. Stay tuned for our upcoming releases and special events that will showcase the best of black excellence and achievement.{" "}
          </div>
          {/* Button Box */}
          <div className="fluid-two_button">
            <a className="btn-style-four theme-btn" href="about.html">
              <div className="btn-wrap">
                <span className="text-one">get started</span>
                <span className="text-two">get started</span>
              </div>
            </a>
          </div>
        </div>
        <div className="fluid-two_router">
          <img src="." alt="" />
        </div>
      </div>
      {/* Right Box */}
      <div
        className="right-box"
        style={{ backgroundImage: "url(https://plus.unsplash.com/premium_photo-1664392376563-c6e448385569?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBwZW9wbGUlMjBlYXRjaGluZyUyMHR2fGVufDB8fDB8fHww)"  }}
      >
        <div className="right-box_inner">
          <div className="fluid-two_image">
            <img src="./assets/images/resource/fluid-two.jpg" alt="" />
          </div>
        </div>
        <div className="fluid-two_experiance">
          <span className="fluid-two_experiance-icon flaticon-technical-support" />
          Experience <br /> Best internet
        </div>
      </div>
    </div>
  </section>
  {/* End Fluid Two */}
  {/* CTA Three */}
  <div className="auto-container" style={{marginTop:"30px"}}>
      {/* Sec Title */}
      <div className="sec-title centered">
        <div className="sec-title_title tx-split-text split-in-up">
          why select us
        </div>
        <h2 className="sec-title_heading tx-split-text split-in-up">
          Warch Our latest TV program  <br /> and Podcast
        </h2>
      </div>
      <div
        className="swiper_carousel swiper-container"
        data-swiper='{"spaceBetween":30,"slidesPerView":3,"centeredSlides":false,"loop":true,"navigation":{"nextEl":".fiber-one_button-next","prevEl":".fiber-one_button-prev","clickable":"true"},"pagination":{"el":".fiber-one_pagination","clickable":"true"},"autoplay":{"delay":"6000"},"breakpoints":{"320":{"slidesPerView":1,"spaceBetween":15},"700":{"slidesPerView":2,"spaceBetween":25},"600":{"slidesPerView":2,"spaceBetween":25},"700":{"slidesPerView":2,"spaceBetween":25},"900":{"slidesPerView":2,"spaceBetween":25},"1000":{"slidesPerView":3,"spaceBetween":25},"1200":{"slidesPerView":3,"spaceBetween":30},"1500":{"slidesPerView":3,"spaceBetween":30}}}'
      >
        <div className="swiper-wrapper">
          {/* Slide */}
          <div className="swiper-slide">
            {/* Fiber Block One */}
            <div className="fiber-block_one">
              <div className="fiber-block_one-inner">
                <div className="fiber-block_one-image">
                  <a href="service-detail.html">
                    <img src="https://plus.unsplash.com/premium_photo-1664302049949-f3b3c1aec6d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QWZyaWNhbiUyMGlubm92YXRpb258ZW58MHx8MHx8fDA%3D" alt="" />
                  </a>
                </div>
                <div className="fiber-block_one-content">
                  <div className="fiber-block_one-icon flaticon-wifi-router-1" />
                  <div className="fiber-block_one-title">series</div>
                  <h4 className="fiber-block_one-heading">
                    <a href="service-detail.html">THE GRIOT</a>
                  </h4>
                  <div className="fiber-block_one-price">
                    {/* $<span>Mo</span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Slide */}
          <div className="swiper-slide">
            {/* Fiber Block One */}
            <div className="fiber-block_one">
              <div className="fiber-block_one-inner">
                <div className="fiber-block_one-image">
                  <a href="service-detail.html">
                    <img src="https://plus.unsplash.com/premium_photo-1664304451835-a4f18e06ccad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBkb2N0b3J8ZW58MHwxfDB8fHww" alt="" />
                  </a>
                </div>
                <div className="fiber-block_one-content">
                  <div className="fiber-block_one-icon flaticon-smartphone" />
                  <div className="fiber-block_one-title">Series</div>
                  <h4 className="fiber-block_one-heading">
                    <a href="service-detail.html">TRADITIONAL MEDICINE</a>
                  </h4>
                  <div className="fiber-block_one-price">
                    {/* $<span>Mo</span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Slide */}
          <div className="swiper-slide">
            {/* Fiber Block One */}
            <div className="fiber-block_one">
              <div className="fiber-block_one-inner">
                <div className="fiber-block_one-image">
                  <a href="service-detail.html">
                    <img src="https://images.unsplash.com/photo-1618887392199-2e8e3ec8b72d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWZyaWNhJTJDJTIwbXVzaWN8ZW58MHx8MHx8fDA%3D" alt="" />
                  </a>
                </div>
                <div className="fiber-block_one-content">
                  <div className="fiber-block_one-icon flaticon-cinema" />
                  <div className="fiber-block_one-title">music</div>
                  <h4 className="fiber-block_one-heading">
                    <a href="service-detail.html">BLACK CYPHER</a>
                  </h4>
                  <div className="fiber-block_one-price">
                    {/* $<span>Mo</span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Slide */}
          <div className="swiper-slide">
            {/* Fiber Block One */}
            <div className="fiber-block_one">
              <div className="fiber-block_one-inner">
                <div className="fiber-block_one-image">
                  <a href="service-detail.html">
                    <img src="https://images.unsplash.com/photo-1630861413071-a424a4d6d155?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZXRoaW9waWF8ZW58MHwxfDB8fHww" alt="" />
                  </a>
                </div>
                <div className="fiber-block_one-content">
                  <div className="fiber-block_one-icon flaticon-wifi-router-1" />
                  <div className="fiber-block_one-title"> children’s series</div>
                  <h4 className="fiber-block_one-heading">
                    <a href="service-detail.html">ENDERASE</a>
                  </h4>
                  <div className="fiber-block_one-price">
                    {/* $<span>Mo</span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* If we need pagination */}
        <div className="fiber-one_pagination" />
      </div>
    </div>
  {/* End CTA Three */}
  {/* CTA Five */}
  <section
    className="cta-five"
    style={{ backgroundImage: "url(./assets/images/background/cta-2.jpg)", marginTop:"100px" }}
  >
    <div
      className="cta-five_pattern"
      style={{ backgroundImage: "url(./assets/images/background/cta-2_pattern.png)" }}
    />
    <div className="auto-container">
      <h2 className="cta-five_heading" style={{fontSize:"35px"}}>
      The future of the BEE Channel is bright! As the embodiment of the future of
Black People across the globe, BEE Channel represents the true ESSENCE of
the economically empowered Purpose Black Nation.
      </h2>
      {/* Button Box */}
      <div className="cta-five_button">
        <a className="btn-style-one theme-btn" href="about.html">
          <div className="btn-wrap">
            <span className="text-one">get started</span>
            <span className="text-two">get started</span>
          </div>
        </a>
      </div>
    </div>
  </section>
  {/* End CTA Five */}
  {/* Faq One */}

  {/* End Faq One */}
  {/* Counter Two */}
 
  {/* End Counter Two */}
  {/* Category One */}
  <section className="category-one">
    <div className="auto-container">
      <div className="row clearfix">
        {/* Content Column */}
        <div className="category-one_content-column col-lg-6 col-md-12 col-sm-12">
          <div className="category-one_content-outer">
            {/* Sec Title */}
            <div className="sec-title">
              <div className="sec-title_title tx-split-text split-in-up">
              OUR  MOVIES CATEGORIES
              </div>
              <h2 className="sec-title_heading tx-split-text split-in-up">
                Watch our TV / Streaming Programs by
   Category
              </h2>
              <div className="sec-title_text tx-split-text split-in-up">
              At BBE Channel, we are dedicated to elevating the black narrative, fostering Pan-African upliftment, and establishing command of the global black narrative of excellence. We aim to celebrate the rich cultural heritage and diversity of the African continent while also addressing the challenges and opportunities facing black communities worldwide. Through our content, we seek to inspire, educate, and uplift black communities, promoting economic growth, self-determination and connecting individuals and organizations who are committed to advancing the economic empowerment of the black community.{" "}
              </div>
            </div>
            {/* Button Box */}
            <div className="category-one_button">
              <a className="btn-style-four theme-btn" href="projects.html">
                <div className="btn-wrap">
                  <span className="text-one">View all movies &amp; shows</span>
                  <span className="text-two">View all movies &amp; shows</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* Feature Column */}
        <div className="category-one_feature-column col-lg-6 col-md-12 col-sm-12">
          <div className="category-one_feature-outer">
            <div className="row clearfix">
              {/* Category One Feature */}
              <div className="category-one_feature col-lg-4 col-md-6 col-sm-6">
                <div className="category-one_feature-inner hide"></div>
              </div>
              {/* Category One Feature */}
              <div className="category-one_feature col-lg-4 col-md-6 col-sm-6">
                <div className="category-one_feature-inner">
                  <a href="#" className="category-one_feature-link" />
                  <div className="category-one_feature-icon flaticon-adventure" />
                  <h6 className="category-one_feature-heading">Interviews</h6>
                </div>
              </div>
              {/* Category One Feature */}
              <div className="category-one_feature col-lg-4 col-md-6 col-sm-6">
                <div className="category-one_feature-inner">
                  <a href="#" className="category-one_feature-link" />
                  <div className="category-one_feature-icon flaticon-theatre" />
                  <h6 className="category-one_feature-heading">Minidocumentaries</h6>
                </div>
              </div>
              {/* Category One Feature */}
              <div className="category-one_feature col-lg-4 col-md-6 col-sm-6">
                <div className="category-one_feature-inner">
                  <a href="#" className="category-one_feature-link" />
                  <div className="category-one_feature-icon flaticon-ghost" />
                  <h6 className="category-one_feature-heading">Point of View Narratives
</h6>
                </div>
              </div>
              {/* Category One Feature */}
              <div className="category-one_feature col-lg-4 col-md-6 col-sm-6">
                <div className="category-one_feature-inner">
                  <a href="#" className="category-one_feature-link" />
                  <div className="category-one_feature-icon flaticon-detective" />
                  <h6 className="category-one_feature-heading">Current Events
</h6>
                </div>
              </div>

              <div className="category-one_feature col-lg-4 col-md-6 col-sm-6">
                <div className="category-one_feature-inner">
                  <a href="#" className="category-one_feature-link" />
                  <div className="category-one_feature-icon flaticon-detective" />
                  <h6 className="category-one_feature-heading">Webinars
</h6>
                </div>
              </div> <div className="category-one_feature col-lg-4 col-md-6 col-sm-6">
                <div className="category-one_feature-inner">
                  <a href="#" className="category-one_feature-link" />
                  <div className="category-one_feature-icon flaticon-detective" />
                  <h6 className="category-one_feature-heading">Educational Entertainment Programming

</h6>
                </div>
              </div> <div className="category-one_feature col-lg-4 col-md-6 col-sm-6">
                <div className="category-one_feature-inner">
                  <a href="#" className="category-one_feature-link" />
                  <div className="category-one_feature-icon flaticon-detective" />
                  <h6 className="category-one_feature-heading">News
</h6>
                </div>
              </div>
              {/* Category One Feature */}
              <div className="category-one_feature col-lg-4 col-md-6 col-sm-6">
                <div className="category-one_feature-inner">
                  <a href="#" className="category-one_feature-link" />
                  <div className="category-one_feature-icon flaticon-key" />
                  <h6 className="category-one_feature-heading">Podcast</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Category One */}
  {/* Package One */}
  
  {/* End Package One */}
  {/* Clients One */}
  
</>


  {/* End News One */}
</>

    </div>
  )
}
