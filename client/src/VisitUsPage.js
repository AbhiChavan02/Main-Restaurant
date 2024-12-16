import React from 'react';
import './VisitUsPage.css';  // Ensure the path to CSS is correct

const VisitUsPage = () => {
  return (
    <div className="visit-us-container">
      <div className="visit-us-header">
        <h1>Visit Us</h1>
      </div>

      <div className="visit-us-content">
        <p>
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
        </p>

        <p style={{ color: '#DCCA87', marginTop: '2rem' }}>Opening Hours</p>
        <p>Mon - Fri: 10:00 am - 02:00 am</p>
        <p>Sat - Sun: 10:00 am - 03:00 am</p>

        <p style={{ color: '#DCCA87', marginTop: '2rem' }}>Contact Us</p>
        <p>
          <strong>Phone: </strong>
          <a href="tel:+441234567890" className="contact-link">+44 123 456 7890</a>
        </p>

        <div className="visit-us-button">
          <button
            type="button"
            onClick={() => window.location.href = 'https://maps.google.com/?q=Lane+Ends+Bungalow,+Whatcroft+Hall+Lane,+Rudheath,+CW9+75G'}
          >
            Open in Google Maps
          </button>
        </div>

        {/* Google Map Embed */}
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed/v1/place?q=Lane+Ends+Bungalow,+Whatcroft+Hall+Lane,+Rudheath,+CW9+75G&key=YOUR_GOOGLE_MAPS_API_KEY"
            width="100%"
            height="400"
            style={{ border: '0' }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VisitUsPage;
