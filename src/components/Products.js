/* eslint-disable max-lines */
import React, { useRef, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Products.css';

import batteryPackImg from '../assets/Main-Products/BATTERY-PACK.jpg';
import upsOfflineImg from '../assets/Main-Products/OFFLINE-UPS.jpg';
import upsOnlineImg from '../assets/Main-Products/ONLINE-UPS.jpg';
import industrialUpsImg from '../assets/Main-Products/INDUSTRIAL-UPS.jpg';
import generatorImg from '../assets/Main-Products/GENERATOR.jpg';
import ipsImg from '../assets/Main-Products/IPS.jpg';
import comfortAcImg from '../assets/Main-Products/COMFORT-AC.jpg';
import precisionAcImg from '../assets/Main-Products/PRECISION-AC.jpg';
import powerCableImg from '../assets/Main-Products/INDUSTRIAL-POWER-CABLE.jpg';
import cctvImg from '../assets/Main-Products/CCTV.jpg';
import Fire from '../assets/products/Fire.png';
import Avr from '../assets/products/AVR.png';

import rackImg from '../assets/Accessories/RACK.jpg';
import kvmImg from '../assets/Accessories/KVM.jpg';
import parallelKitImg from '../assets/Accessories/PARALLEL-KIT.jpg';
import pdmImg from '../assets/Accessories/PDM.jpg';
import pduImg from '../assets/Accessories/PDU.jpg';
import railKitImg from '../assets/Accessories/RAIL-KIT.jpg';
import tvssImg from '../assets/Accessories/TVSS.jpg';
import smartHomeImg from '../assets/Accessories/SMART-HOME.jpg';

import diamecLogo from '../assets/Brands/DIAMEC.png';
import longLogo from '../assets/Brands/LONG.jpg';
import leochLogo from '../assets/Brands/LEOCH.png';
import dahuaLogo from '../assets/Brands/DAHUA.png';
import kstarLogo from '../assets/Brands/KSTAR.png';
import powerlinkLogo from '../assets/Brands/POWERLINK.png';
import apcLogo from '../assets/Brands/APC.png';
import vertivLogo from '../assets/Brands/VERTIV.png';
import zigorLogo from '../assets/Brands/ZIGOR.png';
import apolloLogo from '../assets/Brands/APPOLLO.png';
import makelsanLogo from '../assets/Brands/MAKELSAN.png';
import legrandLogo from '../assets/Brands/LEGRAND.png';
import rahimafroozLogo from '../assets/Brands/RAHIMAFROOZ.png';
import singerLogo from '../assets/Brands/SINGER.png';
import greeLogo from '../assets/Brands/gree.png';
import haierLogo from '../assets/Brands/Haier.png';
import generalLogo from '../assets/Brands/GENERAL.png';
import bbsLogo from '../assets/Brands/BBS.png';
import partexLogo from '../assets/Brands/PARTEX.png';
import vivancoLogo from '../assets/Brands/VIVANCO.png';
import Luminus from '../assets/Brands/LUMINUS.png';
import Scheneider from '../assets/Brands/Scheneider.png';
import Vcon from '../assets/Brands/Vcon.png';
import Sako from '../assets/Brands/Sako.png';
import Mingch from '../assets/Brands/Mingch.png';
gsap.registerPlugin(ScrollTrigger);

const Products = [
    {
        title: 'BATTERY PACK',
        brands: [diamecLogo, longLogo, leochLogo],
        image: batteryPackImg
    },
    {
        title: 'OFFLINE UPS',
        brands: [dahuaLogo, kstarLogo, powerlinkLogo],
        image: upsOfflineImg
    },
    {
        title: 'ONLINE UPS',
        brands: [apcLogo, vertivLogo, zigorLogo, apolloLogo, kstarLogo],
        image: upsOnlineImg
    },
    {
        title: 'INDUSTRIAL UPS',
        brands: [apcLogo, vertivLogo, makelsanLogo, legrandLogo],
        image: industrialUpsImg
    },
    {
        title: 'IPS',
        brands: [rahimafroozLogo, singerLogo, Luminus],
        image: ipsImg
    },
    {
        title: 'COMFORT AC',
        brands: [greeLogo, haierLogo, generalLogo],
        image: comfortAcImg
    },
    {
        title: 'PRECISION AC',
        brands: [vertivLogo, Scheneider],
        image: precisionAcImg
    },
    {
        title: 'INDUSTRIAL POWER CABLE',
        brands: [bbsLogo, partexLogo, vivancoLogo],
        image: powerCableImg
    },
    {
        title: 'CCTV SOLUTION',
        brands: [dahuaLogo],
        image: cctvImg
    },
    {
        title: 'AVR',
        brands: [Vcon, Sako, Mingch],
        image: Avr
    },
    {
        title: 'GENERATOR',
        brands: [],
        image: generatorImg
    },
    {
        title: 'FIRE DETECTION & CONTROLLING SYSTEM',
        brands: [],
        image: Fire
    }
];

const accessories = [
    {
        title: 'RACK',
        brands: [apcLogo, vivancoLogo, legrandLogo],
        image: rackImg
    },
    {
        title: 'KVM',
        brands: [apcLogo],
        image: kvmImg
    },
    {
        title: 'PARALLEL KIT',
        brands: [apcLogo],
        image: parallelKitImg
    },
    {
        title: 'POWER DISTRIBUTION MODULE (PDM)',
        brands: [apcLogo],
        image: pdmImg
    },
    {
        title: 'POWER DISTRIBUTION UNIT (PDU)',
        brands: [apcLogo],
        image: pduImg
    },
    {
        title: 'RAIL KIT',
        brands: [apcLogo],
        image: railKitImg
    },
    {
        title: 'TRANSIENT VOLTAGE SURGE SUPPRESSOR(TVSS)',
        brands: [apcLogo],
        image: tvssImg
    },
    {
        title: 'SMART HOME APPLIANCE',
        brands: [],
        image: smartHomeImg
    }
];

const Product = () => {
    const sectionRef = useRef(null);
    const productsCardsRef = useRef([]);

    useEffect(() => {
        const cardAnimation = gsap.fromTo(
            productsCardsRef.current,
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.3,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.products-card-container',
                    start: 'top 80%',
                    end: 'top 30%',
                    toggleActions: 'play play reset reset',
                    onEnter: () => gsap.set(productsCardsRef.current, { clearProps: 'all' })
                }
            }
        );

        return () => {
            cardAnimation.kill();
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    const addToRefs = (el) => {
        if (el && !productsCardsRef.current.includes(el)) {
            productsCardsRef.current.push(el);
        }
    };

    return (
        <div className="our-products-section" ref={sectionRef}>
            <div className="section-products-title-container">
                <h1 className="section-products-title">Products</h1>
            </div>

            <Container className="products-card-container py-5">
                <h2 className="section-products-subtitle">Main Products</h2>
                <Row className="g-4 justify-content-center">
                    {Products.map((product, idx) => (
                        <Col key={idx} lg={4} md={4} sm={6} xs={6} className="products-card-col">
                            <div className="products-card" ref={addToRefs}>
                                <img src={product.image} alt={product.title} className="card-img" />
                                <div className="card-overlay"></div>
                                <div className="product-name">{product.title}</div>
                                {product.brands.length > 0 && (
                                    <div className="brand-logos">
                                        {product.brands.map((brandLogo, index) => (
                                            <img key={index} src={brandLogo} alt={`Brand ${index}`} className="brand-logo-img" />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>

            <Container className="products-card-container py-5">
                <h2 className="section-products-subtitle">Accessories</h2>
                <Row className="g-4 justify-content-center">
                    {accessories.map((product, idx) => (
                        <Col key={idx} lg={3} md={4} sm={6} xs={6} className="products-card-col">
                            <div className="products-card">
                                <img src={product.image} alt={product.title} className="card-img" />
                                <div className="card-overlay"></div>
                                <div className="product-names">{product.title}</div>
                                {/* {product.brands.length > 0 && (
                             <div className="brand-logos">
                                 {product.brands.map((brandLogo, index) => (
                                     <img key={index} src={brandLogo} alt={`Brand ${index}`} className="brand-logo-img" />
                                 ))}
                             </div>
                         )} */}
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Product;
