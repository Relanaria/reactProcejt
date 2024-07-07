import FeaturedWatches from "./featuredProducts/FeaturedWatches";

export default function FeaturedProducts() {
  const watches = [
    { name: "Submariner", price: "400", image: "images/w4.png" },
    { name: "Oyster Perpetual", price: "400", image: "images/w10.jpg" },
    { name: "Yacht-Master", price: "350", image: "images/w11.png" },
  ];

  return (
    <section className="product_section ">
      <div className="container">
        <div className="product_heading">
          <h2>Feature Watches</h2>
        </div>
        <div className="product_container">
    
          {watches.map(w => <FeaturedWatches key={w.name} watch={w}/>)}

        </div>
      </div>
    </section>
  );
}
