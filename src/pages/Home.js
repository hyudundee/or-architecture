import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import { SlideData } from '../data/sliderData';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero slides={SlideData} />
        </div>
    );
};

export default Home;
