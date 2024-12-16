import React, { useState, useEffect, useRef } from 'react';
import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Laurels.css';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app_laurels_awards_card">
    <img src={imgUrl} alt="awards" />
    <div className="app_laurels_awards_card_content">
      <p className="p_cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="p_open">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => {
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
    <div className="app_bg app_wrapper section_padding" id="awards">
      <div
        ref={infoRef}
        className={`info ${infoVisible ? 'info-animate' : ''}`}
      >
        <SubHeading title="Awards and Recognition" />
        <h1 className="headtext_cormorant">Our Laurels</h1>

        <div className="app_laurels_awards">
          {data.awards.map((award) => (
            <AwardCard award={award} key={award.title} />
          ))}
        </div>
      </div>

      <div
        ref={imageRef}
        className={`app_wrap ${imageVisible ? 'image-animate' : ''}`}
      >
        <img src={images.laurels} alt="laurels_img" />
      </div>
    </div>
  );
};

export default Laurels;
