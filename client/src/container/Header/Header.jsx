import React from 'react'

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
        <div className="app_header app_wrapper section_padding" id="home">
            <div className="app_wrapper_info">
                <SubHeading title="New flavour for you" />
                <h1 className="app_header_h1">The Value of Fine Dining</h1>
                <p className="p_open" style={{margin: '2rem 0'}}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>
                <button type="button" className="custom_button">Explore Now</button>
            </div>
            
            <div className="app_wrapper_img">
                <img src={images.welcome} alt="header_img" />
            </div>
        </div>
)

export default Header