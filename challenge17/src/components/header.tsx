import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'

const Navbar: React.FC = () => {
  return (
    <div className="container bg-white">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="img/logo.png" className="img img-responsive" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Bikes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Gear</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Parts</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Tires</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Service-info</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Catalogues</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
          <div className="icons-menu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link " href="#"><FontAwesomeIcon icon={faSearch} /></a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#"><FontAwesomeIcon icon={faBagShopping} /></a>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </nav>
    <hr/>
    <div className="container-fluid my-4">
      <h1>Bikes</h1>
    </div>
    <hr/>
    </div>
  );
};

export default Navbar;