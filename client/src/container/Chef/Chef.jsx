import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Chef.css';

const Chef = () => (
  <div className="app_bg app_wrapper section_padding">
    <div className="app_wrapper_img app_wrapper_img_reverse">
      <img src={images.chef} alt="chef_image" />
    </div>

    <div className="app_wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext_cormorant">What we believe in</h1>

      <div className="app_chef_content">
        <div className="app_chef_content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p_open">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
        </div>
        <p className="p_open"> auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. </p>
      </div>
  </div>
  </div>
);

export default Chef;
