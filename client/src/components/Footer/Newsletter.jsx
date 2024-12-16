import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app_newsletter">
    <div className="app_newsletter_heading">
      <SubHeading title="Newsletter" />
      <h1 className="text">Subscribe To Our Newsletter</h1>
      <p className="p_open">And never miss latest Updates!</p>
    </div>
    <div className="app_newsletter_input flex_center">
      <input type="email" placeholder="Enter your email address" />
      <button type="button" className="custom_button">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;