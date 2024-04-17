import React from 'react'

export default function HeroSection() {
  return (
    <section className="slider-one" >
    <div
      className="swiper_carousel swiper-container"
      data-swiper='{"spaceBetween":0,"slidesPerView":1,"navigation":{"nextEl":".main-slider_button-next","prevEl":".main-slider_button-prev","clickable":"true"},"pagination":{"el":".main-slider_pagination","clickable":"true"},"autoplay":{"delay":"6000"},"breakpoints":{"320":{"slidesPerView":1,"spaceBetween":0},"480":{"slidesPerView":1,"spaceBetween":0},"640":{"slidesPerView":1,"spaceBetween":0}}}'
    >
      <div className="swiper-wrapper">
        {/* Slide */}
        <div className="swiper-slide">
          <div
            className="slider-one_image"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1484085909914-bd14e593a7cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM0fHxibGFjayUyMHBlb3BsZXxlbnwwfDB8MHx8fDA%3D)" , backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"center center" }}
          />
          <div className="auto-container">
            {/* Content Column */}
            <div className="slider-one_content-column">
              <div className="slider-one_content-inner">
                <div className="slider-one_title">Your Trusted Partner</div>
                <h1 className="slider-one_heading">
                BLACK ECONOMY EXCELLENCE
                </h1>
                <div className="slider-one_text">
                Together, we can create a world where the black economy prospers <br/> and make a significant difference.
                </div>
                {/* Button Box */}
                <div className="slider-one_button-box d-flex align-items-center flex-wrap">
                  <a className="btn-style-one theme-btn" href="about.html">
                    <div className="btn-wrap">
                      <span className="text-one">Discover More</span>
                      <span className="text-two">Discover More</span>
                    </div>
                  </a>
                  {/* Slider One Phone */}
                  <div className="slider-one_phone">
                    <div className="slider-one_phone-icon">
                      <i className="fa fa-phone" />
                    </div>
                    Give us a call <br />
                    <a href="tel:+251942609556">+(251)-942609556</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Slide */}
        <div className="swiper-slide">
          <div
            className="slider-one_image"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1484086471933-a4fcb164629c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUyfHxibGFjayUyMHBlb3BsZXxlbnwwfDB8MHx8fDA%3D)", backgroundRepeat:"no-repeat"  , backgroundSize:"cover", backgroundPosition:"center center"}}
          />
          <div className="auto-container">
            {/* Content Column */}
            <div className="slider-one_content-column">
              <div className="slider-one_content-inner">
                <div className="slider-one_title">Your Trusted Partner</div>
                <h1 className="slider-one_heading">
                BLACK ECONOMY EXCELLENCE
                </h1>
                <div className="slider-one_text">
                Stay tuned for upcoming releases and special events showcasing <br/> Black's excellence and success.
                </div>
                {/* Button Box */}
                <div className="slider-one_button-box d-flex align-items-center flex-wrap">
                  <a className="btn-style-one theme-btn" href="about.html">
                    <div className="btn-wrap">
                      <span className="text-one">Discover More</span>
                      <span className="text-two">Discover More</span>
                    </div>
                  </a>
                  {/* Slider One Phone */}
                  <div className="slider-one_phone">
                    <div className="slider-one_phone-icon">
                      <i className="fa fa-phone" />
                    </div>
                    Give us a call <br />
                    <a href="tel:+251942609556">+(251)-942609556</a>                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Slide */}
        <div className="swiper-slide">
          <div
            className="slider-one_image"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1485618609651-5a8bd6efc777?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcxfHxibGFjayUyMHBlb3BsZXxlbnwwfDB8MHx8fDA%3D)" , backgroundRepeat:"no-repeat" , backgroundSize:"cover", backgroundPosition:"center center" }}
          />
          <div className="auto-container">
            {/* Content Column */}
            <div className="slider-one_content-column">
              <div className="slider-one_content-inner">
                <div className="slider-one_title">Your Trusted Partner</div>
                <h1 className="slider-one_heading">
                BLACK ECONOMY EXCELLENCE
                </h1>
                <div className="slider-one_text">
                BEE invites you to join us on this journey of empowerment and change <br/> as we strive to build a more prosperous and just future for Black communities 
                </div>
                {/* Button Box */}
                <div className="slider-one_button-box d-flex align-items-center flex-wrap">
                  <a className="btn-style-one theme-btn" href="about.html">
                    <div className="btn-wrap">
                      <span className="text-one">Discover More</span>
                      <span className="text-two">Discover More</span>
                    </div>
                  </a>
                  {/* Slider One Phone */}
                  <div className="slider-one_phone">
                    <div className="slider-one_phone-icon">
                      <i className="fa fa-phone" />
                    </div>
                    Give us a call <br />
                    <a href="tel:+251942609556">+(251)-942609556</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* If we need pagination */}
      <div className="main-slider_pagination" />
      {/* If we need navigation buttons */}
      <div className="main-slider_button-prev fas fa-arrow-left fa-fw" />
      <div className="main-slider_button-next fas fa-arrow-right fa-fw" />
    </div>
  

  </section>
  
  )
}
