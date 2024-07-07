export default function TopSoldWatches(props) {
  return (
    <div class="box">
      <div class="box-content">
        <div class="img-box">
          <img src={props.watch.image} alt={props.watch.name} />
        </div>
        <div class="detail-box">
          <div class="text">
            <h6>{props.watch.name}</h6>
            <h5>
              <span>$</span> {props.watch.price}
            </h5>
          </div>
          <div class="like">
            <h6>Like</h6>
            <div class="star_container">
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-box">
        <a href="">Add To Cart</a>
      </div>
    </div>
  );
}
