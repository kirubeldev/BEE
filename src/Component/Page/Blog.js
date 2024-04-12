import React from 'react'
import NavBar from '../Section/NavBar'
import Footer from '../Section/Footer'
import News from '../Section/News'

export default function Blog() {
  return (
    <div>
        <>

        <> <section
  className="page-title_two"
  style={{
    backgroundImage: "url(./assets/images/background/page-title-2.jpg)"
  }}
>
  <div
    className="page-title_two-gradient"
    style={{ backgroundImage: "url(./assets/images/background/pattern-6.png)" }}
  />
  <div className="auto-container">
    <h2>Latest News</h2>
    <ul className="bread-crumb clearfix">
      <li>
        <a href="index-2.html">Home</a>
      </li>
      <li>Blog</li>
    </ul>
  </div>
</section>
    </>

        <News/>
        
        </>
    </div>
  )
}
