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

            const offsets = navItems.map(({ id }) => {
                const el = document.getElementById(id);
                if (!el) return { id, top: Infinity };
                return { id, top: Math.abs(el.getBoundingClientRect().top) };
            });

            const closestSection = offsets.reduce((prev, curr) => (prev.top < curr.top ? prev : curr));

            setActiveSection(closestSection.id);
        };

        handleScroll(); // Initial check
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Navbar expand="lg" fixed="top" className={`glass-navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`} onToggle={(expanded) => setIsMenuOpen(expanded)}>
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
