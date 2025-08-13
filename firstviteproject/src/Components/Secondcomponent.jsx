import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Secondcomponent() {
  return (
    <>
    
     <hr style={{border:'double',color: 'rgb(194, 38, 38)'}}/>
     <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner" style={{border: '5px inset rgb(236, 231, 233)', borderRadius: '20px', backgroundColor:'rgb(214, 210, 210)'}}>
    <div className="carousel-item active card-img-hover" style={{textAlign: 'center'}}>
      <img src="https://img.freepik.com/free-vector/hand-drawn-pet-shop-facebook-cover-template_23-2150383109.jpg?semt=ais_hybrid&w=740"alt="..." height="50%px" width="70%"/>
    </div>
    <div className="carousel-item card-img-hover" style={{textAlign: 'center'}} >
      <img src="https://www.petsense.com/cdn/shop/files/JuneSliders_BOPIS_M_800x532.png?v=1748551238"   height="30%" width="50%"/>
    </div>
    <div className="carousel-item card-img-hover" style={{textAlign: 'center'}}>
      <img src="https://img.freepik.com/free-vector/hand-drawn-pet-shop-template-design_23-2150339803.jpg"  alt="..." height="50%px" width="70%"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  </>
  )
}

export default Secondcomponent