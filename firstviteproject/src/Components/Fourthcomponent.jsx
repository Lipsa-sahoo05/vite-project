import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Fourthcomponent() {
  return (
    <>
    <div className="card" style={{backgroundColor:'white'}}>
  <div className="card-header" style={{fontFamily: 'cambria', color: 'rgb(42, 42, 18)'}} >
    <b>A Pet lover's Paradise</b>
  </div>
  <div className="card-body">
    <h5 className="card-title">Experience supertail app on mobile</h5>
    <p className="card-text card-img-hover" >
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSADMTEo4YEurEn-gXFBOfumKYAJMviq-T9ww&s" style={{height: '50px'}}/>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" style={{height: '35px'}}/>
    </p>
    <p>Do follow us on</p>
    <a href="#" className="btn btn-primary">instagram.com</a>
    <a href="#" className="btn btn-primary">facebook.com</a>
    <a href="#" className="btn btn-primary">youtube.com</a>
  </div>
</div>
    </>
  )
}

export default Fourthcomponent