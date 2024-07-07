export default function HeaderSection() {
  return (
    <div class="hero_area">
      <header class="header_section">
        <div class="container-fluid">
          <nav class="navbar navbar-expand-lg custom_nav-container ">
            <a class="navbar-brand" href="index.html">
              <span>HandTime</span>
            </a>

            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class=""> </span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav  ">
                <li class="nav-item active">
                  <a class="nav-link" href="index.html">
                    Home <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="about.html">
                    {" "}
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="product.html">
                    Products
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="testimonial.html">
                    Testimonial
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="contact.html">
                    Contact Us
                  </a>
                </li>
              </ul>
              <div class="user_optio_box">
                <a href="">
                  <i class="fa fa-user" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <section class="slider_section ">
        <div class="slider_bg_box">
          <img src="images/slider-bg.jpg" alt="" />
        </div>
        <div id="customCarousel1" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="container ">
                <div class="row">
                  <div class="col-md-7">
                    <div class="detail-box">
                      <h1>Stylish Watches</h1>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Minus quidem maiores perspiciatis, illo maxime
                        voluptatem a itaque suscipit.
                      </p>
                      <div class="btn-box">
                        <a href="" class="btn1">
                          Contact Us
                        </a>
                        <a href="" class="btn2">
                          About Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="container ">
                <div class="row">
                  <div class="col-md-7">
                    <div class="detail-box">
                      <h1>Stylish Watches</h1>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Minus quidem maiores perspiciatis, illo maxime
                        voluptatem a itaque suscipit.
                      </p>
                      <div class="btn-box">
                        <a href="" class="btn1">
                          Contact Us
                        </a>
                        <a href="" class="btn2">
                          About Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="container ">
                <div class="row">
                  <div class="col-md-7">
                    <div class="detail-box">
                      <h1>Stylish Watches</h1>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Minus quidem maiores perspiciatis, illo maxime
                        voluptatem a itaque suscipit.
                      </p>
                      <div class="btn-box">
                        <a href="" class="btn1">
                          Contact Us
                        </a>
                        <a href="" class="btn2">
                          About Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="container ">
                <div class="row">
                  <div class="col-md-7">
                    <div class="detail-box">
                      <h1>Stylish Watches</h1>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Minus quidem maiores perspiciatis, illo maxime
                        voluptatem a itaque suscipit.
                      </p>
                      <div class="btn-box">
                        <a href="" class="btn1">
                          Contact Us
                        </a>
                        <a href="" class="btn2">
                          About Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="container ">
                <div class="row">
                  <div class="col-md-7">
                    <div class="detail-box">
                      <h1>Stylish Watches</h1>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Minus quidem maiores perspiciatis, illo maxime
                        voluptatem a itaque suscipit.
                      </p>
                      <div class="btn-box">
                        <a href="" class="btn1">
                          Contact Us
                        </a>
                        <a href="" class="btn2">
                          About Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ol class="carousel-indicators">
            <li
              data-target="#customCarousel1"
              data-slide-to="0"
              class="active"
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
