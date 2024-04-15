import React from 'react'
import logo from "./img/logo.png"
const Article = () => {
  const Articles = [
    {
      "id": "1",
      "articleimg":"https://images.theconversation.com/files/541753/original/file-20230808-23-3nwz2o.jpg?ixlib=rb-1.1.0&rect=9%2C277%2C1013%2C505&q=45&auto=format&w=668&h=324&fit=crop",
       "authorImg": "https://plus.unsplash.com/premium_photo-1664908253145-be2ce4b4b061?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBwZW9wbGUlMjBtdXNpY3xlbnwwfDF8MHx8fDA%3D",
      "authorName": "Monica Wasll",
      "articleTitle": "Florida’s academic standards distort the contributions that enslaved Africans made to American society",
     "description": "While a Florida curriculum implies that enslaved Africans ‘benefited’ from skills acquired through slavery, history shows they brought knowledge and skills to the US that predate their captivity."
    },
    {
      "id": "2",
      "articleimg":"https://images.theconversation.com/files/535099/original/file-20230630-29-v5vyxp.jpg?ixlib=rb-1.1.0&rect=55%2C4%2C2046%2C2046&q=45&auto=format&w=240&h=240&fit=crop",
       "authorImg": "https://images.unsplash.com/photo-1530785602389-07594beb8b73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhY2slMjBwZW9wbGUlMjBtdXNpY3xlbnwwfDF8MHx8fDA%3D",
      "authorName": "Monica Wasll",
      "articleTitle": " Police treatment in black and white – report on Minneapolis policing is the latest reminder of systemic racial disparities",
     "description": " At a time when Americans celebrated their nation’s independence, it’s clear not every American enjoys the same constitutional rights."
    },  {
      "id": "1",
      "articleimg":"https://images.theconversation.com/files/541753/original/file-20230808-23-3nwz2o.jpg?ixlib=rb-1.1.0&rect=9%2C277%2C1013%2C505&q=45&auto=format&w=668&h=324&fit=crop",
       "authorImg": "https://plus.unsplash.com/premium_photo-1664908253145-be2ce4b4b061?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBwZW9wbGUlMjBtdXNpY3xlbnwwfDF8MHx8fDA%3D",
      "authorName": "Monica Wasll",
      "articleTitle": "Florida’s academic standards distort the contributions that enslaved Africans made to American society",
     "description": "While a Florida curriculum implies that enslaved Africans ‘benefited’ from skills acquired through slavery, history shows they brought knowledge and skills to the US that predate their captivity."
    }
  ];
  

  return (
    <div> 


<>
  {/* About Sidebar */}
  <div className="about-sidebar">
    <div className="gradient-layer" />
    {/* Close Button */}
    <div className="close-sidebar-widget close-button">
      <span className="flaticon-multiply" />
    </div>
    <div className="sidebar-inner">
      <div className="upper-box">
        <div className="image">
          <img src="./assets/images/resource/about-1.jpg" alt="" />
        </div>
        <div className="content-box">
          <h3>
            About <span>Monic</span>
          </h3>
          <div className="text">
            Many desktop Wifi packages &amp; web page editors now use Ipsum
            budgets dipiscing
          </div>
          <ul className="about-one_list">
            <li>Internet with 50 Mbps</li>
            <li>Night Turbo-Speed</li>
            <li>WiFi router &amp; prevention</li>
            <li>Unlimited devices</li>
          </ul>
        </div>
      </div>
      {/* Social Box */}
      <div className="social-box">
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
  {/* End About Sidebar */}
  {/* Page Title */}
  <section
    className="page-title_two"
    style={{ backgroundImage: 
      
      "url(https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFydGljbGV8ZW58MHwwfDB8fHww)"
    , backgroundPosition:"left" ,backgroundPositionY:"bottom"}}
  >
    <div
      className="page-title_two-gradient"
      style={{ backgroundImage: "url(./assets/images/background/pattern-6.png)" }}
    />
    <div className="auto-container">
      <h2>Latest Article</h2>
      <ul className="bread-crumb clearfix">
        <li>
          <a href="/">Home</a>
        </li>
        <li> Article </li>
      </ul>
    </div>
  </section>
  {/* End Page Title */}
  {/* Sidebar Page Container */}
  <div className="sidebar-page-container">
    <div className="auto-container">
      <div className="row clearfix">
        {/* Content Side */}
        <div className="content-side col-lg-8 col-md-12 col-sm-12">
          <div className="blog-classic">
            {/* News Block */}
          { Articles.map((Article, index)=>( <div className="news-block_one">
              <div key={index} className="news-block_one-inner">
                <div className="news-block_one-image">
                  <div className="news-block_one-date">
                    26 <span>oct</span>
                  </div>
                  <a href="blog-detail.html">
                    <img src= {Article.articleimg} alt="" />
                  </a>
                  <div className="news-block_one-author">
                    <div className="news-block_one-author_image">
                      <img src={Article.authorImg} alt="" />
                    </div>
                    {Article.authorName}
                  </div>
                </div>
                <div className="news-block_one-content">
                  <ul className="news-block_one-meta">
                    <li>
                      <span className="icon fas fa-comment fa-fw" />
                      Comments 02
                    </li>
                    <li>
                      <span className="icon fas fa-user fa-fw" />
                      Admin
                    </li>
                  </ul>
                  <h4 className="news-block_one-heading">
                    <a href="blog-detail.html">
                  {Article.articleTitle}
                    </a> 
                  </h4>
                  <div className="news-block_one-text">
                 {Article.description}{" "}
                  </div>
                </div>
              </div>
            </div>))}


{/* News Block */}
            {/* <div className="news-block_one">
              <div className="news-block_one-inner">
                <div className="news-block_one-image">
                  <div className="news-block_one-date">
                    26 <span>oct</span>
                  </div>
                  <a href="blog-detail.html">
                    <img src="https://images.theconversation.com/files/535099/original/file-20230630-29-v5vyxp.jpg?ixlib=rb-1.1.0&rect=55%2C4%2C2046%2C2046&q=45&auto=format&w=240&h=240&fit=crop" alt="" />
                  </a>
                  <div className="news-block_one-author">
                    <div className="news-block_one-author_image">
                      <img src="https://images.unsplash.com/photo-1530785602389-07594beb8b73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhY2slMjBwZW9wbGUlMjBtdXNpY3xlbnwwfDF8MHx8fDA%3D" alt="" />
                    </div>
                    Monica Wasll
                  </div>
                </div>
                <div className="news-block_one-content">
                  <ul className="news-block_one-meta">
                    <li>
                      <span className="icon fas fa-comment fa-fw" />
                      Comments 02
                    </li>
                    <li>
                      <span className="icon fas fa-user fa-fw" />
                      Admin
                    </li>
                  </ul>
                  <h4 className="news-block_one-heading">
                    <a href="blog-detail.html">
                    Police treatment in black and white – report on Minneapolis policing is the latest reminder of systemic racial disparities
                    </a>
                  </h4>
                  <div className="news-block_one-text">
                  At a time when Americans celebrated their nation’s independence, it’s clear not every American enjoys the same constitutional rights.{" "}
                  </div>
                </div>
              </div>
            </div> */}
            {/* News Block */}
            {/* <div className="news-block_one">
              <div className="news-block_one-inner">
                <div className="news-block_one-image">
                  <div className="news-block_one-date">
                    26 <span>oct</span>
                  </div>
                  <a href="blog-detail.html">
                    <img src="https://images.theconversation.com/files/358354/original/file-20200916-24-vtjatd.jpg?ixlib=rb-1.1.0&rect=388%2C0%2C2828%2C2828&q=45&auto=format&w=240&h=240&fit=crop" alt="" />
                  </a>
                  <div className="news-block_one-author">
                    <div className="news-block_one-author_image">
                      <img src="https://images.unsplash.com/photo-1518882570151-157128e78fa1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwcGVvcGxlJTIwbXVzaWN8ZW58MHwxfDB8fHww" alt="" />
                    </div>
                    Monica Wasll
                  </div>
                </div>
                <div className="news-block_one-content">
                  <ul className="news-block_one-meta">
                    <li>
                      <span className="icon fas fa-comment fa-fw" />
                      Comments 02
                    </li>
                    <li>
                      <span className="icon fas fa-user fa-fw" />
                      Admin
                    </li>
                  </ul>
                  <h4 className="news-block_one-heading">
                    <a href="blog-detail.html">
                    How the failure of multiculturalism led to the rise of Black Lives Matter
                    </a>
                  </h4>
                  <div className="news-block_one-text">
                  Without Black Lives Matter the promise of true multiculturalism will continue to remain something of a pipe-dream.{" "}
                  </div>
                </div>
              </div>
            </div> */}
            {/* News Block */}
            {/* <div className="news-block_one">
              <div className="news-block_one-inner">
                <div className="news-block_one-image">
                  <div className="news-block_one-date">
                    26 <span>oct</span>
                  </div>
                  <a href="blog-detail.html">
                    <img src="https://images.theconversation.com/files/395343/original/file-20210415-17-ncvplp.jpg?ixlib=rb-1.1.0&rect=1044%2C0%2C3603%2C3603&q=45&auto=format&w=240&h=240&fit=crop" alt="" />
                  </a>
                  <div className="news-block_one-author">


<div className="news-block_one-author_image">
                      <img src="https://images.theconversation.com/files/313589/original/file-20200204-41495-chjepl.jpg?ixlib=rb-1.1.0&rect=607%2C0%2C2152%2C2152&q=45&auto=format&w=240&h=240&fit=crop" alt="" />
                    </div>
                    Monica Wasll
                  </div>
                </div>
                <div className="news-block_one-content">
                  <ul className="news-block_one-meta">
                    <li>
                      <span className="icon fas fa-comment fa-fw" />
                      Comments 02
                    </li>
                    <li>
                      <span className="icon fas fa-user fa-fw" />
                      Admin
                    </li>
                  </ul>
                  <h4 className="news-block_one-heading">
                    <a href="blog-detail.html">
                    The United States is at risk of an armed anti-police insurgency
                    </a>
                  </h4>
                  <div className="news-block_one-text">
                  The continued killings of Black people at the hands of the police in the United States has contributed to an environment of continued marginalization and oppression.
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          {/* Styled Pagination */}
          <ul className="styled-pagination text-center">
            <li className="next">
              <a href="#">
                <span className="fa fa-angle-double-left" />
              </a>
            </li>
            <li>
              <a href="#" className="active">
                1
              </a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li className="next">
              <a href="#">
                <span className="fa fa-angle-double-right" />
              </a>
            </li>
          </ul>
          {/* End Styled Pagination */}
        </div>
        {/* Sidebar Side */}
        <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
          <aside className="sidebar padding-left">
            {/* Search Widget */}
            <div className="sidebar-widget_two search-box">
              <div className="widget-content">
                <h4 className="sidebar-widget_title">Search Here</h4>
                <form
                  method="post"
                  action="https://themerange.net/html/monic/contact.html"
                >
                  <div className="form-group">
                    <input
                      type="search"
                      name="search-field"
                      defaultValue=""
                      placeholder="Search..."
                      required=""
                    />
                    <button type="submit">
                      <span className="icon fa fa-search" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* Post Widget */}
            <div className="sidebar-widget_two post-widget">
              <div className="widget-content">
                <h4 className="sidebar-widget_title">Latest Post</h4>
                <div className="post">
                  <div className="thumb">
                    <a href="blog-detail.html">
                      <img src="https://images.theconversation.com/files/533247/original/file-20230621-22-uh7sna.jpg?ixlib=rb-1.1.0&rect=790%2C0%2C1998%2C1998&q=45&auto=format&w=240&h=240&fit=crop" alt="" />
                    </a>
                  </div>
                  <h6>
                    <a href="blog-detail.html">
                    Ja Morant shows how a ‘good guy with a gun’ can never be Black{" "}
                    </a>
                  </h6>
                  <div className="post-date">April 20, 2022</div>
                </div>
                <div className="post">
                  <div className="thumb">
                    <a href="blog-detail.html">
                      <img src="https://images.theconversation.com/files/402972/original/file-20210526-21-117ljvx.jpg?ixlib=rb-1.1.0&rect=137%2C0%2C3543%2C3543&q=45&auto=format&w=240&h=240&fit=crop" alt="" />
                    </a>
                  </div>
                  <h6>


<a href="blog-detail.html">Here’s what I tell teachers about how to teach young students about slavery</a>
                  </h6>
                  <div className="post-date">April 20, 2022</div>
                </div>
                <div className="post">
                  <div className="thumb">
                    <a href="blog-detail.html">
                      <img src="https://images.theconversation.com/files/473312/original/file-20220711-21-gukdpa.jpg?ixlib=rb-1.1.0&rect=874%2C228%2C3268%2C3268&q=45&auto=format&w=240&h=240&fit=crop" alt="" />
                    </a>
                  </div>
                  <h6>
                    <a href="blog-detail.html">
                    Climate change is white colonisation of the atmosphere. It’s time to tackle this entrenched racism
                    </a>
                  </h6>
                  <div className="post-date">April 20, 2022</div>
                </div>
              </div>
            </div>
            {/* Service Widget */}
            <div className="sidebar-widget_two category-widget">
              <div className="widget-content">
                <h4 className="sidebar-widget_title">Categories</h4>
                <ul className="service-list_two">
                  <li>
                    <a href="#">Black Lives Matter</a>
                  </li>
                  <li>
                    <a href="#">Black African Wommen</a>
                  </li>
                  <li>
                    <a href="#">Black Music</a>
                  </li>
                  <li>
                    <a href="#">Black Rights</a>
                  </li>
                  <li>
                    <a href="#">Africa &amp; Youth</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Popular Tags */}
            <div className="sidebar-widget_two popular-tags">
              <div className="widget-content">
                <h4 className="sidebar-widget_title">Tag</h4>
                <a href="#">Business</a>
                <a href="#">Africa</a>
                <a href="#">Wommens</a>
                <a href="#">BLM</a>
                <a href="#">Sport</a>
                <a href="#">Jobs</a>
              </div>
            </div>
            {/* Contact Widget */}
            <div className="sidebar-widget_two contact-widget">
              <div
                className="widget-content"
                style={{
                  backgroundImage: "url(./assets/images/background/pattern-7.png)"
                }}
              >
                <div className="logo">
                  <img src={logo} alt="" style={{height:"120px"}} />
                </div>
                <div className="text">Share your thought's here and lets discuss </div>
                {/* Button Box */}
                <div className="contact-widget_button">
                  <a className="btn-style-two theme-btn" href="about.html">
                    <div className="btn-wrap">
                      <span className="text-one">Post Article</span>
                      <span className="text-two">Post Article</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </div>
  {/* CTA Three */}
  
  {/* End CTA Three */}
</>
    </div>
  )
}

export default Article