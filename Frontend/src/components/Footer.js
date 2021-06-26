import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
            <div className="col">
              <h3>CONTACT INFO</h3>
			        <h4><PhoneIcon />342-420-6969</h4>
              <h4><LocationOnIcon/>123 Streeet Model Town, Lahore</h4>
              <h4><ContactSupportIcon/>support@luxurylife.com</h4>
            </div>

          {/* Column2 */}
            <div className="col">
              <h3>ROOMS</h3>
              <ui className="list-unstyled">
                <li>Hotels</li>
                <li>Villas</li>
                <li>Resorts</li>
              </ui>
            </div>

          {/* Column3 */}
          <div className="col">
              <h3>CONNECT WITH US</h3>
              <ui className="list-unstyled">
                <li><FacebookIcon  /></li>
                <li><TwitterIcon /></li>
                <li><InstagramIcon /></li>
              </ui>
            </div>
          
          {/* Column4 */}
          <div className="col">
              <h3>ABOUT US</h3>
              <ui className="list-unstyled">
                <p>Luxury Living is one of the best 5-star hotels in the center of Lahore that boasts a fantastic location near the Blue Area, the METRO Bus Service, and the shopping and entertainment facilities in Pace Super Market and Centaurus. An excellent choice for both business and leisure travelers. </p>
              </ui>
            </div>  
          
        </div>
        <hr />
        <div className="row-end">
          <p className="center">
            &copy;{new Date().getFullYear()} LUXURY LIVING | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;