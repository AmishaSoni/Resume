import React from 'react'
import {FaGithub ,FaPhoneAlt,FaMapMarkerAlt,FaMailBulk,FaLinkedin,FaFacebook,FaInstagram} from "react-icons/fa";
export const Contact = () => {
    return (
        <>
       <div class="contact-head">CONTACT</div>
        <div className="footer">
                <div className="left">
                        <div><span className="iconne"><FaMapMarkerAlt /></span>Address
                            <p>Jharkhand , India</p></div>
                        <div><span className="iconne"><FaPhoneAlt /></span>Phone
                             <p>6200934551</p></div>
                        <div><span className="iconne"><FaMailBulk/></span>Email
                                <p>amishasoni2001@gmail.com</p></div>
                </div>
           <div className="right">
                  <div className="icon">
                      <a href="https://github.com/AmishaSoni"><FaGithub /></a>
                      <a href="https://www.linkedin.com/in/amisha-soni-286677204/"><FaLinkedin/></a>
                      <a href="https://www.facebook.com/amisha.soni.378537/"><FaFacebook/></a>
                      <a href=""><FaInstagram/></a>
                  </div>
           </div>
            
        </div>
        </>
    )
}
export default Contact;