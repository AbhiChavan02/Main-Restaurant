import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app_footer section_padding" id="login">
    <FooterOverlay/>
    <Newsletter/>

    <div className="app_footer_links">
      <div className="app_footer_links_contact">
        <h1 className="app_footer_headtext">Contact Us</h1>
        <p className="p_open">PTS, Ganga Trueno Business Park, Pune</p>
        <p className="p_open">+91 0000000000</p>
        <p className="p_open">+91 0000000000</p>
      </div>
    </div>

    <div className="app_footer_links_logo">
      <img src={images.yourcompany} alt="footer_logo"/>
      <p className="p_open">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
      <img src={images.spoon} className="spoon_img" style={{ marginTop: 15 }} />
      <div className="app_footer_links_icons">
        <FiFacebook />
        <FiTwitter />
        <FiInstagram />
      </div>
    </div>

    <div className="app_footer_links_work">
      <h1 className="app_footer_headtext">Working Hours</h1>
      <p className="p_open">Monday-Friday:</p>
      <p className="p_open">08:00 am - 12:00 am</p>
      <p className="p_open">Saturday-Sunday:</p>
      <p className="p_open">07:00 am - 11:00 pm</p>
    </div>

    <div className="footer_copyright">
      <p className="p_open">2024 PTS. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
