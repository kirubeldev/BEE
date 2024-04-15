import React from 'react'
import logo from "./img/logo.png"
export default function NavBar() {
  return (
    <div>
        <>
  {/* Main Header */}
  <header className="main-header header-style-one" style={{zIndex:"999999" , backgroundColor:"#fff"}}>
    {/* Header Top */}
    <div className="header-top">
      <div className="auto-container">
        <div className="inner-container">
          <div className="d-flex justify-content-between flex-wrap">
            <ul className="header-list">
              <li>
                <span className="icon fas fa-clock fa-fw" />
                Mon - Sat: 8:00am - 5:00pm
              </li>
              <li>
                <span className="icon fas fa-envelope fa-fw" />
                <a href="mailto:michael.masresha@purposeblack.et">michael.masresha@purposeblack.et</a>
              </li>
            </ul>
            {/* Social Box */}
            <div className="header-social_box">
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
          </div>
        </div>
      </div>
    </div>
    {/* Header Lower */}
    <div className="header-lower">
      <div className="auto-container">
        <div className="inner-container d-flex align-items-center justify-content-between">
          {/* Logo Box */}
          <div className="logo-box d-flex align-items-center">
            <div className="logo">
              <a href="/">
            
                <img src={logo} alt="" title="" width={"90px"} height={"80px"}  />
              </a>
            </div>
          </div>
          <div className="nav-outer d-flex align-items-center">
            {/* Main Menu */}
            <nav className="main-menu show navbar-expand-md">
              <div className="navbar-header">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              <div
                className="navbar-collapse collapse clearfix"
                id="navbarSupportedContent"
              >
                <ul className="navigation clearfix">
                  <li className="">
                    <a href="/">Home</a>
                    {/* <ul>
                      <li>
                        <a href="index-2.html">Homepage One</a>
                      </li>
                      <li>
                        <a href="index-3.html">Homepage Two</a>
                      </li>
                      <li>
                        <a href="index-4.html">Homepage Three</a>
                      </li>
                      <li className="dropdown">
                        <a href="#">One-Pager Styles</a>
                        <ul>
                          <li>
                            <a href="index-1.html">Homepage One</a>
                          </li>
                          <li>
                            <a href="index-2-1.html">Homepage Two</a>
                          </li>
                          <li>
                            <a href="index-3-1.html">Homepage Three</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">Header Styles</a>
                        <ul>
                          <li>
                            <a href="index-2.html">Header Style One</a>
                          </li>
                          <li>
                            <a href="index-3.html">Header Style Two</a>
                          </li>
                          <li>
                            <a href="index-4.html">Header Style Three</a>
                          </li>
                        </ul>
                      </li>
                    </ul> */}
                  </li>
                  <li className="">
                    <a href="/About">About us</a>
                    {/* <ul>
                      <li>
                        <a href="">About Us</a>
                      </li>
                      <li>
                        <a href="faq.html">Faq</a>
                      </li>
                      <li>
                        <a href="price.html">Price</a>
                      </li>
                      <li>
                        <a href="price-2.html">Price 02</a>
                      </li>
                      <li>
                        <a href="privacy.html">Privacy Plicy</a>
                      </li>
                      <li>
                        <a href="terms.html">terms &amp; Condition</a>
                      </li>
                      <li className="dropdown">
                        <a href="#">Team</a>
                        <ul>
                          <li>
                            <a href="team.html">Team</a>
                          </li>
                          <li>
                            <a href="team-2.html">Team 02</a>
                          </li>
                          <li>
                            <a href="team-detail.html">Team Detail</a>
                          </li>
                        </ul>
                      </li>
                    </ul> */}
                  </li>
                  <li className="dropdow">
                    <a href="article">Article</a>
                    {/* <ul>
                      <li>
                        <a href="services.html">Services</a>
                      </li>
                      <li>
                        <a href="service-detail.html">Service Detail</a>
                      </li>
                    </ul> */}
                  </li>
                  <li className="dropdon">
                    <a href="/chat">Chat Room</a>
                    <ul>
                      <li>
                        <a href="projects.html">Projects</a>
                      </li>
                      <li>
                        <a href="project-detail.html">Project Detail</a>
                      </li>
                    </ul>
                  </li>
                  {/* <li className="dropdown">
                    <a href="#">Shop</a>
                    <ul>
                      <li>
                        <a href="shop.html">Shop</a>
                      </li>
                      <li>
                        <a href="shop-detail.html">Shop Detail</a>
                      </li>
                      <li>
                        <a href="cart.html">Shoping Cart</a>
                      </li>
                      <li>
                        <a href="checkout.html">CheckOut</a>
                      </li>
                      <li>
                        <a href="register.html">Register</a>
                      </li>
                      <li>
                        <a href="coming-soon.html">Coming Soon</a>
                      </li>
                    </ul>
                  </li> */}
                  <li className="">
                    <a href="/blogs">Blog</a>
                    {/* <ul>
                      <li>
                        <a href="blog.html">Our Blog</a>
                      </li>
                      <li>
                        <a href="blog-classic.html">Blog Classic</a>
                      </li>
                      <li>
                        <a href="blog-detail.html">Blog Detail</a>
                      </li>
                      <li>
                        <a href="blog-detail-2.html">Blog Detail 02</a>
                      </li>
                      <li>
                        <a href="not-found.html">Not Found</a>
                      </li>
                    </ul> */}
                  </li>
                 
                  <li className="">
                    <a href="/movie">TV Programs</a>
                    {/* <ul>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                      <li>
                        <a href="contact-2.html">Contact 02</a>
                      </li>
                      <li>
                        <a href="contact-3.html">Contact 03</a>
                      </li>
                    </ul> */}
                  </li>
                  <li className="">
                    <a href="https://www.gofundme.com/">Donations</a>
                    {/* <ul>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                      <li>
                        <a href="contact-2.html">Contact 02</a>
                      </li>
                      <li>
                        <a href="contact-3.html">Contact 03</a>
                      </li>
                    </ul> */}
                  </li>
                   <li className="">
                    <a href="/contact">Contact</a>
                    {/* <ul>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                      <li>
                        <a href="contact-2.html">Contact 02</a>
                      </li>
                      <li>
                        <a href="contact-3.html">Contact 03</a>
                      </li>
                    </ul> */}
                  </li>
                </ul>
              </div>
            </nav>
            {/* Main Menu End*/}
          </div>
          {/* Outer Box */}
          <div className="outer-box d-flex align-items-center">
            {/* Search Box */}
            
            {/* Nav Btn */}
            
            {/* Header Phone Box */}
            <div className="header-phone_box">
              <div className="header-phone_box-inner">
                <div className="header-phone_box-icon flaticon-consulting" />
                Call Us<br />
                <a href="tel:+251942609556">+(251)-942609556</a>
              </div>
            </div>
            
            {/* Mobile Navigation Toggler */}
            <div className="mobile-nav-toggler">
              <span className="icon">
                <img src="./assets/images/icons/menu.png" alt="" />
              </span>
            </div>
          </div>
          <li className="" >
                    <a href="/contact" style={{fontSize:"20px" , border:"1px black solid" , padding:"6px 15px"}}>login</a>
                    {/* <ul>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                      <li>
                        <a href="contact-2.html">Contact 02</a>
                      </li>
                      <li>
                        <a href="contact-3.html">Contact 03</a>
                      </li>
                    </ul> */}
                  </li>




                
          {/* End Outer Box */}
        </div>
      </div>
    </div>
    {/* End Header Lower */}
    {/* Mobile Menu  */}
    <div className="mobile-menu">
      <div className="menu-backdrop" />
      <div className="close-btn">
        <span className="icon far fa-times fa-fw" />
      </div>
      <nav className="menu-box">
        <div className="nav-logo">
          <a href="index-2.html">
            <img src="./assets/images/logo.png" alt="" title="" />
          </a>
        </div>
        {/* Search */}
        <div className="search-box">
          <form
            method="post"
            action="https://themerange.net/html/monic/contact.html"
          >
            <div className="form-group">
              <input
                type="search"
                name="search-field"
                defaultValue=""
                placeholder="SEARCH HERE"
                required=""
              />
              <button type="submit">
                <span className="icon far fa-search fa-fw" />
              </button>
            </div>
          </form>
        </div>
        <div className="menu-outer">
          {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
        </div>
      </nav>
    </div>
    {/* End Mobile Menu */}
  </header>
  {/* End Main Header */}
  {/* Sidebar Cart Item */}
  <div className="xs-sidebar-group info-group">
    <div className="xs-overlay xs-bg-black" />
    <div className="xs-sidebar-widget">
      <div className="sidebar-widget-container">
        <div className="close-button">
          <span className="far fa-times fa-fw" />
        </div>
        <div className="sidebar-textwidget">
          {/* Sidebar Info Content */}
          <div className="sidebar-info-contents">
            <div className="content-inner">
              {/* Title Box */}
              <div className="title-box">
                <h5>
                  Broadband <span>connection</span>
                </h5>
                <div className="price">$15 from free economy shipping</div>
              </div>
              {/* Empty Cart Box */}
              <div className="empty-cart-box">
                {/* No Product */}
                <div className="no-cart">
                  <span className="icon far fa-cart-plus fa-fw" />
                  No products in cart.
                </div>
              </div>
              {/* Lower Box */}
              <div className="lower-box">
                <h5>
                  Popular <span>Suggestions</span>
                </h5>
                {/* Post Block */}
                <div className="post-block">
                  <div className="inner-box">
                    <div className="image">
                      <img src="./assets/images/resource/post-thumb-1.jpg" alt="" />
                    </div>
                    <h6>
                      <a href="#">Free Installation</a>
                    </h6>
                    <div className="rating">
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                    </div>
                    <div className="price-box">$125</div>
                    <a className="theme-btn bag-btn" href="#">
                      add to bag
                    </a>
                  </div>
                </div>
                {/* Post Block */}
                <div className="post-block">
                  <div className="inner-box">
                    <div className="image">
                      <img src="./assets/images/resource/post-thumb-2.jpg" alt="" />
                    </div>
                    <h6>
                      <a href="#">BLACK ECONOMIC EXCELLENCE</a>
                    </h6>
                    <div className="rating">
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                    </div>
                    <div className="price-box">$205</div>
                    <a className="theme-btn bag-btn" href="#">
                      add to bag
                    </a>
                  </div>
                </div>
                {/* Post Block */}
                <div className="post-block">
                  <div className="inner-box">
                    <div className="image">
                      <img src="./assets/images/resource/post-thumb-3.jpg" alt="" />
                    </div>
                    <h6>
                      <a href="#">4K and 8K Quality</a>
                    </h6>
                    <div className="rating">
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                    </div>
                    <div className="price-box">$25</div>
                    <a className="theme-btn bag-btn" href="#">
                      add to bag
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    </div>
  )
}
