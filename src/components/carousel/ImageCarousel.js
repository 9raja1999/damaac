import React from 'react';
import { Carousel } from 'react-bootstrap'
import Slider1 from '../../images/slider1.png'

const ImageCarousel = ({goToProductDetail}) => {
    return (
        <Carousel
            interval={null}
            className='carousel__image'
        >
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Slider1}
                    alt="First slide"
                    onClick={goToProductDetail}
                    />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Slider1}
                    alt="First slide"
                    onClick={goToProductDetail}
                    />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Slider1}
                    alt="First slide"
                    onClick={goToProductDetail}
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default ImageCarousel;