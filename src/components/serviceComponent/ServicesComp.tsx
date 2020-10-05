
import React from 'react';


export default function Services() {

    return (
<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" id="service1">
      <img src="/Users/bosco/Documents/web and apps/Olivier Kamanzi/globrock_fin/src/service1.png" className="d-block w-100 serviceSlide" alt="invest" />
            {/* <h3>Investment Advisory</h3> */}
      
    </div>
    <div className="carousel-item" id="service2">
    <img src="/src/service1.png" className="d-block w-100 serviceSlide" alt="Investment Advisory Service"/>
      <div className="serviceDescription">

</div>
    </div>
    <div className="carousel-item" id="service3">
    <img src="/src/service1.png" className="d-block w-100 serviceSlide" alt="Investment Advisory Service"/>
      <div className="serviceDescription">

</div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    )

}
