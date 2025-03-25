// src/Banner.jsx
import React from 'react';

const Banner = ({ text, bgColor, image, font, imagePosition = 'center', fontSize = 'medium' }) => {
  const getFontSize = () => {
    switch(fontSize) {
      case 'small': return '1.8em';
      case 'large': return '3.2em';
      default: return '2.5em';
    }
  };

  const getImagePosition = () => {
    switch(imagePosition) {
      case 'left': return 'flex-start';
      case 'right': return 'flex-end';
      default: return 'center';
    }
  };

  const bannerStyle = {
    width: '100%',
    maxWidth: '1200px',
    height: '300px', // Fixed height for rectangular shape
    padding: '20px 40px',
    backgroundColor: bgColor,
    color: '#202122',
    textAlign: 'center',
    borderBottom: '2px solid #a2a9b1',
    position: 'relative',
    fontFamily: `"${font}", sans-serif`,
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // Prevent content from overflowing
  };

  const titleStyle = {
    fontSize: getFontSize(),
    fontWeight: 'normal',
    lineHeight: '1.3',
    marginBottom: '0.5em',
    color: '#000',
    fontFamily: `"${font}", sans-serif`,
    textTransform: font === 'Anton' || font === 'Bebas Neue' ? 'uppercase' : 'none',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    zIndex: 2, // Ensure text stays above image
  };

  const imageContainerStyle = {
    width: '100%',
    height: '200px', // Fixed height for image container
    marginTop: '10px',
    border: '1px solid #c8ccd1',
    padding: '5px',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: getImagePosition(),
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    zIndex: 1,
  };

  const imageStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    height: 'auto',
    display: 'block',
    margin: imagePosition === 'center' ? '0 auto' : '0',
    objectFit: 'contain',
  };

  return (
    <div style={bannerStyle}>
      <h1 style={titleStyle}>{text}</h1>
      {image && (
        <div style={imageContainerStyle}>
          <img 
            src={image} 
            alt="Banner visual" 
            style={imageStyle}
          />
        </div>
      )}
    </div>
  );
};

export default Banner;