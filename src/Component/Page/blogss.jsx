import React from 'react'
 import News from '../Section/News'
const Blogs = () => {
 
   
    

    
     const blog = [ {
      "id":1,
      "blogimg":"https://i1.feedspot.com/200/5021303.jpg?t=1639721134",
      "blogdetail":"Black Enterprise is the premier resource for black entrepreneurs, black-owned businesses, and career, tech, and money content for black people "             
      
     },
     {
      "id":2,
      "blogimg":"https://i1.feedspot.com/200/5287711.jpg?t=1675168724",
      "blogdetail":"Blavity is a tech company for forward thinking Black millennials pushing the boundaries of culture and the status quo "             
      
     },
     {
      "id":3,
      "blogimg":"https://i1.feedspot.com/200/4858766.jpg?t=1622288025",
      "blogdetail":"I'm a millennial girl in the world who spends most of my days working in the corporate world, and my nights and weekends working on this little project of mine that you're reading righ "             
      
     }
    ]
    
    
      return (
        <div>
            <>
    
            <> <section
      className="page-title _two-"
      style={{
        backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVE2iXrIe-OpX-2RmdegJlRQuMetLghjhEBg&s)"
      }}
    >
      <div
        className="page-title_two-gradient"
        style={{ backgroundImage: "url(./assets/images/background/pattern-6.png)" }}
      />
      <div className="auto-container">
        <h2>Latest Blogs</h2>
        <ul className="bread-crumb clearfix">
          <li>
            <a href="index-2.html">Home</a>
          </li>
          <li>Blog</li>
        </ul>
      </div>
    </section>
        </>
    
      
    {/* <News /> */}
        <div className="auto-container">
        {/* Sec Title */}
    
    
    
        <div className="sec-title centered">
          <div className="sec-title_title tx-split-text split-in-up">
            
          </div>
          <h2 className="sec-title_heading tx-split-text split-in-up">
        
          </h2>
        </div>
    
    
        <div className="row clearfix"> 
          {/* News Block */}
    
    
    
          { blog.map((blog, index)=>(
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
                  <img src={blog.blogimg} alt="" />
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
                {blog.blogdetail}
                           </a>
                </h4>
              </div>
            </div>
          </div>))}
    
    
    
    
    
    
          {/* News Block */}
          {/* <div className="news-block_one col-lg-4 col-md-6 col-sm-12">
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
                  <img src="https://i1.feedspot.com/200/5287711.jpg?t=1675168724" alt="" />
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
                  Blavity is a tech company for forward thinking Black millennials pushing the boundaries of culture and the status quo              </a>
                </h4>
              </div>
            </div>
          </div> */}
          {/* News Block */}
          {/* <div className="news-block_one col-lg-4 col-md-6 col-sm-12">
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
                  <img src="https://i1.feedspot.com/200/4858766.jpg?t=1622288025" alt="" />
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
                  I'm a millennial girl in the world who spends most of my days working in the corporate world, and my nights and weekends working on this little project of mine that you're reading right now              </a>
                </h4>
              </div>
            </div>
          </div> */}
          {/* <div className="news-block_one col-lg-4 col-md-6 col-sm-12">
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
                  <img src="https://i1.feedspot.com/200/5021303.jpg?t=1639721134" alt="" />
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
                  Black Enterprise is the premier resource for black entrepreneurs, black-owned businesses, and career, tech, and money content for black people              </a>
                </h4>
              </div>
            </div>
          </div> */}
          {/* News Block */}
          {/* <div className="news-block_one col-lg-4 col-md-6 col-sm-12">
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
                  <img src="https://i1.feedspot.com/200/5287711.jpg?t=1675168724" alt="" />
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
                  Blavity is a tech company for forward thinking Black millennials pushing the boundaries of culture and the status quo              </a>
                </h4>
              </div>
            </div>
          </div> */}
          {/* News Block */}
          {/* <div className="news-block_one col-lg-4 col-md-6 col-sm-12">
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
                  <img src="https://i1.feedspot.com/200/4858766.jpg?t=1622288025" alt="" />
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
                  I'm a millennial girl in the world who spends most of my days working in the corporate world, and my nights and weekends working on this little project of mine that you're reading right now              </a>
                </h4>
              </div>
              
            </div>
            
          </div> */}
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
        </div>
      </div>
    
        
            
            </>
        </div>
      )
    }
    


export default Blogs