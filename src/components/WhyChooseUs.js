/* eslint-disable max-lines */
import React from 'react';
import SpotlightCard from './SpotlightCard';
import { FaIndustry, FaBalanceScale, FaLightbulb, FaProjectDiagram } from 'react-icons/fa';
import './WhyChooseUs.css';

const features = [
    {
        icon: <FaIndustry size={36} />,
        title: 'Industry-Specific Expertise'
    },
    {
        icon: <FaBalanceScale size={36} />,
        title: 'Local Compliance Mastery'
    },
    {
        icon: <FaLightbulb size={36} />,
        title: 'Innovation-Driven Approach'
    },
    {
        icon: <FaProjectDiagram size={36} />,
        title: 'End-to-End Ownership'
    }
];

const WhyChooseUs = () => {
    return (
        <section className="why-choose-us-section px-3">
            <div className="text-center why-title-container">
                <h2 className="why-title">
                    Why Choose <span>SKY WAVE ENGINEERING?</span>
                </h2>
            </div>
            <div className="container">
                <div className="row justify-content-center gx-4 gy-4">
                    {features.map((feature, index) => (
                        <div key={index} className="col-6 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
                            <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.15)">
                                <div className="card-content text-center">
                                    <div className="icon mb-3">{feature.icon}</div>
                                    <h5 className="feature-title">{feature.title}</h5>
                                </div>
                            </SpotlightCard>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
