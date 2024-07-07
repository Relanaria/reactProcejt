import FeaturedWatches from "./featuredProducts/FeaturedWatches";

export default function FeaturedProducts() {
  const watches = [
    { name: "Submariner", price: "400", image: "images/w4.png" },
    { name: "Oyster Perpetual", price: "400", image: "images/w2.png" },
    { name: "Yacht-Master", price: "350", image: "images/w3.png" },
  ];

  return (
    <section class="product_section ">
      <div class="container">
        <div class="product_heading">
          <h2>Feature Watches</h2>
        </div>
        <div class="product_container">

          {watches.map(w => <FeaturedWatches watch={w}/>)}

        </div>
      </div>
    </section>
  );
}
