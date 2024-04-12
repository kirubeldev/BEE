import React from 'react'

export default function Testimonial() {
  return (
    <div><section className="testimonial-one">
    <div className="auto-container">
      <div className="row clearfix">
        {/* Title Column */}
        <div className="testimonial-one_title-column col-lg-4 col-md-12 col-sm-12">
          <div className="testimonial-one_title-outer">
            <div className="sec-title">
              <div className="sec-title_title tx-split-text split-in-left">
                Testimonial
              </div>
              <h2 className="sec-title_heading tx-split-text split-in-left">
                What they are talking about our service
              </h2>
            </div>
            {/* Button Box */}
            <div className="testimonial-one_button">
              <a className="btn-style-two theme-btn" href="about.html">
                <div className="btn-wrap">
                  <span className="text-one">Discover More</span>
                  <span className="text-two">Discover More</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* Content Column */}
        <div className="testimonial-one_carousel-column col-lg-8 col-md-12 col-sm-12">
          <div className="testimonial-one_carousel-outer">
            <div
              className="swiper_carousel swiper-container"
              data-swiper='{"spaceBetween":30,"slidesPerView":2,"navigation":{"nextEl":".swiper-button-next","prevEl":".swiper-button-prev","clickable":"true"},"pagination":{"el":".testimonial-one_pagination","clickable":"true"},"autoplay":{"delay":"6000"},"breakpoints":{"320":{"slidesPerView":1,"spaceBetween":0},"700":{"slidesPerView":1,"spaceBetween":0},"800":{"slidesPerView":2,"spaceBetween":30},"1200":{"slidesPerView":2,"spaceBetween":30},"1400":{"slidesPerView":2,"spaceBetween":30}}}'
            >
              <div className="swiper-wrapper">
                {/* Slide */}
                <div className="swiper-slide">
                  {/* Testimonial Block One */}
                  <div className="testimonial-block_one">
                    <div className="testimonial-block_one-outer">
                      <div className="testimonial-block_one-text">
                        Lorem ipsum dolor amet, sed enim eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim eu minim veniam,
                        nostrud exercitation.{" "}
                      </div>
                      <div className="testimonial-block_one-author">
                        <div className="testimonial-block_one-author-inner">
                          <div className="testimonial-block_one-author-quote flaticon-quote" />
                          <div className="testimonial-block_one-title">
                            Market Manager
                          </div>
                          <h6 className="testimonial-block_one-heading">
                            Smith Morgan
                          </h6>
                          <div className="testimonial-block_one-author-image">
                            <img src="./assets/images/resource/author-1.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Slide */}
                <div className="swiper-slide">
                  {/* Testimonial Block One */}
                  <div className="testimonial-block_one">
                    <div className="testimonial-block_one-outer">
                      <div className="testimonial-block_one-text">
                        Lorem ipsum dolor amet, sed enim eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim eu minim veniam,
                        nostrud exercitation.{" "}
                      </div>
                      <div className="testimonial-block_one-author">
                        <div className="testimonial-block_one-author-inner">
                          <div className="testimonial-block_one-author-quote flaticon-quote" />
                          <div className="testimonial-block_one-title">
                            Market Manager
                          </div>
                          <h6 className="testimonial-block_one-heading">
                            Moniba Uaso
                          </h6>
                          <div className="testimonial-block_one-author-image">
                            <img src="./assets/images/resource/author-2.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Slide */}
                <div className="swiper-slide">
                  {/* Testimonial Block One */}
                  <div className="testimonial-block_one">
                    <div className="testimonial-block_one-outer">
                      <div className="testimonial-block_one-text">
                        Lorem ipsum dolor amet, sed enim eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim eu minim veniam,
                        nostrud exercitation.{" "}
                      </div>
                      <div className="testimonial-block_one-author">
                        <div className="testimonial-block_one-author-inner">
                          <div className="testimonial-block_one-author-quote flaticon-quote" />
                          <div className="testimonial-block_one-title">
                            Market Manager
                          </div>
                          <h6 className="testimonial-block_one-heading">
                            Smith Morgan
                          </h6>
                          <div className="testimonial-block_one-author-image">
                            <img src="./assets/images/resource/author-1.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Slide */}
                <div className="swiper-slide">
                  {/* Testimonial Block One */}
                  <div className="testimonial-block_one">
                    <div className="testimonial-block_one-outer">
                      <div className="testimonial-block_one-text">
                        Lorem ipsum dolor amet, sed enim eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim eu minim veniam,
                        nostrud exercitation.{" "}
                      </div>
                      <div className="testimonial-block_one-author">
                        <div className="testimonial-block_one-author-inner">
                          <div className="testimonial-block_one-author-quote flaticon-quote" />
                          <div className="testimonial-block_one-title">
                            Market Manager
                          </div>
                          <h6 className="testimonial-block_one-heading">
                            Moniba Uaso
                          </h6>
                          <div className="testimonial-block_one-author-image">
                            <img src="./assets/images/resource/author-2.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* If we need pagination */}
              <div className="testimonial-one_pagination" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}
