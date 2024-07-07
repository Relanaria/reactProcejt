export default function HeaderSection() {
  return (
    <div className="hero_area">
      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand" href="index.html">
              <span>HandTime</span>
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className=""> </span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  ">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">
                    {" "}
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="product.html">
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="testimonial.html">
                    Testimonial
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    Contact Us
                  </a>
                </li>
              </ul>
              <div className="user_optio_box">
                <a href="">
                  <i className="fa fa-user" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <section className="slider_section ">
        <div className="slider_bg_box">
          <img src="images/slider-bg.jpg" alt="" />
        </div>
        <div
          id="customCarousel1"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container ">
                <div className="row">
                  <div className="col-md-7">
                    <div className="detail-box">
                      <h1>Stylish Watches</h1>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Minus quidem maiores perspiciatis, illo maxime
                        voluptatem a itaque suscipit.
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn1">
                          Contact Us
                        </a>
                        <a href="" className="btn2">
                          About Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container ">
                <div className="row">
                  <div className="col-md-7">
                    <div className="detail-box">
                      <h1>Stylish Watches</h1>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Minus quidem maiores perspiciatis, illo maxime
                        voluptatem a itaque suscipit.
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn1">
                          Contact Us
                        </a>
                        <a href="" className="btn2">
                          About Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container ">
                <div className="row">
                  <div className="col-md-7">
                    <div className="detail-box">
                      <h1>Stylish Watches</h1>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Minus quidem maiores perspiciatis, illo maxime
                        voluptatem a itaque suscipit.
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn1">
                          Contact Us
                        </a>
                        <a href="" className="btn2">
                          About Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container ">
                <div className="row">
                  <div className="col-md-7">
                    <div className="detail-box">
                      <h1>Stylish Watches</h1>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Minus quidem maiores perspiciatis, illo maxime
                        voluptatem a itaque suscipit.
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn1">
                          Contact Us
                        </a>
                        <a href="" className="btn2">
                          About Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container ">
                <div className="row">
                  <div className="col-md-7">
                    <div className="detail-box">
                      <h1>Stylish Watches</h1>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Minus quidem maiores perspiciatis, illo maxime
                        voluptatem a itaque suscipit.
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn1">
                          Contact Us
                        </a>
                        <a href="" className="btn2">
                          About Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ol className="carousel-indicators">
            <li
              data-target="#customCarousel1"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#customCarousel1" data-slide-to="1"></li>
            <li data-target="#customCarousel1" data-slide-to="2"></li>
            <li data-target="#customCarousel1" data-slide-to="3"></li>
            <li data-target="#customCarousel1" data-slide-to="4"></li>
          </ol>
        </div>
      </section>
    </div>
  );
}
