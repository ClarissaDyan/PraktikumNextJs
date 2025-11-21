"use client"
import Carousel from 'react-bootstrap/Carousel';

interface slide {
    title: string;
    subtitle: string;
    imgUrl: string;
}

const HeroSection = () => { 
    const slides: slide[] = [
        {
            title: "First Slide Title",
            subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, tenetur.",
            imgUrl: "/images/slide1.jpg",
        },
        {
            title: "Second Slide Title",
            subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, tenetur.",
            imgUrl: "/images/slide2.jpg",
        },
        {
            title: "Third Slide Title",
            subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, tenetur.",
            imgUrl: "/images/slide3.jpg",
        },
    ];
    return (
        <Carousel fade interval={4000} data-bs-theme="dark">
            {slides.map((slide, index) => (
                <Carousel.Item key={index}>
                    <div
                        style={{
                            backgroundImage: `url(${slide.imgUrl})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '60vh',
                        }}>
                    </div>
                    <Carousel.Caption>
                        <h1 className="display-4 fw-bold">{slide.title}</h1>
                        <p className="lead">{slide.subtitle}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
            
}

export default HeroSection;