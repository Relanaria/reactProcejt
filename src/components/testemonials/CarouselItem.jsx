export default function CouselItem(props) {
  return (
    <div class="carousel-item">
      <div class="container">
        <div class="row">
          <div class="col-md-10 mx-auto">
            <div class="box">
              <div class="img-box">
                <img src={props.person.image} alt={props.person.name} />
              </div>
              <div class="detail-box">
                <div class="client_info">
                  <div class="client_name">
                    <h5>{props.person.name}</h5>
                    <h6>{props.person.status}</h6>
                  </div>
                  <i class="fa fa-quote-left" aria-hidden="true"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
