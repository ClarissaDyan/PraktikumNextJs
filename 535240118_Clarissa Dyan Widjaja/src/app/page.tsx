'use client';
import React from 'react';
import Navbar from "../../components/navbar";
import Hero from "../../components/herosection";
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';
import WorkSection from '../../components/worksection';
import ServiceSection from '../../components/servicesection';

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <main>
      <Hero />
      <Container className="my-5">
        <Row className="my-4">
          <Col md={8} className="d-flex flex-column justify-content-center">
            <h2>About us</h2>
            <h6>What we do?</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas inventore error consequuntur non tempora obcaecati, ullam sequi commodi laboriosam velit eos, corporis consequatur earum! Eos.
            </p>
            <Button variant ="info">learn more</Button>
            </Col>

            <Col md={4}> 
            <p>
              <Image src="/images/about.jpg" alt="about us" width={400} height={400} />
            </p>
            </Col>
            </Row>
      </Container>
      <WorkSection />
      <ServiceSection />
      </main>
    </div>
  );
}