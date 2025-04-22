/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable max-lines */
import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/logo.png';
import './Navbar.css';

const Navbars = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navItems = [
        { name: 'Home', id: 'home' },
        { name: 'About Us', id: 'about-us' },
        { name: 'Products', id: 'products' },
        { name: 'Services', id: 'services' },
        { name: 'Why Choose Us', id: 'why-choose-us' },
        { name: 'Clientele', id: 'clientele' },
        { name: 'Show Case', id: 'showcase' }
    ];

    const handleNavClick = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setActiveSection(id);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const viewportHeight = window.innerHeight;
            const scrollPosition = window.scrollY + viewportHeight / 2; // Track middle of viewport

            let closestSection = { id: 'home', distance: Infinity };

            navItems.forEach(({ id }) => {
                const section = document.getElementById(id);
                if (!section) return;

                const { offsetTop, offsetHeight } = section;
                const sectionBottom = offsetTop + offsetHeight;

                // Check if middle of viewport is within section bounds
                if (scrollPosition >= offsetTop && scrollPosition <= sectionBottom) {
                    closestSection = { id, distance: 0 };
                    return;
                }

                // Calculate distance to section edges
                const distanceToTop = Math.abs(scrollPosition - offsetTop);
                const distanceToBottom = Math.abs(scrollPosition - sectionBottom);
                const minDistance = Math.min(distanceToTop, distanceToBottom);

                if (minDistance < closestSection.distance) {
                    closestSection = { id, distance: minDistance };
                }
            });

            setActiveSection(closestSection.id);
        };

        handleScroll(); // Initial check
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [navItems]);
    return (
        <Navbar expand="lg" fixed="top" className={`glass-navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen && !isScrolled ? 'menu-open' : ''}`} onToggle={(expanded) => setIsMenuOpen(expanded)}>
            <Container>
                <Navbar.Brand className="brand-logo" onClick={() => handleNavClick('home')}>
                    <img src={logo} alt="TechNova" className="logo-img" style={{ cursor: 'pointer' }} width="auto" height="40" loading="lazy" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbar-nav" onClick={() => setIsMenuOpen((prev) => !prev)}>
                    <div className={`hamburger futuristic-icon ${isMenuOpen ? 'open' : ''}`}>{isMenuOpen ? <X size={32} /> : <Menu size={32} />}</div>
                </Navbar.Toggle>

                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto align-items-lg-center">
                        {navItems.map((item) => (
                            <Nav.Link key={item.name} onClick={() => handleNavClick(item.id)} className={`nav-item ${activeSection === item.id ? 'active' : ''}`} as="span">
                                <span className="nav-link-content">{item.name}</span>
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navbars;
