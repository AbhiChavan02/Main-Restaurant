import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './Navbar.css';
import '../../App.css'
import images from '../../constants/images'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);

    return (
        <nav className="app_navbar">
            <div className="app_navbar_logo">
                <img src={images.yourcompany} alt="Logo" />
            </div>
            <ul className="app_navbar_links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#awards">Awards</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="app_navbar_login">
                <a href="/Register">Login</a>
                <a href="/Booktable">Book Table</a>
            </div>

            {/* Mobile Menu Icon */}
            <div className="app_navbar_smallscreen">
                {toggleMenu ? (
                    <MdOutlineRestaurantMenu 
                        fontSize={27} 
                        color="#fff" 
                        onClick={() => setToggleMenu(false)} 
                        className="overlay_close"
                    />
                ) : (
                    <GiHamburgerMenu 
                        fontSize={27} 
                        color="#fff" 
                        onClick={() => setToggleMenu(true)} 
                    />
                )}
            </div>

            {/* Mobile Menu Overlay */}
            {toggleMenu && (
                <div className="app_navbar_smallscreen_overlay active">
                    <ul className="app_navbar_smallscreen_links">
                        <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
                        <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
                        <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
                        <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
                        <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
