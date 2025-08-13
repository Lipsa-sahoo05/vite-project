import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Firstcomponent() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <img src="https://s3.ap-south-1.amazonaws.com/assets.ynos.in/startup-logos/YNOS374263.jpg" width="60px" height="60px"/>
    <a className="navbar-brand" href="#" style={{fontFamily: 'impact' ,color:' rgb(136, 136, 30)'}}><b>SUPER-TAILS</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">My store</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">supertail.adopt.com</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            SUGGESTIONS
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Dry Food</a></li>
            <li><a className="dropdown-item" href="#">Toys</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#"></a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Discounts</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="SEARCH" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Firstcomponent