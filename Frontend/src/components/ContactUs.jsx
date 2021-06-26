import React from "react";
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';

const ContactUs = () => {
  return (
        <div>
            <h1 style={{textAlign:'center', fontSize:'3rem', color: 'red', marginTop:'30px', marginBottom:'30px'}}>Contact Us</h1>
            <h4 style={{textAlign:'center'}}><PhoneIcon />342-420-6969</h4>
            <h4 style={{textAlign:'center'}}><LocationOnIcon/>123 Streeet Model Town, Lahore</h4>
            <h4 style={{textAlign:'center'}}><ContactSupportIcon/>support@luxurylife.com</h4>
        </div>
  );
};

export default ContactUs;
