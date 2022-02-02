import React from 'react';
import { infoData } from '../data/infoData';
import { SlideData } from '../data/sliderData';
// import GlobalStyle from '../globalStyle';
import Hero from './Hero';
import InfoSection from './InfoSection';
import Navbar from './Navbar';

const HomePage = () => {
    return (
        <div>
            <Navbar isHomePage={true} />
            <Hero slides={SlideData} />
            <InfoSection {...infoData} />
        </div>
    );
};

export default HomePage;
