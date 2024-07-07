import PropTypes from 'prop-types';

export default function TopSoldWatches(props) {

  return (
    <div className="box">
      <div className="box-content">
        <div className="img-box">
          <img src={props.watch.image} alt={props.watch.name} />
        </div>
        <div className="detail-box">
          <div className="text">
            <h6>{props.watch.name}</h6>
            <h5>
              <span>$</span> {props.watch.price}
            </h5>
          </div>
          <div className="like">
            <h6>Like</h6>
            <div className="star_container">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-box">
        <a href="">Add To Cart</a>
      </div>
    </div>
  );
}


TopSoldWatches.propTypes = {
  watch: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired
};