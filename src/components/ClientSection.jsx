import CouselItem from "./testemonials/CarouselItem";
import DefaultCarouselItem from "./testemonials/CarouselItemMain";

let person1 = {
  name: 'ivad',
  image: 'images/ivad.jpg',
  status: 'Financial Advisor',
  id: '0'
};

let person2 = {
  name: 'Dobri',
  image: 'images/p-5.jpeg',
  status: 'Admin',
  id: '1'
};

let defaultPerson = {
  name: 'Morojink',
  image: 'images/client.jpg',
  status: 'Customer',
  id: '2'
}

const arrOfPersons = [person1, person2];

export default function ClientSection() {
    
    return  <section className="client_section layout_padding-bottom">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
          Testimonial
        </h2>
      </div>
    </div>
    <div id="customCarousel2" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">

        <DefaultCarouselItem person={defaultPerson}/>

        {arrOfPersons.map(p => <CouselItem key={p.name} person={p}/>)}

      </div>
      <ol className="carousel-indicators">
        <li data-target="#customCarousel2" data-slide-to="0" className="active"></li>
        <li data-target="#customCarousel2" data-slide-to="1"></li>
        <li data-target="#customCarousel2" data-slide-to="2"></li>
      </ol>
    </div>
  </section>
}