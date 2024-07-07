import TopSoldWatches from "./topSellers/TopSelledWatches";

export default function BestSellers() {

  const watches = [
    { name: "CITIZEN CA4561-89E", price: "499", image: "images/w1.png" },
    { name: "CITIZEN AW1711-87L", price: "302", image: "images/w2.png" },
    { name: "CITIZEN PROMASTER", price: "480", image: "images/w3.png" },
  ];

    return <section class="product_section ">
      <div class="container">
        <div class="product_heading">
          <h2>
            Top Sale Watches
          </h2>
        </div>
        <div class="product_container">
        {watches.map(w => <TopSoldWatches watch={w}/>)}
        </div>
      </div>
    </section>
}