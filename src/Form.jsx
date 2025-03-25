import React, { useState, useEffect } from 'react';

const Form = ({ setText, setBgColor, setImage, setFont, setFontSize, setImagePosition }) => {
  const [textInput, setTextInput] = useState('');
  const [colorInput, setColorInput] = useState('#f8f9fa');
  const [fontInput, setFontInput] = useState('Roboto');
  const [fontSizeInput, setFontSizeInput] = useState('medium');
  const [imagePositionInput, setImagePositionInput] = useState('center');
  const [isEditing, setIsEditing] = useState(true);

  const handleTextChange = (e) => {
    setTextInput(e.target.value);
    setText(e.target.value);
  };

  const handleColorChange = (e) => {
    setColorInput(e.target.value);
    setBgColor(e.target.value);
  };

  const handleFontChange = (e) => {
    const selectedFont = e.target.value;
    setFontInput(selectedFont);
    setFont(selectedFont);
  };

  const handleFontSizeChange = (e) => {
    setFontSizeInput(e.target.value);
    setFontSize(e.target.value);
  };

  const handleImagePositionChange = (e) => {
    setImagePositionInput(e.target.value);
    setImagePosition(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Initial update when component mounts
  useEffect(() => {
    setText(textInput);
    setBgColor(colorInput);
    setFont(fontInput);
    setFontSize(fontSizeInput);
    setImagePosition(imagePositionInput);
  }, []);

  const formStyle = {
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#fff',
    border: '1px solid #a2a9b1',
    borderRadius: '2px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '15px',
    color: '#202122',
    fontSize: '14px',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    border: '1px solid #a2a9b1',
    borderRadius: '2px',
  };

  const buttonStyle = {
    backgroundColor: '#36c',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '2px',
    cursor: 'pointer',
    fontSize: '14px',
  };

  return (
    <form style={formStyle}>
      <label style={labelStyle}>
        Banner Text:
        <input 
          type="text" 
          value={textInput} 
          onChange={handleTextChange}
          style={inputStyle}
          placeholder="Enter Wikipedia-style title"
        />
      </label>

      <label style={labelStyle}>
        Background Color:
        <input 
          type="color" 
          value={colorInput} 
          onChange={handleColorChange}
          style={{ ...inputStyle, height: '40px' }}
        />
      </label>

      <label style={labelStyle}>
        Upload Banner Image:
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleImageChange}
          style={inputStyle}
        />
      </label>

      <label style={labelStyle}>
        Image Position:
        <select value={imagePositionInput} onChange={handleImagePositionChange} style={inputStyle}>
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
      </label>

      <label style={labelStyle}>
        Font Size:
        <select value={fontSizeInput} onChange={handleFontSizeChange} style={inputStyle}>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </label>

      <label style={labelStyle}>
        Select Font:
        <select value={fontInput} onChange={handleFontChange} style={inputStyle}>
          {/* Elegant and Decorative Fonts */}
          <option value="Playfair Display">Playfair Display (Elegant)</option>
          <option value="Cormorant Garamond">Cormorant Garamond (Classic)</option>
          <option value="Cinzel">Cinzel (Decorative)</option>
          <option value="UnifrakturMaguntia">UnifrakturMaguntia (Medieval)</option>
          
          {/* Modern and Clean Fonts */}
          <option value="Montserrat">Montserrat (Modern)</option>
          <option value="Raleway">Raleway (Clean)</option>
          <option value="Open Sans">Open Sans (Minimal)</option>
          <option value="Roboto">Roboto (Contemporary)</option>
          
          {/* Artistic and Unique Fonts */}
          <option value="Pacifico">Pacifico (Handwriting)</option>
          <option value="Dancing Script">Dancing Script (Cursive)</option>
          <option value="Great Vibes">Great Vibes (Elegant Script)</option>
          <option value="Satisfy">Satisfy (Playful)</option>
          
          {/* Professional and Traditional Fonts */}
          <option value="Merriweather">Merriweather (Professional)</option>
          <option value="Source Serif Pro">Source Serif Pro (Traditional)</option>
          <option value="Lora">Lora (Readable)</option>
          <option value="PT Serif">PT Serif (Classic)</option>
          
          {/* Bold and Impactful Fonts */}
          <option value="Oswald">Oswald (Bold)</option>
          <option value="Anton">Anton (Impact)</option>
          <option value="Bebas Neue">Bebas Neue (Strong)</option>
          <option value="Righteous">Righteous (Dynamic)</option>
          
          {/* Special and Unique Fonts */}
          <option value="Orbitron">Orbitron (Futuristic)</option>
          <option value="Press Start 2P">Press Start 2P (Retro)</option>
          <option value="VT323">VT323 (Terminal)</option>
          <option value="Special Elite">Special Elite (Typewriter)</option>
        </select>
      </label>

      <div>
        <button 
          type="button" 
          style={buttonStyle}
        >
          Update Banner
        </button>
      </div>
    </form>
  );
};

export default Form;