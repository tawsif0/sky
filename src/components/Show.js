/* eslint-disable max-lines */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Showcase.css';

// Image Imports
import upsImg1 from '../assets/products/ups1.png';
import upsImg2 from '../assets/products/ups2.png';
import upsImg3 from '../assets/products/ups3.png';
import upsImg4 from '../assets/products/ups4.png';
import dataRackImg from '../assets/products/data.png';
import surgeProtectorImg from '../assets/products/surge.png';
import upsInverterImg from '../assets/products/UPSInverter.png';
import inverterImg from '../assets/products/INVERTER.jpg';
import acRemoteImg from '../assets/products/acRemote.png';
import generatorImg from '../assets/products/generator.png';
import acImg from '../assets/products/ac.png';
import cctvImg from '../assets/products/cctv.png';

const Products = [
    { title: 'UPS', image: upsImg1 },
    { title: 'UPS', image: upsImg2 },
    { title: 'UPS', image: upsImg3 },
    { title: 'UPS', image: upsImg4 },
    { title: 'Data Center Rack', image: dataRackImg },
    { title: 'Surge Protector', image: surgeProtectorImg },
    { title: 'UPS/Inverter', image: upsInverterImg },
    { title: 'Inverter', image: inverterImg },
    { title: 'AC Remote & Box', image: acRemoteImg },
    { title: 'Diesel Generator', image: generatorImg },
    { title: 'AC', image: acImg },
    { title: 'CCTV Camera', image: cctvImg }
];

const Shows = () => {
    return (
        <div className="showcase-section">
            <div className="showcase-title-container">
                <h1 className="showcase-title">
                    Products <span className="highlight"> (Show Case)</span>
                </h1>
            </div>

            <Container className="showcase-card-container py-5">
                <Row className="g-4 justify-content-center">
                    {Products.map((product, idx) => (
                        <Col key={idx} xl={3} lg={4} md={6} sm={6} xs={6} className="showcase-card-col">
                            <div className="showcase-card">
                                <div className="showcase-img-container">
                                    <img src={product.image} alt={product.title} className="showcase-img" loading="lazy" />
                                    <div className="bottom-title">
                                        <h5>{product.title}</h5>
                                    </div>
                                </div>
                                <div className="showcase-hover-overlay">
                                    <h4>{product.title}</h4>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Shows;
