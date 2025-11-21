'use client'
import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap-icons/font/bootstrap-icons.css'

function NavbarComponent() {
    const [scrolled, setScrolled] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.setAttribute('data-bs-theme', darkMode ? 'light' : 'dark');
    };

    return (
        <Navbar 
            expand="lg" 
            fixed="top"
            className={`transition-all ${scrolled ? 'navbar-scrolled shadow-lg' : 'navbar-transparent'}`}
            style={{
                background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
            }}
        >
            <Container fluid className="px-4">
                <Navbar.Brand href="#" className="fw-bold d-flex align-items-center" style={{ fontSize: '1.5rem', color: '#ff6b6b' }}>
                    <i className="bi bi-cup-hot-fill me-2"></i>
                    Clarissa's Kitchen
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="mx-auto my-2 my-lg-0" navbarScroll>
                        <Nav.Link href="#home" className="nav-link-custom mx-2">
                            <i className="bi bi-house-door me-1"></i>Home
                        </Nav.Link>
                        <Nav.Link href="#about" className="nav-link-custom mx-2">
                            <i className="bi bi-info-circle me-1"></i>About
                        </Nav.Link>
                        <Nav.Link href="#work" className="nav-link-custom mx-2">
                            <i className="bi bi-briefcase me-1"></i>Menu
                        </Nav.Link>
                        <NavDropdown title={<span><i className="bi bi-grid me-1"></i>Services</span>} id="navbarScrollingDropdown" className="mx-2">
                            <NavDropdown.Item href="#service">
                                <i className="bi bi-shield-check me-2"></i>Catering
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#service">
                                <i className="bi bi-truck me-2"></i>Delivery
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#service">
                                <i className="bi bi-calendar-event me-2"></i>Private Chef
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#contact" className="nav-link-custom mx-2">
                            <i className="bi bi-envelope me-1"></i>Contact
                        </Nav.Link>
                    </Nav>
                    <div className="d-flex align-items-center gap-2">
                        <Button 
                            variant="outline-dark" 
                            size="sm" 
                            onClick={toggleDarkMode}
                            className="rounded-circle"
                            style={{ width: '40px', height: '40px' }}
                        >
                            <i className={`bi bi-${darkMode ? 'sun' : 'moon'}-fill`}></i>
                        </Button>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search menu..."
                                className="me-2 rounded-pill"
                                aria-label="Search"
                                style={{ width: '180px' }}
                            />
                            <Button variant="danger" className="rounded-pill">
                                <i className="bi bi-search"></i>
                            </Button>
                        </Form>
                    </div>
                </Navbar.Collapse>
            </Container>

            <style jsx>{`
                .nav-link-custom {
                    position: relative;
                    font-weight: 500;
                    transition: all 0.3s ease;
                }
                .nav-link-custom:hover {
                    color: #ff6b6b !important;
                    transform: translateY(-2px);
                }
                .nav-link-custom::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    width: 0;
                    height: 2px;
                    background: #ff6b6b;
                    transition: all 0.3s ease;
                    transform: translateX(-50%);
                }
                .nav-link-custom:hover::after {
                    width: 80%;
                }
            `}</style>
        </Navbar>
    )
}

export default NavbarComponent;