import React from 'react'

import Footer from '../Section/Footer'


export default function Contact() {
  return (
    <div>
      
      
  <section
    className="page-title_two"
    style={{ backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_inMd3HyqyVHr6AU5HnuO_NtWIOlGyoqDEg&s)" ,backgroundPosition:"cover" }}
  >
    <div
      className="page-title_two-gradient"
      style={{ backgroundImage: "url(./assets/images/background/pattern-6.png)" , marginLeft:"-300px"}}
    />
    <div className="auto-container">
      <h2>Contact Us</h2>
      <ul className="bread-crumb clearfix">
        <li>
          <a href="/">Home</a>
        </li>
        <li>Contact Us</li>
      </ul>
    </div>
  </section>
  {/* End Page Title */}
  {/* Contact One */}
  <div className="contact-one" id="contact">
    <div className="auto-container">
      <div className="row clearfix">
        {/* Content Side */}
        <div className="contact-one_info-column col-lg-6 col-md-12 col-sm-12">
          <div className="contact-one_info-outer">
            {/* Sec Title */}
            <div className="sec-title">
              <div className="sec-title_title tx-split-text split-in-up">
                CONTACT WITH US
              </div>
              <h2 className="sec-title_heading tx-split-text split-in-up">
                Ready to get in <br /> touch with BEE
              </h2>
              <div className="sec-title_text tx-split-text split-in-up">
              Talk with experts, think tanks, and influential people on issues including wealth creation, economic fairness, and sustainable business practices in the Black community;{" "}
              </div>
            </div>
            <ul className="contact-one_info-list">
              <li>
                <span className="icon flaticon-map" />
                Visit anytime
                <strong>     Lideta Sub city,
Sengetera Negadewoch Union Bldg, 5th Floor
Addis Ababa, Ethiopia</strong>
              </li>
              <li>
                <span className="icon flaticon-smartphone" />
                Write email
                <strong>needhelp@company.com</strong>
              </li>
              <li>
                <span className="icon flaticon-clock" />
                Have any question?
                <strong>+(251)-942609556</strong>
              </li>
            </ul>
            <ul className="contact-one_socials-links">
              <span>Social Media :</span>
              <li>
                <a href="#" className="fa-brands fa-facebook-f fa-fw" />
              </li>
              <li>
                <a href="#" className="fa-brands fa-twitter fa-fw" />
              </li>
              <li>
                <a href="#" className="fa-brands fa-google fa-fw" />
              </li>
              <li>
                <a href="#" className="fa-brands fa-dribbble fa-fw" />
              </li>
            </ul>
          </div>
        </div>
        {/* Form Column */}
        <div className="contact-one_form-column col-lg-6 col-md-12 col-sm-12">
          <div className="contact-one_form-outer">
            {/* Sec Title */}
            <div className="sec-title">
              <div className="sec-title_title tx-split-text split-in-up">
                Quick Contact
              </div>
              <h2 className="sec-title_heading tx-split-text split-in-up">
                Interested in discussing?
              </h2>
              <div className="sec-title_text tx-split-text split-in-up">
                Please feel free to get in touch with us using the contact form
                below. We'd love to hear for you.
              </div>
            </div>
            {/* Default Form */}
            <div className="default-form contact-form">
              <form
                method="post"
                action="https://themerange.net/html/monic/blog.html"
              >
                <div className="row clearfix">
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input
                      type="text"
                      name="username"
                      placeholder="Name"
                      required=""
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input
                      type="text"
                      name="username"
                      placeholder="Email"
                      required=""
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      required=""
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone"
                      required=""
                    />
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                    <textarea
                      className=""
                      name="message"
                      placeholder="Enter your Comment"
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                    {/* Button Box */}
                    <button type="submit" className="theme-btn btn-style-four">
                      <span className="btn-wrap">
                        <span className="text-one">send message</span>
                        <span className="text-two">send message</span>
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* End Default Form */}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Map One */}
  <section className="map-one">
    <div className="auto-container">
    <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.543171752903!2d38.74498237501054!3d9.014113589221816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85f9d1d05d53%3A0xa4d88d1bed108bcc!2sPurposeblack%20Eth%20Trading!5e0!3m2!1sen!2set!4v1712816756330!5m2!1sen!2set"
  width={600}
  height={450}
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
    </div>
  </section>
  {/* End Map One */}


        
    </div>
  )
}
