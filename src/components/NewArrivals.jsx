import NewArrivalsWatches from "./newArrivals/NewArrivalsWatches";

export default function NewArrivals() {
  const watches = [
    { name: "Casio EF-129D-2AVEF", price: "162", image: "images/w7.png" },
    { name: "Casion EFV-550P-1AVUEF", price: "180", image: "images/w8.png" },
    { name: "Casion GA-2100-1A4ER", price: "180", image: "images/w9.png" },
  ];

  return (
    <section class="product_section ">
      <div class="container">
        <div class="product_heading">
          <h2>New Arrivals</h2>
        </div>
        <div class="product_container">
        {watches.map(w => <NewArrivalsWatches watch={w}/>)}
        </div>
      </div>
    </section>
  );
}
