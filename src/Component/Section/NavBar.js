import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";
import { useMatch } from "react-router-dom";
export default function NavBar() {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const hamburger = () => {
    setMenu(!menu);
  };
  const closee = () => {
    setMenu(false);
  };
  const [showNestedList, setShowNestedList] = useState(false);

  const handleServiceClick = () => {
    setShowNestedList(!showNestedList);
  };

  const [isNestedVisible, setIsNestedVisible] = useState(false);

  const toggleNestedVisibility = () => {
    setIsNestedVisible(!isNestedVisible);
  };

  const movie = useMatch("/movie");
  const chat = useMatch("/chat");
  const chatm1 = useMatch("/chatm1");
  const chatm2 = useMatch("/chatm2");

  return (
    <div className="mynav" style={{}}>
      <>
        {/* Main Header */}
        <header
          className="main-header header-style-one"
          style={{ zIndex: "999999", backgroundColor: "#fff" }}
        >
          {/* Header Top */}
          {!(chat || chatm1 || chatm2 ) && (
            <div className="header-top" style={{width:"120vw"}}>
              <div className="auto-container">
                <div className="inner-container">
                  <div className="d-flex justify-content-between flex-wrap topp">
                    <ul className="header-list" >
                      <li>
                        <span className="icon fas fa-clock fa-fw" />
                        Mon - Sat: 8:00am - 5:00pm
                      </li>
                      <li>
                        <span className="icon fas fa-envelope fa-fw" />
                        <a href="mailto:michael.masresha@purposeblack.et">
                          michael.masresha@purposeblack.et
                        </a>
                      </li>
                    </ul>
                    {/* Social Box */}
                    <div className="header-social_box" style={{margin:"auto"}}>
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
                        <i className="fa-brands fa-instagram"  />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* Header Lower */}
          {!(chat  || chatm1||chatm2 ) && (
            <div
              className="header-lower"
              style={{ position: movie ? "sticky" : "", top: 0 }}
            >
              <div className="auto-container">
                <div className="inner-container d-flex align-items-center justify-content-between">
                  {/* Logo Box */}
                  <div className="logo-box d-flex align-items-center">
                    <div className="logo">
                      <a href="/">
                        <img
                          src={logo}
                          alt=""
                          title=""
                          width={"90px"}
                          height={"80px"}
                        />
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
                            {/* <ul>
                      <li>
                        <a href="projects.html">Projects</a>
                      </li>
                      <li>
                        <a href="project-detail.html">Project Detail</a>
                      </li>
                    </ul> */}
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
                        Call Us
                        <br />
                        <a href="tel:+251942609556">+(251)-942609556</a>
                      </div>
                    </div>

                    {/* Mobile Navigation Toggler */}
                    <div className="mobile-nav-toggler">
                      <span className="icon">
                        <img
                          src="./assets/images/icons/menu.png"
                          alt=""
                          onClick={() => setMenu(!menu)}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="about-one_button">
              <a className="btn-style-two theme-btn" href="about.html" >
                <div className="btn-wrap">
                  <span className="text-one">Login</span>
                  <span className="text-two">Login</span>
                </div>
              </a>
            </div>

                  {/* End Outer Box */}
                </div>
              </div>
            </div>
          )}
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

        {menu && (
          <nav
            style={{
              position: "fixed",
              borderRadius: "10px 10px 0 0px",
              top: "0",
              right: 0,
              width: "70%",
              background: "#ffffff !important",
              height: "0vh",
              zIndex: 999999999,
            
              //there is a css in the garden css for the background color
            }}
          >
            <div className="myol">
              <ol style={{ listStyle: "none " }}>
                <i
                  class="fa fa-times"
                  aria-hidden="true"
                  style={{
                    position: "absolute ",
                    right: "36px",
                    top:10,
                    fontSize: "37px",
                    color: "white",
                  }}
                  onClick={() => setMenu(false)}
                ></i>
                <div style={{ paddingTop: "60px" }}>
                <i class="fa fa-home" aria-hidden="true"></i>
                  <Link className="link"
                    to="/"
                    onClick={() => setMenu(false)}
                    style={{
                      marginLeft: "10px",
                      color: "white",
                      fontSize: "15px",
                    }}
                  >
                Home 
                  </Link>{" "}
                  <br/>
                  {/* <hr style={{ color: "white", zIndex: "10" }} /> */}
                  <br/>
                  <div style={{marginTop:"5px"}}>
                  <i class="fa fa-users" aria-hidden="true"></i>
                  <Link
                  className="link"
                    onClick={() => setMenu(false)}
                    to="/about"
                    style={{
                      marginLeft: "10px",
                      color: "white",
                      fontSize: "15px",
                    }}
                  >
                    About Us
                  </Link></div>
                  <br/>
                  <div style={{marginTop:"5px"}}>
                  <i class="fa fa-book" aria-hidden="true"></i>
                  <Link
                  className="link"
                    onClick={() => setMenu(false)}
                    to="/article"
                    style={{
                      marginLeft: "10px",
                      color: "white",
                      fontSize: "15px",
                    }}
                  >
                    Article
                  </Link></div>
                  <br/>
                  {/* <hr style={{ color: "white", zIndex: "10" }} /> */}
                 
                  <div style={{marginTop:"5px"}}>
                  <i class="fa fa-comment" aria-hidden="true"></i>
                  <Link
                  className="link"
                    onClick={() => setMenu(false)}
                    to="/chat"
                    style={{
                      marginLeft: "10px",
                      color: "white",
                      fontSize: "15px",
                    }}
                  >
                    Chat Room
                  </Link></div>
                  {/* <hr style={{ color: "white", zIndex: "10" }} /> */}
                  <br/>
                  <div style={{marginTop:"5px"}}>
                  <i class="fa fa-video-camera" aria-hidden="true"></i>

                  <Link
                  className="link"
                    onClick={() => setMenu(false)}
                    to="/movie"
                    style={{
                      marginLeft: "10px",
                      color: "white",
                      fontSize: "15px",
                    }}
                  >
                    movie
                  </Link> </div>
                  <br/>
                 

                  {/* <hr style={{ color: "white", zIndex: "10" }} /> */}
                  <div style={{marginTop:"5px"}}>
                  <i class="fa fa-pied-piper" aria-hidden="true"></i>
                  <Link
                  className="link"
                    onClick={() => setMenu(false)}
                    to="/blogs"
                    style={{
                      marginLeft: "10px",
                      color: "white",
                      fontSize: "15px",
                    }}
                  >
                    Blog
                  </Link></div>
                  <br/>

                  {/* <hr style={{ color: "white", zIndex: "10" }} /> */}
                  <div style={{marginTop:"5px"}}>
                  <i class="fa fa-money" aria-hidden="true"></i>
                  <Link
                  className="link"
                    onClick={() => setMenu(false)}
                    to="/donation"
                    style={{
                      marginLeft: "10px",
                      color: "white",
                      fontSize: "15px",
                    }}
                  >
                    Donation
                  </Link></div>
                  <br/>

                  {/* <hr style={{ color: "white", zIndex: "10" }} /> */}
                  <div style={{marginTop:"5px"}}>
                  <i class="fa fa-phone-square" aria-hidden="true"></i>
                  <Link
                  className="link"
                    onClick={() => setMenu(false)}
                    to="/contact"
                    style={{
                      marginLeft: "10px",
                      color: "white",
                      fontSize: "15px",
                    }}
                  >
                    Contact
                  </Link></div>
                  {/* <hr style={{ color: "white", zIndex: "10" }} /> */}
                </div>
              </ol>

              <div
                style={{
                  maxWidth: "1500px",
                  marginTop: "130px",
                  marginLeft: "40px",
                  color: "white",
                  position: "fixed",
                  bottom: "30px",
                }}
              >
                <li style={{ listStyle: "none" }}>
                  {" "}
                  <i
                    className="fa fa-phone site-text-primary"
                    style={{ color: "#d7a222" }}
                  />{" "}
                  <b className="p-lr5 text-uppercase">Tel: +(251)-942609556</b>{" "}
                </li>
                <br />
                <li style={{ listStyle: "none" }}>
                  <i
                    className="fa fa-envelope site-text-primary"
                    style={{ color: "#d7a222" }}
                  />{" "}
                  <b className="p-lr5 text-uppercase">Email : </b>
                  michael.masresha@purposeblack.et
                </li>
                <br />

                <li style={{ listStyle: "none" }}>
                  <i
                    className="fa fa-location-arrow site-text-primary"
                    style={{ color: "#d7a222" }}
                  />{" "}
                  <b style={{ fontSize: "16px", lineHeight: "40px" }}>
                    LOCATION :
                  </b>
                  Addis Ababa,
                  <br /> Ethiopia, Sengatera Negadwoch Hibret BLDG,
                  <br />
                  5th Floor
                  <br />
                  <br />
                  <a
                    href="https://facebook.com/"
                    style={{
                      marginRight: "20px",
                      fontSize: "25px",
                      marginTop: "15px",
                    }}
                  >
                    <i
                      className="fab fa-facebook-f"
                      style={{ color: "#d7a222" }}
                    />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a
                    href="https://twitter.com/"
                    style={{
                      marginRight: "20px",
                      fontSize: "25px",
                      marginTop: "15px",
                    }}
                  >
                    <i
                      className="fab fa-twitter"
                      aria-hidden="true"
                      style={{ color: "#d7a222" }}
                    />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a
                    href="https://linkedin.com/"
                    style={{
                      marginRight: "20px",
                      fontSize: "25px",
                      marginTop: "15px",
                    }}
                  >
                    <i
                      className="fab fa-linkedin-in"
                      style={{ color: "#d7a222" }}
                    />
                    <span className="sr-only">Linkedin</span>
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    style={{
                      marginRight: "20px",
                      fontSize: "25px",
                      marginTop: "15px",
                    }}
                  >
                    <i
                      className="fab fa-instagram"
                      style={{ color: "#d7a222" }}
                    />
                    <span className="sr-only">Instagram</span>
                  </a>
                </li>
              </div>
            </div>
          </nav>
        )}
      </>
    </div>
  );
}
