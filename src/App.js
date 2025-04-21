import React from 'react';
import './index.css';
import Navbars from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/About';

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
        </>
    );
};

export default App;
