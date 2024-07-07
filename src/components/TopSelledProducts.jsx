import TopSoldWatches from "./topSellers/TopSelledWatches";

export default function BestSellers() {

  const watches = [
    { name: "CITIZEN CA4561-89E", price: "499", image: "images/w1.jpg" },
    { name: "CITIZEN AW1711-87L", price: "302", image: "images/w2.jpg" },
    { name: "CITIZEN PROMASTER", price: "480", image: "images/w3.jpg" },
  ];

    return <section className="product_section ">
      <div className="container">
        <div className="product_heading">
          <h2>
            Top Sale Watches
          </h2>
        </div>
        <div className="product_container">
        {watches.map(w => <TopSoldWatches key={w.name} watch={w}/>)}
        </div>
      </div>
    </section>
}