import React, { useState } from 'react'
import Banner from './Banner'
import Form from './Form'
import './styles.css'

const App = () => {
  const [bannerText, setBannerText] = useState('I enjoy coding and open-source!')
  const [bannerBgColor, setBannerBgColor] = useState('#f8f9fa')
  const [bannerImage, setBannerImage] = useState('https://via.placeholder.com/800x200')
  const [bannerFont, setBannerFont] = useState('Linux Libertine')
  const [bannerFontSize, setBannerFontSize] = useState('medium')
  const [bannerImagePosition, setBannerImagePosition] = useState('center')

  return (
    <div>
      <Banner 
        text={bannerText} 
        bgColor={bannerBgColor} 
        image={bannerImage} 
        font={bannerFont}
        fontSize={bannerFontSize}
        imagePosition={bannerImagePosition}
      />
      <Form 
        setText={setBannerText} 
        setBgColor={setBannerBgColor} 
        setImage={setBannerImage} 
        setFont={setBannerFont}
        setFontSize={setBannerFontSize}
        setImagePosition={setBannerImagePosition}
      />
    </div>
  )
}

export default App
