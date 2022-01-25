import React, { useState } from 'react';
import Dropdown from './components/Dropdown';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Navbar from './components/Navbar';
import { infoData } from './data/infoData';
import { SlideData } from './data/sliderData';
import GlobalStyle from './globalStyle';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <GlobalStyle />
      <Navbar />
      {/* <Dropdown isOpen={isOpen} toggle={toggle} /> */}
      <Hero slides={SlideData} />
      <InfoSection {...infoData} />
    </>
  );
}

export default App;
