import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
const Movie = () => {
  return (
    <div className='body' style={{paddingBottom:"50px", marginBottom:"50px"}}><>
    <span className="screen-darken" />
    {/* loader Start */}
    {/* loader Start */}
   
    {/* loader END */} {/* loader END */}
    <main className="main-content">
      {/*Nav Start*/}
      
      {/*Nav End*/}
      {/*bread-crumb*/}
      {/*bread-crumb*/}
      <div className="iq-banner-thumb-slider">
        <div className="slider">
          <div className="position-relative slider-bg d-flex justify-content-end">
            <div className="position-relative my-auto">
              <div
                className="horizontal_thumb_slider"
                data-swiper="slider-thumbs-ott"
              >
                <div className="banner-thumb-slider-nav">
                  <div
                    className="swiper-container "
                    data-swiper="slider-thumbs-inner-ott"
                  >
                    <div className="swiper-wrapper">
                      <div className="swiper-slide swiper-bg">
                        <div className="block-images position-relative ">
                          <div className="img-box">
                            <img
                              src="https://images.unsplash.com/photo-1484085909914-bd14e593a7cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM0fHxibGFjayUyMHBlb3BsZXxlbnwwfDB8MHx8fDA%3D"
                              className="img-fluid"
                              alt=""
                              loading="lazy"
                            />
                            <div className="block-description ps-3">
                              <h6 className="iq-title fw-500 mb-0">The Hunter</h6>
                              <span className="fs-12">2 hr 6 minute</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide swiper-bg">
                        <div className="block-images position-relative ">
                          <div className="img-box">
                            <img
                              src="asset/images/movies/ott2.html"
                              className="img-fluid"
                              alt=""
                              loading="lazy"
                            />
                            <div className="block-description">
                              <h6 className="iq-title fw-500 mb-0">
                                The Mandalorian
                              </h6>
                              <span className="fs-12">2 hr 14 minute</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide swiper-bg">
                        <div className="block-images position-relative ">
                          <div className="img-box">
                            <img
                              src="asset/images/movies/ott3.html"
                              className="img-fluid"
                              alt=""
                              loading="lazy"
                            />
                            <div className="block-description">
                              <h6 className="iq-title fw-500 mb-0">
                                Better call saul
                              </h6>
                              <span className="fs-12">2 hr 55 minute</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slider-prev swiper-button">
                  {/* <FontAwesomeIcon icon={faArrowLeft} /> */}
                  </div>
                  <div className="slider-next swiper-button">
                    <i className="iconly-Arrow-Right-2 icli" />
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-images" data-swiper="slider-images-ott">
              <div
                className="swiper-container"
                data-swiper="slider-images-inner-ott"
              >
                <div className="swiper-wrapper m-0">
                  <div className="swiper-slide p-0">
                    <div className="slider--image block-images">
                      <img
                        src="asset/images/movies/ott1.html"
                        loading="lazy"
                        alt="banner"
                      />
                    </div>
                    <div className="description">
                      <div className="row align-items-center h-100">
                        <div className="col-lg-6 col-md-12">
                          <div className="slider-content">
                            <div className="d-flex align-items-center RightAnimate mb-3">
                              <span className="badge rounded-0 text-dark text-uppercase px-3 py-2 me-3 bg-white mr-3">
                                Pg
                              </span>
                              <ul className="p-0 mb-0 list-inline d-flex flex-wrap align-items-center movie-tag">
                                <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                                  <a
                                    href="view-all-movie.html"
                                    className="text-decoration-none"
                                  >
                                    Adventure
                                  </a>
                                </li>
                                <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                                  <a
                                    href="view-all-movie.html"
                                    className="text-decoration-none"
                                  >
                                    Thriller
                                  </a>
                                </li>
                                <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                                  <a
                                    href="view-all-movie.html"
                                    className="text-decoration-none"
                                  >
                                    Drama
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h1 className="texture-text big-font letter-spacing-1 line-count-1 text-capitalize RightAnimate-two">
                              {" "}
                              The Hunter{" "}
                            </h1>
                            <p className="line-count-3 RightAnimate-two">
                              After the death of their father, two siblings fight
                              for the throne, thereby causing a civil war known as
                              the Dance of the Dragons. Rhaenyra tries to hold the
                              realm together as the tension rises following a
                              tragic loss. Meanwhile, Daemon prepares for war.
                            </p>
                            <div className="d-flex flex-wrap align-items-center gap-3 RightAnimate-three">
                              <div className="slider-ratting d-flex align-items-center">
                                <ul className="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                                  <li>
                                    <i
                                      className="fa fa-star"
                                      aria-hidden="true"
                                    />
                                  </li>
                                </ul>
                                <span className="text-white ms-2 font-size-14 fw-500">
                                  4.3/5
                                </span>
                                <span className="ms-2">
                                  <img
                                    src="asset/images/movies/imdb-logo.svg"
                                    alt="imdb logo"
                                    className="img-fluid"
                                  />
                                </span>
                              </div>
                              <span className="font-size-14 fw-500">
                                2 Hr : 6 Mins
                              </span>
                              <div className="text-primary font-size-14 fw-500 text-capitalize">
                                genres:{" "}
                                <a
                                  href="view-all-movie.html"
                                  className="text-decoration-none ms-1"
                                >
                                  Drama
                                </a>
                              </div>
                              <div className="text-primary font-size-14 fw-500 text-capitalize">
                                Starting:{" "}
                                <a
                                  href="person-detail.html"
                                  className="text-decoration-none ms-1"
                                >
                                  Jeffrey Silver
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="RightAnimate-four">
                            <div className="iq-button">
                              <a
                                href="movie-detail.html"
                                className="btn text-uppercase position-relative"
                              >
                                <span className="button-text">stream now</span>
                                <i className="fa-solid fa-play" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide p-0">
                    <div className="slider--image block-images">
                      <img
                        src="asset/images/movies/ott2.html"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="description">
                      <div className="row align-items-center h-100">
                        <div className="col-lg-6 col-md-12">
                          <div className="slider-content">
                            <div className="d-flex align-items-center RightAnimate mb-3">
                              <span className="badge rounded-0 text-dark text-uppercase px-3 py-2 me-3 bg-white mr-3">
                                NC-17
                              </span>
                              <ul className="p-0 mb-0 list-inline d-flex flex-wrap align-items-center movie-tag">
                                <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                                  <a
                                    href="view-all-movie.html"
                                    className="text-decoration-none"
                                  >
                                    Animation
                                  </a>
                                </li>
                                <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                                  <a
                                    href="view-all-movie.html"
                                    className="text-decoration-none"
                                  >
                                    Sci-Fi
                                  </a>
                                </li>
                                <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                                  <a
                                    href="view-all-movie.html"
                                    className="text-decoration-none"
                                  >
                                    Action
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h1 className="texture-text big-font letter-spacing-1 line-count-1 text-capitalize RightAnimate-two">
                              {" "}
                              The Mandalorian{" "}
                            </h1>
                            <p className="line-count-3 RightAnimate-two">
                              After the fall of the Galactic Empire, a lone
                              gunfighter makes his way through the outer reaches
                              of the lawless galaxy he show follows the adventures
                              of a lone Mandalorian bounty hunter, Din Djarin, as
                              he navigates the outer reaches of the galaxy, far
                              from the authority of the New Republic.
                            </p>
                            <div className="d-flex flex-wrap align-items-center gap-3 RightAnimate-three">
                              <div className="slider-ratting d-flex align-items-center">
                                <ul className="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                                  <li>
                                    <i
                                      className="fa fa-star"
                                      aria-hidden="true"
                                    />
                                  </li>
                                </ul>
                                <span className="text-white ms-2 font-size-14 fw-500">
                                  4.3/5
                                </span>
                              </div>
                              <span className="font-size-14 fw-500">
                                2 Hr : 14 Mins
                              </span>
                              <div className="text-primary font-size-14 fw-500 text-capitalize">
                                genres:{" "}
                                <a
                                  href="view-all-movie.html"
                                  className="text-decoration-none ms-1"
                                >
                                  Sci-Fi
                                </a>
                              </div>
                              <div className="text-primary font-size-14 fw-500 text-capitalize">
                                Starting:
                                <a
                                  href="person-detail.html"
                                  className="text-decoration-none ms-1"
                                >
                                  James Chinlund
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="RightAnimate-four">
                            <div className="iq-button">
                              <a
                                href="movie-detail.html"
                                className="btn text-uppercase position-relative"
                              >
                                <span className="button-text">stream now</span>
                                <i className="fa-solid fa-play" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide p-0">
                    <div className="slider--image block-images">
                      <img
                        src="asset/images/movies/ott3.html"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="description">
                      <div className="row align-items-center h-100">
                        <div className="col-lg-6 col-md-12">
                          <div className="slider-content">
                            <div className="d-flex align-items-center RightAnimate mb-3">
                              <span className="badge rounded-0 text-dark text-uppercase px-3 py-2 me-3 bg-white mr-3">
                                G
                              </span>
                              <ul className="p-0 mb-0 list-inline d-flex flex-wrap align-items-center movie-tag">
                                <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                                  <a
                                    href="view-all-movie.html"
                                    className="text-decoration-none"
                                  >
                                    History
                                  </a>
                                </li>
                                <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                                  <a
                                    href="view-all-movie.html"
                                    className="text-decoration-none"
                                  >
                                    Action
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h1 className="texture-text big-font letter-spacing-1 line-count-1 text-capitalize RightAnimate-two">
                              {" "}
                              Better call saul{" "}
                            </h1>
                            <p className="line-count-3 RightAnimate-two">
                              Ex-con artist Jimmy McGill turns into a small-time
                              attorney and goes through a series of trials and
                              tragedies, as he transforms into his alter ego Saul
                              Goodman, a morally challenged criminal lawyer.
                            </p>
                            <div className="d-flex flex-wrap align-items-center gap-3 RightAnimate-three">
                              <div className="slider-ratting d-flex align-items-center">
                                <ul className="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                                  <li>
                                    <i
                                      className="fa fa-star"
                                      aria-hidden="true"
                                    />
                                  </li>
                                </ul>
                              </div>
                              <span className="font-size-14 fw-500">
                                2 Hr : 55 Mins
                              </span>
                              <div className="text-primary font-size-14 fw-500 text-capitalize">
                                genres:{" "}
                                <a
                                  href="view-all-movie.html"
                                  className="text-decoration-none ms-1"
                                >
                                  horror
                                </a>
                              </div>
                              <div className="text-primary font-size-14 fw-500 text-capitalize">
                                Starting:{" "}
                                <a href="#" className="text-decoration-none ms-1">
                                  Brenda Chapman
                                </a>
                                <span className="text-body">,</span>
                                <a
                                  href="person-detail.html"
                                  className="text-decoration-none ms-1"
                                >
                                  Caleb Deschannelr
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="RightAnimate-four">
                            <div className="iq-button">
                              <a
                                href="movie-detail.html"
                                className="btn text-uppercase position-relative"
                              >
                                <span className="button-text">stream now</span>
                                <i className="fa-solid fa-play" />
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
          </div>
        </div>
      </div>
      <section className="continue-watching-block section-padding-top">
        <div className="container-fluid">
          <div className="overflow-hidden">
            <div className="d-flex align-items-center justify-content-between px-md-3 px-1 mb-4">
              <h5 className="main-title text-capitalize mb-0">
                continue watching
              </h5>
            </div>
            <div
              className="position-relative swiper swiper-card"
              data-slide={5}
              data-laptop={5}
              data-tab={3}
              data-mobile={2}
              data-mobile-sm={2}
              data-autoplay="false"
              data-loop="false"
              data-navigation="true"
              data-pagination="true"
            >
              <ul className="p-0 swiper-wrapper m-0  list-inline">
                <li className="swiper-slide">
                  <div className="iq-watching-block">
                    <div className="block-images position-relative">
                      <div className="iq-image-box overly-images">
                        <a href="movie-detail.html" className="d-block">
                          <img
                            src="asset/images/continue-watch/01.html"
                            alt="movie-card"
                            className="img-fluid object-cover w-100 d-block border-0"
                          />
                        </a>
                      </div>
                      <div className="iq-preogress">
                        <span className="data-left-timing font-size-14 fw-500 text-lowercase">
                          70 of 230 m
                        </span>
                        <div
                          className="progress"
                          role="progressbar"
                          aria-label="Example 2px high"
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ height: 1 }}
                        >
                          <div
                            className="progress-bar"
                            style={{ width: "50%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                </li>
                <li className="swiper-slide">
                  <div className="iq-watching-block">
                    <div className="block-images position-relative">
                      <div className="iq-image-box overly-images">
                        <a href="movie-detail.html" className="d-block">
                          <img
                            src="asset/images/continue-watch/02.html"
                            alt="movie-card"
                            className="img-fluid object-cover w-100 d-block border-0"
                          />
                        </a>
                      </div>
                      <div className="iq-preogress">
                        <span className="data-left-timing font-size-14 fw-500 text-lowercase">
                          120 of 130 m
                        </span>
                        <div
                          className="progress"
                          role="progressbar"
                          aria-label="Example 2px high"
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ height: 1 }}
                        >
                          <div
                            className="progress-bar"
                            style={{ width: "30%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                </li>
                <li className="swiper-slide">
                  <div className="iq-watching-block">
                    <div className="block-images position-relative">
                      <div className="iq-image-box overly-images">
                        <a href="movie-detail.html" className="d-block">
                          <img
                            src="asset/images/continue-watch/03.html"
                            alt="movie-card"
                            className="img-fluid object-cover w-100 d-block border-0"
                          />
                        </a>
                      </div>
                      <div className="iq-preogress">
                        <span className="data-left-timing font-size-14 fw-500 text-lowercase">
                          60 of 134 m
                        </span>
                        <div
                          className="progress"
                          role="progressbar"
                          aria-label="Example 2px high"
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ height: 1 }}
                        >
                          <div
                            className="progress-bar"
                            style={{ width: "90%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                </li>
                <li className="swiper-slide">
                  <div className="iq-watching-block">
                    <div className="block-images position-relative">
                      <div className="iq-image-box overly-images">
                        <a href="movie-detail.html" className="d-block">
                          <img
                            src="asset/images/continue-watch/04.html"
                            alt="movie-card"
                            className="img-fluid object-cover w-100 d-block border-0"
                          />
                        </a>
                      </div>
                      <div className="iq-preogress">
                        <span className="data-left-timing font-size-14 fw-500 text-lowercase">
                          60 of 134 m
                        </span>
                        <div
                          className="progress"
                          role="progressbar"
                          aria-label="Example 2px high"
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ height: 1 }}
                        >
                          <div
                            className="progress-bar"
                            style={{ width: "20%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                </li>
                <li className="swiper-slide">
                  <div className="iq-watching-block">
                    <div className="block-images position-relative">
                      <div className="iq-image-box overly-images">
                        <a href="movie-detail.html" className="d-block">
                          <img
                            src="asset/images/continue-watch/05.html"
                            alt="movie-card"
                            className="img-fluid object-cover w-100 d-block border-0"
                          />
                        </a>
                      </div>
                      <div className="iq-preogress">
                        <span className="data-left-timing font-size-14 fw-500 text-lowercase">
                          45 of 157 m
                        </span>
                        <div
                          className="progress"
                          role="progressbar"
                          aria-label="Example 2px high"
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ height: 1 }}
                        >
                          <div
                            className="progress-bar"
                            style={{ width: "100%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                </li>
                <li className="swiper-slide">
                  <div className="iq-watching-block">
                    <div className="block-images position-relative">
                      <div className="iq-image-box overly-images">
                        <a href="movie-detail.html" className="d-block">
                          <img
                            src="asset/images/continue-watch/06.html"
                            alt="movie-card"
                            className="img-fluid object-cover w-100 d-block border-0"
                          />
                        </a>
                      </div>
                      <div className="iq-preogress">
                        <span className="data-left-timing font-size-14 fw-500 text-lowercase">
                          70 of 230 m
                        </span>
                        <div
                          className="progress"
                          role="progressbar"
                          aria-label="Example 2px high"
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ height: 1 }}
                        >
                          <div
                            className="progress-bar"
                            style={{ width: "100%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                </li>
              </ul>
              <div className="swiper-button swiper-button-next" />
              <div className="swiper-button swiper-button-prev" />
            </div>
          </div>
        </div>
      </section>
      <div className="top-ten-block">
        <div className="container-fluid">
          <section className="overflow-hidden">
            <div className="d-flex align-items-center justify-content-between px-md-3 px-1 mb-4">
              <h5 className="main-title text-capitalize mb-0">
                top ten movies to watch
              </h5>
              <a
                href="view-all-movie.html"
                className="text-primary iq-view-all text-decoration-none flex-none"
              >
                View All
              </a>
            </div>
            <div
              className="position-relative swiper swiper-card iq-top-ten-block-slider"
              data-slide={6}
              data-laptop={6}
              data-tab={3}
              data-mobile={2}
              data-mobile-sm={2}
              data-autoplay="false"
              data-loop="false"
              data-navigation="true"
              data-pagination="true"
            >
              <ul className="p-0 swiper-wrapper mb-5 list-inline">
                <li className="swiper-slide">
                  <div className="iq-top-ten-block">
                    <div className="block-image position-relative">
                      <div className="img-box">
                        <a className="overly-images" href="movie-detail.html">
                          <img
                            src="asset/images/top-ten-number/01.html"
                            alt="movie-card"
                            className="img-fluid object-cover"
                          />
                        </a>
                        <span className="top-ten-numbers texture-text">1</span>
                      </div>
                    </div>
                  </div>{" "}
                </li>
                <li className="swiper-slide">
                  <div className="iq-top-ten-block">
                    <div className="block-image position-relative">
                      <div className="img-box">
                        <a className="overly-images" href="movie-detail.html">
                          <img
                            src="asset/images/top-ten-number/02.html"
                            alt="movie-card"
                            className="img-fluid object-cover"
                          />
                        </a>
                        <span className="top-ten-numbers texture-text">2</span>
                      </div>
                    </div>
                  </div>{" "}
                </li>
                <li className="swiper-slide">
                  <div className="iq-top-ten-block">
                    <div className="block-image position-relative">
                      <div className="img-box">
                        <a className="overly-images" href="movie-detail.html">
                          <img
                            src="asset/images/top-ten-number/03.html"
                            alt="movie-card"
                            className="img-fluid object-cover"
                          />
                        </a>
                        <span className="top-ten-numbers texture-text">3</span>
                      </div>
                    </div>
                  </div>{" "}
                </li>
                <li className="swiper-slide">
                  <div className="iq-top-ten-block">
                    <div className="block-image position-relative">
                      <div className="img-box">
                        <a className="overly-images" href="movie-detail.html">
                          <img
                            src="asset/images/top-ten-number/04.html"
                            alt="movie-card"
                            className="img-fluid object-cover"
                          />
                        </a>
                        <span className="top-ten-numbers texture-text">4</span>
                      </div>
                    </div>
                  </div>{" "}
                </li>
                <li className="swiper-slide">
                  <div className="iq-top-ten-block">
                    <div className="block-image position-relative">
                      <div className="img-box">
                        <a className="overly-images" href="movie-detail.html">
                          <img
                            src="asset/images/top-ten-number/05.html"
                            alt="movie-card"
                            className="img-fluid object-cover"
                          />
                        </a>
                        <span className="top-ten-numbers texture-text">5</span>
                      </div>
                    </div>
                  </div>{" "}
                </li>
                <li className="swiper-slide">
                  <div className="iq-top-ten-block">
                    <div className="block-image position-relative">
                      <div className="img-box">
                        <a className="overly-images" href="movie-detail.html">
                          <img
                            src="asset/images/top-ten-number/06.html"
                            alt="movie-card"
                            className="img-fluid object-cover"
                          />
                        </a>
                        <span className="top-ten-numbers texture-text">6</span>
                      </div>
                    </div>
                  </div>{" "}
                </li>
                <li className="swiper-slide">
                  <div className="iq-top-ten-block">
                    <div className="block-image position-relative">
                      <div className="img-box">
                        <a className="overly-images" href="movie-detail.html">
                          <img
                            src="asset/images/top-ten-number/07.html"
                            alt="movie-card"
                            className="img-fluid object-cover"
                          />
                        </a>
                        <span className="top-ten-numbers texture-text">7</span>
                      </div>
                    </div>
                  </div>{" "}
                </li>
                <li className="swiper-slide">
                  <div className="iq-top-ten-block">
                    <div className="block-image position-relative">
                      <div className="img-box">
                        <a className="overly-images" href="movie-detail.html">
                          <img
                            src="asset/images/top-ten-number/08.html"
                            alt="movie-card"
                            className="img-fluid object-cover"
                          />
                        </a>
                        <span className="top-ten-numbers texture-text">8</span>
                      </div>
                    </div>
                  </div>{" "}
                </li>
                <li className="swiper-slide">
                  <div className="iq-top-ten-block">
                    <div className="block-image position-relative">
                      <div className="img-box">
                        <a className="overly-images" href="movie-detail.html">
                          <img
                            src="asset/images/top-ten-number/09.html"
                            alt="movie-card"
                            className="img-fluid object-cover"
                          />
                        </a>
                        <span className="top-ten-numbers texture-text">9</span>
                      </div>
                    </div>
                  </div>{" "}
                </li>
                <li className="swiper-slide">
                  <div className="iq-top-ten-block">
                    <div className="block-image position-relative">
                      <div className="img-box">
                        <a className="overly-images" href="movie-detail.html">
                          <img
                            src="asset/images/top-ten-number/10.html"
                            alt="movie-card"
                            className="img-fluid object-cover"
                          />
                        </a>
                        <span className="top-ten-numbers texture-text">10</span>
                      </div>
                    </div>
                  </div>{" "}
                </li>
              </ul>
              <div className="swiper-button swiper-button-next" />
              <div className="swiper-button swiper-button-prev" />
            </div>
          </section>
        </div>
      </div>
      <div className="streamit-block">
        <div className="container-fluid">
          <div className="overflow-hidden">
            <div className="d-flex align-items-center justify-content-between px-md-3 px-1 my-4">
              <h5 className="main-title text-capitalize mb-0">
                Only on Streamit
              </h5>
              <a
                href="view-all-movie.html"
                className="text-primary iq-view-all text-decoration-none flex-none"
              >
                View All
              </a>
            </div>
            <div className="card-style-slider">
              <div
                className="position-relative swiper swiper-card"
                data-slide={6}
                data-laptop={6}
                data-tab={3}
                data-mobile={2}
                data-mobile-sm={2}
                data-autoplay="false"
                data-loop="true"
                data-navigation="true"
                data-pagination="true"
              >
                <ul className="p-0 swiper-wrapper m-0  list-inline">
                  <li className="swiper-slide">
                    <div className="iq-card card-hover">
                      <div className="block-images position-relative w-100">
                        <div className="img-box w-100">
                          <a
                            href="movie-detail.html"
                            className="position-absolute top-0 bottom-0 start-0 end-0"
                          />
                          <img
                            src="asset/images/movies/related/01.html"
                            alt="movie-card"
                            className="img-fluid object-cover w-100 d-block border-0"
                          />
                        </div>
                        <div className="card-description with-transition">
                          <div className="cart-content">
                            <div className="content-left">
                              <h5 className="iq-title text-capitalize">
                                <a href="movie-detail.html">giikre</a>
                              </h5>
                              <div className="movie-time d-flex align-items-center my-2">
                                <span className="movie-time-text font-normal">
                                  2hr : 12mins
                                </span>
                              </div>
                            </div>
                            <div className="watchlist">
                              <a className="watch-list-not" href="playlist.html">
                                <svg
                                  width={10}
                                  height={10}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon-10"
                                >
                                  <path
                                    d="M12 4V20M20 12H4"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <span className="watchlist-label">
                                  {" "}
                                  Watchlist{" "}
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="block-social-info align-items-center">
                          <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fas fa-share-alt" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <a href="#" target="_blank">
                                      <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#" target="_blank">
                                      <i className="fab fa-twitter" />
                                    </a>
                                    <a href="#">
                                      <i className="fas fa-link" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fa-regular fa-heart" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <span>+51</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="iq-button">
                            <a
                              href="movie-detail.html"
                              className="btn text-uppercase position-relative rounded-circle"
                            >
                              <i className="fa-solid fa-play ms-0" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="swiper-slide">
                    <div className="iq-card card-hover">
                      <div className="block-images position-relative w-100">
                        <div className="img-box w-100">
                          <a
                            href="movie-detail.html"
                            className="position-absolute top-0 bottom-0 start-0 end-0"
                          />
                          <img
                            src="asset/images/movies/related/02.html"
                            alt="movie-card"
                            className="img-fluid object-cover w-100 d-block border-0"
                          />
                        </div>
                        <div className="card-description with-transition">
                          <div className="cart-content">
                            <div className="content-left">
                              <h5 className="iq-title text-capitalize">
                                <a href="movie-detail.html">YoShi</a>
                              </h5>
                              <div className="movie-time d-flex align-items-center my-2">
                                <span className="movie-time-text font-normal">
                                  1hr : 22mins
                                </span>
                              </div>
                            </div>
                            <div className="watchlist">
                              <a className="watch-list-not" href="playlist.html">
                                <svg
                                  width={10}
                                  height={10}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon-10"
                                >
                                  <path
                                    d="M12 4V20M20 12H4"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <span className="watchlist-label">
                                  {" "}
                                  Watchlist{" "}
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="block-social-info align-items-center">
                          <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fas fa-share-alt" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <a href="#" target="_blank">
                                      <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#" target="_blank">
                                      <i className="fab fa-twitter" />
                                    </a>
                                    <a href="#">
                                      <i className="fas fa-link" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fa-regular fa-heart" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <span>+51</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="iq-button">
                            <a
                              href="movie-detail.html"
                              className="btn text-uppercase position-relative rounded-circle"
                            >
                              <i className="fa-solid fa-play ms-0" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="swiper-slide">
                    <div className="iq-card card-hover">
                      <div className="block-images position-relative w-100">
                        <div className="img-box w-100">
                          <a
                            href="movie-detail.html"
                            className="position-absolute top-0 bottom-0 start-0 end-0"
                          />
                          <img
                            src="asset/images/movies/related/03.html"
                            alt="movie-card"
                            className="img-fluid object-cover w-100 d-block border-0"
                          />
                        </div>
                        <div className="card-description with-transition">
                          <div className="cart-content">
                            <div className="content-left">
                              <h5 className="iq-title text-capitalize">
                                <a href="movie-detail.html">We Gare</a>
                              </h5>
                              <div className="movie-time d-flex align-items-center my-2">
                                <span className="movie-time-text font-normal">
                                  1hr : 30mins
                                </span>
                              </div>
                            </div>
                            <div className="watchlist">
                              <a className="watch-list-not" href="playlist.html">
                                <svg
                                  width={10}
                                  height={10}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon-10"
                                >
                                  <path
                                    d="M12 4V20M20 12H4"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <span className="watchlist-label">
                                  {" "}
                                  Watchlist{" "}
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="block-social-info align-items-center">
                          <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fas fa-share-alt" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <a href="#" target="_blank">
                                      <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#" target="_blank">
                                      <i className="fab fa-twitter" />
                                    </a>
                                    <a href="#">
                                      <i className="fas fa-link" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fa-regular fa-heart" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <span>+51</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="iq-button">
                            <a
                              href="movie-detail.html"
                              className="btn text-uppercase position-relative rounded-circle"
                            >
                              <i className="fa-solid fa-play ms-0" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="swiper-slide">
                    <div className="iq-card card-hover">
                      <div className="block-images position-relative w-100">
                        <div className="img-box w-100">
                          <a
                            href="movie-detail.html"
                            className="position-absolute top-0 bottom-0 start-0 end-0"
                          />
                          <img
                            src="asset/images/movies/related/04.html"
                            alt="movie-card"
                            className="img-fluid object-cover w-100 d-block border-0"
                          />
                        </div>
                        <div className="card-description with-transition">
                          <div className="cart-content">
                            <div className="content-left">
                              <h5 className="iq-title text-capitalize">
                                <a href="movie-detail.html">Avengers</a>
                              </h5>
                              <div className="movie-time d-flex align-items-center my-2">
                                <span className="movie-time-text font-normal">
                                  1hr : 45mins
                                </span>
                              </div>
                            </div>
                            <div className="watchlist">
                              <a className="watch-list-not" href="playlist.html">
                                <svg
                                  width={10}
                                  height={10}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon-10"
                                >
                                  <path
                                    d="M12 4V20M20 12H4"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <span className="watchlist-label">
                                  {" "}
                                  Watchlist{" "}
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="block-social-info align-items-center">
                          <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fas fa-share-alt" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <a href="#" target="_blank">
                                      <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#" target="_blank">
                                      <i className="fab fa-twitter" />
                                    </a>
                                    <a href="#">
                                      <i className="fas fa-link" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fa-regular fa-heart" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <span>+51</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="iq-button">
                            <a
                              href="movie-detail.html"
                              className="btn text-uppercase position-relative rounded-circle"
                            >
                              <i className="fa-solid fa-play ms-0" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="swiper-slide">
                    <div className="iq-card card-hover">
                      <div className="block-images position-relative w-100">
                        <div className="img-box w-100">
                          <a
                            href="movie-detail.html"
                            className="position-absolute top-0 bottom-0 start-0 end-0"
                          />
                          <img
                            src="asset/images/movies/related/05.html"
                            alt="movie-card"
                            className="img-fluid object-cover w-100 d-block border-0"
                          />
                        </div>
                        <div className="card-description with-transition">
                          <div className="cart-content">
                            <div className="content-left">
                              <h5 className="iq-title text-capitalize">
                                <a href="movie-detail.html">Chosfies</a>
                              </h5>
                              <div className="movie-time d-flex align-items-center my-2">
                                <span className="movie-time-text font-normal">
                                  1hr : 30mins
                                </span>
                              </div>
                            </div>
                            <div className="watchlist">
                              <a className="watch-list-not" href="playlist.html">
                                <svg
                                  width={10}
                                  height={10}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon-10"
                                >
                                  <path
                                    d="M12 4V20M20 12H4"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <span className="watchlist-label">
                                  {" "}
                                  Watchlist{" "}
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="block-social-info align-items-center">
                          <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fas fa-share-alt" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <a href="#" target="_blank">
                                      <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#" target="_blank">
                                      <i className="fab fa-twitter" />
                                    </a>
                                    <a href="#">
                                      <i className="fas fa-link" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fa-regular fa-heart" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <span>+51</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="iq-button">
                            <a
                              href="movie-detail.html"
                              className="btn text-uppercase position-relative rounded-circle"
                            >
                              <i className="fa-solid fa-play ms-0" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="swiper-slide">
                    <div className="iq-card card-hover">
                      <div className="block-images position-relative w-100">
                        <div className="img-box w-100">
                          <a
                            href="movie-detail.html"
                            className="position-absolute top-0 bottom-0 start-0 end-0"
                          />
                          <img
                            src="asset/images/movies/related/06.html"
                            alt="movie-card"
                            className="img-fluid object-cover w-100 d-block border-0"
                          />
                        </div>
                        <div className="card-description with-transition">
                          <div className="cart-content">
                            <div className="content-left">
                              <h5 className="iq-title text-capitalize">
                                <a href="movie-detail.html">Tf Oaler</a>
                              </h5>
                              <div className="movie-time d-flex align-items-center my-2">
                                <span className="movie-time-text font-normal">
                                  1hr : 30mins
                                </span>
                              </div>
                            </div>
                            <div className="watchlist">
                              <a className="watch-list-not" href="playlist.html">
                                <svg
                                  width={10}
                                  height={10}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon-10"
                                >
                                  <path
                                    d="M12 4V20M20 12H4"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <span className="watchlist-label">
                                  {" "}
                                  Watchlist{" "}
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="block-social-info align-items-center">
                          <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fas fa-share-alt" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <a href="#" target="_blank">
                                      <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#" target="_blank">
                                      <i className="fab fa-twitter" />
                                    </a>
                                    <a href="#">
                                      <i className="fas fa-link" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fa-regular fa-heart" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <span>+51</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="iq-button">
                            <a
                              href="movie-detail.html"
                              className="btn text-uppercase position-relative rounded-circle"
                            >
                              <i className="fa-solid fa-play ms-0" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="swiper-slide">
                    <div className="iq-card card-hover">
                      <div className="block-images position-relative w-100">
                        <div className="img-box w-100">
                          <a
                            href="movie-detail.html"
                            className="position-absolute top-0 bottom-0 start-0 end-0"
                          />
                          <img
                            src="asset/images/movies/related/07.html"
                            alt="movie-card"
                            className="img-fluid object-cover w-100 d-block border-0"
                          />
                        </div>
                        <div className="card-description with-transition">
                          <div className="cart-content">
                            <div className="content-left">
                              <h5 className="iq-title text-capitalize">
                                <a href="movie-detail.html">Another Danger</a>
                              </h5>
                              <div className="movie-time d-flex align-items-center my-2">
                                <span className="movie-time-text font-normal">
                                  1hr : 30mins
                                </span>
                              </div>
                            </div>
                            <div className="watchlist">
                              <a className="watch-list-not" href="playlist.html">
                                <svg
                                  width={10}
                                  height={10}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon-10"
                                >
                                  <path
                                    d="M12 4V20M20 12H4"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <span className="watchlist-label">
                                  {" "}
                                  Watchlist{" "}
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="block-social-info align-items-center">
                          <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fas fa-share-alt" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <a href="#" target="_blank">
                                      <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#" target="_blank">
                                      <i className="fab fa-twitter" />
                                    </a>
                                    <a href="#">
                                      <i className="fas fa-link" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fa-regular fa-heart" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <span>+51</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="iq-button">
                            <a
                              href="movie-detail.html"
                              className="btn text-uppercase position-relative rounded-circle"
                            >
                              <i className="fa-solid fa-play ms-0" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="swiper-button swiper-button-next" />
                <div className="swiper-button swiper-button-prev" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="streamit-card-height-block d-none">
        <div className="container-fluid">
          <div className="overflow-hidden">
            <div className="d-flex align-items-center justify-content-between px-md-3 px-1 my-4">
              <h5 className="main-title text-capitalize mb-0">
                Only on Streamit
              </h5>
              <a
                href="view-all-movie.html"
                className="text-primary iq-view-all text-decoration-none flex-none"
              >
                View All
              </a>
            </div>
            <div className="card-style-slider">
              <div
                className="position-relative swiper swiper-card"
                data-slide={6}
                data-laptop={6}
                data-tab={3}
                data-mobile={2}
                data-mobile-sm={2}
                data-autoplay="false"
                data-loop="true"
                data-navigation="true"
                data-pagination="true"
              >
                <ul className="p-0 swiper-wrapper m-0  list-inline">
                  <li className="swiper-slide">
                    <div className="iq-card card-hover iq-card-style-2">
                      <div className="block-images position-relative w-100">
                        <div className="img-box w-100">
                          <a
                            href="movie-detail.html"
                            className="position-absolute top-0 bottom-0 start-0 end-0"
                          />
                          <img
                            src="asset/images/movies/related/01.html"
                            alt="movie-card"
                            className="img-fluid object-cover w-100 d-block border-0"
                          />
                        </div>
                        <div className="card-description with-transition">
                          <div className="cart-content">
                            <div className="content-left">
                              <h5 className="iq-title text-capitalize">
                                <a href="movie-detail.html">giikre</a>
                              </h5>
                              <div className="movie-time d-flex align-items-center my-2">
                                <span className="movie-time-text font-normal">
                                  2hr : 12mins
                                </span>
                              </div>
                            </div>
                            <div className="watchlist">
                              <a className="watch-list-not" href="playlist.html">
                                <svg
                                  width={10}
                                  height={10}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon-10"
                                >
                                  <path
                                    d="M12 4V20M20 12H4"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <span className="watchlist-label">
                                  {" "}
                                  Watchlist{" "}
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="block-social-info align-items-center">
                          <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fas fa-share-alt" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <a href="#" target="_blank">
                                      <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#" target="_blank">
                                      <i className="fab fa-twitter" />
                                    </a>
                                    <a href="#">
                                      <i className="fas fa-link" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fa-regular fa-heart" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <span>+51</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="iq-button">
                            <a
                              href="movie-detail.html"
                              className="btn text-uppercase position-relative rounded-circle"
                            >
                              <i className="fa-solid fa-play ms-0" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="swiper-slide">
                    <div className="iq-card card-hover iq-card-style-2">
                      <div className="block-images position-relative w-100">
                        <div className="img-box w-100">
                          <a
                            href="movie-detail.html"
                            className="position-absolute top-0 bottom-0 start-0 end-0"
                          />
                          <img
                            src="asset/images/movies/related/02.html"
                            alt="movie-card"
                            className="img-fluid object-cover w-100 d-block border-0"
                          />
                        </div>
                        <div className="card-description with-transition">
                          <div className="cart-content">
                            <div className="content-left">
                              <h5 className="iq-title text-capitalize">
                                <a href="movie-detail.html">YoShi</a>
                              </h5>
                              <div className="movie-time d-flex align-items-center my-2">
                                <span className="movie-time-text font-normal">
                                  1hr : 22mins
                                </span>
                              </div>
                            </div>
                            <div className="watchlist">
                              <a className="watch-list-not" href="playlist.html">
                                <svg
                                  width={10}
                                  height={10}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon-10"
                                >
                                  <path
                                    d="M12 4V20M20 12H4"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <span className="watchlist-label">
                                  {" "}
                                  Watchlist{" "}
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="block-social-info align-items-center">
                          <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fas fa-share-alt" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <a href="#" target="_blank">
                                      <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#" target="_blank">
                                      <i className="fab fa-twitter" />
                                    </a>
                                    <a href="#">
                                      <i className="fas fa-link" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fa-regular fa-heart" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <span>+51</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="iq-button">
                            <a
                              href="movie-detail.html"
                              className="btn text-uppercase position-relative rounded-circle"
                            >
                              <i className="fa-solid fa-play ms-0" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="swiper-slide">
                    <div className="iq-card card-hover iq-card-style-2">
                      <div className="block-images position-relative w-100">
                        <div className="img-box w-100">
                          <a
                            href="movie-detail.html"
                            className="position-absolute top-0 bottom-0 start-0 end-0"
                          />
                          <img
                            src="asset/images/movies/related/03.html"
                            alt="movie-card"
                            className="img-fluid object-cover w-100 d-block border-0"
                          />
                        </div>
                        <div className="card-description with-transition">
                          <div className="cart-content">
                            <div className="content-left">
                              <h5 className="iq-title text-capitalize">
                                <a href="movie-detail.html">We Gare</a>
                              </h5>
                              <div className="movie-time d-flex align-items-center my-2">
                                <span className="movie-time-text font-normal">
                                  1hr : 30mins
                                </span>
                              </div>
                            </div>
                            <div className="watchlist">
                              <a className="watch-list-not" href="playlist.html">
                                <svg
                                  width={10}
                                  height={10}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon-10"
                                >
                                  <path
                                    d="M12 4V20M20 12H4"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <span className="watchlist-label">
                                  {" "}
                                  Watchlist{" "}
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="block-social-info align-items-center">
                          <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fas fa-share-alt" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <a href="#" target="_blank">
                                      <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#" target="_blank">
                                      <i className="fab fa-twitter" />
                                    </a>
                                    <a href="#">
                                      <i className="fas fa-link" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fa-regular fa-heart" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <span>+51</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="iq-button">
                            <a
                              href="movie-detail.html"
                              className="btn text-uppercase position-relative rounded-circle"
                            >
                              <i className="fa-solid fa-play ms-0" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="swiper-slide">
                    <div className="iq-card card-hover iq-card-style-2">
                      <div className="block-images position-relative w-100">
                        <div className="img-box w-100">
                          <a
                            href="movie-detail.html"
                            className="position-absolute top-0 bottom-0 start-0 end-0"
                          />
                          <img
                            src="asset/images/movies/related/04.html"
                            alt="movie-card"
                            className="img-fluid object-cover w-100 d-block border-0"
                          />
                        </div>
                        <div className="card-description with-transition">
                          <div className="cart-content">
                            <div className="content-left">
                              <h5 className="iq-title text-capitalize">
                                <a href="movie-detail.html">Avengers</a>
                              </h5>
                              <div className="movie-time d-flex align-items-center my-2">
                                <span className="movie-time-text font-normal">
                                  2hr : 38mins
                                </span>
                              </div>
                            </div>
                            <div className="watchlist">
                              <a className="watch-list-not" href="playlist.html">
                                <svg
                                  width={10}
                                  height={10}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon-10"
                                >
                                  <path
                                    d="M12 4V20M20 12H4"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <span className="watchlist-label">
                                  {" "}
                                  Watchlist{" "}
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="block-social-info align-items-center">
                          <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fas fa-share-alt" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <a href="#" target="_blank">
                                      <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#" target="_blank">
                                      <i className="fab fa-twitter" />
                                    </a>
                                    <a href="#">
                                      <i className="fas fa-link" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fa-regular fa-heart" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <span>+51</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="iq-button">
                            <a
                              href="movie-detail.html"
                              className="btn text-uppercase position-relative rounded-circle"
                            >
                              <i className="fa-solid fa-play ms-0" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="swiper-slide">
                    <div className="iq-card card-hover iq-card-style-2">
                      <div className="block-images position-relative w-100">
                        <div className="img-box w-100">
                          <a
                            href="movie-detail.html"
                            className="position-absolute top-0 bottom-0 start-0 end-0"
                          />
                          <img
                            src="asset/images/movies/related/05.html"
                            alt="movie-card"
                            className="img-fluid object-cover w-100 d-block border-0"
                          />
                        </div>
                        <div className="card-description with-transition">
                          <div className="cart-content">
                            <div className="content-left">
                              <h5 className="iq-title text-capitalize">
                                <a href="movie-detail.html">Chosfies</a>
                              </h5>
                              <div className="movie-time d-flex align-items-center my-2">
                                <span className="movie-time-text font-normal">
                                  2hr : 10mins
                                </span>
                              </div>
                            </div>
                            <div className="watchlist">
                              <a className="watch-list-not" href="playlist.html">
                                <svg
                                  width={10}
                                  height={10}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon-10"
                                >
                                  <path
                                    d="M12 4V20M20 12H4"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <span className="watchlist-label">
                                  {" "}
                                  Watchlist{" "}
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="block-social-info align-items-center">
                          <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fas fa-share-alt" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <a href="#" target="_blank">
                                      <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#" target="_blank">
                                      <i className="fab fa-twitter" />
                                    </a>
                                    <a href="#">
                                      <i className="fas fa-link" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fa-regular fa-heart" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <span>+51</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="iq-button">
                            <a
                              href="movie-detail.html"
                              className="btn text-uppercase position-relative rounded-circle"
                            >
                              <i className="fa-solid fa-play ms-0" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="swiper-slide">
                    <div className="iq-card card-hover iq-card-style-2">
                      <div className="block-images position-relative w-100">
                        <div className="img-box w-100">
                          <a
                            href="movie-detail.html"
                            className="position-absolute top-0 bottom-0 start-0 end-0"
                          />
                          <img
                            src="asset/images/movies/related/06.html"
                            alt="movie-card"
                            className="img-fluid object-cover w-100 d-block border-0"
                          />
                        </div>
                        <div className="card-description with-transition">
                          <div className="cart-content">
                            <div className="content-left">
                              <h5 className="iq-title text-capitalize">
                                <a href="movie-detail.html">Tf Oaler</a>
                              </h5>
                              <div className="movie-time d-flex align-items-center my-2">
                                <span className="movie-time-text font-normal">
                                  1hr : 40mins
                                </span>
                              </div>
                            </div>
                            <div className="watchlist">
                              <a className="watch-list-not" href="playlist.html">
                                <svg
                                  width={10}
                                  height={10}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon-10"
                                >
                                  <path
                                    d="M12 4V20M20 12H4"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <span className="watchlist-label">
                                  {" "}
                                  Watchlist{" "}
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="block-social-info align-items-center">
                          <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fas fa-share-alt" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <a href="#" target="_blank">
                                      <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#" target="_blank">
                                      <i className="fab fa-twitter" />
                                    </a>
                                    <a href="#">
                                      <i className="fas fa-link" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fa-regular fa-heart" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <span>+51</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="iq-button">
                            <a
                              href="movie-detail.html"
                              className="btn text-uppercase position-relative rounded-circle"
                            >
                              <i className="fa-solid fa-play ms-0" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="swiper-slide">
                    <div className="iq-card card-hover iq-card-style-2">
                      <div className="block-images position-relative w-100">
                        <div className="img-box w-100">
                          <a
                            href="movie-detail.html"
                            className="position-absolute top-0 bottom-0 start-0 end-0"
                          />
                          <img
                            src="asset/images/movies/related/07.html"
                            alt="movie-card"
                            className="img-fluid object-cover w-100 d-block border-0"
                          />
                        </div>
                        <div className="card-description with-transition">
                          <div className="cart-content">
                            <div className="content-left">
                              <h5 className="iq-title text-capitalize">
                                <a href="movie-detail.html">Another Danger</a>
                              </h5>
                              <div className="movie-time d-flex align-items-center my-2">
                                <span className="movie-time-text font-normal">
                                  1hr : 40mins
                                </span>
                              </div>
                            </div>
                            <div className="watchlist">
                              <a className="watch-list-not" href="playlist.html">
                                <svg
                                  width={10}
                                  height={10}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon-10"
                                >
                                  <path
                                    d="M12 4V20M20 12H4"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <span className="watchlist-label">
                                  {" "}
                                  Watchlist{" "}
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="block-social-info align-items-center">
                          <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fas fa-share-alt" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <a href="#" target="_blank">
                                      <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#" target="_blank">
                                      <i className="fab fa-twitter" />
                                    </a>
                                    <a href="#">
                                      <i className="fas fa-link" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fa-regular fa-heart" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <span>+51</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="iq-button">
                            <a
                              href="movie-detail.html"
                              className="btn text-uppercase position-relative rounded-circle"
                            >
                              <i className="fa-solid fa-play ms-0" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="swiper-button swiper-button-next" />
                <div className="swiper-button swiper-button-prev" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="verticle-slider section-padding-bottom">
        <div className="slider">
          <div className="slider-flex position-relative">
            <div className="slider--col position-relative">
              <div className="vertical-slider-prev swiper-button">
                <i className="iconly-Arrow-Up-2 icli" />
              </div>
              <div className="slider-thumbs" data-swiper="slider-thumbs">
                <div
                  className="swiper-container "
                  data-swiper="slider-thumbs-inner"
                >
                  <div className="swiper-wrapper top-ten-slider-nav">
                    <div className="swiper-slide swiper-bg">
                      <div className="block-images position-relative ">
                        <div className="img-box slider--image">
                          <img
                            src="asset/images/top-10/01.html"
                            className="img-fluid"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                        <div className="block-description">
                          <h6 className="iq-title">
                            <a href="tv-show-detail.html">lostti n sacee</a>
                          </h6>
                          <div className="movie-time d-flex align-items-center my-2">
                            <span className="text-body">2 hr 30 minute</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide swiper-bg">
                      <div className="block-images position-relative ">
                        <div className="img-box slider--image">
                          <img
                            src="asset/images/top-10/02.html"
                            className="img-fluid"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                        <div className="block-description">
                          <h6 className="iq-title">
                            <a href="tv-show-detail.html">Ret Seap</a>
                          </h6>
                          <div className="movie-time d-flex align-items-center my-2">
                            <span className="text-body">3 hr 0 minute</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide swiper-bg">
                      <div className="block-images position-relative">
                        <div className="img-box slider--image">
                          <img
                            src="asset/images/top-10/03.html"
                            className="img-fluid"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                        <div className="block-description">
                          <h6 className="iq-title">
                            <a href="tv-show-detail.html">X-Men</a>
                          </h6>
                          <div className="movie-time d-flex align-items-center my-2">
                            <span className="text-body">1hr : 45mins</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide swiper-bg">
                      <div className="block-images position-relative">
                        <div className="img-box slider--image">
                          <img
                            src="asset/images/top-10/04.html"
                            className="img-fluid"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                        <div className="block-description">
                          <h6 className="iq-title">
                            <a href="tv-show-detail.html">Logan</a>
                          </h6>
                          <div className="movie-time d-flex align-items-center my-2">
                            <span className="text-body">1hr : 22mins</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide swiper-bg">
                      <div className="block-images position-relative">
                        <div className="img-box slider--image">
                          <img
                            src="asset/images/top-10/05.html"
                            className="img-fluid"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                        <div className="block-description">
                          <h6 className="iq-title">
                            <a href="tv-show-detail.html">Black Queen</a>
                          </h6>
                          <div className="movie-time d-flex align-items-center my-2">
                            <span className="text-body">1h 45mins</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="vertical-slider-next swiper-button">
                <i className="iconly-Arrow-Down-2 icli" />
              </div>
            </div>
            <div className="slider-images" data-swiper="slider-images">
              <div
                className="swiper-container "
                data-swiper="slider-images-inner"
              >
                <div className="swiper-wrapper ">
                  <div className="swiper-slide">
                    <div className="slider--image block-images">
                      <img
                        src="asset/images/top-10/01.html"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="description">
                      <div className="block-description">
                        <ul className="ps-0 mb-0 mb-1 pb-1 list-inline d-flex flex-wrap align-items-center movie-tag">
                          <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                            <a
                              href="view-all-movie.html"
                              className="text-white text-decoration-none"
                            >
                              Comedy
                            </a>
                          </li>
                          <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                            <a
                              href="view-all-movie.html"
                              className="text-white text-decoration-none"
                            >
                              Romance
                            </a>
                          </li>
                          <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                            <a
                              href="view-all-movie.html"
                              className="text-white text-decoration-none"
                            >
                              Action
                            </a>
                          </li>
                        </ul>
                        <h2 className="iq-title mb-3">
                          <a href="tv-show-detail.html">lostti n sacee</a>
                        </h2>
                        <div className="d-flex align-items-center gap-3 mb-3">
                          <div className="slider-ratting d-flex align-items-center">
                            <ul className="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                              <li>
                                <i className="fa fa-star" aria-hidden="true" />
                              </li>
                            </ul>
                            <span className="text-white ms-2 font-size-14 fw-500">
                              4.3/5
                            </span>
                          </div>
                          <span className="text-body">2hr : 30mins</span>
                        </div>
                        <p className="mt-0 mb-3 line-count-2">
                          The point of using Lorem Ipsum is that it has a
                          more-or-less normal distribution of letters, as opposed
                          to using 'Content here.
                        </p>
                        <div className="iq-button">
                          <a
                            href="movie-detail.html"
                            className="btn text-uppercase position-relative"
                          >
                            <span className="button-text">play now</span>
                            <i className="fa-solid fa-play" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="slider--image block-images">
                      <img
                        src="asset/images/top-10/02.html"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="description">
                      <div className="block-description">
                        <ul className="ps-0 mb-0 mb-1 pb-1 list-inline d-flex flex-wrap align-items-center movie-tag">
                          <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                            <a
                              href="view-all-movie.html"
                              className="text-white text-decoration-none"
                            >
                              Comedy
                            </a>
                          </li>
                          <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                            <a
                              href="view-all-movie.html"
                              className="text-white text-decoration-none"
                            >
                              Romance
                            </a>
                          </li>
                          <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                            <a
                              href="view-all-movie.html"
                              className="text-white text-decoration-none"
                            >
                              Action
                            </a>
                          </li>
                        </ul>
                        <h2 className="iq-title mb-3">
                          <a href="tv-show-detail.html">Ret Seap</a>
                        </h2>
                        <div className="d-flex align-items-center gap-3 mb-3">
                          <div className="slider-ratting d-flex align-items-center">
                            <ul className="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                              <li>
                                <i className="fa fa-star" aria-hidden="true" />
                              </li>
                            </ul>
                            <span className="text-white ms-2 font-size-14 fw-500">
                              4.3/5
                            </span>
                          </div>
                          <span className="text-body">3hr : 0mins</span>
                        </div>
                        <p className="mt-0 mb-3 line-count-2">
                          The point of using Lorem Ipsum is that it has a
                          more-or-less normal distribution of letters, as opposed
                          to using 'Content here.
                        </p>
                        <div className="iq-button">
                          <a
                            href="movie-detail.html"
                            className="btn text-uppercase position-relative"
                          >
                            <span className="button-text">play now</span>
                            <i className="fa-solid fa-play" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="slider--image block-images">
                      <img
                        src="asset/images/top-10/03.html"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="description">
                      <div className="block-description">
                        <ul className="ps-0 mb-0 mb-1 pb-1 list-inline d-flex flex-wrap align-items-center movie-tag">
                          <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                            <a
                              href="view-all-movie.html"
                              className="text-white text-decoration-none"
                            >
                              Comedy
                            </a>
                          </li>
                          <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                            <a
                              href="view-all-movie.html"
                              className="text-white text-decoration-none"
                            >
                              Romance
                            </a>
                          </li>
                          <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                            <a
                              href="view-all-movie.html"
                              className="text-white text-decoration-none"
                            >
                              Action
                            </a>
                          </li>
                        </ul>
                        <h2 className="iq-title mb-3">
                          <a href="tv-show-detail.html">X Men</a>
                        </h2>
                        <div className="d-flex align-items-center gap-3 mb-3">
                          <div className="slider-ratting d-flex align-items-center">
                            <ul className="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                              <li>
                                <i className="fa fa-star" aria-hidden="true" />
                              </li>
                            </ul>
                            <span className="text-white ms-2 font-size-14 fw-500">
                              4.3/5
                            </span>
                          </div>
                          <span className="text-body">1hr : 45mins</span>
                        </div>
                        <p className="mt-0 mb-3 line-count-2">
                          The point of using Lorem Ipsum is that it has a
                          more-or-less normal distribution of letters, as opposed
                          to using 'Content here.
                        </p>
                        <div className="iq-button">
                          <a
                            href="movie-detail.html"
                            className="btn text-uppercase position-relative"
                          >
                            <span className="button-text">play now</span>
                            <i className="fa-solid fa-play" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="slider--image block-images">
                      <img
                        src="asset/images/top-10/04.html"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="description">
                      <div className="block-description">
                        <ul className="ps-0 mb-0 mb-1 pb-1 list-inline d-flex flex-wrap align-items-center movie-tag">
                          <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                            <a
                              href="view-all-movie.html"
                              className="text-white text-decoration-none"
                            >
                              Comedy
                            </a>
                          </li>
                          <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                            <a
                              href="view-all-movie.html"
                              className="text-white text-decoration-none"
                            >
                              Romance
                            </a>
                          </li>
                          <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                            <a
                              href="view-all-movie.html"
                              className="text-white text-decoration-none"
                            >
                              Action
                            </a>
                          </li>
                        </ul>
                        <h2 className="iq-title mb-3">
                          <a href="tv-show-detail.html">Logan</a>
                        </h2>
                        <div className="d-flex align-items-center gap-3 mb-3">
                          <div className="slider-ratting d-flex align-items-center">
                            <ul className="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                              <li>
                                <i className="fa fa-star" aria-hidden="true" />
                              </li>
                            </ul>
                            <span className="text-white ms-2 font-size-14 fw-500">
                              4.3/5
                            </span>
                          </div>
                          <span className="text-body">1hr : 22mins</span>
                        </div>
                        <p className="mt-0 mb-3 line-count-2">
                          The point of using Lorem Ipsum is that it has a
                          more-or-less normal distribution of letters, as opposed
                          to using 'Content here.
                        </p>
                        <div className="iq-button">
                          <a
                            href="#"
                            className="btn text-uppercase position-relative"
                          >
                            <span className="button-text">play now</span>
                            <i className="fa-solid fa-play" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="slider--image block-images">
                      <img
                        src="asset/images/top-10/05.html"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="description">
                      <div className="block-description">
                        <ul className="ps-0 mb-0 mb-1 pb-1 list-inline d-flex flex-wrap align-items-center movie-tag">
                          <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                            <a
                              href="view-all-movie.html"
                              className="text-white text-decoration-none"
                            >
                              Comedy
                            </a>
                          </li>
                          <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                            <a
                              href="view-all-movie.html"
                              className="text-white text-decoration-none"
                            >
                              Romance
                            </a>
                          </li>
                          <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                            <a
                              href="view-all-movie.html"
                              className="text-white text-decoration-none"
                            >
                              Action
                            </a>
                          </li>
                        </ul>
                        <h2 className="iq-title mb-3">
                          <a href="tv-show-detail.html">Black Queen</a>
                        </h2>
                        <div className="d-flex align-items-center gap-3 mb-3">
                          <div className="slider-ratting d-flex align-items-center">
                            <ul className="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                              <li>
                                <i className="fa fa-star" aria-hidden="true" />
                              </li>
                            </ul>
                            <span className="text-white ms-2 font-size-14 fw-500">
                              4.3/5
                            </span>
                          </div>
                          <span className="text-body">1hr : 45mins</span>
                        </div>
                        <p className="mt-0 mb-3 line-count-2">
                          The point of using Lorem Ipsum is that it has a
                          more-or-less normal distribution of letters, as opposed
                          to using 'Content here.
                        </p>
                        <div className="iq-button">
                          <a
                            href="video-detail.html"
                            className="btn text-uppercase position-relative"
                          >
                            <span className="button-text">play now</span>
                            <i className="fa-solid fa-play" />
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
      </div>
      <div className="favourite-person-block">
        <div className="container-fluid">
          <section className="overflow-hidden">
            <div className="d-flex align-items-center justify-content-between px-md-3 px-1 my-4">
              <h5 className="main-title text-capitalize mb-0">
                your favourite personality
              </h5>
              <a
                href="all-personality.html"
                className="text-primary iq-view-all text-decoration-none"
              >
                View All
              </a>
            </div>
            <div
              className="position-relative swiper swiper-card"
              data-slide={11}
              data-laptop={11}
              data-tab={4}
              data-mobile={2}
              data-mobile-sm={2}
              data-autoplay="false"
              data-loop="true"
              data-navigation="true"
              data-pagination="true"
            >
              <ul className="p-0 swiper-wrapper m-0  list-inline personality-card">
                <li className="swiper-slide">
                  <img
                    src="asset/images/cast/01.html"
                    alt="personality"
                    className="img-fluid object-cover mb-4 rounded"
                  />
                  <div className="text-center">
                    <h6 className="mb-0">
                      <a
                        href="person-detail.html"
                        className="font-size-14 text-decoration-none cast-title text-capitalize"
                      >
                        john Abraham
                      </a>
                    </h6>
                    <a
                      href="cast-category.html"
                      className="font-size-14 text-decoration-none text-capitalize text-body"
                    >
                      actor
                    </a>
                  </div>{" "}
                </li>
                <li className="swiper-slide">
                  <img
                    src="asset/images/cast/02.html"
                    alt="personality"
                    className="img-fluid object-cover mb-4 rounded"
                  />
                  <div className="text-center">
                    <h6 className="mb-0">
                      <a
                        href="person-detail.html"
                        className="font-size-14 text-decoration-none cast-title text-capitalize"
                      >
                        Leena burton
                      </a>
                    </h6>
                    <a
                      href="cast-category.html"
                      className="font-size-14 text-decoration-none text-capitalize text-body"
                    >
                      actress
                    </a>
                  </div>{" "}
                </li>
                <li className="swiper-slide">
                  <img
                    src="asset/images/cast/03.html"
                    alt="personality"
                    className="img-fluid object-cover mb-4 rounded"
                  />
                  <div className="text-center">
                    <h6 className="mb-0">
                      <a
                        href="person-detail.html"
                        className="font-size-14 text-decoration-none cast-title text-capitalize"
                      >
                        Lorina williams{" "}
                      </a>
                    </h6>
                    <a
                      href="cast-category.html"
                      className="font-size-14 text-decoration-none text-capitalize text-body"
                    >
                      actress
                    </a>
                  </div>{" "}
                </li>
                <li className="swiper-slide">
                  <img
                    src="asset/images/cast/04.html"
                    alt="personality"
                    className="img-fluid object-cover mb-4 rounded"
                  />
                  <div className="text-center">
                    <h6 className="mb-0">
                      <a
                        href="person-detail.html"
                        className="font-size-14 text-decoration-none cast-title text-capitalize"
                      >
                        Davina decorous
                      </a>
                    </h6>
                    <a
                      href="cast-category.html"
                      className="font-size-14 text-decoration-none text-capitalize text-body"
                    >
                      actress
                    </a>
                  </div>{" "}
                </li>
                <li className="swiper-slide">
                  <img
                    src="asset/images/cast/05.html"
                    alt="personality"
                    className="img-fluid object-cover mb-4 rounded"
                  />
                  <div className="text-center">
                    <h6 className="mb-0">
                      <a
                        href="person-detail.html"
                        className="font-size-14 text-decoration-none cast-title text-capitalize"
                      >
                        Thomas bailey
                      </a>
                    </h6>
                    <a
                      href="cast-category.html"
                      className="font-size-14 text-decoration-none text-capitalize text-body"
                    >
                      producer
                    </a>
                  </div>{" "}
                </li>
                <li className="swiper-slide">
                  <img
                    src="asset/images/cast/06.html"
                    alt="personality"
                    className="img-fluid object-cover mb-4 rounded"
                  />
                  <div className="text-center">
                    <h6 className="mb-0">
                      <a
                        href="person-detail.html"
                        className="font-size-14 text-decoration-none cast-title text-capitalize"
                      >
                        Kelly Reilly
                      </a>
                    </h6>
                    <a
                      href="cast-category.html"
                      className="font-size-14 text-decoration-none text-capitalize text-body"
                    >
                      actress
                    </a>
                  </div>{" "}
                </li>
                <li className="swiper-slide">
                  <img
                    src="asset/images/cast/07.html"
                    alt="personality"
                    className="img-fluid object-cover mb-4 rounded"
                  />
                  <div className="text-center">
                    <h6 className="mb-0">
                      <a
                        href="person-detail.html"
                        className="font-size-14 text-decoration-none cast-title text-capitalize"
                      >
                        smith Jonas
                      </a>
                    </h6>
                    <a
                      href="cast-category.html"
                      className="font-size-14 text-decoration-none text-capitalize text-body"
                    >
                      director
                    </a>
                  </div>{" "}
                </li>
                <li className="swiper-slide">
                  <img
                    src="asset/images/cast/08.html"
                    alt="personality"
                    className="img-fluid object-cover mb-4 rounded"
                  />
                  <div className="text-center">
                    <h6 className="mb-0">
                      <a
                        href="person-detail.html"
                        className="font-size-14 text-decoration-none cast-title text-capitalize"
                      >
                        angel louis
                      </a>
                    </h6>
                    <a
                      href="cast-category.html"
                      className="font-size-14 text-decoration-none text-capitalize text-body"
                    >
                      producer
                    </a>
                  </div>{" "}
                </li>
                <li className="swiper-slide">
                  <img
                    src="asset/images/cast/09.html"
                    alt="personality"
                    className="img-fluid object-cover mb-4 rounded"
                  />
                  <div className="text-center">
                    <h6 className="mb-0">
                      <a
                        href="person-detail.html"
                        className="font-size-14 text-decoration-none cast-title text-capitalize"
                      >
                        Millar joseph
                      </a>
                    </h6>
                    <a
                      href="cast-category.html"
                      className="font-size-14 text-decoration-none text-capitalize text-body"
                    >
                      actor
                    </a>
                  </div>{" "}
                </li>
                <li className="swiper-slide">
                  <img
                    src="asset/images/cast/10.html"
                    alt="personality"
                    className="img-fluid object-cover mb-4 rounded"
                  />
                  <div className="text-center">
                    <h6 className="mb-0">
                      <a
                        href="person-detail.html"
                        className="font-size-14 text-decoration-none cast-title text-capitalize"
                      >
                        mark wilson
                      </a>
                    </h6>
                    <a
                      href="cast-category.html"
                      className="font-size-14 text-decoration-none text-capitalize text-body"
                    >
                      actor
                    </a>
                  </div>{" "}
                </li>
                <li className="swiper-slide">
                  <img
                    src="asset/images/cast/11.html"
                    alt="personality"
                    className="img-fluid object-cover mb-4 rounded"
                  />
                  <div className="text-center">
                    <h6 className="mb-0">
                      <a
                        href="person-detail.html"
                        className="font-size-14 text-decoration-none cast-title text-capitalize"
                      >
                        Kelley walker
                      </a>
                    </h6>
                    <a
                      href="cast-category.html"
                      className="font-size-14 text-decoration-none text-capitalize text-body"
                    >
                      director
                    </a>
                  </div>{" "}
                </li>
                <li className="swiper-slide">
                  <img
                    src="asset/images/cast/12.html"
                    alt="personality"
                    className="img-fluid object-cover mb-4 rounded"
                  />
                  <div className="text-center">
                    <h6 className="mb-0">
                      <a
                        href="person-detail.html"
                        className="font-size-14 text-decoration-none cast-title text-capitalize"
                      >
                        Amy Sedaris
                      </a>
                    </h6>
                    <a
                      href="cast-category.html"
                      className="font-size-14 text-decoration-none text-capitalize text-body"
                    >
                      actress
                    </a>
                  </div>{" "}
                </li>
              </ul>
              <div className="swiper-button swiper-button-next" />
              <div className="swiper-button swiper-button-prev" />
            </div>
          </section>
        </div>
      </div>
      <div className="popular-movies-block">
        <div className="container-fluid">
          <section className="overflow-hidden">
            <div className="d-flex align-items-center justify-content-between px-md-3 px-1 my-4">
              <h5 className="main-title text-capitalize mb-0">popular movies</h5>
              <a
                href="view-all-movie.html"
                className="text-primary iq-view-all text-decoration-none flex-none"
              >
                View All
              </a>
            </div>
            <div className="card-style-slider">
              <div
                className="position-relative swiper swiper-card"
                data-slide={6}
                data-laptop={6}
                data-tab={3}
                data-mobile={2}
                data-mobile-sm={2}
                data-autoplay="false"
                data-loop="true"
                data-navigation="true"
                data-pagination="true"
              >
                <ul className="p-0 swiper-wrapper m-0  list-inline">
                  <li className="swiper-slide">
                    <div className="iq-card card-hover">
                      <div className="block-images position-relative w-100">
                        <div className="img-box w-100">
                          <a
                            href="movie-detail.html"
                            className="position-absolute top-0 bottom-0 start-0 end-0"
                          />
                          <img
                            src="asset/images/movies/popular/01.html"
                            alt="movie-card"
                            className="img-fluid object-cover w-100 d-block border-0"
                          />
                        </div>
                        <div className="card-description with-transition">
                          <div className="cart-content">
                            <div className="content-left">
                              <h5 className="iq-title text-capitalize">
                                <a href="movie-detail.html">CRW</a>
                              </h5>
                              <div className="movie-time d-flex align-items-center my-2">
                                <span className="movie-time-text font-normal">
                                  2hr : 12mins
                                </span>
                              </div>
                            </div>
                            <div className="watchlist">
                              <a className="watch-list-not" href="playlist.html">
                                <svg
                                  width={10}
                                  height={10}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon-10"
                                >
                                  <path
                                    d="M12 4V20M20 12H4"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <span className="watchlist-label">
                                  {" "}
                                  Watchlist{" "}
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="block-social-info align-items-center">
                          <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fas fa-share-alt" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <a href="#" target="_blank">
                                      <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#" target="_blank">
                                      <i className="fab fa-twitter" />
                                    </a>
                                    <a href="#">
                                      <i className="fas fa-link" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fa-regular fa-heart" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <span>+51</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="iq-button">
                            <a
                              href="movie-detail.html"
                              className="btn text-uppercase position-relative rounded-circle"
                            >
                              <i className="fa-solid fa-play ms-0" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="swiper-slide">
                    <div className="iq-card card-hover">
                      <div className="block-images position-relative w-100">
                        <div className="img-box w-100">
                          <a
                            href="movie-detail.html"
                            className="position-absolute top-0 bottom-0 start-0 end-0"
                          />
                          <img
                            src="asset/images/movies/popular/02.html"
                            alt="movie-card"
                            className="img-fluid object-cover w-100 d-block border-0"
                          />
                        </div>
                        <div className="card-description with-transition">
                          <div className="cart-content">
                            <div className="content-left">
                              <h5 className="iq-title text-capitalize">
                                <a href="movie-detail.html">Batte Wiire</a>
                              </h5>
                              <div className="movie-time d-flex align-items-center my-2">
                                <span className="movie-time-text font-normal">
                                  1hr : 22mins
                                </span>
                              </div>
                            </div>
                            <div className="watchlist">
                              <a className="watch-list-not" href="playlist.html">
                                <svg
                                  width={10}
                                  height={10}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon-10"
                                >
                                  <path
                                    d="M12 4V20M20 12H4"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <span className="watchlist-label">
                                  {" "}
                                  Watchlist{" "}
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="block-social-info align-items-center">
                          <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fas fa-share-alt" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <a href="#" target="_blank">
                                      <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#" target="_blank">
                                      <i className="fab fa-twitter" />
                                    </a>
                                    <a href="#">
                                      <i className="fas fa-link" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fa-regular fa-heart" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <span>+51</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="iq-button">
                            <a
                              href="movie-detail.html"
                              className="btn text-uppercase position-relative rounded-circle"
                            >
                              <i className="fa-solid fa-play ms-0" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="swiper-slide">
                    <div className="iq-card card-hover">
                      <div className="block-images position-relative w-100">
                        <div className="img-box w-100">
                          <a
                            href="movie-detail.html"
                            className="position-absolute top-0 bottom-0 start-0 end-0"
                          />
                          <img
                            src="asset/images/movies/popular/03.html"
                            alt="movie-card"
                            className="img-fluid object-cover w-100 d-block border-0"
                          />
                        </div>
                        <div className="card-description with-transition">
                          <div className="cart-content">
                            <div className="content-left">
                              <h5 className="iq-title text-capitalize">
                                <a href="movie-detail.html">Goal</a>
                              </h5>
                              <div className="movie-time d-flex align-items-center my-2">
                                <span className="movie-time-text font-normal">
                                  2hr : 30mins
                                </span>
                              </div>
                            </div>
                            <div className="watchlist">
                              <a className="watch-list-not" href="playlist.html">
                                <svg
                                  width={10}
                                  height={10}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon-10"
                                >
                                  <path
                                    d="M12 4V20M20 12H4"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <span className="watchlist-label">
                                  {" "}
                                  Watchlist{" "}
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="block-social-info align-items-center">
                          <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fas fa-share-alt" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <a href="#" target="_blank">
                                      <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#" target="_blank">
                                      <i className="fab fa-twitter" />
                                    </a>
                                    <a href="#">
                                      <i className="fas fa-link" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fa-regular fa-heart" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <span>+51</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="iq-button">
                            <a
                              href="movie-detail.html"
                              className="btn text-uppercase position-relative rounded-circle"
                            >
                              <i className="fa-solid fa-play ms-0" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="swiper-slide">
                    <div className="iq-card card-hover">
                      <div className="block-images position-relative w-100">
                        <div className="img-box w-100">
                          <a
                            href="movie-detail.html"
                            className="position-absolute top-0 bottom-0 start-0 end-0"
                          />
                          <img
                            src="asset/images/movies/popular/04.html"
                            alt="movie-card"
                            className="img-fluid object-cover w-100 d-block border-0"
                          />
                        </div>
                        <div className="card-description with-transition">
                          <div className="cart-content">
                            <div className="content-left">
                              <h5 className="iq-title text-capitalize">
                                <a href="movie-detail.html">Dandacg</a>
                              </h5>
                              <div className="movie-time d-flex align-items-center my-2">
                                <span className="movie-time-text font-normal">
                                  1hr : 30mins
                                </span>
                              </div>
                            </div>
                            <div className="watchlist">
                              <a className="watch-list-not" href="playlist.html">
                                <svg
                                  width={10}
                                  height={10}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon-10"
                                >
                                  <path
                                    d="M12 4V20M20 12H4"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <span className="watchlist-label">
                                  {" "}
                                  Watchlist{" "}
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="block-social-info align-items-center">
                          <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fas fa-share-alt" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <a href="#" target="_blank">
                                      <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#" target="_blank">
                                      <i className="fab fa-twitter" />
                                    </a>
                                    <a href="#">
                                      <i className="fas fa-link" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fa-regular fa-heart" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <span>+51</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="iq-button">
                            <a
                              href="movie-detail.html"
                              className="btn text-uppercase position-relative rounded-circle"
                            >
                              <i className="fa-solid fa-play ms-0" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="swiper-slide">
                    <div className="iq-card card-hover">
                      <div className="block-images position-relative w-100">
                        <div className="img-box w-100">
                          <a
                            href="movie-detail.html"
                            className="position-absolute top-0 bottom-0 start-0 end-0"
                          />
                          <img
                            src="asset/images/movies/popular/05.html"
                            alt="movie-card"
                            className="img-fluid object-cover w-100 d-block border-0"
                          />
                        </div>
                        <div className="card-description with-transition">
                          <div className="cart-content">
                            <div className="content-left">
                              <h5 className="iq-title text-capitalize">
                                <a href="movie-detail.html">mexcan</a>
                              </h5>
                              <div className="movie-time d-flex align-items-center my-2">
                                <span className="movie-time-text font-normal">
                                  1hr : 30mins
                                </span>
                              </div>
                            </div>
                            <div className="watchlist">
                              <a className="watch-list-not" href="playlist.html">
                                <svg
                                  width={10}
                                  height={10}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon-10"
                                >
                                  <path
                                    d="M12 4V20M20 12H4"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <span className="watchlist-label">
                                  {" "}
                                  Watchlist{" "}
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="block-social-info align-items-center">
                          <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fas fa-share-alt" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <a href="#" target="_blank">
                                      <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#" target="_blank">
                                      <i className="fab fa-twitter" />
                                    </a>
                                    <a href="#">
                                      <i className="fas fa-link" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fa-regular fa-heart" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <span>+51</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="iq-button">
                            <a
                              href="movie-detail.html"
                              className="btn text-uppercase position-relative rounded-circle"
                            >
                              <i className="fa-solid fa-play ms-0" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="swiper-slide">
                    <div className="iq-card card-hover">
                      <div className="block-images position-relative w-100">
                        <div className="img-box w-100">
                          <a
                            href="movie-detail.html"
                            className="position-absolute top-0 bottom-0 start-0 end-0"
                          />
                          <img
                            src="asset/images/movies/popular/06.html"
                            alt="movie-card"
                            className="img-fluid object-cover w-100 d-block border-0"
                          />
                        </div>
                        <div className="card-description with-transition">
                          <div className="cart-content">
                            <div className="content-left">
                              <h5 className="iq-title text-capitalize">
                                <a href="movie-detail.html">oit moleld</a>
                              </h5>
                              <div className="movie-time d-flex align-items-center my-2">
                                <span className="movie-time-text font-normal">
                                  1hr : 30mins
                                </span>
                              </div>
                            </div>
                            <div className="watchlist">
                              <a className="watch-list-not" href="playlist.html">
                                <svg
                                  width={10}
                                  height={10}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon-10"
                                >
                                  <path
                                    d="M12 4V20M20 12H4"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <span className="watchlist-label">
                                  {" "}
                                  Watchlist{" "}
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="block-social-info align-items-center">
                          <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fas fa-share-alt" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <a href="#" target="_blank">
                                      <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#" target="_blank">
                                      <i className="fab fa-twitter" />
                                    </a>
                                    <a href="#">
                                      <i className="fas fa-link" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fa-regular fa-heart" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <span>+51</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="iq-button">
                            <a
                              href="movie-detail.html"
                              className="btn text-uppercase position-relative rounded-circle"
                            >
                              <i className="fa-solid fa-play ms-0" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="swiper-slide">
                    <div className="iq-card card-hover">
                      <div className="block-images position-relative w-100">
                        <div className="img-box w-100">
                          <a
                            href="movie-detail.html"
                            className="position-absolute top-0 bottom-0 start-0 end-0"
                          />
                          <img
                            src="asset/images/movies/popular/07.html"
                            alt="movie-card"
                            className="img-fluid object-cover w-100 d-block border-0"
                          />
                        </div>
                        <div className="card-description with-transition">
                          <div className="cart-content">
                            <div className="content-left">
                              <h5 className="iq-title text-capitalize">
                                <a href="movie-detail.html">Dragon Fire</a>
                              </h5>
                              <div className="movie-time d-flex align-items-center my-2">
                                <span className="movie-time-text font-normal">
                                  1hr : 30mins
                                </span>
                              </div>
                            </div>
                            <div className="watchlist">
                              <a className="watch-list-not" href="playlist.html">
                                <svg
                                  width={10}
                                  height={10}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon-10"
                                >
                                  <path
                                    d="M12 4V20M20 12H4"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <span className="watchlist-label">
                                  {" "}
                                  Watchlist{" "}
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="block-social-info align-items-center">
                          <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fas fa-share-alt" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <a href="#" target="_blank">
                                      <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#" target="_blank">
                                      <i className="fab fa-twitter" />
                                    </a>
                                    <a href="#">
                                      <i className="fas fa-link" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fa-regular fa-heart" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <span>+51</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="iq-button">
                            <a
                              href="movie-detail.html"
                              className="btn text-uppercase position-relative rounded-circle"
                            >
                              <i className="fa-solid fa-play ms-0" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="swiper-button swiper-button-next" />
                <div className="swiper-button swiper-button-prev" />
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="tab-slider">
        <div className="slider">
          <div
            className="position-relative swiper swiper-card"
            data-slide={1}
            data-laptop={1}
            data-tab={1}
            data-mobile={1}
            data-mobile-sm={1}
            data-autoplay="false"
            data-loop="false"
            data-navigation="true"
            data-pagination="true"
            data-effect="fade"
          >
            <ul className="p-0 swiper-wrapper m-0 list-inline">
              <li className="swiper-slide tab-slider-banner p-0">
                <div className="tab-slider-banner-images">
                  <img
                    src="asset/images/tab-slider/01.html"
                    alt="tab-slider-background"
                  />
                </div>
                <div className="block-images position-relative w-100">
                  <div className="container-fluid">
                    <div className="row align-items-center min-vh-100 h-100 my-4">
                      <div className="col-md-5 col-lg-5 col-xxl-5">
                        <div className="tab-left-details">
                          <div className="d-flex align-items-center gap-3 mb-4">
                            <a href="javascript:void(0);">
                              <img
                                src="asset/images/movies/trending-label.html"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <h5 className="text-gold">
                              <span className="text-primary">#4</span> in Series
                              Today
                            </h5>
                          </div>
                          <h1 className="mb-2 fw-500 text-capitalize texture-text">
                            The hunter
                          </h1>
                          <p className="mb-0 font-size-14 line-count-2">
                            Sand and dust storms (SDS), also known as sirocco,
                            haboob, yellow dust, white storms, and the harmattan,
                            are a natural phenomenon linked with land
                          </p>
                          <ul className="d-flex align-items-center list-inline gap-2 movie-tag p-0 mt-3 mb-40">
                            <li className="font-size-18">Nov 2022</li>
                            <li className="font-size-18">Season 1</li>
                          </ul>
                          <div className="iq-button">
                            <a
                              href="movie-detail.html"
                              className="btn text-uppercase position-relative"
                            >
                              <span className="button-text">stream now</span>
                              <i className="fa-solid fa-play" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-1 col-lg-2 col-xxl-3"></div>
                      <div className="col-md-6 col-lg-5 col-xxl-4 mt-5 mt-md-0">
                        <div className="tab-block">
                          <h4 className="tab-title text-capitalize mb-0">
                            All Episode
                          </h4>
                          <div className="tab-bottom-bordered border-0">
                            <ul
                              className="nav nav-tabs nav-pills mb-3 overflow-x-scroll"
                              role="tablist"
                            >
                              <li className="nav-item" role="presentation">
                                <button
                               
                                  
                                  className="nav-link active"
                                  data-bs-toggle="pill"
                                  data-bs-target="#pills-series1-season-one"
                                  type="button"
                                  role="tab"
                                  aria-selected="false"
                                >
                                  Season 1
                                </button>
                              </li>
                              <li className="nav-item" role="presentation">
                                <button
                                  className="nav-link"
                                  data-bs-toggle="pill"
                                  data-bs-target="#pills-series1-season-two"
                                  type="button"
                                  role="tab"
                                  aria-selected="false"
                                >
                                  Season 2
                                </button>
                              </li>
                              <li className="nav-item" role="presentation">
                                <button
                                  className="nav-link"
                                  data-bs-toggle="pill"
                                  data-bs-target="#pills-series1-season-three"
                                  type="button"
                                  role="tab"
                                  aria-selected="false"
                                >
                                  Season 3
                                </button>
                              </li>
                            </ul>
                          </div>
                          <div className="tab-content iq-tab-fade-up">
                            <div
                              className="tab-pane fade show active"
                              id="pills-series1-season-one"
                              role="tabpanel"
                              tabIndex={0}
                            >
                              <ul className="list-inline m-0 p-0">
                                <li className="d-flex align-items-center gap-3">
                                  <div className="image-box flex-shrink-0">
                                    <img
                                      src="asset/images/tv-show/season/01.html"
                                      alt="image-icon"
                                      className="img-fluid rounded"
                                    />
                                  </div>
                                  <div className="image-details">
                                    <h6 className="mb-1 text-capitalize">
                                      <span className="text-primary">E1</span> -
                                      Fire and Blood
                                    </h6>
                                    <small>45 minute</small>
                                  </div>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                  <div className="image-box flex-shrink-0">
                                    <img
                                      src="asset/images/tv-show/season/02.html"
                                      alt="image-icon"
                                      className="img-fluid rounded"
                                    />
                                  </div>
                                  <div className="image-details">
                                    <h6 className="mb-1 text-capitalize">
                                      <span className="text-primary">E2</span> -
                                      The Pointy Endr
                                    </h6>
                                    <small>45 minute</small>
                                  </div>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                  <div className="image-box flex-shrink-0">
                                    <img
                                      src="asset/images/tv-show/season/03.html"
                                      alt="image-icon"
                                      className="img-fluid rounded"
                                    />
                                  </div>
                                  <div className="image-details">
                                    <h6 className="mb-1 text-capitalize">
                                      <span className="text-primary">E3</span> -
                                      You Win or You Die
                                    </h6>
                                    <small>45 minute</small>
                                  </div>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                  <div className="image-box flex-shrink-0">
                                    <img
                                      src="asset/images/tv-show/season/04.html"
                                      alt="image-icon"
                                      className="img-fluid rounded"
                                    />
                                  </div>
                                  <div className="image-details">
                                    <h6 className="mb-1 text-capitalize">
                                      <span className="text-primary">E4</span> -
                                      The Black Queen
                                    </h6>
                                    <small>45 minute</small>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="pills-series1-season-two"
                              role="tabpanel"
                              tabIndex={0}
                            >
                              <ul className="list-inline m-0 p-0">
                                <li className="d-flex align-items-center gap-3">
                                  <div className="image-box flex-shrink-0">
                                    <img
                                      src="asset/images/tv-show/season/05.html"
                                      alt="image-icon"
                                      className="img-fluid rounded"
                                    />
                                  </div>
                                  <div className="image-details">
                                    <h6 className="mb-1 text-capitalize">
                                      <span className="text-primary">E1</span> -
                                      Valar Morghulis
                                    </h6>
                                    <small>45 minute</small>
                                  </div>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                  <div className="image-box flex-shrink-0">
                                    <img
                                      src="asset/images/tv-show/season/06.html"
                                      alt="image-icon"
                                      className="img-fluid rounded"
                                    />
                                  </div>
                                  <div className="image-details">
                                    <h6 className="mb-1 text-capitalize">
                                      <span className="text-primary">E2</span> -
                                      Blackwater
                                    </h6>
                                    <small>45 minute</small>
                                  </div>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                  <div className="image-box flex-shrink-0">
                                    <img
                                      src="asset/images/tv-show/season/07.html"
                                      alt="image-icon"
                                      className="img-fluid rounded"
                                    />
                                  </div>
                                  <div className="image-details">
                                    <h6 className="mb-1 text-capitalize">
                                      <span className="text-primary">E3</span> -
                                      The Ghost of Harrenhal
                                    </h6>
                                    <small>45 minute</small>
                                  </div>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                  <div className="image-box flex-shrink-0">
                                    <img
                                      src="asset/images/tv-show/season/08.html"
                                      alt="image-icon"
                                      className="img-fluid rounded"
                                    />
                                  </div>
                                  <div className="image-details">
                                    <h6 className="mb-1 text-capitalize">
                                      <span className="text-primary">E4</span> -
                                      Garden of Bones
                                    </h6>
                                    <small>45 minute</small>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="pills-series1-season-three"
                              role="tabpanel"
                              tabIndex={0}
                            >
                              <ul className="list-inline m-0 p-0">
                                <li className="d-flex align-items-center gap-3">
                                  <div className="image-box flex-shrink-0">
                                    <img
                                      src="asset/images/tv-show/season/09.html"
                                      alt="image-icon"
                                      className="img-fluid rounded"
                                    />
                                  </div>
                                  <div className="image-details">
                                    <h6 className="mb-1 text-capitalize">
                                      <span className="text-primary">E1</span> -
                                      Mhysa
                                    </h6>
                                    <small>45 minute</small>
                                  </div>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                  <div className="image-box flex-shrink-0">
                                    <img
                                      src="asset/images/tv-show/season/10.html"
                                      alt="image-icon"
                                      className="img-fluid rounded"
                                    />
                                  </div>
                                  <div className="image-details">
                                    <h6 className="mb-1 text-capitalize">
                                      <span className="text-primary">E2</span> -
                                      Second Sons
                                    </h6>
                                    <small>45 minute</small>
                                  </div>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                  <div className="image-box flex-shrink-0">
                                    <img
                                      src="asset/images/tv-show/season/11.html"
                                      alt="image-icon"
                                      className="img-fluid rounded"
                                    />
                                  </div>
                                  <div className="image-details">
                                    <h6 className="mb-1 text-capitalize">
                                      <span className="text-primary">E3</span> -
                                      The Climb
                                    </h6>
                                    <small>45 minute</small>
                                  </div>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                  <div className="image-box flex-shrink-0">
                                    <img
                                      src="asset/images/tv-show/season/12.html"
                                      alt="image-icon"
                                      className="img-fluid rounded"
                                    />
                                  </div>
                                  <div className="image-details">
                                    <h6 className="mb-1 text-capitalize">
                                      <span className="text-primary">E4</span> -
                                      Kissed by Fire
                                    </h6>
                                    <small>45 minute</small>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="swiper-slide tab-slider-banner p-0">
                <div className="tab-slider-banner-images">
                  <img
                    src="asset/images/tab-slider/02.html"
                    alt="tab-slider-background"
                  />
                </div>
                <div className="block-images position-relative w-100">
                  <div className="container-fluid">
                    <div className="row align-items-center min-vh-100 h-100 my-4">
                      <div className="col-md-5 col-lg-5 col-xxl-5">
                        <div className="tab-left-details">
                          <div className="d-flex align-items-center gap-3 mb-4">
                            <a href="javascript:void(0);">
                              <img
                                src="asset/images/movies/trending-label.html"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <h5 className="text-gold">
                              <span className="text-primary">#4</span> in Series
                              Yesterday
                            </h5>
                          </div>
                          <h1 className="mb-2 fw-500 text-capitalize texture-text">
                            Pirates of Dayones
                          </h1>
                          <p className="mb-0 font-size-14 line-count-2">
                            Sand and dust storms (SDS), also known as sirocco,
                            haboob, yellow dust, white storms, and the harmattan,
                            are a natural phenomenon linked with land
                          </p>
                          <ul className="d-flex align-items-center list-inline gap-2 movie-tag p-0 mt-3 mb-40">
                            <li className="font-size-18">Nov 2022</li>
                            <li className="font-size-18">Season 1</li>
                          </ul>
                          <div className="iq-button">
                            <a
                              href="movie-detail.html"
                              className="btn text-uppercase position-relative"
                            >
                              <span className="button-text">stream now</span>
                              <i className="fa-solid fa-play" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-1 col-lg-2 col-xxl-3"></div>
                      <div className="col-md-6 col-lg-5 col-xxl-4 mt-5 mt-md-0">
                        <div className="tab-block">
                          <h4 className="tab-title text-capitalize">
                            All Episode
                          </h4>
                          <div className="tab-bottom-bordered border-0">
                            <ul
                              className="nav nav-tabs nav-pills mb-3 overflow-x-scroll"
                              role="tablist"
                            >
                              <li className="nav-item" role="presentation">
                                <button
                                  className="nav-link active"
                                  data-bs-toggle="pill"
                                  data-bs-target="#pills-series2-season-one"
                                  type="button"
                                  role="tab"
                                  aria-selected="false"
                                >
                                  Season 1
                                </button>
                              </li>
                              <li className="nav-item" role="presentation">
                                <button
                                  className="nav-link"
                                  data-bs-toggle="pill"
                                  data-bs-target="#pills-series2-season-two"
                                  type="button"
                                  role="tab"
                                  aria-selected="false"
                                >
                                  Season 2
                                </button>
                              </li>
                              <li className="nav-item" role="presentation">
                                <button
                                  className="nav-link"
                                  data-bs-toggle="pill"
                                  data-bs-target="#pills-series2-season-three"
                                  type="button"
                                  role="tab"
                                  aria-selected="false"
                                >
                                  Season 3
                                </button>
                              </li>
                            </ul>
                          </div>
                          <div className="tab-content iq-tab-fade-up">
                            <div
                              className="tab-pane fade show active"
                              id="pills-series2-season-one"
                              role="tabpanel"
                              tabIndex={0}
                            >
                              <ul className="list-inline m-0 p-0">
                                <li className="d-flex align-items-center gap-3">
                                  <div className="image-box flex-shrink-0">
                                    <img
                                      src="asset/images/tv-show/season/13.html"
                                      alt="image-icon"
                                      className="img-fluid rounded"
                                    />
                                  </div>
                                  <div className="image-details">
                                    <h6 className="mb-1 text-capitalize">
                                      <span className="text-primary">E1</span> -
                                      The Curse of the Black Pearl
                                    </h6>
                                    <small>45 minute</small>
                                  </div>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                  <div className="image-box flex-shrink-0">
                                    <img
                                      src="asset/images/tv-show/season/14.html"
                                      alt="image-icon"
                                      className="img-fluid rounded"
                                    />
                                  </div>
                                  <div className="image-details">
                                    <h6 className="mb-1 text-capitalize">
                                      <span className="text-primary">E2</span> -
                                      Dead Man's Chest
                                    </h6>
                                    <small>45 minute</small>
                                  </div>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                  <div className="image-box flex-shrink-0">
                                    <img
                                      src="asset/images/tv-show/season/15.html"
                                      alt="image-icon"
                                      className="img-fluid rounded"
                                    />
                                  </div>
                                  <div className="image-details">
                                    <h6 className="mb-1 text-capitalize">
                                      <span className="text-primary">E3</span> -
                                      At World's End
                                    </h6>
                                    <small>45 minute</small>
                                  </div>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                  <div className="image-box flex-shrink-0">
                                    <img
                                      src="asset/images/tv-show/season/16.html"
                                      alt="image-icon"
                                      className="img-fluid rounded"
                                    />
                                  </div>
                                  <div className="image-details">
                                    <h6 className="mb-1 text-capitalize">
                                      <span className="text-primary">E4</span> -
                                      On Stranger Tides
                                    </h6>
                                    <small>45 minute</small>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="pills-series2-season-two"
                              role="tabpanel"
                              tabIndex={0}
                            >
                              <ul className="list-inline m-0 p-0">
                                <li className="d-flex align-items-center gap-3">
                                  <div className="image-box flex-shrink-0">
                                    <img
                                      src="asset/images/tv-show/season/17.html"
                                      alt="image-icon"
                                      className="img-fluid rounded"
                                    />
                                  </div>
                                  <div className="image-details">
                                    <h6 className="mb-1 text-capitalize">
                                      <span className="text-primary">E1</span> -
                                      Dead Men Tell No Tales
                                    </h6>
                                    <small>45 minute</small>
                                  </div>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                  <div className="image-box flex-shrink-0">
                                    <img
                                      src="asset/images/tv-show/season/18.html"
                                      alt="image-icon"
                                      className="img-fluid rounded"
                                    />
                                  </div>
                                  <div className="image-details">
                                    <h6 className="mb-1 text-capitalize">
                                      <span className="text-primary">E2</span> -
                                      Tales of the Code
                                    </h6>
                                    <small>45 minute</small>
                                  </div>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                  <div className="image-box flex-shrink-0">
                                    <img
                                      src="asset/images/tv-show/season/19.html"
                                      alt="image-icon"
                                      className="img-fluid rounded"
                                    />
                                  </div>
                                  <div className="image-details">
                                    <h6 className="mb-1 text-capitalize">
                                      <span className="text-primary">E3</span> -
                                      Romance Dawn
                                    </h6>
                                    <small>45 minute</small>
                                  </div>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                  <div className="image-box flex-shrink-0">
                                    <img
                                      src="asset/images/tv-show/season/20.html"
                                      alt="image-icon"
                                      className="img-fluid rounded"
                                    />
                                  </div>
                                  <div className="image-details">
                                    <h6 className="mb-1 text-capitalize">
                                      <span className="text-primary">E4</span> -
                                      The Man in the Straw Hat
                                    </h6>
                                    <small>45 minute</small>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="pills-series2-season-three"
                              role="tabpanel"
                              tabIndex={0}
                            >
                              <ul className="list-inline m-0 p-0">
                                <li className="d-flex align-items-center gap-3">
                                  <div className="image-box flex-shrink-0">
                                    <img
                                      src="asset/images/tv-show/season/21.html"
                                      alt="image-icon"
                                      className="img-fluid rounded"
                                    />
                                  </div>
                                  <div className="image-details">
                                    <h6 className="mb-1 text-capitalize">
                                      <span className="text-primary">E1</span> -
                                      Tell No Tales
                                    </h6>
                                    <small>45 minute</small>
                                  </div>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                  <div className="image-box flex-shrink-0">
                                    <img
                                      src="asset/images/tv-show/season/22.html"
                                      alt="image-icon"
                                      className="img-fluid rounded"
                                    />
                                  </div>
                                  <div className="image-details">
                                    <h6 className="mb-1 text-capitalize">
                                      <span className="text-primary">E2</span> -
                                      The Pirates Are Coming
                                    </h6>
                                    <small>45 minute</small>
                                  </div>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                  <div className="image-box flex-shrink-0">
                                    <img
                                      src="asset/images/tv-show/season/23.html"
                                      alt="image-icon"
                                      className="img-fluid rounded"
                                    />
                                  </div>
                                  <div className="image-details">
                                    <h6 className="mb-1 text-capitalize">
                                      <span className="text-primary">E3</span> -
                                      Eat at Baratie!
                                    </h6>
                                    <small>45 minute</small>
                                  </div>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                  <div className="image-box flex-shrink-0">
                                    <img
                                      src="asset/images/tv-show/season/24.html"
                                      alt="image-icon"
                                      className="img-fluid rounded"
                                    />
                                  </div>
                                  <div className="image-details">
                                    <h6 className="mb-1 text-capitalize">
                                      <span className="text-primary">E4</span> -
                                      The Chef and the Chore Boy
                                    </h6>
                                    <small>45 minute</small>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="swiper-slide tab-slider-banner p-0">
                <div className="tab-slider-banner-images">
                  <img
                    src="asset/images/tab-slider/03.html"
                    alt="tab-slider-background"
                  />
                </div>
                <div className="block-images position-relative w-100">
                  <div className="container-fluid">
                    <div className="row align-items-center min-vh-100 h-100 my-4">
                      <div className="col-md-5 col-lg-5 col-xxl-5">
                        <div className="tab-left-details">
                          <div className="d-flex align-items-center gap-3 mb-4">
                            <a href="javascript:void(0);">
                              <img
                                src="asset/images/movies/trending-label.html"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <h5 className="text-gold">
                              <span className="text-primary">#4</span> in Series
                              tomorrow
                            </h5>
                          </div>
                          <h1 className="mb-2 fw-500 text-capitalize texture-text">
                            peaky blinders
                          </h1>
                          <p className="mb-0 font-size-14 line-count-2">
                            Sand and dust storms (SDS), also known as sirocco,
                            haboob, yellow dust, white storms, and the harmattan,
                            are a natural phenomenon linked with land
                          </p>
                          <ul className="d-flex align-items-center list-inline gap-2 movie-tag p-0 mt-3 mb-40">
                            <li className="font-size-18">Nov 2022</li>
                            <li className="font-size-18">Season 1</li>
                          </ul>
                          <div className="iq-button">
                            <a
                              href="movie-detail.html"
                              className="btn text-uppercase position-relative"
                            >
                              <span className="button-text">stream now</span>
                              <i className="fa-solid fa-play" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-1 col-lg-2 col-xxl-3"></div>
                      <div className="col-md-6 col-lg-5 col-xxl-4 mt-5 mt-md-0">
                        <div className="tab-block">
                          <h4 className="tab-title text-capitalize">
                            All Episode
                          </h4>
                          <div className="tab-bottom-bordered border-0">
                            <ul
                              className="nav nav-tabs nav-pills mb-3 overflow-x-scroll"
                              role="tablist"
                            >
                              <li className="nav-item" role="presentation">
                                <button
                                  className="nav-link active"
                                  data-bs-toggle="pill"
                                  data-bs-target="#pills-series3-season-one"
                                  type="button"
                                  role="tab"
                                  aria-selected="false"
                                >
                                  Season 1
                                </button>
                              </li>
                              <li className="nav-item" role="presentation">
                                <button
                                  className="nav-link"
                                  data-bs-toggle="pill"
                                  data-bs-target="#pills-series3-season-two"
                                  type="button"
                                  role="tab"
                                  aria-selected="false"
                                >
                                  Season 2
                                </button>
                              </li>
                              <li className="nav-item" role="presentation">
                                <button
                                  className="nav-link"
                                  data-bs-toggle="pill"
                                  data-bs-target="#pills-series3-season-three"
                                  type="button"
                                  role="tab"
                                  aria-selected="false"
                                >
                                  Season 3
                                </button>
                              </li>
                            </ul>
                          </div>
                          <div className="tab-content iq-tab-fade-up">
                            <div
                              className="tab-pane fade show active"
                              id="pills-series3-season-one"
                              role="tabpanel"
                              tabIndex={0}
                            >
                              <ul className="list-inline m-0 p-0">
                                <li className="d-flex align-items-center gap-3">
                                  <div className="image-box flex-shrink-0">
                                    <img
                                      src="asset/images/tv-show/season/25.html"
                                      alt="image-icon"
                                      className="img-fluid rounded"
                                    />
                                  </div>
                                  <div className="image-details">
                                    <h6 className="mb-1 text-capitalize">
                                      <span className="text-primary">E1</span> -
                                      Episode 1
                                    </h6>
                                    <small>45 minute</small>
                                  </div>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                  <div className="image-box flex-shrink-0">
                                    <img
                                      src="asset/images/tv-show/season/26.html"
                                      alt="image-icon"
                                      className="img-fluid rounded"
                                    />
                                  </div>
                                  <div className="image-details">
                                    <h6 className="mb-1 text-capitalize">
                                      <span className="text-primary">E2</span> -
                                      Episode 2
                                    </h6>
                                    <small>45 minute</small>
                                  </div>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                  <div className="image-box flex-shrink-0">
                                    <img
                                      src="asset/images/tv-show/season/27.html"
                                      alt="image-icon"
                                      className="img-fluid rounded"
                                    />
                                  </div>
                                  <div className="image-details">
                                    <h6 className="mb-1 text-capitalize">
                                      <span className="text-primary">E3</span> -
                                      Episode 3
                                    </h6>
                                    <small>45 minute</small>
                                  </div>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                  <div className="image-box flex-shrink-0">
                                    <img
                                      src="asset/images/tv-show/season/28.html"
                                      alt="image-icon"
                                      className="img-fluid rounded"
                                    />
                                  </div>
                                  <div className="image-details">
                                    <h6 className="mb-1 text-capitalize">
                                      <span className="text-primary">E4</span> -
                                      Episode 4
                                    </h6>
                                    <small>45 minute</small>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="pills-series3-season-two"
                              role="tabpanel"
                              tabIndex={0}
                            >
                              <ul className="list-inline m-0 p-0">
                                <li className="d-flex align-items-center gap-3">
                                  <div className="image-box flex-shrink-0">
                                    <img
                                      src="asset/images/tv-show/season/29.html"
                                      alt="image-icon"
                                      className="img-fluid rounded"
                                    />
                                  </div>
                                  <div className="image-details">
                                    <h6 className="mb-1 text-capitalize">
                                      <span className="text-primary">E1</span> -
                                      Episode 1
                                    </h6>
                                    <small>45 minute</small>
                                  </div>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                  <div className="image-box flex-shrink-0">
                                    <img
                                      src="asset/images/tv-show/season/30.html"
                                      alt="image-icon"
                                      className="img-fluid rounded"
                                    />
                                  </div>
                                  <div className="image-details">
                                    <h6 className="mb-1 text-capitalize">
                                      <span className="text-primary">E2</span> -
                                      Episode 2
                                    </h6>
                                    <small>45 minute</small>
                                  </div>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                  <div className="image-box flex-shrink-0">
                                    <img
                                      src="asset/images/tv-show/season/31.html"
                                      alt="image-icon"
                                      className="img-fluid rounded"
                                    />
                                  </div>
                                  <div className="image-details">
                                    <h6 className="mb-1 text-capitalize">
                                      <span className="text-primary">E3</span> -
                                      Episode 3
                                    </h6>
                                    <small>45 minute</small>
                                  </div>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                  <div className="image-box flex-shrink-0">
                                    <img
                                      src="asset/images/tv-show/season/32.html"
                                      alt="image-icon"
                                      className="img-fluid rounded"
                                    />
                                  </div>
                                  <div className="image-details">
                                    <h6 className="mb-1 text-capitalize">
                                      <span className="text-primary">E4</span> -
                                      Episode 4
                                    </h6>
                                    <small>45 minute</small>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="pills-series3-season-three"
                              role="tabpanel"
                              tabIndex={0}
                            >
                              <ul className="list-inline m-0 p-0">
                                <li className="d-flex align-items-center gap-3">
                                  <div className="image-box flex-shrink-0">
                                    <img
                                      src="asset/images/tv-show/season/33.html"
                                      alt="image-icon"
                                      className="img-fluid rounded"
                                    />
                                  </div>
                                  <div className="image-details">
                                    <h6 className="mb-1 text-capitalize">
                                      <span className="text-primary">E1</span> -
                                      Episode 1
                                    </h6>
                                    <small>45 minute</small>
                                  </div>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                  <div className="image-box flex-shrink-0">
                                    <img
                                      src="asset/images/tv-show/season/34.html"
                                      alt="image-icon"
                                      className="img-fluid rounded"
                                    />
                                  </div>
                                  <div className="image-details">
                                    <h6 className="mb-1 text-capitalize">
                                      <span className="text-primary">E2</span> -
                                      Episode 2
                                    </h6>
                                    <small>45 minute</small>
                                  </div>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                  <div className="image-box flex-shrink-0">
                                    <img
                                      src="asset/images/tv-show/season/35.html"
                                      alt="image-icon"
                                      className="img-fluid rounded"
                                    />
                                  </div>
                                  <div className="image-details">
                                    <h6 className="mb-1 text-capitalize">
                                      <span className="text-primary">E3</span> -
                                      Episode 3
                                    </h6>
                                    <small>45 minute</small>
                                  </div>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                  <div className="image-box flex-shrink-0">
                                    <img
                                      src="asset/images/tv-show/season/36.html"
                                      alt="image-icon"
                                      className="img-fluid rounded"
                                    />
                                  </div>
                                  <div className="image-details">
                                    <h6 className="mb-1 text-capitalize">
                                      <span className="text-primary">E4</span> -
                                      Episode 4
                                    </h6>
                                    <small>45 minute</small>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div className="joint-arrows">
              <div className="swiper-button swiper-button-next" />
              <div className="swiper-button swiper-button-prev" />
            </div>
          </div>
        </div>
      </div>
      <div className="movie-geners-block">
        <div className="container-fluid">
          <div className="overflow-hidden">
            <div className="d-flex align-items-center justify-content-between px-md-3 px-1 my-4">
              <h5 className="main-title text-capitalize mb-0">movie geners</h5>
              <a
                href="all-geners.html"
                className="text-primary iq-view-all text-decoration-none flex-none"
              >
                View All
              </a>
            </div>
            <div className="card-style-slider">
              <div
                className="position-relative swiper swiper-card"
                data-slide={6}
                data-laptop={6}
                data-tab={3}
                data-mobile={2}
                data-mobile-sm={2}
                data-autoplay="false"
                data-loop="true"
                data-navigation="true"
                data-pagination="true"
              >
                <ul className="p-0 swiper-wrapper m-0  list-inline geners-card">
                  <li className="swiper-slide">
                    <div className="iq-card-geners card-hover-style-two">
                      <div className="block-images position-relative w-100">
                        <div className="img-box rounded position-relative">
                          <img
                            src="asset/images/genre/01.html"
                            alt="geners-img"
                            className="img-fluid object-cover w-100 rounded"
                          />
                          <div className="blog-description">
                            <h6 className="mb-0 iq-title">
                              <a
                                href="#"
                                className="text-decoration-none text-capitalize line-count-2 p-2"
                              >
                                action
                              </a>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="swiper-slide">
                    <div className="iq-card-geners card-hover-style-two">
                      <div className="block-images position-relative w-100">
                        <div className="img-box rounded position-relative">
                          <img
                            src="asset/images/genre/02.html"
                            alt="geners-img"
                            className="img-fluid object-cover w-100 rounded"
                          />
                          <div className="blog-description">
                            <h6 className="mb-0 iq-title">
                              <a
                                href="#"
                                className="text-decoration-none text-capitalize line-count-2 p-2"
                              >
                                adventure
                              </a>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="swiper-slide">
                    <div className="iq-card-geners card-hover-style-two">
                      <div className="block-images position-relative w-100">
                        <div className="img-box rounded position-relative">
                          <img
                            src="asset/images/genre/03.html"
                            alt="geners-img"
                            className="img-fluid object-cover w-100 rounded"
                          />
                          <div className="blog-description">
                            <h6 className="mb-0 iq-title">
                              <a
                                href="#"
                                className="text-decoration-none text-capitalize line-count-2 p-2"
                              >
                                animation
                              </a>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="swiper-slide">
                    <div className="iq-card-geners card-hover-style-two">
                      <div className="block-images position-relative w-100">
                        <div className="img-box rounded position-relative">
                          <img
                            src="asset/images/genre/04.html"
                            alt="geners-img"
                            className="img-fluid object-cover w-100 rounded"
                          />
                          <div className="blog-description">
                            <h6 className="mb-0 iq-title">
                              <a
                                href="#"
                                className="text-decoration-none text-capitalize line-count-2 p-2"
                              >
                                Crime
                              </a>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="swiper-slide">
                    <div className="iq-card-geners card-hover-style-two">
                      <div className="block-images position-relative w-100">
                        <div className="img-box rounded position-relative">
                          <img
                            src="asset/images/genre/05.html"
                            alt="geners-img"
                            className="img-fluid object-cover w-100 rounded"
                          />
                          <div className="blog-description">
                            <h6 className="mb-0 iq-title">
                              <a
                                href="#"
                                className="text-decoration-none text-capitalize line-count-2 p-2"
                              >
                                horror
                              </a>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="swiper-slide">
                    <div className="iq-card-geners card-hover-style-two">
                      <div className="block-images position-relative w-100">
                        <div className="img-box rounded position-relative">
                          <img
                            src="asset/images/genre/06.html"
                            alt="geners-img"
                            className="img-fluid object-cover w-100 rounded"
                          />
                          <div className="blog-description">
                            <h6 className="mb-0 iq-title">
                              <a
                                href="#"
                                className="text-decoration-none text-capitalize line-count-2 p-2"
                              >
                                mystery
                              </a>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="swiper-slide">
                    <div className="iq-card-geners card-hover-style-two">
                      <div className="block-images position-relative w-100">
                        <div className="img-box rounded position-relative">
                          <img
                            src="asset/images/genre/07.html"
                            alt="geners-img"
                            className="img-fluid object-cover w-100 rounded"
                          />
                          <div className="blog-description">
                            <h6 className="mb-0 iq-title">
                              <a
                                href="#"
                                className="text-decoration-none text-capitalize line-count-2 p-2"
                              >
                                romance
                              </a>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="swiper-button swiper-button-next" />
                <div className="swiper-button swiper-button-prev" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="recommended-block">
        <div className="container-fluid">
          <section className="overflow-hidden">
            <div className="d-flex align-items-center justify-content-between px-md-3 px-1 my-4">
              <h5 className="main-title text-capitalize mb-0">
                recommended for you
              </h5>
              <a
                href="view-all-movie.html"
                className="text-primary iq-view-all text-decoration-none flex-none"
              >
                View All
              </a>
            </div>
            <div className="card-style-slider">
              <div
                className="position-relative swiper swiper-card"
                data-slide={6}
                data-laptop={6}
                data-tab={3}
                data-mobile={2}
                data-mobile-sm={2}
                data-autoplay="false"
                data-loop="true"
                data-navigation="true"
                data-pagination="true"
              >
                <ul className="p-0 swiper-wrapper m-0  list-inline">
                  <li className="swiper-slide">
                    <div className="iq-card card-hover">
                      <div className="block-images position-relative w-100">
                        <div className="img-box w-100">
                          <a
                            href="movie-detail.html"
                            className="position-absolute top-0 bottom-0 start-0 end-0"
                          />
                          <img
                            src="asset/images/movies/recommended/01.html"
                            alt="movie-card"
                            className="img-fluid object-cover w-100 d-block border-0"
                          />
                        </div>
                        <div className="card-description with-transition">
                          <div className="cart-content">
                            <div className="content-left">
                              <h5 className="iq-title text-capitalize">
                                <a href="movie-detail.html">Giikre</a>
                              </h5>
                              <div className="movie-time d-flex align-items-center my-2">
                                <span className="movie-time-text font-normal">
                                  2hr : 12mins
                                </span>
                              </div>
                            </div>
                            <div className="watchlist">
                              <a className="watch-list-not" href="playlist.html">
                                <svg
                                  width={10}
                                  height={10}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon-10"
                                >
                                  <path
                                    d="M12 4V20M20 12H4"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <span className="watchlist-label">
                                  {" "}
                                  Watchlist{" "}
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="block-social-info align-items-center">
                          <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fas fa-share-alt" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <a href="#" target="_blank">
                                      <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#" target="_blank">
                                      <i className="fab fa-twitter" />
                                    </a>
                                    <a href="#">
                                      <i className="fas fa-link" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fa-regular fa-heart" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <span>+51</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="iq-button">
                            <a
                              href="movie-detail.html"
                              className="btn text-uppercase position-relative rounded-circle"
                            >
                              <i className="fa-solid fa-play ms-0" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="swiper-slide">
                    <div className="iq-card card-hover">
                      <div className="block-images position-relative w-100">
                        <div className="img-box w-100">
                          <a
                            href="movie-detail.html"
                            className="position-absolute top-0 bottom-0 start-0 end-0"
                          />
                          <img
                            src="asset/images/movies/recommended/02.html"
                            alt="movie-card"
                            className="img-fluid object-cover w-100 d-block border-0"
                          />
                        </div>
                        <div className="card-description with-transition">
                          <div className="cart-content">
                            <div className="content-left">
                              <h5 className="iq-title text-capitalize">
                                <a href="movie-detail.html">Arrival</a>
                              </h5>
                              <div className="movie-time d-flex align-items-center my-2">
                                <span className="movie-time-text font-normal">
                                  1hr : 22mins
                                </span>
                              </div>
                            </div>
                            <div className="watchlist">
                              <a className="watch-list-not" href="playlist.html">
                                <svg
                                  width={10}
                                  height={10}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon-10"
                                >
                                  <path
                                    d="M12 4V20M20 12H4"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <span className="watchlist-label">
                                  {" "}
                                  Watchlist{" "}
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="block-social-info align-items-center">
                          <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fas fa-share-alt" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <a href="#" target="_blank">
                                      <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#" target="_blank">
                                      <i className="fab fa-twitter" />
                                    </a>
                                    <a href="#">
                                      <i className="fas fa-link" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fa-regular fa-heart" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <span>+51</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="iq-button">
                            <a
                              href="movie-detail.html"
                              className="btn text-uppercase position-relative rounded-circle"
                            >
                              <i className="fa-solid fa-play ms-0" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="swiper-slide">
                    <div className="iq-card card-hover">
                      <div className="block-images position-relative w-100">
                        <div className="img-box w-100">
                          <a
                            href="movie-detail.html"
                            className="position-absolute top-0 bottom-0 start-0 end-0"
                          />
                          <img
                            src="asset/images/movies/recommended/03.html"
                            alt="movie-card"
                            className="img-fluid object-cover w-100 d-block border-0"
                          />
                        </div>
                        <div className="card-description with-transition">
                          <div className="cart-content">
                            <div className="content-left">
                              <h5 className="iq-title text-capitalize">
                                <a href="movie-detail.html">Pricess</a>
                              </h5>
                              <div className="movie-time d-flex align-items-center my-2">
                                <span className="movie-time-text font-normal">
                                  1hr : 30mins
                                </span>
                              </div>
                            </div>
                            <div className="watchlist">
                              <a className="watch-list-not" href="playlist.html">
                                <svg
                                  width={10}
                                  height={10}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon-10"
                                >
                                  <path
                                    d="M12 4V20M20 12H4"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <span className="watchlist-label">
                                  {" "}
                                  Watchlist{" "}
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="block-social-info align-items-center">
                          <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fas fa-share-alt" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <a href="#" target="_blank">
                                      <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#" target="_blank">
                                      <i className="fab fa-twitter" />
                                    </a>
                                    <a href="#">
                                      <i className="fas fa-link" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fa-regular fa-heart" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <span>+51</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="iq-button">
                            <a
                              href="movie-detail.html"
                              className="btn text-uppercase position-relative rounded-circle"
                            >
                              <i className="fa-solid fa-play ms-0" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="swiper-slide">
                    <div className="iq-card card-hover">
                      <div className="block-images position-relative w-100">
                        <div className="img-box w-100">
                          <a
                            href="movie-detail.html"
                            className="position-absolute top-0 bottom-0 start-0 end-0"
                          />
                          <img
                            src="asset/images/movies/recommended/04.html"
                            alt="movie-card"
                            className="img-fluid object-cover w-100 d-block border-0"
                          />
                        </div>
                        <div className="card-description with-transition">
                          <div className="cart-content">
                            <div className="content-left">
                              <h5 className="iq-title text-capitalize">
                                <a href="movie-detail.html">Soull Meate</a>
                              </h5>
                              <div className="movie-time d-flex align-items-center my-2">
                                <span className="movie-time-text font-normal">
                                  2hr : 30mins
                                </span>
                              </div>
                            </div>
                            <div className="watchlist">
                              <a className="watch-list-not" href="playlist.html">
                                <svg
                                  width={10}
                                  height={10}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon-10"
                                >
                                  <path
                                    d="M12 4V20M20 12H4"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <span className="watchlist-label">
                                  {" "}
                                  Watchlist{" "}
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="block-social-info align-items-center">
                          <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fas fa-share-alt" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <a href="#" target="_blank">
                                      <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#" target="_blank">
                                      <i className="fab fa-twitter" />
                                    </a>
                                    <a href="#">
                                      <i className="fas fa-link" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fa-regular fa-heart" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <span>+51</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="iq-button">
                            <a
                              href="movie-detail.html"
                              className="btn text-uppercase position-relative rounded-circle"
                            >
                              <i className="fa-solid fa-play ms-0" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="swiper-slide">
                    <div className="iq-card card-hover">
                      <div className="block-images position-relative w-100">
                        <div className="img-box w-100">
                          <a
                            href="movie-detail.html"
                            className="position-absolute top-0 bottom-0 start-0 end-0"
                          />
                          <img
                            src="asset/images/movies/recommended/05.html"
                            alt="movie-card"
                            className="img-fluid object-cover w-100 d-block border-0"
                          />
                        </div>
                        <div className="card-description with-transition">
                          <div className="cart-content">
                            <div className="content-left">
                              <h5 className="iq-title text-capitalize">
                                <a href="movie-detail.html">Dangacg</a>
                              </h5>
                              <div className="movie-time d-flex align-items-center my-2">
                                <span className="movie-time-text font-normal">
                                  1hr : 45mins
                                </span>
                              </div>
                            </div>
                            <div className="watchlist">
                              <a className="watch-list-not" href="playlist.html">
                                <svg
                                  width={10}
                                  height={10}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon-10"
                                >
                                  <path
                                    d="M12 4V20M20 12H4"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <span className="watchlist-label">
                                  {" "}
                                  Watchlist{" "}
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="block-social-info align-items-center">
                          <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fas fa-share-alt" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <a href="#" target="_blank">
                                      <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#" target="_blank">
                                      <i className="fab fa-twitter" />
                                    </a>
                                    <a href="#">
                                      <i className="fas fa-link" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fa-regular fa-heart" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <span>+51</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="iq-button">
                            <a
                              href="movie-detail.html"
                              className="btn text-uppercase position-relative rounded-circle"
                            >
                              <i className="fa-solid fa-play ms-0" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="swiper-slide">
                    <div className="iq-card card-hover">
                      <div className="block-images position-relative w-100">
                        <div className="img-box w-100">
                          <a
                            href="movie-detail.html"
                            className="position-absolute top-0 bottom-0 start-0 end-0"
                          />
                          <img
                            src="asset/images/movies/recommended/06.html"
                            alt="movie-card"
                            className="img-fluid object-cover w-100 d-block border-0"
                          />
                        </div>
                        <div className="card-description with-transition">
                          <div className="cart-content">
                            <div className="content-left">
                              <h5 className="iq-title text-capitalize">
                                <a href="movie-detail.html">crcikeft</a>
                              </h5>
                              <div className="movie-time d-flex align-items-center my-2">
                                <span className="movie-time-text font-normal">
                                  2hr : 25mins
                                </span>
                              </div>
                            </div>
                            <div className="watchlist">
                              <a className="watch-list-not" href="playlist.html">
                                <svg
                                  width={10}
                                  height={10}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon-10"
                                >
                                  <path
                                    d="M12 4V20M20 12H4"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <span className="watchlist-label">
                                  {" "}
                                  Watchlist{" "}
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="block-social-info align-items-center">
                          <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fas fa-share-alt" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <a href="#" target="_blank">
                                      <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#" target="_blank">
                                      <i className="fab fa-twitter" />
                                    </a>
                                    <a href="#">
                                      <i className="fas fa-link" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fa-regular fa-heart" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <span>+51</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="iq-button">
                            <a
                              href="movie-detail.html"
                              className="btn text-uppercase position-relative rounded-circle"
                            >
                              <i className="fa-solid fa-play ms-0" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="swiper-slide">
                    <div className="iq-card card-hover">
                      <div className="block-images position-relative w-100">
                        <div className="img-box w-100">
                          <a
                            href="movie-detail.html"
                            className="position-absolute top-0 bottom-0 start-0 end-0"
                          />
                          <img
                            src="asset/images/movies/recommended/07.html"
                            alt="movie-card"
                            className="img-fluid object-cover w-100 d-block border-0"
                          />
                        </div>
                        <div className="card-description with-transition">
                          <div className="cart-content">
                            <div className="content-left">
                              <h5 className="iq-title text-capitalize">
                                <a href="movie-detail.html">Avengrs</a>
                              </h5>
                              <div className="movie-time d-flex align-items-center my-2">
                                <span className="movie-time-text font-normal">
                                  1hr : 45mins
                                </span>
                              </div>
                            </div>
                            <div className="watchlist">
                              <a className="watch-list-not" href="playlist.html">
                                <svg
                                  width={10}
                                  height={10}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon-10"
                                >
                                  <path
                                    d="M12 4V20M20 12H4"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <span className="watchlist-label">
                                  {" "}
                                  Watchlist{" "}
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="block-social-info align-items-center">
                          <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fas fa-share-alt" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <a href="#" target="_blank">
                                      <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#" target="_blank">
                                      <i className="fab fa-twitter" />
                                    </a>
                                    <a href="#">
                                      <i className="fas fa-link" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fa-regular fa-heart" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <span>+51</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="iq-button">
                            <a
                              href="movie-detail.html"
                              className="btn text-uppercase position-relative rounded-circle"
                            >
                              <i className="fa-solid fa-play ms-0" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="swiper-button swiper-button-next" />
                <div className="swiper-button swiper-button-prev" />
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="top-pics-block">
        <div className="container-fluid">
          <section className="overflow-hidden">
            <div className="d-flex align-items-center justify-content-between px-md-3 px-1 my-4">
              <h5 className="main-title text-capitalize mb-0">
                Top pics for you
              </h5>
              <a
                href="view-all-movie.html"
                className="text-primary iq-view-all text-decoration-none flex-none"
              >
                View All
              </a>
            </div>
            <div className="card-style-slider">
              <div
                className="position-relative swiper swiper-card"
                data-slide={6}
                data-laptop={6}
                data-tab={3}
                data-mobile={2}
                data-mobile-sm={2}
                data-autoplay="false"
                data-loop="true"
                data-navigation="true"
                data-pagination="true"
              >
                <ul className="p-0 swiper-wrapper m-0  list-inline">
                  <li className="swiper-slide">
                    <div className="iq-card card-hover">
                      <div className="block-images position-relative w-100">
                        <div className="img-box w-100">
                          <a
                            href="movie-detail.html"
                            className="position-absolute top-0 bottom-0 start-0 end-0"
                          />
                          <img
                            src="asset/images/movies/top-picks/01.html"
                            alt="movie-card"
                            className="img-fluid object-cover w-100 d-block border-0"
                          />
                        </div>
                        <div className="card-description with-transition">
                          <div className="cart-content">
                            <div className="content-left">
                              <h5 className="iq-title text-capitalize">
                                <a href="movie-detail.html">Frzzen</a>
                              </h5>
                              <div className="movie-time d-flex align-items-center my-2">
                                <span className="movie-time-text font-normal">
                                  2hr : 12mins
                                </span>
                              </div>
                            </div>
                            <div className="watchlist">
                              <a className="watch-list-not" href="playlist.html">
                                <svg
                                  width={10}
                                  height={10}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon-10"
                                >
                                  <path
                                    d="M12 4V20M20 12H4"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <span className="watchlist-label">
                                  {" "}
                                  Watchlist{" "}
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="block-social-info align-items-center">
                          <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fas fa-share-alt" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <a href="#" target="_blank">
                                      <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#" target="_blank">
                                      <i className="fab fa-twitter" />
                                    </a>
                                    <a href="#">
                                      <i className="fas fa-link" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fa-regular fa-heart" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <span>+51</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="iq-button">
                            <a
                              href="movie-detail.html"
                              className="btn text-uppercase position-relative rounded-circle"
                            >
                              <i className="fa-solid fa-play ms-0" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="swiper-slide">
                    <div className="iq-card card-hover">
                      <div className="block-images position-relative w-100">
                        <div className="img-box w-100">
                          <a
                            href="movie-detail.html"
                            className="position-absolute top-0 bottom-0 start-0 end-0"
                          />
                          <img
                            src="asset/images/movies/top-picks/02.html"
                            alt="movie-card"
                            className="img-fluid object-cover w-100 d-block border-0"
                          />
                        </div>
                        <div className="card-description with-transition">
                          <div className="cart-content">
                            <div className="content-left">
                              <h5 className="iq-title text-capitalize">
                                <a href="movie-detail.html">The Crew</a>
                              </h5>
                              <div className="movie-time d-flex align-items-center my-2">
                                <span className="movie-time-text font-normal">
                                  1hr : 22mins
                                </span>
                              </div>
                            </div>
                            <div className="watchlist">
                              <a className="watch-list-not" href="playlist.html">
                                <svg
                                  width={10}
                                  height={10}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon-10"
                                >
                                  <path
                                    d="M12 4V20M20 12H4"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <span className="watchlist-label">
                                  {" "}
                                  Watchlist{" "}
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="block-social-info align-items-center">
                          <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fas fa-share-alt" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <a href="#" target="_blank">
                                      <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#" target="_blank">
                                      <i className="fab fa-twitter" />
                                    </a>
                                    <a href="#">
                                      <i className="fas fa-link" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fa-regular fa-heart" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <span>+51</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="iq-button">
                            <a
                              href="movie-detail.html"
                              className="btn text-uppercase position-relative rounded-circle"
                            >
                              <i className="fa-solid fa-play ms-0" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="swiper-slide">
                    <div className="iq-card card-hover">
                      <div className="block-images position-relative w-100">
                        <div className="img-box w-100">
                          <a
                            href="movie-detail.html"
                            className="position-absolute top-0 bottom-0 start-0 end-0"
                          />
                          <img
                            src="asset/images/movies/top-picks/03.html"
                            alt="movie-card"
                            className="img-fluid object-cover w-100 d-block border-0"
                          />
                        </div>
                        <div className="card-description with-transition">
                          <div className="cart-content">
                            <div className="content-left">
                              <h5 className="iq-title text-capitalize">
                                <a href="movie-detail.html">Cromeus</a>
                              </h5>
                              <div className="movie-time d-flex align-items-center my-2">
                                <span className="movie-time-text font-normal">
                                  1hr : 30mins
                                </span>
                              </div>
                            </div>
                            <div className="watchlist">
                              <a className="watch-list-not" href="playlist.html">
                                <svg
                                  width={10}
                                  height={10}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon-10"
                                >
                                  <path
                                    d="M12 4V20M20 12H4"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <span className="watchlist-label">
                                  {" "}
                                  Watchlist{" "}
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="block-social-info align-items-center">
                          <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fas fa-share-alt" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <a href="#" target="_blank">
                                      <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#" target="_blank">
                                      <i className="fab fa-twitter" />
                                    </a>
                                    <a href="#">
                                      <i className="fas fa-link" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fa-regular fa-heart" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <span>+51</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="iq-button">
                            <a
                              href="movie-detail.html"
                              className="btn text-uppercase position-relative rounded-circle"
                            >
                              <i className="fa-solid fa-play ms-0" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="swiper-slide">
                    <div className="iq-card card-hover">
                      <div className="block-images position-relative w-100">
                        <div className="img-box w-100">
                          <a
                            href="movie-detail.html"
                            className="position-absolute top-0 bottom-0 start-0 end-0"
                          />
                          <img
                            src="asset/images/movies/top-picks/04.html"
                            alt="movie-card"
                            className="img-fluid object-cover w-100 d-block border-0"
                          />
                        </div>
                        <div className="card-description with-transition">
                          <div className="cart-content">
                            <div className="content-left">
                              <h5 className="iq-title text-capitalize">
                                <a href="movie-detail.html">Reodg</a>
                              </h5>
                              <div className="movie-time d-flex align-items-center my-2">
                                <span className="movie-time-text font-normal">
                                  1hr : 30mins
                                </span>
                              </div>
                            </div>
                            <div className="watchlist">
                              <a className="watch-list-not" href="playlist.html">
                                <svg
                                  width={10}
                                  height={10}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon-10"
                                >
                                  <path
                                    d="M12 4V20M20 12H4"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <span className="watchlist-label">
                                  {" "}
                                  Watchlist{" "}
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="block-social-info align-items-center">
                          <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fas fa-share-alt" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <a href="#" target="_blank">
                                      <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#" target="_blank">
                                      <i className="fab fa-twitter" />
                                    </a>
                                    <a href="#">
                                      <i className="fas fa-link" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fa-regular fa-heart" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <span>+51</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="iq-button">
                            <a
                              href="movie-detail.html"
                              className="btn text-uppercase position-relative rounded-circle"
                            >
                              <i className="fa-solid fa-play ms-0" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="swiper-slide">
                    <div className="iq-card card-hover">
                      <div className="block-images position-relative w-100">
                        <div className="img-box w-100">
                          <a
                            href="movie-detail.html"
                            className="position-absolute top-0 bottom-0 start-0 end-0"
                          />
                          <img
                            src="asset/images/movies/top-picks/05.html"
                            alt="movie-card"
                            className="img-fluid object-cover w-100 d-block border-0"
                          />
                        </div>
                        <div className="card-description with-transition">
                          <div className="cart-content">
                            <div className="content-left">
                              <h5 className="iq-title text-capitalize">
                                <a href="movie-detail.html">guiility</a>
                              </h5>
                              <div className="movie-time d-flex align-items-center my-2">
                                <span className="movie-time-text font-normal">
                                  1hr : 30mins
                                </span>
                              </div>
                            </div>
                            <div className="watchlist">
                              <a className="watch-list-not" href="playlist.html">
                                <svg
                                  width={10}
                                  height={10}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon-10"
                                >
                                  <path
                                    d="M12 4V20M20 12H4"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <span className="watchlist-label">
                                  {" "}
                                  Watchlist{" "}
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="block-social-info align-items-center">
                          <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fas fa-share-alt" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <a href="#" target="_blank">
                                      <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#" target="_blank">
                                      <i className="fab fa-twitter" />
                                    </a>
                                    <a href="#">
                                      <i className="fas fa-link" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fa-regular fa-heart" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <span>+51</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="iq-button">
                            <a
                              href="movie-detail.html"
                              className="btn text-uppercase position-relative rounded-circle"
                            >
                              <i className="fa-solid fa-play ms-0" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="swiper-slide">
                    <div className="iq-card card-hover">
                      <div className="block-images position-relative w-100">
                        <div className="img-box w-100">
                          <a
                            href="movie-detail.html"
                            className="position-absolute top-0 bottom-0 start-0 end-0"
                          />
                          <img
                            src="asset/images/movies/top-picks/06.html"
                            alt="movie-card"
                            className="img-fluid object-cover w-100 d-block border-0"
                          />
                        </div>
                        <div className="card-description with-transition">
                          <div className="cart-content">
                            <div className="content-left">
                              <h5 className="iq-title text-capitalize">
                                <a href="movie-detail.html">syyvcihonic</a>
                              </h5>
                              <div className="movie-time d-flex align-items-center my-2">
                                <span className="movie-time-text font-normal">
                                  1hr : 30mins
                                </span>
                              </div>
                            </div>
                            <div className="watchlist">
                              <a className="watch-list-not" href="playlist.html">
                                <svg
                                  width={10}
                                  height={10}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon-10"
                                >
                                  <path
                                    d="M12 4V20M20 12H4"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <span className="watchlist-label">
                                  {" "}
                                  Watchlist{" "}
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="block-social-info align-items-center">
                          <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fas fa-share-alt" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <a href="#" target="_blank">
                                      <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#" target="_blank">
                                      <i className="fab fa-twitter" />
                                    </a>
                                    <a href="#">
                                      <i className="fas fa-link" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fa-regular fa-heart" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <span>+51</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="iq-button">
                            <a
                              href="movie-detail.html"
                              className="btn text-uppercase position-relative rounded-circle"
                            >
                              <i className="fa-solid fa-play ms-0" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="swiper-slide">
                    <div className="iq-card card-hover">
                      <div className="block-images position-relative w-100">
                        <div className="img-box w-100">
                          <a
                            href="movie-detail.html"
                            className="position-absolute top-0 bottom-0 start-0 end-0"
                          />
                          <img
                            src="asset/images/movies/top-picks/07.html"
                            alt="movie-card"
                            className="img-fluid object-cover w-100 d-block border-0"
                          />
                        </div>
                        <div className="card-description with-transition">
                          <div className="cart-content">
                            <div className="content-left">
                              <h5 className="iq-title text-capitalize">
                                <a href="movie-detail.html">tittanc</a>
                              </h5>
                              <div className="movie-time d-flex align-items-center my-2">
                                <span className="movie-time-text font-normal">
                                  1hr : 30mins
                                </span>
                              </div>
                            </div>
                            <div className="watchlist">
                              <a className="watch-list-not" href="playlist.html">
                                <svg
                                  width={10}
                                  height={10}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon-10"
                                >
                                  <path
                                    d="M12 4V20M20 12H4"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <span className="watchlist-label">
                                  {" "}
                                  Watchlist{" "}
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="block-social-info align-items-center">
                          <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fas fa-share-alt" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <a href="#" target="_blank">
                                      <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#" target="_blank">
                                      <i className="fab fa-twitter" />
                                    </a>
                                    <a href="#">
                                      <i className="fas fa-link" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="share position-relative d-flex align-items-center text-center mb-0">
                              <span className="w-100 h-100 d-inline-block bg-transparent">
                                <i className="fa-regular fa-heart" />
                              </span>
                              <div className="share-wrapper">
                                <div className="share-boxs d-inline-block">
                                  <svg
                                    width={15}
                                    height={40}
                                    className="share-shape"
                                    viewBox="0 0 15 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                      fill="#191919"
                                    />
                                  </svg>
                                  <div className=" overflow-hidden">
                                    <span>+51</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="iq-button">
                            <a
                              href="movie-detail.html"
                              className="btn text-uppercase position-relative rounded-circle"
                            >
                              <i className="fa-solid fa-play ms-0" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="swiper-button swiper-button-next" />
                <div className="swiper-button swiper-button-prev" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
    
    <div className="rtl-box">
      <a
        className="btn btn-fixed-end btn-icon btn-setting"
        id="settingbutton"
        data-bs-toggle="offcanvas"
        data-bs-target="#live-customizer"
        role="button"
        aria-controls="live-customizer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.875em"
          height="1.875em"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
            clipRule="evenodd"
          />
        </svg>
      </a>
      <div
        className="offcanvas offcanvas-end live-customizer on-rtl end"
        tabIndex={-1}
        id="live-customizer"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        aria-labelledby="live-customizer-label"
        aria-modal="true"
        role="dialog"
      >
        <div className="offcanvas-header gap-3">
          <div className="d-flex align-items-center">
            <h5 className="offcanvas-title text-dark" id="live-customizer-label">
              Live Customizer
            </h5>
          </div>
          <div className="d-flex gap-1 align-items-center">
            <button
              className="btn btn-icon text-primary"
              data-reset="settings"
              data-bs-toggle="tooltip"
              data-bs-placement="left"
              aria-label="Reset All Settings"
              data-bs-original-title="Reset All Settings"
            >
              <span className="btn-inner">
                <i className="fa-solid fa-arrows-rotate" />
              </span>
            </button>
            <button
              type="button"
              className="btn btn-icon btn-close px-0 text-reset shadow-none text-dark"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
        </div>
        <div className="offcanvas-body pt-0">
          <div className="modes row row-cols-2 gx-2">
            <div className="col">
              <div data-setting="attribute" className="text-center w-100">
                <input
                  type="radio"
                  defaultValue="ltr"
                  className="btn-check"
                  name="theme_scheme_direction"
                  data-prop="dir"
                  id="theme-scheme-direction-ltr"
                  defaultChecked=""
                />
                <label
                  className="btn dir-btn cutomizer-button w-100"
                  htmlFor="theme-scheme-direction-ltr"
                >
                  LTR
                </label>
              </div>
            </div>
            <div className="col">
              <div data-setting="attribute" className="text-center w-100">
                <input
                  type="radio"
                  defaultValue="rtl"
                  className="btn-check"
                  name="theme_scheme_direction"
                  data-prop="dir"
                  id="theme-scheme-direction-rtl"
                />
                <label
                  className="btn dir-btn cutomizer-button w-100"
                  htmlFor="theme-scheme-direction-rtl"
                >
                  RTL
                </label>
              </div>
            </div>
          </div>
          <div className="modes mt-3">
            <div className="color-customizer mb-3">
              <h6 className="mb-0 title-customizer">Color Customizer</h6>
            </div>
            <div className="row row-cols-2 gx-2">
              <div className="col mb-3">
                <div data-setting="attribute" className="text-center w-100">
                  <input
                    type="radio"
                    defaultValue="dark"
                    className="btn-check"
                    name="theme_style_appearance"
                    data-prop="data-bs-theme"
                    id="theme-scheme-color-netflix"
                    defaultChecked=""
                  />
                  <label
                    className="btn dir-btn cutomizer-button w-100"
                    htmlFor="theme-scheme-color-netflix"
                  >
                    Netflix
                  </label>
                </div>
              </div>
              <div className="col mb-3">
                <div data-setting="attribute" className="text-center w-100">
                  <input
                    type="radio"
                    defaultValue="hotstar"
                    className="btn-check"
                    name="theme_style_appearance"
                    data-prop="data-bs-theme"
                    id="theme-scheme-color-hotstar"
                  />
                  <label
                    className="btn dir-btn cutomizer-button w-100"
                    htmlFor="theme-scheme-color-hotstar"
                  >
                    Hotstar
                  </label>
                </div>
              </div>
              <div className="col">
                <div data-setting="attribute" className="text-center w-100">
                  <input
                    type="radio"
                    defaultValue="amazonprime"
                    className="btn-check"
                    name="theme_style_appearance"
                    data-prop="data-bs-theme"
                    id="theme-scheme-color-prime"
                  />
                  <label
                    className="btn dir-btn cutomizer-button w-100"
                    htmlFor="theme-scheme-color-prime"
                  >
                    Prime
                  </label>
                </div>
              </div>
              <div className="col">
                <div data-setting="attribute" className="text-center w-100">
                  <input
                    type="radio"
                    defaultValue="hulu"
                    className="btn-check"
                    name="theme_style_appearance"
                    data-prop="data-bs-theme"
                    id="theme-scheme-color-hulu"
                  />
                  <label
                    className="btn dir-btn cutomizer-button w-100"
                    htmlFor="theme-scheme-color-hulu"
                  >
                    Hulu
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>{" "}
    <div id="back-to-top" style={{ display: "none" }}>
      <a
        className="p-0 btn bg-primary btn-sm position-fixed top border-0 rounded-circle"
        id="top"
        href="#top"
      >
        <i className="fa-solid fa-chevron-up" />
      </a>
    </div>
    {/* Wrapper End*/}
    {/* Library Bundle Script */}
    {/* Plugin Scripts */}
    {/* SwiperSlider Script */}
    {/* Lodash Utility */}
    {/* External Library Bundle Script */}
    {/* countdown Script */}
    {/* utility Script */}
    {/* Setting Script */}
    {/* Streamit Script */}
  </>
  </div>
  )
}

export default Movie