import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div classsName = "container-fluid">
      <div className = 'row'>
        <div className = 'col-12'>

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">Navbar</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="cources" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Cources
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><Link className="dropdown-item" to="#">MERN</Link></li>
                      <li><Link className="dropdown-item" to="#">MEAN</Link></li>
                      <li><Link className="dropdown-item" to="#">Java Full Stack</Link></li>
                      <li><Link className="dropdown-item" to="#">.Net Full Stack</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="careers">Careers</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="aboutus">About us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="contactus" tabindex="-1" aria-disabled="true">Contact us</Link>
                  </li>
                </ul>
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>


        </div>
      </div>
      
    </div>
  )
}

export default Navbar
