"use Client";
import { Container, Row, Col, Image } from 'react-bootstrap';

function ServiceSection() {
    return(
        <Container className="my-5">
            <Row>
                <Col md={4} className="mb-3 text-center py-3">
                <Image src="/images/service1.png" alt="service 1" fluid />
                <h4 className="mt-3">Service One</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Col>

                <Col md={4} className="mb-3 text-center py-3">
                <Image src="/images/service2.png" alt="service 2" fluid />
                <h4 className="mt-3">Service Two</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Col>

                <Col md={4} className="mb-3 text-center py-3">
                <Image src="/images/service3.png" alt="service 3" fluid />
                <h4 className="mt-3">Service Three</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default ServiceSection;