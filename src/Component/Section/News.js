import React from 'react'

export default function News() {
  return (
    <div>
      <section
  className="news-one"
  style={{ backgroundImage: "url(./assets/images/background/news-one_pattern.png)" }}
>
  <div className="auto-container">
    {/* Sec Title */}
    <div className="sec-title centered">
      <div className="sec-title_title tx-split-text split-in-up">
        Our News &amp; Blog
      </div>
      <h2 className="sec-title_heading tx-split-text split-in-up">
        Discover latest news <br /> and articals
      </h2>
    </div>
    <div className="row clearfix">
      {/* News Block */}
      <div className="news-block_one col-lg-4 col-md-6 col-sm-12">
        <div
          className="news-block_one-inner wow fadeInLeft"
          data-wow-delay="0ms"
          data-wow-duration="1500ms"
        >
          <div className="news-block_one-image">
            <div className="news-block_one-date">
              26 <span>oct</span>
            </div>
            <a href="blog-detail.html">
              <img src="./assets/images/resource/news-1.jpg" alt="" />
            </a>
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
                Why my satelite is better than yours
              </a>
            </h4>
          </div>
        </div>
      </div>
      {/* News Block */}
      <div className="news-block_one col-lg-4 col-md-6 col-sm-12">
        <div
          className="news-block_one-inner wow fadeInUp"
          data-wow-delay="0ms"
          data-wow-duration="1500ms"
        >
          <div className="news-block_one-image">
            <div className="news-block_one-date">
              26 <span>oct</span>
            </div>
            <a href="blog-detail.html">
              <img src="./assets/images/resource/news-2.jpg" alt="" />
            </a>
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
                How to build your broadband connection
              </a>
            </h4>
          </div>
        </div>
      </div>
      {/* News Block */}
      <div className="news-block_one col-lg-4 col-md-6 col-sm-12">
        <div
          className="news-block_one-inner wow fadeInRight"
          data-wow-delay="0ms"
          data-wow-duration="1500ms"
        >
          <div className="news-block_one-image">
            <div className="news-block_one-date">
              26 <span>oct</span>
            </div>
            <a href="blog-detail.html">
              <img src="./assets/images/resource/news-3.jpg" alt="" />
            </a>
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
                Broadband connection needs to everyone life
              </a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  </div>
  )
}
