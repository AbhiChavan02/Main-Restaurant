import React, { useRef, useEffect } from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  // Auto-scroll functionality with looping
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

        if (scrollLeft + clientWidth >= scrollWidth) {
          // If at the end, reset to the beginning
          scrollRef.current.scrollLeft = 0;
        } else {
          // Otherwise, continue scrolling
          scrollRef.current.scrollLeft += 300;
        }
      }
    }, 3000); // Adjust the time in milliseconds for the scroll interval

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="app_gallery flex_center">
      <div className="app_gallery_content">
        <SubHeading title="Instagram" />
        <h1 className="text">Photo Gallery</h1>
        <p className="p_open" style={{ color: '#392811', marginTop: '2rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type="button" className="custom_button">View More</button>
      </div>

      <div className="app_gallery_images">
        <div className="app_gallery_images_container" ref={scrollRef}>
          {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
            <div className="app_gallery_images_card flex_center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
              <BsInstagram className="gallery_image_icon" />
            </div>
          ))}
        </div>

        <div className="app_gallery_images_arrows">
          <BsArrowLeftShort className="gallery_arrow_icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery_arrow_icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
