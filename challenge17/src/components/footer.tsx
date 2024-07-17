import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer: React.FC = () => {
  return (
    
    <div className="container footer">
      <div className="row">
        <div className="col-md-3 share-icons">
          <h2>Social share</h2>
          <div className="social-icons">
            <a href="https://www.facebook.com/" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="https://www.instagram.com/?hl=en" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://twitter.com/" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://www.linkedin.com/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
        </div>
        <div className="col-md-3">
          <h2>Event info</h2>
          <ul>
            <li><a href="#">Enter Now</a></li>
            <li><a href="#">Event Info</a></li>
            <li><a href="#">Course Maps</a></li>
            <li><a href="#">Race Pack</a></li>
            <li><a href="#">Results</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Am I Registered?</a></li>
          </ul>
        </div>
        <div className="col-md-3">
          <h2>Registration</h2>
          <ul>
            <li><a href="#">Volunteers</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Results</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Service Plus</a></li>
            <li><a href="#">Contacts</a></li>
          </ul>
        </div>
        <div className="col-md-3">
          <h2>Schedule</h2>
          <ul>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Videos</a></li>
            <li><a href="#">Results</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Results</a></li>
            <li><a href="#">Volunteers</a></li>
          </ul>
        </div>
      </div>
    </div>
    
  );
};

export default Footer;