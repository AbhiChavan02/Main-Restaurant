import React, { useState, useEffect, useRef } from 'react';
import { images } from '../../constants';

import './AboutUs.css';

const AboutUs = () => {
  const [aboutVisible, setAboutVisible] = useState(false);
  const [knifeVisible, setKnifeVisible] = useState(false);
  const [historyVisible, setHistoryVisible] = useState(false);

  const aboutRef = useRef(null);
  const knifeRef = useRef(null);
  const historyRef = useRef(null);

  const createObserver = (ref, setVisible) => {
    return new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting); // Toggle visibility based on intersection
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
      }
    );
  };

  useEffect(() => {
    const aboutObserver = createObserver(aboutRef, setAboutVisible);
    const knifeObserver = createObserver(knifeRef, setKnifeVisible);
    const historyObserver = createObserver(historyRef, setHistoryVisible);

    if (aboutRef.current) aboutObserver.observe(aboutRef.current);
    if (knifeRef.current) knifeObserver.observe(knifeRef.current);
    if (historyRef.current) historyObserver.observe(historyRef.current);

    return () => {
      if (aboutRef.current) aboutObserver.unobserve(aboutRef.current);
      if (knifeRef.current) knifeObserver.unobserve(knifeRef.current);
      if (historyRef.current) historyObserver.unobserve(historyRef.current);
    };
  }, []);

  return (
    <div className="app_aboutus app_bg flex_center section_padding" id="about">
      <div className="app_aboutus_overlay flex_center">
        {/* <img src={images.G} alt="G_overlay" /> */}
      </div>

      <div className="app_aboutus_content flex_center">
        {/* About Section */}
        <div
          ref={aboutRef}
          className={`app_aboutus_content_about ${aboutVisible ? 'about-animate' : ''}`}
        >
          <h1 className="headtext_cormorant">About us</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon_img" />
          <p className="p_open">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
          </p>
          <button type="button" className="custom_button">Know More</button>
        </div>

        {/* Knife Section */}
        <div
          ref={knifeRef}
          className={`app_aboutus_content_knife flex_center ${knifeVisible ? 'knife-animate' : ''}`}
        >
          <img src={images.knife} alt="about_knife" />
        </div>

        {/* History Section */}
        <div
          ref={historyRef}
          className={`app_aboutus_content_history ${historyVisible ? 'history-animate' : ''}`}
        >
          <h1 className="headtext_cormorant">Our History</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon_img" />
          <p className="p_open">
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.
          </p>
          <button type="button" className="custom_button">Know More</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
