/* eslint-disable max-lines */
import React from 'react';
import './index.css';
import Navbars from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/About';
import Product from './components/Products';
import OurServices from './components/OurServices';

const App = () => {
    return (
        <>
            <section id="home">
                <Navbars />
                <Hero />
            </section>
            <section id="about-us">
                <AboutSection />
            </section>
            <section id="products">
                <Product />
            </section>
            <section id="services">
                <OurServices />
            </section>
        </>
    );
};

export default App;
