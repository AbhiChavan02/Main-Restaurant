import React, { useState, useEffect, useRef } from 'react';
import { SubHeading } from './components';
import { images } from './constants';
import './FindUs.css';
import { Link } from 'react-router-dom';


const FindUs = () => {
  const [infoVisible, setInfoVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);

  const infoRef = useRef(null);
  const imageRef = useRef(null);

  const createObserver = (ref, setVisible) => {
    return new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
  };

  useEffect(() => {
    const infoObserver = createObserver(infoRef, setInfoVisible);
    const imageObserver = createObserver(imageRef, setImageVisible);

    if (infoRef.current) infoObserver.observe(infoRef.current);
    if (imageRef.current) imageObserver.observe(imageRef.current);

    return () => {
      if (infoRef.current) infoObserver.unobserve(infoRef.current);
      if (imageRef.current) imageObserver.unobserve(imageRef.current);
    };
  }, []);

  return (
    <div className="app_bg app_wrapper section_padding" id="contact">
      <div
        ref={infoRef}
        className={`wrap_info ${infoVisible ? 'info-animate' : ''}`}
      >
        <SubHeading className="sub-heading" title="Contact" />
        <h1 className="headtext_cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
        <div className="app_wrapper_content">
          <p className="p_open">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
          <p className="p_cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
          <p className="p_open">Mon - Fri: 10:00 am - 02:00 am</p>
          <p className="p_open">Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
        <Link to="/VisitUs"> {/* Use Link to navigate */}
          <button type="button" className="custom_button" style={{ marginTop: '2rem' }}>
            Visit Us
          </button>
        </Link>
      </div>

      <div
        ref={imageRef}
        className={`wrap_img ${imageVisible ? 'image-animate' : ''}`}
      >
        <img src={images.findus} alt="findus_img" />
      </div>
    </div>
  );
};

export default FindUs;
