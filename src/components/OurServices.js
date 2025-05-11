/* eslint-disable max-lines */
import React from 'react';
import './OurServices.css';
import service1 from '../assets/images/service1.png';
import service2 from '../assets/images/service2.png';
import service3 from '../assets/images/service3.png';
import service4 from '../assets/images/service4.png';
import service5 from '../assets/images/service5.png';
import service6 from '../assets/images/service6.png';

const services = [
    {
        title: 'Electrical & Power',
        image: service1
    },
    {
        title: 'Data Center Infrastructure',
        image: service2
    },
    {
        title: 'Network & Automation',
        image: service3
    },
    {
        title: 'Supply & Installation',
        image: service4
    },
    {
        title: 'Service & Maintenance',
        image: service5
    },
    {
        title: '3D Simulation Project',
        image: service6
    }
];

const OurServices = () => {
    return (
        <div className="our-services-section">
            <h2 className="text-center futuristic-title mb-5">Our Services</h2>
            <div className="container">
                <div className="row justify-content-center">
                    {services.map((service, index) => (
                        <div key={index} className="col-6 col-md-6 col-lg-4 d-flex mb-4">
                            <div className="service-card w-100 position-relative">
                                <div className="service-image-wrapper position-relative">
                                    <img src={service.image} alt={service.title} loading="lazy" />
                                </div>
                                <div className="title-container position-relative">
                                    <div className="title-glow"></div>
                                    <h5 className="service-title">{service.title}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurServices;
