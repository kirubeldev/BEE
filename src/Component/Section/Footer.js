import React from "react";
import logo from "./img/logo2.svg";
import { useMatch } from "react-router-dom";
export default function Footer() {
  const chat = useMatch("/chat");
  
  const chatm1 = useMatch("/chatm1");
  const chatm2 = useMatch("/chatm2");
  const movie = useMatch("/movie");

  return (
    <div className="footer">
         {!(chat || chatm1 || chatm2 || movie) && (
        <>
          <section className="cta-three">
            <div className="auto-container">
              <div
                className="inner-container wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div
                  className="cta-three_pattern"
                  style={{
                    backgroundImage:
                      "url(./assets/images/background/cta-three_pattern.png)",
                  }}
                />
                <div
                  className="cta-three_pattern-two"
                  style={{
                    backgroundImage:
                      "url(./assets/images/background/cta-three_pattern-1.png)",
                  }}
                />
                <div className="row clearfix">
                  {/* Column */}
                  <div className="column col-lg-6 col-md-12 col-sm-12">
                    <h2 className="cta-three_title">
                      Subscribe to Our <br /> newsletter
                    </h2>
                  </div>
                  {/* Column */}
                  <div className="column col-lg-6 col-md-12 col-sm-12">
                    <div className="newsletter-box_two">
                      <form
                        method="post"
                        action="https://themerange.net/html/monic/contact.html"
                      >
                        <div className="form-group">
                          <input
                            type="email"
                            name="search-field"
                            defaultValue=""
                            placeholder="Enter your mail"
                            required=""
                          />
                          <button type="submit" className="theme-btn">
                            submit now
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer className="main-footer">
          
           
            <div className="auto-container">
              <div className="inner-container">
                {/* Widgets Section */}
                <div className="widgets-section">
                  <div className="row clearfix">
                    {/* Big Column */}
                    <div className="big-column col-lg-6 col-md-12 col-sm-12">
                      <div className="row clearfix">
                        {/* Footer Column */}
                        <div className="footer_column col-lg-7 col-md-6 col-sm-12">
                          <div className="footer-widget footer-two_logo-widget">
                            <div className="footer-logo">
                              <a href="index-2.html">
                                <img
                                  src={logo}
                                  alt=""
                                  title=""
                                  style={{ width: "140px" }}
                                />
                              </a>
                            </div>
                            <div className="footer-text">
                              Aiming to improve Africa by breaking from the
                              conventional global narrative, BEE seeks to
                              establish a global network of African voices to
                              expand economic potential.
                            </div>
                          </div>
                        </div>
                        {/* Footer Column */}
                        <div className="footer_column col-lg-5 col-md-6 col-sm-12">
                          <div className="footer-widget links-widget">
                            <h5 className="footer-title">Links</h5>
                            <ul className="footer-list">
                              <li>
                                <a href="#">About</a>
                              </li>
                              <li>
                                <a href="/About">About Us</a>
                              </li>
                              <li>
                                <a href="article">Article</a>
                              </li>
                              <li>
                                <a href="/chat">Chat Room</a>
                              </li>
                              <li>
                                <a href="/blog">Blog</a>
                              </li>
                              <li>
                                <a href="/movie">TV Programs</a>
                              </li>
                              <li>
                                <a href="gofundme.com">Donation</a>

                              </li>
                              <li>
                                <a href="Contact">Contact</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Big Column */}
                    <div className="big-column col-lg-6 col-md-12 col-sm-12">
                      <div className="row clearfix">
                        {/* Footer Column */}
                        <div className="footer_column col-lg-6 col-md-6 col-sm-12">
                          <div className="footer-widget post-widget">
                            <h5 className="footer-title">recent post</h5>
                            {/*News Widget Block*/}
                            <div className="news-widget-block">
                              <div className="news-widget_image">
                                <img
                                  src="./assets/images/resource/post-thumb-4.jpg"
                                  alt=""
                                />
                              </div>
                              <h6 className="news-widget_title">
                                <a href="news-detail.html">
                                  Broadband Connection Among Devices?
                                </a>
                              </h6>
                              <div className="news-widget_post-date">
                                January 3, 2022
                              </div>
                            </div>
                            {/*News Widget Block*/}
                            <div className="news-widget-block">
                              <div className="news-widget_image">
                                <img
                                  src="./assets/images/resource/post-thumb-5.jpg"
                                  alt=""
                                />
                              </div>
                              <h6 className="news-widget_title">
                                <a href="news-detail.html">
                                  How Can You Change The IP From Your
                                </a>
                              </h6>
                              <div className="news-widget_post-date">
                                January 3, 2022
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Footer Column */}
                        <div className="footer_column col-lg-6 col-md-6 col-sm-12">
                          <div className="footer-widget contact-widget">
                            <h5 className="footer-title">Contact Info</h5>
                            <ul className="footer-contact_list">
                              <li>
                                <span className="icon fas fa-map-marker-alt fa-fw" />
                                Lideta Sub city, Sengetera Negadewoch Union <br/>
                                Bldg, 5th Floor Addis Ababa, Ethiopia
                              </li>
                              <li>
                                <span className="icon fas fa-envelope fa-fw" />
                                michael.masresha@purposeblack.et
                              </li>
                              <li>
                                <span className="icon fas fa-phone fa-fw" />
                                +(251)-942609556
                              </li> <div className="footer_socials">
                              <a href="https://facebook.com/">
                                <i className="fa-brands fa-facebook-f" />
                              </a>
                              <a href="https://twitter.com/">
                                <i className="fa-brands fa-twitter" />
                              </a>
                              <a href="https://youtube.com/">
                                <i className="fa-brands fa-youtube" />
                              </a>
                              <a href="https://instagram.com/">
                                <i className="fa-brands fa-instagram" />
                              </a>
                            </div>
                            </ul>
                            {/* Social Box */}
                           
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          <>
            <div className="search-popup">
              <div className="color-layer" />
              <button className="close-search">
                <span className="far fa-times fa-fw" />
              </button>
              <form
                method="post"
                action="https://themerange.net/html/monic/blog.html"
              >
                <div className="form-group">
                  <input
                    type="search"
                    name="search-field"
                    defaultValue=""
                    placeholder="Search Here"
                    required=""
                  />
                  <button type="submit">
                    <i className="far fa-search fa-fw" />
                  </button>
                </div>
              </form>
            </div>
            {/* End Search Popup */}
            {/* Color Palate / Color Switcher */}
            <div className="color-palate">
              {/* <div className="color-trigger">
      <i className="fa fa-star" />
    </div> */}
              <div className="color-palate-inner">
                <div className="color-palate-head">
                  <h6>Choose Options</h6>
                </div>
                {/* Colors */}
                <div className="various-color clearfix">
                  <div className="colors-list">
                    <span
                      className="palate default-color active"
                      data-theme-file="css/color-themes/default-color.css"
                    />
                    <span
                      className="palate blue-color"
                      data-theme-file="css/color-themes/blue-color.css"
                    />
                    <span
                      className="palate olive-color"
                      data-theme-file="css/color-themes/olive-color.css"
                    />
                    <span
                      className="palate orange-color"
                      data-theme-file="css/color-themes/orange-color.css"
                    />
                    <span
                      className="palate purple-color"
                      data-theme-file="css/color-themes/purple-color.css"
                    />
                    <span
                      className="palate green-color"
                      data-theme-file="css/color-themes/green-color.css"
                    />
                    <span
                      className="palate brown-color"
                      data-theme-file="css/color-themes/brown-color.css"
                    />
                    <span
                      className="palate yellow-color"
                      data-theme-file="css/color-themes/yellow-color.css"
                    />
                  </div>
                </div>
                <h6>RTL Version</h6>
                <ul className="rtl-version option-box">
                  {" "}
                  <li className="rtl">RTL Version</li> <li>LTR Version</li>{" "}
                </ul>
                <h6>Want Sticky Header</h6>
                <ul className="header-version option-box">
                  {" "}
                  <li className="box">No</li> <li>Yes</li>
                </ul>
                <h6>Dark Verion</h6>
                <ul className="dark-version option-box">
                  {" "}
                  <li className="box">Yes</li> <li>No</li>
                </ul>
                <div className="purchase-box">
                  You will find much more options for colors and styling in
                  admin panel. This color picker is used only for demonstation
                  purposes.
                  <a href="#" className="theme-btn btn-style-two">
                    <span className="btn-wrap">
                      <span className="text-one">buy now</span>
                      <span className="text-two">buy now</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* End Color Palate / Color Switcher */}
            {/* End PageWrapper */}
            {/* Scroll To Top */}
         
          </>
        </>
      )}
    </div>
  );
}
