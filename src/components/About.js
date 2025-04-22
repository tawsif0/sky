/* eslint-disable max-lines */
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';
import imgAbout from '../assets/images/about.png';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
    const imageRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        // Image animation
        gsap.from(imageRef.current, {
            scrollTrigger: {
                trigger: imageRef.current,
                start: 'top center+=200',
                toggleActions: 'play none none reverse'
            },
            x: -200,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out'
        });

        // Content animation
        gsap.from(contentRef.current, {
            scrollTrigger: {
                trigger: contentRef.current,
                start: 'top center+=200',
                toggleActions: 'play none none reverse'
            },
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            delay: 0.2
        });
    }, []);

    return (
        <section className="about-section py-5 overflow-hidden">
            <div className="container">
                <div className="row align-items-center g-5">
                    {/* Image Column */}
                    <div className="col-lg-6" ref={imageRef}>
                        <div className="image-wrapper position-relative">
                            <img src={imgAbout} alt="Our Team" className="about-image img-fluid rounded-4" />
                            <div className="gradient-border"></div>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="col-lg-6" ref={contentRef}>
                        <div className="about-content">
                            <h2 className="section-title mb-4">About Us</h2>

                            <p className="lead-text mb-4">
                                <span className="highlight"> SKY WAVE ENGINEERING </span>is a dynamic IT and engineering solutions provider headquartered in Bangladesh,{' '}
                                <span className="highlight">dedicated</span> to delivering cutting-edge technology services to corporate enterprises. Since our inception in 2024, we have bridged the
                                gap between innovative engineering and practical IT solutions, empowering businesses to thrive in an increasingly digital world. Our expertise lies in designing,
                                implementing, and managing robust IT infrastructures that align with the unique demands of Bangladesh’s corporate sector, including telecommunications, energy,
                                manufacturing, and logistics.
                            </p>

                            <div className="vm-wrapper">
                                <div className="vm-card card-hover">
                                    <h3 className="vm-title">Vision</h3>
                                    <p className="vm-text">
                                        To revolutionize Bangladesh’s corporate landscape by engineering intelligent, scalable IT solutions that drive operational excellence and sustainable growth.
                                    </p>
                                </div>

                                <div className="vm-card card-hover mt-4">
                                    <h3 className="vm-title">Mission</h3>
                                    <p className="vm-text">
                                        To drive digital transformation and sustainable growth by delivering tailored, robust infrastructure solutions to industries such as telecommunications, energy,
                                        manufacturing, and logistics, enabling businesses to thrive in an evolving digital landscape.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
