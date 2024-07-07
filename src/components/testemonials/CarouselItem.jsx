import PropTypes from 'prop-types';
export default function CouselItem(props) {
  return (
    <div className="carousel-item">
      <div className="container">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div className="box">
              <div className="img-box">
                <img src={props.person.image} alt={props.person.name} />
              </div>
              <div className="detail-box">
                <div className="client_info">
                  <div className="client_name">
                    <h5>{props.person.name}</h5>
                    <h6>{props.person.status}</h6>
                  </div>
                  <i className="fa fa-quote-left" aria-hidden="true"></i>
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


CouselItem.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
  }).isRequired
};