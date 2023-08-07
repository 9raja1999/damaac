import React from 'react';
import { Carousel } from 'react-bootstrap'

const ImageCarousel = () => {
    return (
        <Carousel
            interval={null}
            className='carousel__image'
        >
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={'/damaac/slider1.png'}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={'/damaac/slider1.png'}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={'/damaac/slider1.png'}
                    alt="First slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default ImageCarousel;