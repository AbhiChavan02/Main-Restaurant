import React, { useState, useEffect, useRef } from 'react';
import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';
import '../../index.css';

const SpecialMenu = () => {
  const [wineVisible, setWineVisible] = useState(false);
  const [cocktailVisible, setCocktailVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);

  const wineRef = useRef(null);
  const cocktailRef = useRef(null);
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
    const wineObserver = createObserver(wineRef, setWineVisible);
    const cocktailObserver = createObserver(cocktailRef, setCocktailVisible);
    const imageObserver = createObserver(imageRef, setImageVisible);

    if (wineRef.current) wineObserver.observe(wineRef.current);
    if (cocktailRef.current) cocktailObserver.observe(cocktailRef.current);
    if (imageRef.current) imageObserver.observe(imageRef.current);

    return () => {
      if (wineRef.current) wineObserver.unobserve(wineRef.current);
      if (cocktailRef.current) cocktailObserver.unobserve(cocktailRef.current);
      if (imageRef.current) imageObserver.unobserve(imageRef.current);
    };
  }, []);

  return (
    <div className="app_specialMenu flex_center section_padding" id="menu">
      <div className="app_specialMenu_title">
        <SubHeading title="Menu that fits your palatte" />
        <h1 className="text">Today&apos;s Special</h1>
      </div>

      <div className="app_specialMenu_menu">
        {/* Wine & Beer Section */}
        <div
          ref={wineRef}
          className={`app_specialMenu_menu_wine flex_center ${wineVisible ? 'wine-animate' : ''}`}
        >
          <p className="app_specialMenu_menu_heading">Wine & Beer</p>
          <div className="app_specialMenu_menu_items">
            {data.wines.map((wine, index) => (
              <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div
          ref={imageRef}
          className={`app_specialMenu_menu_img ${imageVisible ? 'image-animate' : ''}`}
        >
          <img src={images.menu} alt="menu_img" />
        </div>

        {/* Cocktails Section */}
        <div
          ref={cocktailRef}
          className={`app_specialMenu_menu_cocktails flex_center ${cocktailVisible ? 'cocktail-animate' : ''}`}
        >
          <p className="app_specialMenu_menu_heading">Cocktails</p>
          <div className="app_specialMenu_menu_items">
            {data.cocktails.map((cocktail, index) => (
              <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 15 }}>
        <button type="button" className="custom_button">View More</button>
      </div>
    </div>
  );
};

export default SpecialMenu;
