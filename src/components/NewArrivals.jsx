import NewArrivalsWatches from "./newArrivals/NewArrivalsWatches";

export default function NewArrivals() {
  const watches = [
    { name: "Casio EF-129D-2AVEF", price: "162", image: "images/w7.jpg" },
    { name: "Casion EFV-550P-1AVUEF", price: "180", image: "images/w8.jpg" },
    { name: "Casion GA-2100-1A4ER", price: "180", image: "images/w9.jpg" },
  ];

  return (
    <section className="product_section ">
      <div className="container">
        <div className="product_heading">
          <h2>New Arrivals</h2>
        </div>
        <div className="product_container">
        {watches.map(w => <NewArrivalsWatches key={w.name} watch={w}/>)}
        </div>
      </div>
    </section>
  );
}
